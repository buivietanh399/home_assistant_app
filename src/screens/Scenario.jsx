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
    Modal,
    Switch,
    TextInput,
} from "react-native";
import { styles } from "../components/GlobalStyles";
import colors from "../constants/colors";
import Entypo from '@expo/vector-icons/Entypo';
import { useNavigation } from "@react-navigation/native";
import { getDataBackend, postDataBackend } from "../../utils/commonRequestBackend";
import useStore from "../../utils/store";
import { device } from "../../utils/device";
import { oneHundredElement, switchKey, userKey } from "../constants/common";
import { switchColor } from "../constants/switchColor";
import { getData, postData } from "../../utils/commonRequest";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DateTimePicker from '@react-native-community/datetimepicker';

export default function Scenario() {
    const navigation = useNavigation();
    const { navigate, goBack } = navigation;
    // Chi tiết kịch bản hiện tại
    const [scenarios, setScenarios] = useState([]);
    const {
        currentUser,
        setCurrentUser,
        removeCurrentUser,
        entityId,
        setEntityId,
        scenarioId,
        setScenarioId,
        toggleSmartPage,
        setToggleSmartPage,
        entityName,
        setEntityName
    } = useStore();
    const fetchScenariosIfRunMode = async () => {
        try {
            const dataRes = await getDataBackend(`/api/scenarios/${scenarioId}`, currentUser.tokenBackend);
            const newScenarios = dataRes.action.map(element => JSON.parse(element.payload));
            setScenarios([...scenarios, ...newScenarios]);
        } catch (error) {
            console.error('Lỗi khi fetch scenarios:', error);
        }
    };
    useEffect(() => {
        if (scenarioId != null) {
            fetchScenariosIfRunMode();
        }
    }, [scenarioId])

    const [scenario, setScenario] = useState([]);
    const runScenario = async () => {
        try {
            let delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
            for (let value of scenarios) {
                if (value.body.entity_id.includes('switch')) {
                    const result = await postData(value.url, value.body, currentUser.token);
                    await delay(1000); // Dừng lại 1 giây
                }
            }
            alert('Chạy kịch bản thành công!')
        } catch (e) {
            console.error(e);
            alert("Chạy kịch bản thất bại")
        }
    }
    const [powerOnBehavior, setPowerOnBehavior] = useState('On');
    const [modalPowerOnBehavior, setModalPowerOnBehavior] = useState(false);
    const handleOnBehaviorPress = async (value) => {
        if (scenarioId == null) {
            setPowerOnBehavior(value);
            setModalPowerOnBehavior(false);
            // if (recordScenario) {
            //     setScenario([...scenario, {
            //         url: `/api/services/select/select_option`,
            //         body: { entity_id: switchKey.get('powerOnBehavior_begin') + entityId + switchKey.get('powerOnBehavior_end'), option: value.toLowerCase() },
            //     }])
            // }
        } else {
            // const result = await postData(`/api/services/select/select_option`, { entity_id: switchKey.get('powerOnBehavior_begin') + entityId + switchKey.get('powerOnBehavior_end'), option: value.toLowerCase() }, nowUser.token);
        }
    };
    const [powerOnBehavior1, setPowerOnBehavior1] = useState('On');
    const [modalPowerOnBehavior1, setModalPowerOnBehavior1] = useState(false);
    const handleOnBehaviorPress1 = async (value) => {
        // const result = await postData(`/api/services/select/select_option`, { entity_id: switchKey.get('powerOnBehavior1_begin') + entityId + switchKey.get('powerOnBehavior1_end'), option: value.toLowerCase() }, nowUser.token);
        setPowerOnBehavior1(value);
        setModalPowerOnBehavior1(false);
        // if (recordScenario) {
        //     setScenario([...scenario, {
        //         url: `/api/services/select/select_option`,
        //         body: { entity_id: switchKey.get('powerOnBehavior1_begin') + entityId + switchKey.get('powerOnBehavior1_end'), option: value.toLowerCase() },
        //         accessToken: nowUser.token
        //     }])
        // }
    };
    const [powerOnBehavior2, setPowerOnBehavior2] = useState('On');
    const [modalPowerOnBehavior2, setModalPowerOnBehavior2] = useState(false);
    const handleOnBehaviorPress2 = async (value) => {
        // const result = await postData(`/api/services/select/select_option`, { entity_id: switchKey.get('powerOnBehavior2_begin') + entityId + switchKey.get('powerOnBehavior2_end'), option: value.toLowerCase() }, nowUser.token);
        setPowerOnBehavior2(value);
        setModalPowerOnBehavior2(false);
        // if (recordScenario) {
        //     setScenario([...scenario, {
        //         url: `/api/services/select/select_option`,
        //         body: { entity_id: switchKey.get('powerOnBehavior2_begin') + entityId + switchKey.get('powerOnBehavior2_end'), option: value.toLowerCase() },
        //         accessToken: nowUser.token
        //     }])
        // }
    };

    const [switchStatus1, setSwitchStatus1] = useState(true);
    const handleChangeSwitchStatus1 = async () => {
        if (switchStatus1) {
            // const result = await postData(`/api/services/switch/turn_off`, { entity_id: switchKey.get('state1_begin') + entityId + switchKey.get('state1_end') }, nowUser.token);
            // if (recordScenario) {
            //     setScenario([...scenario, {
            //         url: `/api/services/switch/turn_off`,
            //         body: { entity_id: switchKey.get('state1_begin') + entityId + switchKey.get('state1_end') },
            //         accessToken: nowUser.token
            //     }])
            // }
        } else {
            // const result = await postData(`/api/services/switch/turn_on`, { entity_id: switchKey.get('state1_begin') + entityId + switchKey.get('state1_end') }, nowUser.token);
            // if (recordScenario) {
            //     setScenario([...scenario, {
            //         url: `/api/services/switch/turn_on`,
            //         body: { entity_id: switchKey.get('state1_begin') + entityId + switchKey.get('state1_end') },
            //         accessToken: nowUser.token
            //     }])
            // }
        }
        setSwitchStatus1(!switchStatus1);
    }

    const [switchStatus2, setSwitchStatus2] = useState(true);
    const handleChangeSwitchStatus2 = async () => {
        if (switchStatus2) {
            // const result = await postData(`/api/services/switch/turn_off`, { entity_id: switchKey.get('state2_begin') + entityId + switchKey.get('state2_end') }, nowUser.token);
            // if (recordScenario) {
            //     setScenario([...scenario, {
            //         url: `/api/services/switch/turn_off`,
            //         body: { entity_id: switchKey.get('state2_begin') + entityId + switchKey.get('state2_end') },
            //         accessToken: nowUser.token
            //     }])
            // }
        } else {
            // const result = await postData(`/api/services/switch/turn_on`, { entity_id: switchKey.get('state2_begin') + entityId + switchKey.get('state2_end') }, nowUser.token);
            // if (recordScenario) {
            //     setScenario([...scenario, {
            //         url: `/api/services/switch/turn_on`,
            //         body: { entity_id: switchKey.get('state2_begin') + entityId + switchKey.get('state2_end') },
            //         accessToken: nowUser.token
            //     }])
            // }
        }
        setSwitchStatus2(!switchStatus2);
    }

    const [indicatorMode, setIndicatorMode] = useState('None');
    const [modalIndicatorMode, setModalIndicatorMode] = useState(false);
    const handleIndicatorModePress = async (value) => {
        // const result = await postData(`/api/services/select/select_option`, { entity_id: switchKey.get('indicatorMode_begin') + entityId + switchKey.get('indicatorMode_end'), option: value.toLowerCase() }, nowUser.token);
        setIndicatorMode(value);
        setModalIndicatorMode(false);
        // if (recordScenario) {
        //     setScenario([...scenario, {
        //         url: `/api/services/select/select_option`,
        //         body: { entity_id: switchKey.get('indicatorMode_begin') + entityId + switchKey.get('indicatorMode_end'), option: value.toLowerCase() },
        //         accessToken: nowUser.token
        //     }])
        // }
    };

    const [brightness, setBrightness] = useState(0);
    const [modalBrightness, setModalBrightness] = useState(false);
    const handleBrightnessPress = async (value) => {
        // const result = await postData(`/api/services/number/set_value`, { entity_id: switchKey.get('brightness_begin') + entityId + switchKey.get('brightness_end'), value: value }, nowUser.token);
        setBrightness(value);
        setModalBrightness(false);
        // if (recordScenario) {
        //     setScenario([...scenario, {
        //         url: `/api/services/number/set_value`,
        //         body: { entity_id: switchKey.get('brightness_begin') + entityId + switchKey.get('brightness_end'), value: value },
        //         accessToken: nowUser.token
        //     }])
        // }
    };

    const [onColor, setOnColor] = useState("");
    const [modalOnColor, setModalOnColor] = useState(false);
    const handleOnColorPress = async (value) => {
        // const result = await postData(`/api/services/select/select_option`, { entity_id: switchKey.get('onColor_begin') + entityId + switchKey.get('onColor_end'), option: value }, nowUser.token);
        setOnColor(value);
        setModalOnColor(false);
        // if (recordScenario) {
        //     setScenario([...scenario, {
        //         url: `/api/services/select/select_option`,
        //         body: { entity_id: switchKey.get('onColor_begin') + entityId + switchKey.get('onColor_end'), option: value },
        //         accessToken: nowUser.token
        //     }])
        // }
    };

    const [offColor, setOffColor] = useState("");
    const [modalOffColor, setModalOffColor] = useState(false);
    const handleOffColorPress = async (value) => {
        // const result = await postData(`/api/services/select/select_option`, { entity_id: switchKey.get('offColor_begin') + entityId + switchKey.get('offColor_end'), option: value }, nowUser.token);
        setOffColor(value);
        setModalOffColor(false);
        // if (recordScenario) {
        //     setScenario([...scenario, {
        //         url: `/api/services/select/select_option`,
        //         body: { entity_id: switchKey.get('offColor_begin') + entityId + switchKey.get('offColor_end'), option: value },
        //         accessToken: nowUser.token
        //     }])
        // }
    };

    const [childLock, setChildLock] = useState(false);
    const handleChildLock = async () => {
        if (!childLock) {
            // const result = await postData(`/api/services/lock/lock`, { entity_id: switchKey.get('childLock_begin') + entityId + switchKey.get('childLock_end') }, nowUser.token);
            // if (recordScenario) {
            //     setScenario([...scenario, {
            //         url: `/api/services/lock/lock`,
            //         body: { entity_id: switchKey.get('childLock_begin') + entityId + switchKey.get('childLock_end') },
            //         accessToken: nowUser.token
            //     }])
            // }
        } else {
            // const result = await postData(`/api/services/lock/unlock`, { entity_id: switchKey.get('childLock_begin') + entityId + switchKey.get('childLock_end') }, nowUser.token);
            // if (recordScenario) {
            //     setScenario([...scenario, {
            //         url: `/api/services/lock/unlock`,
            //         body: { entity_id: switchKey.get('childLock_begin') + entityId + switchKey.get('childLock_end') },
            //         accessToken: nowUser.token
            //     }])
            // }
        }
        setChildLock(!childLock);
    }

    const [backlightMode, setBacklightMode] = useState(false);
    const handleBlacklightMode = async () => {
        if (backlightMode) {
            // const result = await postData(`/api/services/switch/turn_off`, { entity_id: switchKey.get('blackLight_begin') + entityId + switchKey.get('blackLight_end') }, nowUser.token);
            // if (recordScenario) {
            //     setScenario([...scenario, {
            //         url: `/api/services/switch/turn_off`,
            //         body: { entity_id: switchKey.get('blackLight_begin') + entityId + switchKey.get('blackLight_end') },
            //         accessToken: nowUser.token
            //     }])
            // }
        } else {
            // const result = await postData(`/api/services/switch/turn_on`, { entity_id: switchKey.get('blackLight_begin') + entityId + switchKey.get('blackLight_end') }, nowUser.token);
            // if (recordScenario) {
            //     setScenario([...scenario, {
            //         url: `/api/services/switch/turn_on`,
            //         body: { entity_id: switchKey.get('blackLight_begin') + entityId + switchKey.get('blackLight_end') },
            //         accessToken: nowUser.token
            //     }])
            // }
        }
        setBacklightMode(!backlightMode);
    }

    const [countdown1, setCountdown1] = useState(0);
    const handleCountdown1 = async (value) => {
        // const result = await postData(`/api/services/number/set_value`, { entity_id: switchKey.get('countdown1_begin') + entityId + switchKey.get('countdown1_end'), value: parseInt(value.nativeEvent.text.trim()) }, nowUser.token);
        // if (recordScenario) {
        //     setScenario([...scenario, {
        //         url: `/api/services/number/set_value`,
        //         body: { entity_id: switchKey.get('countdown1_begin') + entityId + switchKey.get('countdown1_end'), value: parseInt(value.nativeEvent.text.trim()) },
        //         accessToken: nowUser.token
        //     }])
        // }
    }

    const handleChangeCountdown1 = async (value) => {
        setCountdown1(parseInt(value.nativeEvent.text.trim()));
    }
    const [countdown2, setCountdown2] = useState(0);
    const handleCountdown2 = async (value) => {
        // const result = await postData(`/api/services/number/set_value`, { entity_id: switchKey.get('countdown2_begin') + entityId + switchKey.get('countdown2_end'), value: parseInt(value.nativeEvent.text.trim()) }, nowUser.token);
        // if (recordScenario) {
        //     setScenario([...scenario, {
        //         url: `/api/services/number/set_value`,
        //         body: { entity_id: switchKey.get('countdown2_begin') + entityId + switchKey.get('countdown2_end'), value: parseInt(value.nativeEvent.text.trim()) },
        //         accessToken: nowUser.token
        //     }])
        // }
    }
    const handleChangeCountdown2 = async (value) => {
        setCountdown2(parseInt(value.nativeEvent.text.trim()));
    }

    /**
     * schedule
     */
    const [date1, setDate1] = useState(new Date());
    const [showDate1, setShowDate1] = useState(false);
    const [showTime1, setShowTime1] = useState(false);
    const [scheduleSwitchStatus1, setScheduleSwitchStatus1] = useState('');
    const [showModalScheduleSwitchStatus1, setShowModalScheduleSwitchStatus1] = useState(false);

    const handleDateSelected1 = (event, selectedDate) => {
        if (event.type !== 'dismissed') {
            let currentDate1 = selectedDate || date1;
            setDate1(currentDate1);
            setShowTime1(true);
        }
        setShowDate1(false);
    };

    const handleTimeSelected1 = (event, selectedTime) => {
        if (event.type !== 'dismissed') {
            setShowDate1(false);
            let currentTime1 = selectedTime || date1;
            setDate1(new Date(
                date1.getFullYear(),
                date1.getMonth(),
                date1.getDate(),
                currentTime1.getHours(),
                currentTime1.getMinutes()
            ));
            setShowTime1(false);
        }
        setShowModalScheduleSwitchStatus1(true);
    };

    const toggleSwitchStatus1 = (status) => {
        setScheduleSwitchStatus1(status);
        setShowModalScheduleSwitchStatus1(false);
        let now = new Date();
        let msUntilTimeout = date1.getTime() - now.getTime();
        if (msUntilTimeout > 0) {
            setTimeout(async () => {
                console.log("Hết thời gian hẹn giờ L1");
                if (status == 'On') {
                    // const result = await postData(`/api/services/switch/turn_on`, { entity_id: switchKey.get('state1_begin') + entityId + switchKey.get('state1_end') }, nowUser.token);
                } else if (status == 'Off') {
                    // const result = await postData(`/api/services/switch/turn_off`, { entity_id: switchKey.get('state1_begin') + entityId + switchKey.get('state1_end') }, nowUser.token);
                }
            }, msUntilTimeout);
        } else {
            alert("Thời gian đã chọn đã qua. Vui lòng chọn một thời điểm trong tương lai.");
        }
    };

    const showDatePicker1 = () => {
        if (scenarioId == null)
            setShowDate1(true);
    };

    const [date2, setDate2] = useState(new Date());
    const [showDate2, setShowDate2] = useState(false);
    const [showTime2, setShowTime2] = useState(false);
    const [scheduleSwitchStatus2, setScheduleSwitchStatus2] = useState('');
    const [showModalScheduleSwitchStatus2, setShowModalScheduleSwitchStatus2] = useState(false);

    const handleDateSelected2 = (event, selectedDate) => {
        if (event.type !== 'dismissed') {
            let currentDate2 = selectedDate || date2;
            setDate2(currentDate2);
            setShowTime2(true);
            console.log(selectedDate);
        }
        setShowDate2(false);
    };

    const handleTimeSelected2 = (event, selectedTime) => {
        if (event.type !== 'dismissed') {
            setShowDate2(false);
            let currentTime2 = selectedTime || date2;
            setDate2(new Date(
                date2.getFullYear(),
                date2.getMonth(),
                date2.getDate(),
                currentTime2.getHours(),
                currentTime2.getMinutes()
            ));
            setShowModalScheduleSwitchStatus2(true)
        }
        setShowTime2(false);
    };

    const toggleSwitchStatus2 = (status) => {
        setScheduleSwitchStatus2(status);
        setShowModalScheduleSwitchStatus2(false);
        let now = new Date();
        let msUntilTimeout = date2.getTime() - now.getTime();
        if (msUntilTimeout > 0) {
            setTimeout(async () => {
                console.log("Hết thời gian hẹn giờ L2");
                if (status == 'On') {
                    // const result = await postData(`/api/services/switch/turn_on`, { entity_id: switchKey.get('state2_begin') + entityId + switchKey.get('state2_end') }, nowUser.token);
                } else if (status == 'Off') {
                    // const result = await postData(`/api/services/switch/turn_off`, { entity_id: switchKey.get('state2_begin') + entityId + switchKey.get('state2_end') }, nowUser.token);
                }
            }, msUntilTimeout);
        } else {
            alert("Thời gian đã chọn đã qua. Vui lòng chọn một thời điểm trong tương lai.");
        }
    };
    const showDatePicker2 = () => {
        if (scenarioId == null)
            setShowDate2(true);
    };


    /**
     * Get trạng thái của các nút
     */
    const fetchStatus1 = async (token) => {
        try {
            let device = await getData(`/api/states/${switchKey.get('state1_begin') + entityId + switchKey.get('state1_end')}`, token)
            setSwitchStatus1(device.state === 'on' ? true : false)
        } catch (error) {
            console.error('Failed to load device:', error);
        }
    };
    const fetchStatus2 = async (token) => {
        try {
            let device = await getData(`/api/states/${switchKey.get('state2_begin') + entityId + switchKey.get('state2_end')}`, token)
            setSwitchStatus2(device.state === 'on' ? true : false)
        } catch (error) {
            console.error('Failed to load device:', error);
        }
    };

    const fetchBlacklight = async (token) => {
        try {
            let device = await getData(`/api/states/${switchKey.get('blackLight_begin') + entityId + switchKey.get('blackLight_end')}`, token)
            setBacklightMode(device.state === 'on' ? true : false)
        } catch (error) {
            console.error('Failed to load device:', error);
        }
    }
    const fetchChildLock = async (token) => {
        try {
            let device = await getData(`/api/states/${switchKey.get('childLock_begin') + entityId + switchKey.get('childLock_end')}`, token)
            setChildLock(device.state === 'locked' ? true : false)
        } catch (error) {
            console.error('Failed to load device:', error);
        }
    }

    const fetchPowerOnBehavior = async (token) => {
        try {
            let device = await getData(`/api/states/${switchKey.get('powerOnBehavior_begin') + entityId + switchKey.get('powerOnBehavior_end')}`, token)
            setPowerOnBehavior(toUpperCaseFirtChar(device.state))
        } catch (error) {
            console.error('Failed to load device:', error);
        }
    }

    const fetchPowerOnBehavior1 = async (token) => {
        try {
            let device = await getData(`/api/states/${switchKey.get('powerOnBehavior1_begin') + entityId + switchKey.get('powerOnBehavior1_end')}`, token)
            setPowerOnBehavior1(toUpperCaseFirtChar(device.state))
        } catch (error) {
            console.error('Failed to load device:', error);
        }
    }

    const fetchPowerOnBehavior2 = async (token) => {
        try {
            let device = await getData(`/api/states/${switchKey.get('powerOnBehavior2_begin') + entityId + switchKey.get('powerOnBehavior2_end')}`, token)
            setPowerOnBehavior2(toUpperCaseFirtChar(device.state))
        } catch (error) {
            console.error('Failed to load device:', error);
        }
    }

    const fetchBrightNess = async (token) => {
        try {
            let device = await getData(`/api/states/${switchKey.get('brightness_begin') + entityId + switchKey.get('brightness_end')}`, token)
            setBrightness(parseInt(device.state))
        } catch (error) {
            console.error('Failed to load device:', error);
        }
    }

    const fetchOnColor = async (token) => {
        try {
            let device = await getData(`/api/states/${switchKey.get('onColor_begin') + entityId + switchKey.get('onColor_end')}`, token)
            setOnColor(device.state)
        } catch (error) {
            console.error('Failed to load device:', error);
        }
    }

    const fetchOffColor = async (token) => {
        try {
            let device = await getData(`/api/states/${switchKey.get('offColor_begin') + entityId + switchKey.get('offColor_end')}`, token)
            setOffColor(device.state)
        } catch (error) {
            console.error('Failed to load device:', error);
        }
    }

    const fetchIndicator = async (token) => {
        try {
            let device = await getData(`/api/states/${switchKey.get('indicatorMode_begin') + entityId + switchKey.get('indicatorMode_end')}`, token)
            setIndicatorMode(toUpperCaseFirtChar(device.state))
        } catch (error) {
            console.error('Failed to load device:', error);
        }
    }
    useEffect(() => {
        const fetchDataIfCreateMode = async () => {
            try {
                const user = await AsyncStorage.getItem(userKey);
                if (user) {
                    let userParsed = JSON.parse(user);
                    fetchStatus1(userParsed.token);
                    fetchStatus2(userParsed.token);
                    fetchBlacklight(userParsed.token);
                    fetchChildLock(userParsed.token);
                    fetchPowerOnBehavior(userParsed.token);
                    fetchPowerOnBehavior1(userParsed.token);
                    fetchPowerOnBehavior2(userParsed.token);
                    fetchBrightNess(userParsed.token);
                    fetchOnColor(userParsed.token);
                    fetchOffColor(userParsed.token);
                    fetchIndicator(userParsed.token);
                } else {
                    navigation.replace('Login');
                }
            } catch (error) {
                console.error(error);
            }
        };
        if (scenarioId == null) {
            fetchDataIfCreateMode();
        }
    }, []);

    const toUpperCaseFirtChar = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    const [scenarioName, setScenarioName] = useState('');

    const handleScenarioName = (value) => {
        setScenarioName(value);
    }

    const handleRunOrSaveScenario = async () => {
        /**
         * STEP 6: Chú ý check lại các key-value tương ứng trong Map để ghép lại thành entity id để đẩy kịch bản vào db
         */
        // Luư kịch bản
        if (scenarioId == null) {
            if (scenarioName == null || scenarioName == '') {
                alert('Vui lòng nhập tên kịch bản!')
            } else {
                var newScenario = [];
                newScenario.push({
                    url: `/api/services/select/select_option`,
                    body: { entity_id: switchKey.get('powerOnBehavior_begin') + entityId + switchKey.get('powerOnBehavior_end'), option: powerOnBehavior.toLowerCase() },
                })
                newScenario.push({
                    url: `/api/services/select/select_option`,
                    body: { entity_id: switchKey.get('indicatorMode_begin') + entityId + switchKey.get('indicatorMode_end'), option: indicatorMode.toLowerCase() },
                })
                newScenario.push({
                    url: `/api/services/switch/turn_${(backlightMode) ? 'on' : 'off'}`,
                    body: { entity_id: switchKey.get('blackLight_begin') + entityId + switchKey.get('blackLight_end') },
                })
                newScenario.push({
                    url: `/api/services/lock/${!childLock ? 'lock' : 'unlock'}`,
                    body: { entity_id: switchKey.get('childLock_begin') + entityId + switchKey.get('childLock_end') },
                })
                newScenario.push({
                    url: `/api/services/number/set_value`,
                    body: { entity_id: switchKey.get('brightness_begin') + entityId + switchKey.get('brightness_end'), value: brightness },
                })
                newScenario.push({
                    url: `/api/services/select/select_option`,
                    body: { entity_id: switchKey.get('onColor_begin') + entityId + switchKey.get('onColor_end'), option: onColor },
                })
                newScenario.push({
                    url: `/api/services/select/select_option`,
                    body: { entity_id: switchKey.get('offColor_begin') + entityId + switchKey.get('offColor_end'), option: offColor },
                })
                newScenario.push({
                    url: `/api/services/switch/turn_${switchStatus1 ? 'on' : 'off'}`,
                    body: { entity_id: switchKey.get('state1_begin') + entityId + switchKey.get('state1_end') },
                })
                newScenario.push({
                    url: `/api/services/switch/turn_${switchStatus2 ? 'on' : 'off'}`,
                    body: { entity_id: switchKey.get('state2_begin') + entityId + switchKey.get('state2_end') },
                })
                newScenario.push({
                    url: `/api/services/select/select_option`,
                    body: { entity_id: switchKey.get('powerOnBehavior1_begin') + entityId + switchKey.get('powerOnBehavior1_end'), option: powerOnBehavior1.toLowerCase() },
                })
                newScenario.push({
                    url: `/api/services/select/select_option`,
                    body: { entity_id: switchKey.get('powerOnBehavior2_begin') + entityId + switchKey.get('powerOnBehavior2_end'), option: powerOnBehavior2.toLowerCase() },
                })
                try {
                    let postNewScenario = {
                        userId: currentUser.customUserDetails.id + '',
                        name: scenarioName,
                        entityId: entityName
                    };
                    const res1 = await postDataBackend('/api/scenarios/create', postNewScenario, currentUser.tokenBackend);
                    console.log(postNewScenario);
                    if (res1) {
                        newScenario.forEach(async (element) => {
                            let newAction = {
                                entityId: entityId,
                                scenarioId: res1.id,
                                payload: JSON.stringify(element)
                            }
                            const res2 = await postDataBackend('/api/actions', newAction, currentUser.tokenBackend);
                            console.log(newAction);
                        });
                    }
                    alert('Lưu kịch bản thành công');
                    setToggleSmartPage();
                    goBack();
                } catch (error) {
                    alert('Lỗi khi lưu kịch bản');
                    console.log(error);
                }
            }
        }
        // Chạy kịch bản
        else {
            runScenario()
        }
    }
    return (
        <SafeAreaView style={[styles.customSafeArea, { backgroundColor: colors.white }]}>
            <ScrollView style={styles.container}>
                <View style={styles.flexRow}>
                    <Entypo
                        name="chevron-left"
                        size={24}
                        color={colors.black}
                        onPress={() => goBack()} />
                    <View ></View>
                    <Text style={styles.headerText}>Kịch bản</Text>
                    <View style={{ width: 24 }}></View>
                </View>
                {scenarioId != null && <Text style={styles.subText}>{scenarios.name}</Text>}


                <View style={scenarioCss.container}>
                    <TouchableOpacity style={scenarioCss.settingRow} onPress={() => {
                        if (scenarioId == null) setModalPowerOnBehavior(true);
                    }}>
                        <Text style={scenarioCss.label}>Power-on behavior</Text>
                        <Modal
                            // animationType="slide"
                            transparent={true}
                            visible={modalPowerOnBehavior}
                            onRequestClose={() => setModalPowerOnBehavior(false)}
                        >
                            <View style={scenarioCss.modalContainer}>
                                <View style={scenarioCss.modalView}>
                                    <Text style={scenarioCss.modalText}>Select Power-on behavior</Text>
                                    <ScrollView contentContainerStyle={{ alignItems: 'center', width: device.width * 0.8 }}>
                                        <TouchableOpacity style={scenarioCss.button} onPress={() => handleOnBehaviorPress('On')}>
                                            <Text style={scenarioCss.buttonText}>On</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={scenarioCss.button} onPress={() => handleOnBehaviorPress('Off')}>
                                            <Text style={scenarioCss.buttonText}>Off</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={scenarioCss.button} onPress={() => handleOnBehaviorPress('Previous')}>
                                            <Text style={scenarioCss.buttonText}>Previous</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={scenarioCss.button} onPress={() => setModalPowerOnBehavior(false)}>
                                            <Text style={scenarioCss.buttonText}>Cancel</Text>
                                        </TouchableOpacity>
                                    </ScrollView>
                                </View>
                            </View>
                        </Modal>
                        <Text style={scenarioCss.value}>{powerOnBehavior}</Text>
                    </TouchableOpacity>
                    <View style={scenarioCss.separator} />

                    <TouchableOpacity style={scenarioCss.settingRow} onPress={() => { if (scenarioId == null) setModalIndicatorMode(true); }}>
                        <Text style={scenarioCss.label}>Indicator mode</Text>
                        <Modal
                            // animationType="slide"
                            transparent={true}
                            visible={modalIndicatorMode}
                            onRequestClose={() => setModalIndicatorMode(false)}
                        >
                            <View style={scenarioCss.modalContainer}>
                                <View style={scenarioCss.modalView}>
                                    <Text style={scenarioCss.modalText}>Select Indicator mode</Text>
                                    <ScrollView contentContainerStyle={{ alignItems: 'center', width: device.width * 0.8 }}>
                                        <TouchableOpacity style={scenarioCss.button} onPress={() => handleIndicatorModePress('None')}>
                                            <Text style={scenarioCss.buttonText}>None</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={scenarioCss.button} onPress={() => handleIndicatorModePress('Relay')}>
                                            <Text style={scenarioCss.buttonText}>Relay</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={scenarioCss.button} onPress={() => handleIndicatorModePress('Pos')}>
                                            <Text style={scenarioCss.buttonText}>Pos</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={scenarioCss.button} onPress={() => setModalIndicatorMode(false)}>
                                            <Text style={scenarioCss.buttonText}>Cancel</Text>
                                        </TouchableOpacity>
                                    </ScrollView>
                                </View>
                            </View>
                        </Modal>
                        <Text style={scenarioCss.value}>{indicatorMode}</Text>
                    </TouchableOpacity>
                    <View style={scenarioCss.separator} />

                    <View style={scenarioCss.switchRow}>
                        <Text style={scenarioCss.label}>Backlight Mode</Text>
                        <Switch
                            value={backlightMode}
                            onValueChange={handleBlacklightMode}
                            style={{ height: 20 }}
                            disabled={scenarioId != null}
                        />
                    </View>
                    <View style={scenarioCss.separator} />

                    <View style={scenarioCss.switchRow}>
                        <Text style={scenarioCss.label}>Child Lock</Text>
                        <Switch
                            value={childLock}
                            onValueChange={handleChildLock}
                            style={{ height: 20 }}
                            disabled={scenarioId != null}
                        />
                    </View>
                    <View style={scenarioCss.separator} />

                    <TouchableOpacity style={scenarioCss.settingRow} onPress={() => { if (scenarioId == null) setModalBrightness(true); }}>
                        <Text style={scenarioCss.label}>Brightness</Text>
                        <Modal
                            // animationType="slide"
                            transparent={true}
                            visible={modalBrightness}
                            onRequestClose={() => setModalBrightness(false)}
                        >
                            <View style={scenarioCss.modalContainer}>
                                <View style={scenarioCss.modalView}>
                                    <Text style={scenarioCss.modalText}>Select Indicator mode</Text>
                                    <ScrollView contentContainerStyle={{ alignItems: 'center', width: device.width * 0.8 }}>
                                        {oneHundredElement.map((value, index) => {
                                            return (
                                                <TouchableOpacity style={scenarioCss.button} onPress={() => handleBrightnessPress(value)} key={index}>
                                                    <Text style={scenarioCss.buttonText}>{value + '%'}</Text>
                                                </TouchableOpacity>
                                            );
                                        })}
                                        <TouchableOpacity style={scenarioCss.button} onPress={() => setModalBrightness(false)}>
                                            <Text style={scenarioCss.buttonText}>Cancel</Text>
                                        </TouchableOpacity>
                                    </ScrollView>
                                </View>
                            </View>
                        </Modal>
                        <Text style={scenarioCss.value}>{brightness + '%'}</Text>
                    </TouchableOpacity>
                    <View style={scenarioCss.separator} />

                    <TouchableOpacity style={scenarioCss.settingRow} onPress={() => { if (scenarioId == null) setModalOnColor(true); }}>
                        <Text style={scenarioCss.label}>ON Color</Text>
                        <Modal
                            // animationType="slide"
                            transparent={true}
                            visible={modalOnColor}
                            onRequestClose={() => setModalOnColor(false)}
                        >
                            <View style={scenarioCss.modalContainer}>
                                <View style={scenarioCss.modalView}>
                                    <Text style={scenarioCss.modalText}>Select ON Color</Text>
                                    <ScrollView contentContainerStyle={{ alignItems: 'center', width: device.width * 0.8 }}>
                                        {switchColor.map((value, index) => {
                                            return (
                                                <TouchableOpacity style={scenarioCss.button} onPress={() => handleOnColorPress(value)} key={index}>
                                                    <Text style={scenarioCss.buttonText}>{value}</Text>
                                                </TouchableOpacity>
                                            );
                                        })}
                                        <TouchableOpacity style={scenarioCss.button} onPress={() => setModalOnColor(false)}>
                                            <Text style={scenarioCss.buttonText}>Cancel</Text>
                                        </TouchableOpacity>
                                    </ScrollView>
                                </View>
                            </View>
                        </Modal>
                        <Text style={scenarioCss.value}>{onColor}</Text>
                    </TouchableOpacity>
                    <View style={scenarioCss.separator} />

                    <TouchableOpacity style={scenarioCss.settingRow} onPress={() => { if (scenarioId == null) setModalOffColor(true); }}>
                        <Text style={scenarioCss.label}>OFF Color</Text>
                        <Modal
                            // animationType="slide"
                            transparent={true}
                            visible={modalOffColor}
                            onRequestClose={() => setModalOffColor(false)}
                        >
                            <View style={scenarioCss.modalContainer}>
                                <View style={scenarioCss.modalView}>
                                    <Text style={scenarioCss.modalText}>Select OFF Color</Text>
                                    <ScrollView contentContainerStyle={{ alignItems: 'center', width: device.width * 0.8 }}>
                                        {switchColor.map((value, index) => {
                                            return (
                                                <TouchableOpacity style={scenarioCss.button} onPress={() => handleOffColorPress(value)} key={index}>
                                                    <Text style={scenarioCss.buttonText}>{value}</Text>
                                                </TouchableOpacity>
                                            );
                                        })}
                                        <TouchableOpacity style={scenarioCss.button} onPress={() => setModalOffColor(false)}>
                                            <Text style={scenarioCss.buttonText}>Cancel</Text>
                                        </TouchableOpacity>
                                    </ScrollView>
                                </View>
                            </View>
                        </Modal>
                        <Text style={scenarioCss.value}>{offColor}</Text>
                    </TouchableOpacity>
                    <View style={scenarioCss.separator} />


                    <View style={scenarioCss.switchRow}>
                        <Text style={scenarioCss.label}>Status L1</Text>
                        <Switch
                            value={switchStatus1}
                            onValueChange={handleChangeSwitchStatus1}
                            style={{ height: 20 }}
                            disabled={scenarioId != null}
                        />
                    </View>
                    <View style={scenarioCss.separator} />

                    <View style={scenarioCss.switchRow}>
                        <Text style={scenarioCss.label}>Status L2</Text>
                        <Switch
                            value={switchStatus2}
                            onValueChange={handleChangeSwitchStatus2}
                            style={{ height: 20 }}
                            disabled={scenarioId != null}
                        />
                    </View>
                    <View style={scenarioCss.separator} />

                    <TouchableOpacity style={scenarioCss.settingRow} onPress={() => {
                        if (scenarioId == null)
                            setModalPowerOnBehavior1(true);
                    }}>
                        <Text style={scenarioCss.label}>Power-on behavior L1</Text>
                        <Modal
                            // animationType="slide"
                            transparent={true}
                            visible={modalPowerOnBehavior1}
                            onRequestClose={() => setModalPowerOnBehavior1(false)}
                        >
                            <View style={scenarioCss.modalContainer}>
                                <View style={scenarioCss.modalView}>
                                    <Text style={scenarioCss.modalText}>Select Power-on behavior L1</Text>
                                    <ScrollView contentContainerStyle={{ alignItems: 'center', width: device.width * 0.8 }}>
                                        <TouchableOpacity style={scenarioCss.button} onPress={() => handleOnBehaviorPress1('On')}>
                                            <Text style={scenarioCss.buttonText}>On</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={scenarioCss.button} onPress={() => handleOnBehaviorPress1('Off')}>
                                            <Text style={scenarioCss.buttonText}>Off</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={scenarioCss.button} onPress={() => handleOnBehaviorPress1('Previous')}>
                                            <Text style={scenarioCss.buttonText}>Previous</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={scenarioCss.button} onPress={() => setModalPowerOnBehavior1(false)}>
                                            <Text style={scenarioCss.buttonText}>Cancel</Text>
                                        </TouchableOpacity>
                                    </ScrollView>
                                </View>
                            </View>
                        </Modal>
                        <Text style={scenarioCss.value}>{powerOnBehavior1}</Text>
                    </TouchableOpacity>
                    <View style={scenarioCss.separator} />

                    <TouchableOpacity style={scenarioCss.settingRow} onPress={() => {
                        if (scenarioId == null)
                            setModalPowerOnBehavior2(true);
                    }}>
                        <Text style={scenarioCss.label}>Power-on behavior L2</Text>
                        <Modal
                            // animationType="slide"
                            transparent={true}
                            visible={modalPowerOnBehavior2}
                            onRequestClose={() => setModalPowerOnBehavior2(false)}
                        >
                            <View style={scenarioCss.modalContainer}>
                                <View style={scenarioCss.modalView}>
                                    <Text style={scenarioCss.modalText}>Select Power-on behavior L2</Text>
                                    <ScrollView contentContainerStyle={{ alignItems: 'center', width: device.width * 0.8 }}>
                                        <TouchableOpacity style={scenarioCss.button} onPress={() => handleOnBehaviorPress2('On')}>
                                            <Text style={scenarioCss.buttonText}>On</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={scenarioCss.button} onPress={() => handleOnBehaviorPress2('Off')}>
                                            <Text style={scenarioCss.buttonText}>Off</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={scenarioCss.button} onPress={() => handleOnBehaviorPress2('Previous')}>
                                            <Text style={scenarioCss.buttonText}>Previous</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={scenarioCss.button} onPress={() => setModalPowerOnBehavior2(false)}>
                                            <Text style={scenarioCss.buttonText}>Cancel</Text>
                                        </TouchableOpacity>
                                    </ScrollView>
                                </View>
                            </View>
                        </Modal>
                        <Text style={scenarioCss.value}>{powerOnBehavior2}</Text>
                    </TouchableOpacity>
                    <View style={scenarioCss.separator} />

                    {scenarioId == null &&
                        <View style={scenarioCss.switchCol}>
                            <Text style={scenarioCss.label}>Tên kịch bản</Text>

                            <TextInput
                                value={scenarioName}
                                onChangeText={handleScenarioName}
                                style={{ borderColor: 'gray', borderWidth: 1, width: '100%', height: 40, marginBottom: -10, marginTop: 8, borderRadius: 8, paddingLeft: 10 }}
                            />
                        </View>
                    }
                    <View style={scenarioCss.switchRow}>
                        <TouchableOpacity
                            style={scenarioCss.buttonScenario}
                            onPress={handleRunOrSaveScenario}
                        >
                            <Text style={[scenarioCss.buttonText, { color: colors.white }]}>{scenarioId == null ? 'Lưu kịch bản' : 'Chạy kịch bản'}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={scenarioCss.separator} />


                    {scenarios.map((e, index) => {
                        return <Text key={index}>{e.url}</Text>
                    })}

                    {/* <View style={scenarioCss.switchRow}>
                        <TouchableOpacity
                            style={[recordScenario ? scenarioCss.buttonScenarioRecord : (isRunScenario ? scenarioCss.buttonScenarioDisable : scenarioCss.buttonScenario), { marginRight: 8 }]}
                            onPress={handlePlayOrSetScenario}
                            disabled={isRunScenario}
                        >
                            <Text style={[scenarioCss.buttonText, { color: colors.white }]}>{(scenario.length > 0 && !recordScenario) ? 'Chạy kịch bản' : (scenario.length == 0 && !recordScenario ? 'Ghi lại kịch bản' : ('Dừng ghi'))}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[(scenario.length > 0 && !recordScenario && !isRunScenario) ? scenarioCss.buttonScenario : scenarioCss.buttonScenarioDisable, { marginLeft: 8 }]}
                            disabled={scenario.length == 0 || isRunScenario}
                            onPress={handleDeleteScenario}
                        >
                            <Text style={[scenarioCss.buttonText, { color: colors.white }]}>Xóa kịch bản</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={scenarioCss.separator} /> */}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const scenarioCss = StyleSheet.create({
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
    switchCol: {
        flexDirection: 'column',
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