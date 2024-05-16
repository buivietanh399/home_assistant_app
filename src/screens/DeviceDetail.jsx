import React, { useState } from "react";
import {
    SafeAreaView,
    Text,
    View,
    TouchableOpacity,
    FlatList,
    StyleSheet,
    ScrollView,
    Dimensions,
    Switch,
} from "react-native";
import { styles } from "../components/GlobalStyles";
import colors from "../constants/colors";
import Entypo from '@expo/vector-icons/Entypo';
import { useNavigation } from "@react-navigation/native";

export default function DeviceDetail(props) {
    //navigation
    const navigation = useNavigation();
    //function of navigate 
    const { navigate, goBack } = navigation;
    const [relayStatus, setRelayStatus] = useState(true);
    const [indicateLight, setIndicateLight] = useState("indicate status");
    const [backlight, setBacklight] = useState("4%");
    const [onColor, setOnColor] = useState("White");
    const [offColor, setOffColor] = useState("Magenta");
    const [childLock, setChildLock] = useState(false);
    const [backlightSwitch, setBacklightSwitch] = useState(false);
    return (
        <SafeAreaView style={[styles.customSafeArea]}>
            <TouchableOpacity style={styles.goback} onPress={() => {
                goBack();
            }}>
                <Entypo
                    name={"chevron-left"}
                    size={24}
                    color={colors.black}
                />
                <Text style={styles.gobackText}>Tất cả thiết bị</Text>
            </TouchableOpacity>
            <View style={deviceCss.container}>
                <TouchableOpacity style={deviceCss.settingRow}>
                    <Text style={deviceCss.label}>Relay Status</Text>
                    <Text style={deviceCss.value}>{relayStatus ? "ON" : "OFF"}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={deviceCss.settingRow}>
                    <Text style={deviceCss.label}>Indicate Light</Text>
                    <Text style={deviceCss.value}>{indicateLight}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={deviceCss.settingRow}>
                    <Text style={deviceCss.label}>Backlight</Text>
                    <Text style={deviceCss.value}>{backlight}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={deviceCss.settingRow}>
                    <Text style={deviceCss.label}>ON Color</Text>
                    <Text style={deviceCss.value}>{onColor}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={deviceCss.settingRow}>
                    <Text style={deviceCss.label}>OFF Color</Text>
                    <Text style={deviceCss.value}>{offColor}</Text>
                </TouchableOpacity>

                <View style={deviceCss.switchRow}>
                    <Text style={deviceCss.label}>Child Lock</Text>
                    <Switch
                        value={childLock}
                        onValueChange={setChildLock}
                    />
                </View>

                <View style={deviceCss.switchRow}>
                    <Text style={deviceCss.label}>Backlight Switch</Text>
                    <Switch
                        value={backlightSwitch}
                        onValueChange={setBacklightSwitch}
                    />
                </View>
            </View>
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
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 16,
    },
    label: {
        fontSize: 16,
    },
    value: {
        fontSize: 16,
        color: 'gray',
    },
});