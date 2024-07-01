import React, { useEffect, useState } from "react";
import {
    SafeAreaView,
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Switch,
    Modal,
    TextInput,
} from "react-native";
import { styles } from "../components/GlobalStyles";
import colors from "../constants/colors";
import Entypo from '@expo/vector-icons/Entypo';
import { useNavigation } from "@react-navigation/native";
import { device } from "../../utils/device";
import { oneHundredElement, scenarioKey, switchKey, switchKey_doorSensor, userKey } from "../constants/common";
import useStore from "../../utils/store";
import { getData, postData } from "../../utils/commonRequest";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function DoorSensor(props) {
    //navigation
    const navigation = useNavigation();
    const { currentUser, setCurrentUser, removeCurrentUser, entityId, setEntityId } = useStore();

    const [nowUser, setNowUser] = useState(null);
    //function of navigate 
    const { navigate, goBack } = navigation;
   
    const [contact, setContact] = useState("");
    const [battery, setBattery] = useState("");
    const [batteryLow, setBatteryLow] = useState("");

    const fetchContact = async (token) => {
        try {
            let device = await getData(`/api/states/${switchKey_doorSensor.get('contact_begin') + entityId +  switchKey_doorSensor.get('contact_end')}`, token)
            setContact(device.state);
        } catch (error) {
            console.error('Failed to load device:', error);
        }
    };
    
    const fetchBattery = async (token) => {
        try {
            let device = await getData(`/api/states/${switchKey_doorSensor.get('battery_begin') + entityId +switchKey_doorSensor.get('battery_end')}`, token)
            setBattery(device.state)
        } catch (error) {
            console.error('Failed to load device:', error);
        }
    };
    
    const fetchBatteryLow = async (token) => {
        try {
            let device = await getData(`/api/states/${switchKey_doorSensor.get('batteryLow_begin') + entityId +switchKey_doorSensor.get('batteryLow_end')}`, token)
            setBatteryLow(device.state)
        } catch (error) {
            console.error('Failed to load device:', error);
        }
    };
    
    useEffect(() => {
        const checkCurrentUser = async () => {
            try {
                const user = await AsyncStorage.getItem(userKey);
                if (user) {
                    let userParsed = JSON.parse(user);
                    setCurrentUser(JSON.parse(user));
                    setNowUser(JSON.parse(user));
                    fetchContact(userParsed.token);
                    fetchBattery(userParsed.token);
                    fetchBatteryLow(userParsed.token);
                } else {
                    navigation.replace('Login');
                }
            } catch (error) {
                console.error('Failed to load current user:', error);
            }
        };
        checkCurrentUser();
    }, []);

    useEffect(() => {
        const intervalId = setInterval(fetchData, 500); // Gọi fetchData mỗi 0.5 giây

        return () => clearInterval(intervalId);
    }, [nowUser]);

    const fetchData = async () => {
        try {
            if (nowUser) {
                fetchContact(nowUser.token);
                fetchBattery(nowUser.token);
                fetchBatteryLow(nowUser.token);
            }

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    return (
        <SafeAreaView style={[styles.customSafeArea, { backgroundColor: colors.white }]}>
        <ScrollView style={styles.container}>
            <View style={[styles.flexRow, { marginBottom: -8 }]}>
                <Entypo
                    name="chevron-left"
                    size={24}
                    color={colors.black}
                    onPress={() => goBack()} />
                <Text style={styles.headerText}>Bảng điều khiển</Text>
                <View style={{ width: 24 }}></View>
            </View>
            <View style={deviceCss.container}>
                <View style={deviceCss.switchRow}>
                    <Text style={deviceCss.label}>Battery</Text>
                    <Text style={deviceCss.value}>
                            {battery}%
                    </Text>
                </View>
                <View style={deviceCss.separator} />

            </View>
            <View style={deviceCss.container}>
                <View style={deviceCss.switchRow}>
                    <Text style={deviceCss.label}>BatteryLow</Text>
                    <Text style={deviceCss.value}>
                            {batteryLow == 'off' ? 'False': 'True' }
                    </Text>
                </View>
                <View style={deviceCss.separator} />

            </View>
            <View style={deviceCss.container}>
                <View style={deviceCss.switchRow}>
                    <Text style={deviceCss.label}>Contact</Text>
                    <Text style={deviceCss.value}>
                            {contact === 'on' ? 'Open' : 'Closed'}
                    </Text>
                </View>
                <View style={deviceCss.separator} />

            </View>
        </ScrollView>
    </SafeAreaView>

    );
}

const deviceCss = StyleSheet.create({
    deviceContainer: {
        flexDirection: "row",
        alignItems: "center",
        width: 150,
        // backgroundColor: colors.gray_bg,
    },
    deviceName: {
        fontSize: 16,
    },
    deviceStatus: {
        fontSize: 16,
        color: colors.primary,
    },
    settingRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 16,
    },
    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 16,
    },
    buttonScenario: {
        flex: 1, // Each button should take equal space
        backgroundColor: colors.primary,
        paddingVertical: 10,
        alignItems: 'center',
        borderRadius: 8,
    },
    buttonScenarioRecord: {
        flex: 1, // Each button should take equal space
        backgroundColor: colors.red,
        paddingVertical: 10,
        alignItems: 'center',
        borderRadius: 8,
    },
    buttonScenarioDisable: {
        flex: 1, // Each button should take equal space
        backgroundColor: colors.dark_grey,
        paddingVertical: 10,
        alignItems: 'center',
        borderRadius: 8,
    },
    label: {
        fontSize: 16,
    },
    value: {
        fontSize: 16,
    },
    separator: {
        height: 1,
        width: '100%',
        backgroundColor: colors.grey,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalView: {
        width: device.width * 0.8,
        backgroundColor: 'white',
        borderRadius: 10,
        paddingTop: 20,
        paddingBottom: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        maxHeight: '80%'
    },
    modalText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: 'white',
        width: '1000%',
        alignItems: 'center',
        padding: 10
    },
    buttonText: {
        color: 'black',
        fontSize: 16,
    },
});