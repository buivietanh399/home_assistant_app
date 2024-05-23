import React, { useEffect, useState } from "react";
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
    Modal,
    Button,
    TextInput,
} from "react-native";
import { styles } from "../components/GlobalStyles";
import colors from "../constants/colors";
import Entypo from '@expo/vector-icons/Entypo';
import { useNavigation } from "@react-navigation/native";
import RNPickerSelect from 'react-native-picker-select';
import { Picker } from '@react-native-picker/picker';
import { device } from "../../utils/device";
import { oneHundredElement, switchKey, userKey } from "../constants/common";
import { switchColor } from "../constants/switchColor";
import useStore from "../../utils/store";
import { getData, postData } from "../../utils/commonRequest";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function DeviceDetail(props) {
    //navigation
    const navigation = useNavigation();
    const { currentUser, setCurrentUser, removeCurrentUser, entityId, setEntityId } = useStore();

    const [ nowUser, setNowUser ] = useState(null);
    //function of navigate 
    const { navigate, goBack } = navigation;
    const [powerOnBehavior, setPowerOnBehavior] = useState('On');
    const [modalPowerOnBehavior, setModalPowerOnBehavior] = useState(false);
    const handleOnBehaviorPress = async (value) => {
        const result = await postData(`/api/services/select/select_option`, { entity_id: switchKey.get('powerOnBehavior'), option: value.toLowerCase() }, nowUser.token);
        setPowerOnBehavior(value);
        setModalPowerOnBehavior(false);
    };
    const [powerOnBehavior1, setPowerOnBehavior1] = useState('On');
    const [modalPowerOnBehavior1, setModalPowerOnBehavior1] = useState(false);
    const handleOnBehaviorPress1 = async (value) => {
        const result = await postData(`/api/services/select/select_option`, { entity_id: switchKey.get('powerOnBehavior1'), option: value.toLowerCase() }, nowUser.token);
        setPowerOnBehavior1(value);
        setModalPowerOnBehavior1(false);
    };
    const [powerOnBehavior2, setPowerOnBehavior2] = useState('On');
    const [modalPowerOnBehavior2, setModalPowerOnBehavior2] = useState(false);
    const handleOnBehaviorPress2 = async (value) => {
        const result = await postData(`/api/services/select/select_option`, { entity_id: switchKey.get('powerOnBehavior2'), option: value.toLowerCase() }, nowUser.token);
        setPowerOnBehavior2(value);
        setModalPowerOnBehavior2(false);
    };

    const [switchStatus1, setSwitchStatus1] = useState(true);
    const handleChangeSwitchStatus1 = async () => {
        if (switchStatus1) {
            const result = await postData(`/api/services/switch/turn_off`, { entity_id: switchKey.get('state1') }, nowUser.token);
        } else {
            const result = await postData(`/api/services/switch/turn_on`, { entity_id: switchKey.get('state1') }, nowUser.token);
        }
        setSwitchStatus1(!switchStatus1);
    }

    const [switchStatus2, setSwitchStatus2] = useState(true);
    const handleChangeSwitchStatus2 = async () => {
        if (switchStatus2) {
            const result = await postData(`/api/services/switch/turn_off`, { entity_id: switchKey.get('state2') }, nowUser.token);
        } else {
            const result = await postData(`/api/services/switch/turn_on`, { entity_id: switchKey.get('state2') }, nowUser.token);
        }
        setSwitchStatus2(!switchStatus2);
    }

    const [indicatorMode, setIndicatorMode] = useState('None');
    const [modalIndicatorMode, setModalIndicatorMode] = useState(false);
    const handleIndicatorModePress = async (value) => {
        const result = await postData(`/api/services/select/select_option`, { entity_id: switchKey.get('indicatorMode'), option: value.toLowerCase() }, nowUser.token);
        setIndicatorMode(value);
        setModalIndicatorMode(false);
    };

    const [brightness, setBrightness] = useState(0);
    const [modalBrightness, setModalBrightness] = useState(false);
    const handleBrightnessPress = async (value) => {
        const result = await postData(`/api/services/number/set_value`, { entity_id: switchKey.get('brightness'), value: value }, nowUser.token);
        setBrightness(value);
        setModalBrightness(false);
    };

    const [onColor, setOnColor] = useState("White");
    const [modalOnColor, setModalOnColor] = useState(false);
    const handleOnColorPress = (value) => {
        setOnColor(value);
        setModalOnColor(false);
    };

    const [offColor, setOffColor] = useState("Magenta");
    const [modalOffColor, setModalOffColor] = useState(false);
    const handleOffColorPress = (value) => {
        setOffColor(value);
        setModalOffColor(false);
    };

    const [childLock, setChildLock] = useState(false);
    const handleChildLock = async () => {
        if (!childLock) {
            const result = await postData(`/api/services/lock/lock`, { entity_id: switchKey.get('childLock') }, nowUser.token);
        } else {
            const result = await postData(`/api/services/lock/unlock`, { entity_id: switchKey.get('childLock') }, nowUser.token);
        }
        setChildLock(!childLock);
    }

    const [backlightMode, setBacklightMode] = useState(false);
    const handleBlacklightMode = async () => {
        if (backlightMode) {
            const result = await postData(`/api/services/switch/turn_off`, { entity_id: switchKey.get('blackLight') }, nowUser.token);
        } else {
            const result = await postData(`/api/services/switch/turn_on`, { entity_id: switchKey.get('blackLight') }, nowUser.token);
        }
        setBacklightMode(!backlightMode);
    }

    const [countdown1, setCountdown1] = useState(0);
    const handleCountdown1 = async (value) => {
        const result = await postData(`/api/services/number/set_value`, { entity_id: switchKey.get('countdown1'), value: parseInt(value.nativeEvent.text.trim()) }, nowUser.token);
    }

    // const startCountdown1 = () => {
    //     let currentValue = countdown1;
    //     let interval = setInterval(() => {
    //         if (currentValue > 0) {
    //             currentValue--;
    //             setCountdown1(currentValue);
    //         } else {
    //             clearInterval(interval);
    //         }
    //     }, 1000); // Cập nhật giá trị mỗi giây
    // };

    const handleChangeCountdown1 = async (value) => {
        setCountdown1(parseInt(value.nativeEvent.text.trim()));
    }
    const [countdown2, setCountdown2] = useState(0);
    const handleCountdown2 = async (value) => {
        const result = await postData(`/api/services/number/set_value`, { entity_id: switchKey.get('countdown2'), value: parseInt(value.nativeEvent.text.trim()) }, nowUser.token);
    }
    const handleChangeCountdown2 = async (value) => {
        setCountdown2(parseInt(value.nativeEvent.text.trim()));
    }

    /**
     * Get trạng thái của các nút
     */
    const fetchStatus1 = async (token) => {
        try {
            let device = await getData(`/api/states/${switchKey.get('state1')}`, token)
            setSwitchStatus1(device.state === 'on' ? true : false)
        } catch (error) {
            console.error('Failed to load device:', error);
        }
    };
    const fetchStatus2 = async (token) => {
        try {
            let device = await getData(`/api/states/${switchKey.get('state2')}`, token)
            setSwitchStatus2(device.state === 'on' ? true : false)
        } catch (error) {
            console.error('Failed to load device:', error);
        }
    };

    const fetchBlacklight = async (token) => {
        try {
            let device = await getData(`/api/states/${switchKey.get('blackLight')}`, token)
            setBacklightMode(device.state === 'on' ? true : false)
        } catch (error) {
            console.error('Failed to load device:', error);
        }
    }
    const fetchChildLock = async (token) => {
        try {
            let device = await getData(`/api/states/${switchKey.get('childLock')}`, token)
            setChildLock(device.state === 'locked' ? true : false)
        } catch (error) {
            console.error('Failed to load device:', error);
        }
    }

    const fetchPowerOnBehavior = async (token) => {
        try {
            let device = await getData(`/api/states/${switchKey.get('powerOnBehavior')}`, token)
            setPowerOnBehavior(toUpperCaseFirtChar(device.state))
        } catch (error) {
            console.error('Failed to load device:', error);
        }
    }

    const fetchPowerOnBehavior1 = async (token) => {
        try {
            let device = await getData(`/api/states/${switchKey.get('powerOnBehavior1')}`, token)
            setPowerOnBehavior1(toUpperCaseFirtChar(device.state))
        } catch (error) {
            console.error('Failed to load device:', error);
        }
    }

    const fetchPowerOnBehavior2 = async (token) => {
        try {
            let device = await getData(`/api/states/${switchKey.get('powerOnBehavior2')}`, token)
            setPowerOnBehavior2(toUpperCaseFirtChar(device.state))
        } catch (error) {
            console.error('Failed to load device:', error);
        }
    }

    const fetchBrightNess = async (token) => {
        try {
            let device = await getData(`/api/states/${switchKey.get('brightness')}`, token)
            setBrightness(parseInt(device.state))
        } catch (error) {
            console.error('Failed to load device:', error);
        }
    }

    const fetchIndicator = async (token) => {
        try {
            let device = await getData(`/api/states/${switchKey.get('indicatorMode')}`, token)
            setIndicatorMode(toUpperCaseFirtChar(device.state))
        } catch (error) {
            console.error('Failed to load device:', error);
        }
    }
    useEffect(() => {
        const checkCurrentUser = async () => {
            try {
                const user = await AsyncStorage.getItem(userKey);
                if (user !== null) {
                    let userParsed = JSON.parse(user);
                    setCurrentUser(JSON.parse(user));
                    setNowUser(JSON.parse(user));
                    fetchStatus1(userParsed.token);
                    fetchStatus2(userParsed.token);
                    fetchBlacklight(userParsed.token);
                    fetchChildLock(userParsed.token);
                    fetchPowerOnBehavior(userParsed.token);
                    fetchPowerOnBehavior1(userParsed.token);
                    fetchPowerOnBehavior2(userParsed.token);
                    fetchBrightNess(userParsed.token);
                    fetchIndicator(userParsed.token);
                } else {
                    replace('Login');
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
                fetchStatus1(nowUser.token);
                fetchStatus2(nowUser.token);
                fetchBlacklight(nowUser.token);
                fetchChildLock(nowUser.token);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const toUpperCaseFirtChar = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }
    return (
        <SafeAreaView style={[styles.customSafeArea, { backgroundColor: colors.white }]}>
            <ScrollView style={styles.container}>
                <Text style={styles.gobackText}>Bảng điều khiển</Text>
                <View style={deviceCss.container}>
                    <TouchableOpacity style={deviceCss.settingRow} onPress={() => {
                        setModalPowerOnBehavior(true);
                    }}>
                        <Text style={deviceCss.label}>Power-on behavior</Text>
                        <Modal
                            // animationType="slide"
                            transparent={true}
                            visible={modalPowerOnBehavior}
                            onRequestClose={() => setModalPowerOnBehavior(false)}
                        >
                            <View style={deviceCss.modalContainer}>
                                <View style={deviceCss.modalView}>
                                    <Text style={deviceCss.modalText}>Select Power-on behavior</Text>
                                    <ScrollView contentContainerStyle={{ alignItems: 'center', width: device.width * 0.8 }}>
                                        <TouchableOpacity style={deviceCss.button} onPress={() => handleOnBehaviorPress('On')}>
                                            <Text style={deviceCss.buttonText}>On</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={deviceCss.button} onPress={() => handleOnBehaviorPress('Off')}>
                                            <Text style={deviceCss.buttonText}>Off</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={deviceCss.button} onPress={() => handleOnBehaviorPress('Previous')}>
                                            <Text style={deviceCss.buttonText}>Previous</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={deviceCss.button} onPress={() => setModalPowerOnBehavior(false)}>
                                            <Text style={deviceCss.buttonText}>Cancel</Text>
                                        </TouchableOpacity>
                                    </ScrollView>
                                </View>
                            </View>
                        </Modal>
                        <Text style={deviceCss.value}>{powerOnBehavior}</Text>
                    </TouchableOpacity>
                    <View style={deviceCss.separator} />

                    <TouchableOpacity style={deviceCss.settingRow} onPress={() => { setModalIndicatorMode(true); }}>
                        <Text style={deviceCss.label}>Indicator mode</Text>
                        <Modal
                            // animationType="slide"
                            transparent={true}
                            visible={modalIndicatorMode}
                            onRequestClose={() => setModalIndicatorMode(false)}
                        >
                            <View style={deviceCss.modalContainer}>
                                <View style={deviceCss.modalView}>
                                    <Text style={deviceCss.modalText}>Select Indicator mode</Text>
                                    <ScrollView contentContainerStyle={{ alignItems: 'center', width: device.width * 0.8 }}>
                                        <TouchableOpacity style={deviceCss.button} onPress={() => handleIndicatorModePress('None')}>
                                            <Text style={deviceCss.buttonText}>None</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={deviceCss.button} onPress={() => handleIndicatorModePress('Relay')}>
                                            <Text style={deviceCss.buttonText}>Relay</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={deviceCss.button} onPress={() => handleIndicatorModePress('Pos')}>
                                            <Text style={deviceCss.buttonText}>Pos</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={deviceCss.button} onPress={() => setModalIndicatorMode(false)}>
                                            <Text style={deviceCss.buttonText}>Cancel</Text>
                                        </TouchableOpacity>
                                    </ScrollView>
                                </View>
                            </View>
                        </Modal>
                        <Text style={deviceCss.value}>{indicatorMode}</Text>
                    </TouchableOpacity>
                    <View style={deviceCss.separator} />

                    <View style={deviceCss.switchRow}>
                        <Text style={deviceCss.label}>Backlight Mode</Text>
                        <Switch
                            value={backlightMode}
                            onValueChange={handleBlacklightMode}
                            style={{ height: 20 }}
                        />
                    </View>
                    <View style={deviceCss.separator} />

                    <View style={deviceCss.switchRow}>
                        <Text style={deviceCss.label}>Child Lock</Text>
                        <Switch
                            value={childLock}
                            onValueChange={handleChildLock}
                            style={{ height: 20 }}
                        />
                    </View>
                    <View style={deviceCss.separator} />

                    <TouchableOpacity style={deviceCss.settingRow} onPress={() => { setModalBrightness(true); }}>
                        <Text style={deviceCss.label}>Brightness</Text>
                        <Modal
                            // animationType="slide"
                            transparent={true}
                            visible={modalBrightness}
                            onRequestClose={() => setModalBrightness(false)}
                        >
                            <View style={deviceCss.modalContainer}>
                                <View style={deviceCss.modalView}>
                                    <Text style={deviceCss.modalText}>Select Indicator mode</Text>
                                    <ScrollView contentContainerStyle={{ alignItems: 'center', width: device.width * 0.8 }}>
                                        {oneHundredElement.map((value, index) => {
                                            return (
                                                <TouchableOpacity style={deviceCss.button} onPress={() => handleBrightnessPress(value)} key={index}>
                                                    <Text style={deviceCss.buttonText}>{value + '%'}</Text>
                                                </TouchableOpacity>
                                            );
                                        })}
                                        <TouchableOpacity style={deviceCss.button} onPress={() => setModalBrightness(false)}>
                                            <Text style={deviceCss.buttonText}>Cancel</Text>
                                        </TouchableOpacity>
                                    </ScrollView>
                                </View>
                            </View>
                        </Modal>
                        <Text style={deviceCss.value}>{brightness + '%'}</Text>
                    </TouchableOpacity>
                    <View style={deviceCss.separator} />

                    <TouchableOpacity style={deviceCss.settingRow} onPress={() => { setModalOnColor(true); }}>
                        <Text style={deviceCss.label}>ON Color</Text>
                        <Modal
                            // animationType="slide"
                            transparent={true}
                            visible={modalOnColor}
                            onRequestClose={() => setModalOnColor(false)}
                        >
                            <View style={deviceCss.modalContainer}>
                                <View style={deviceCss.modalView}>
                                    <Text style={deviceCss.modalText}>Select ON Color</Text>
                                    <ScrollView contentContainerStyle={{ alignItems: 'center', width: device.width * 0.8 }}>
                                        {switchColor.map((value, index) => {
                                            return (
                                                <TouchableOpacity style={deviceCss.button} onPress={() => handleOnColorPress(value)} key={index}>
                                                    <Text style={deviceCss.buttonText}>{value}</Text>
                                                </TouchableOpacity>
                                            );
                                        })}
                                        <TouchableOpacity style={deviceCss.button} onPress={() => setModalOnColor(false)}>
                                            <Text style={deviceCss.buttonText}>Cancel</Text>
                                        </TouchableOpacity>
                                    </ScrollView>
                                </View>
                            </View>
                        </Modal>
                        <Text style={deviceCss.value}>{onColor}</Text>
                    </TouchableOpacity>
                    <View style={deviceCss.separator} />

                    <TouchableOpacity style={deviceCss.settingRow} onPress={() => { setModalOffColor(true); }}>
                        <Text style={deviceCss.label}>OFF Color</Text>
                        <Modal
                            // animationType="slide"
                            transparent={true}
                            visible={modalOffColor}
                            onRequestClose={() => setModalOffColor(false)}
                        >
                            <View style={deviceCss.modalContainer}>
                                <View style={deviceCss.modalView}>
                                    <Text style={deviceCss.modalText}>Select OFF Color</Text>
                                    <ScrollView contentContainerStyle={{ alignItems: 'center', width: device.width * 0.8 }}>
                                        {switchColor.map((value, index) => {
                                            return (
                                                <TouchableOpacity style={deviceCss.button} onPress={() => handleOffColorPress(value)} key={index}>
                                                    <Text style={deviceCss.buttonText}>{value}</Text>
                                                </TouchableOpacity>
                                            );
                                        })}
                                        <TouchableOpacity style={deviceCss.button} onPress={() => setModalOffColor(false)}>
                                            <Text style={deviceCss.buttonText}>Cancel</Text>
                                        </TouchableOpacity>
                                    </ScrollView>
                                </View>
                            </View>
                        </Modal>
                        <Text style={deviceCss.value}>{offColor}</Text>
                    </TouchableOpacity>
                    <View style={deviceCss.separator} />


                    <View style={deviceCss.switchRow}>
                        <Text style={deviceCss.label}>Status L1</Text>
                        <Switch
                            value={switchStatus1}
                            onValueChange={handleChangeSwitchStatus1}
                            style={{ height: 20 }}
                        />
                    </View>
                    <View style={deviceCss.separator} />

                    <View style={deviceCss.switchRow}>
                        <Text style={deviceCss.label}>Status L2</Text>
                        <Switch
                            value={switchStatus2}
                            onValueChange={handleChangeSwitchStatus2}
                            style={{ height: 20 }}
                        />
                    </View>
                    <View style={deviceCss.separator} />

                    <TouchableOpacity style={deviceCss.settingRow} onPress={() => {
                        setModalPowerOnBehavior1(true);
                    }}>
                        <Text style={deviceCss.label}>Power-on behavior L1</Text>
                        <Modal
                            // animationType="slide"
                            transparent={true}
                            visible={modalPowerOnBehavior1}
                            onRequestClose={() => setModalPowerOnBehavior1(false)}
                        >
                            <View style={deviceCss.modalContainer}>
                                <View style={deviceCss.modalView}>
                                    <Text style={deviceCss.modalText}>Select Power-on behavior L1</Text>
                                    <ScrollView contentContainerStyle={{ alignItems: 'center', width: device.width * 0.8 }}>
                                        <TouchableOpacity style={deviceCss.button} onPress={() => handleOnBehaviorPress1('On')}>
                                            <Text style={deviceCss.buttonText}>On</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={deviceCss.button} onPress={() => handleOnBehaviorPress1('Off')}>
                                            <Text style={deviceCss.buttonText}>Off</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={deviceCss.button} onPress={() => handleOnBehaviorPress1('Previous')}>
                                            <Text style={deviceCss.buttonText}>Previous</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={deviceCss.button} onPress={() => setModalPowerOnBehavior1(false)}>
                                            <Text style={deviceCss.buttonText}>Cancel</Text>
                                        </TouchableOpacity>
                                    </ScrollView>
                                </View>
                            </View>
                        </Modal>
                        <Text style={deviceCss.value}>{powerOnBehavior1}</Text>
                    </TouchableOpacity>
                    <View style={deviceCss.separator} />

                    <TouchableOpacity style={deviceCss.settingRow} onPress={() => {
                        setModalPowerOnBehavior2(true);
                    }}>
                        <Text style={deviceCss.label}>Power-on behavior L2</Text>
                        <Modal
                            // animationType="slide"
                            transparent={true}
                            visible={modalPowerOnBehavior2}
                            onRequestClose={() => setModalPowerOnBehavior2(false)}
                        >
                            <View style={deviceCss.modalContainer}>
                                <View style={deviceCss.modalView}>
                                    <Text style={deviceCss.modalText}>Select Power-on behavior L2</Text>
                                    <ScrollView contentContainerStyle={{ alignItems: 'center', width: device.width * 0.8 }}>
                                        <TouchableOpacity style={deviceCss.button} onPress={() => handleOnBehaviorPress2('On')}>
                                            <Text style={deviceCss.buttonText}>On</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={deviceCss.button} onPress={() => handleOnBehaviorPress2('Off')}>
                                            <Text style={deviceCss.buttonText}>Off</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={deviceCss.button} onPress={() => handleOnBehaviorPress2('Previous')}>
                                            <Text style={deviceCss.buttonText}>Previous</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={deviceCss.button} onPress={() => setModalPowerOnBehavior2(false)}>
                                            <Text style={deviceCss.buttonText}>Cancel</Text>
                                        </TouchableOpacity>
                                    </ScrollView>
                                </View>
                            </View>
                        </Modal>
                        <Text style={deviceCss.value}>{powerOnBehavior2}</Text>
                    </TouchableOpacity>
                    <View style={deviceCss.separator} />

                    <View style={deviceCss.switchRow}>
                        <Text style={deviceCss.label}>Contdown L1 (s)</Text>
                        <TextInput
                            value={countdown1}
                            onSubmitEditing={handleCountdown1}
                            onChange={handleChangeCountdown1}
                            style={{ borderColor: 'gray', borderWidth: 1, paddingHorizontal: 5 }}
                            keyboardType="numeric"
                            inputMode="numeric"
                        />
                    </View>
                    <View style={deviceCss.separator} />

                    <View style={deviceCss.switchRow}>
                        <Text style={deviceCss.label}>Contdown L2 (s)</Text>
                        <TextInput
                            value={countdown2}
                            onSubmitEditing={handleCountdown2}
                            onChange={handleChangeCountdown2}
                            style={{ borderColor: 'gray', borderWidth: 1, paddingHorizontal: 5 }}
                            keyboardType="numeric"
                            inputMode="numeric"
                        />
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