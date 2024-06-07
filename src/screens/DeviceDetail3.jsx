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
import { oneHundredElement, scenarioKey, switchKey, userKey } from "../constants/common";
import { switchColor } from "../constants/switchColor";
import useStore from "../../utils/store";
import { getData, postData } from "../../utils/commonRequest";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DateTimePicker from '@react-native-community/datetimepicker';

export default function DeviceDetail3(props) {
    //navigation
    const navigation = useNavigation();
    const { currentUser, setCurrentUser, removeCurrentUser, entityId, setEntityId } = useStore();

    const [nowUser, setNowUser] = useState(null);
    //function of navigate 
    const { navigate, goBack } = navigation;
    const [powerOnBehavior, setPowerOnBehavior] = useState('On');
    const [modalPowerOnBehavior, setModalPowerOnBehavior] = useState(false);
    const handleOnBehaviorPress = async (value) => {
        const result = await postData(`/api/services/select/select_option`, { entity_id: switchKey.get('powerOnBehavior_begin') + entityId + switchKey.get('powerOnBehavior_end'), option: value.toLowerCase() }, nowUser.token);
        setPowerOnBehavior(value);
        setModalPowerOnBehavior(false);
        if (recordScenario) {
            setScenario([...scenario, {
                url: `/api/services/select/select_option`,
                body: { entity_id: switchKey.get('powerOnBehavior_begin') + entityId + switchKey.get('powerOnBehavior_end'), option: value.toLowerCase() },
                accessToken: nowUser.token
            }])
        }
    };
    const [powerOnBehavior1, setPowerOnBehavior1] = useState('On');
    const [modalPowerOnBehavior1, setModalPowerOnBehavior1] = useState(false);
    const handleOnBehaviorPress1 = async (value) => {
        const result = await postData(`/api/services/select/select_option`, { entity_id: switchKey.get('powerOnBehavior1_begin') + entityId + switchKey.get('powerOnBehavior1_end'), option: value.toLowerCase() }, nowUser.token);
        setPowerOnBehavior1(value);
        setModalPowerOnBehavior1(false);
        if (recordScenario) {
            setScenario([...scenario, {
                url: `/api/services/select/select_option`,
                body: { entity_id: switchKey.get('powerOnBehavior1_begin') + entityId + switchKey.get('powerOnBehavior1_end'), option: value.toLowerCase() },
                accessToken: nowUser.token
            }])
        }
    };
    const [powerOnBehavior2, setPowerOnBehavior2] = useState('On');
    const [modalPowerOnBehavior2, setModalPowerOnBehavior2] = useState(false);
    const handleOnBehaviorPress2 = async (value) => {
        const result = await postData(`/api/services/select/select_option`, { entity_id: switchKey.get('powerOnBehavior2_begin') + entityId + switchKey.get('powerOnBehavior2_end'), option: value.toLowerCase() }, nowUser.token);
        setPowerOnBehavior2(value);
        setModalPowerOnBehavior2(false);
        if (recordScenario) {
            setScenario([...scenario, {
                url: `/api/services/select/select_option`,
                body: { entity_id: switchKey.get('powerOnBehavior2_begin') + entityId + switchKey.get('powerOnBehavior2_end'), option: value.toLowerCase() },
                accessToken: nowUser.token
            }])
        }
    };
    const [powerOnBehavior3, setPowerOnBehavior3] = useState('On');
    const [modalPowerOnBehavior3, setModalPowerOnBehavior3] = useState(false);
    const handleOnBehaviorPress3 = async (value) => {
        const result = await postData(`/api/services/select/select_option`, { entity_id: switchKey.get('powerOnBehavior3_begin') + entityId + switchKey.get('powerOnBehavior3_end'), option: value.toLowerCase() }, nowUser.token);
        setPowerOnBehavior3(value);
        setModalPowerOnBehavior3(false);
        if (recordScenario) {
            setScenario([...scenario, {
                url: `/api/services/select/select_option`,
                body: { entity_id: switchKey.get('powerOnBehavior3_begin') + entityId + switchKey.get('powerOnBehavior3_end'), option: value.toLowerCase() },
                accessToken: nowUser.token
            }])
        }
    };

    const [switchStatus1, setSwitchStatus1] = useState(true);
    const handleChangeSwitchStatus1 = async () => {
        if (switchStatus1) {
            const result = await postData(`/api/services/switch/turn_off`, { entity_id: switchKey.get('state1_begin') + entityId + switchKey.get('state1_end') }, nowUser.token);
            if (recordScenario) {
                setScenario([...scenario, {
                    url: `/api/services/switch/turn_off`,
                    body: { entity_id: switchKey.get('state1_begin') + entityId + switchKey.get('state1_end') },
                    accessToken: nowUser.token
                }])
            }
        } else {
            const result = await postData(`/api/services/switch/turn_on`, { entity_id: switchKey.get('state1_begin') + entityId + switchKey.get('state1_end') }, nowUser.token);
            if (recordScenario) {
                setScenario([...scenario, {
                    url: `/api/services/switch/turn_on`,
                    body: { entity_id: switchKey.get('state1_begin') + entityId + switchKey.get('state1_end') },
                    accessToken: nowUser.token
                }])
            }
        }
        setSwitchStatus1(!switchStatus1);
    }

    const [switchStatus2, setSwitchStatus2] = useState(true);
    const handleChangeSwitchStatus2 = async () => {
        if (switchStatus2) {
            const result = await postData(`/api/services/switch/turn_off`, { entity_id: switchKey.get('state2_begin') + entityId + switchKey.get('state2_end') }, nowUser.token);
            if (recordScenario) {
                setScenario([...scenario, {
                    url: `/api/services/switch/turn_off`,
                    body: { entity_id: switchKey.get('state2_begin') + entityId + switchKey.get('state2_end') },
                    accessToken: nowUser.token
                }])
            }
        } else {
            const result = await postData(`/api/services/switch/turn_on`, { entity_id: switchKey.get('state2_begin') + entityId + switchKey.get('state2_end') }, nowUser.token);
            if (recordScenario) {
                setScenario([...scenario, {
                    url: `/api/services/switch/turn_on`,
                    body: { entity_id: switchKey.get('state2_begin') + entityId + switchKey.get('state2_end') },
                    accessToken: nowUser.token
                }])
            }
        }
        setSwitchStatus2(!switchStatus2);
    }

    const [switchStatus3, setSwitchStatus3] = useState(true);
    const handleChangeSwitchStatus3 = async () => {
        if (switchStatus3) {
            const result = await postData(`/api/services/switch/turn_off`, { entity_id: switchKey.get('state3_begin') + entityId + switchKey.get('state3_end') }, nowUser.token);
            if (recordScenario) {
                setScenario([...scenario, {
                    url: `/api/services/switch/turn_off`,
                    body: { entity_id: switchKey.get('state3_begin') + entityId + switchKey.get('state3_end') },
                    accessToken: nowUser.token
                }])
            }
        } else {
            const result = await postData(`/api/services/switch/turn_on`, { entity_id: switchKey.get('state3_begin') + entityId + switchKey.get('state3_end') }, nowUser.token);
            if (recordScenario) {
                setScenario([...scenario, {
                    url: `/api/services/switch/turn_on`,
                    body: { entity_id: switchKey.get('state3_begin') + entityId + switchKey.get('state3_end') },
                    accessToken: nowUser.token
                }])
            }
        }
        setSwitchStatus3(!switchStatus3);
    }

    const [indicatorMode, setIndicatorMode] = useState('None');
    const [modalIndicatorMode, setModalIndicatorMode] = useState(false);
    const handleIndicatorModePress = async (value) => {
        const result = await postData(`/api/services/select/select_option`, { entity_id: switchKey.get('indicatorMode_begin') + entityId + switchKey.get('indicatorMode_end'), option: value.toLowerCase() }, nowUser.token);
        setIndicatorMode(value);
        setModalIndicatorMode(false);
        if (recordScenario) {
            setScenario([...scenario, {
                url: `/api/services/select/select_option`,
                body: { entity_id: switchKey.get('indicatorMode_begin') + entityId + switchKey.get('indicatorMode_end'), option: value.toLowerCase() },
                accessToken: nowUser.token
            }])
        }
    };

    const [brightness, setBrightness] = useState(0);
    const [modalBrightness, setModalBrightness] = useState(false);
    const handleBrightnessPress = async (value) => {
        const result = await postData(`/api/services/number/set_value`, { entity_id: switchKey.get('brightness_begin') + entityId + switchKey.get('brightness_end'), value: value }, nowUser.token);
        setBrightness(value);
        setModalBrightness(false);
        if (recordScenario) {
            setScenario([...scenario, {
                url: `/api/services/number/set_value`,
                body: { entity_id: switchKey.get('brightness_begin') + entityId + switchKey.get('brightness_end'), value: value },
                accessToken: nowUser.token
            }])
        }
    };

    const [onColor, setOnColor] = useState("");
    const [modalOnColor, setModalOnColor] = useState(false);
    const handleOnColorPress = async (value) => {
        const result = await postData(`/api/services/select/select_option`, { entity_id: switchKey.get('onColor_begin') + entityId + switchKey.get('onColor_end'), option: value }, nowUser.token);
        setOnColor(value);
        setModalOnColor(false);
        if (recordScenario) {
            setScenario([...scenario, {
                url: `/api/services/select/select_option`,
                body: { entity_id: switchKey.get('onColor_begin') + entityId + switchKey.get('onColor_end'), option: value },
                accessToken: nowUser.token
            }])
        }
    };

    const [offColor, setOffColor] = useState("");
    const [modalOffColor, setModalOffColor] = useState(false);
    const handleOffColorPress = async (value) => {
        const result = await postData(`/api/services/select/select_option`, { entity_id: switchKey.get('offColor_begin') + entityId + switchKey.get('offColor_end'), option: value }, nowUser.token);
        setOffColor(value);
        setModalOffColor(false);
        if (recordScenario) {
            setScenario([...scenario, {
                url: `/api/services/select/select_option`,
                body: { entity_id: switchKey.get('offColor_begin') + entityId + switchKey.get('offColor_end'), option: value },
                accessToken: nowUser.token
            }])
        }
    };

    const [childLock, setChildLock] = useState(false);
    const handleChildLock = async () => {
        if (!childLock) {
            const result = await postData(`/api/services/lock/lock`, { entity_id: switchKey.get('childLock_begin') + entityId + switchKey.get('childLock_end') }, nowUser.token);
            if (recordScenario) {
                setScenario([...scenario, {
                    url: `/api/services/lock/lock`,
                    body: { entity_id: switchKey.get('childLock_begin') + entityId + switchKey.get('childLock_end') },
                    accessToken: nowUser.token
                }])
            }
        } else {
            const result = await postData(`/api/services/lock/unlock`, { entity_id: switchKey.get('childLock_begin') + entityId + switchKey.get('childLock_end') }, nowUser.token);
            if (recordScenario) {
                setScenario([...scenario, {
                    url: `/api/services/lock/unlock`,
                    body: { entity_id: switchKey.get('childLock_begin') + entityId + switchKey.get('childLock_end') },
                    accessToken: nowUser.token
                }])
            }
        }
        setChildLock(!childLock);
    }

    const [backlightMode, setBacklightMode] = useState(false);
    const handleBlacklightMode = async () => {
        if (backlightMode) {
            const result = await postData(`/api/services/switch/turn_off`, { entity_id: switchKey.get('blackLight_begin') + entityId + switchKey.get('blackLight_end') }, nowUser.token);
            if (recordScenario) {
                setScenario([...scenario, {
                    url: `/api/services/switch/turn_off`,
                    body: { entity_id: switchKey.get('blackLight_begin') + entityId + switchKey.get('blackLight_end') },
                    accessToken: nowUser.token
                }])
            }
        } else {
            const result = await postData(`/api/services/switch/turn_on`, { entity_id: switchKey.get('blackLight_begin') + entityId + switchKey.get('blackLight_end') }, nowUser.token);
            if (recordScenario) {
                setScenario([...scenario, {
                    url: `/api/services/switch/turn_on`,
                    body: { entity_id: switchKey.get('blackLight_begin') + entityId + switchKey.get('blackLight_end') },
                    accessToken: nowUser.token
                }])
            }
        }
        setBacklightMode(!backlightMode);
    }

    const [countdown1, setCountdown1] = useState(0);
    const handleCountdown1 = async (value) => {
        const result = await postData(`/api/services/number/set_value`, { entity_id: switchKey.get('countdown1_begin') + entityId + switchKey.get('countdown1_end'), value: parseInt(value.nativeEvent.text.trim()) }, nowUser.token);
        if (recordScenario) {
            setScenario([...scenario, {
                url: `/api/services/number/set_value`,
                body: { entity_id: switchKey.get('countdown1_begin') + entityId + switchKey.get('countdown1_end'), value: parseInt(value.nativeEvent.text.trim()) },
                accessToken: nowUser.token
            }])
        }
    }
    const handleChangeCountdown1 = async (value) => {
        setCountdown1(parseInt(value.nativeEvent.text.trim()));
    }

    const [countdown2, setCountdown2] = useState(0);
    const handleCountdown2 = async (value) => {
        const result = await postData(`/api/services/number/set_value`, { entity_id: switchKey.get('countdown2_begin') + entityId + switchKey.get('countdown2_end'), value: parseInt(value.nativeEvent.text.trim()) }, nowUser.token);
        if (recordScenario) {
            setScenario([...scenario, {
                url: `/api/services/number/set_value`,
                body: { entity_id: switchKey.get('countdown2_begin') + entityId + switchKey.get('countdown2_end'), value: parseInt(value.nativeEvent.text.trim()) },
                accessToken: nowUser.token
            }])
        }
    }
    const handleChangeCountdown2 = async (value) => {
        setCountdown2(parseInt(value.nativeEvent.text.trim()));
    }

    const [countdown3, setCountdown3] = useState(0);
    const handleCountdown3 = async (value) => {
        const result = await postData(`/api/services/number/set_value`, { entity_id: switchKey.get('countdown3_begin') + entityId + switchKey.get('countdown3_end'), value: parseInt(value.nativeEvent.text.trim()) }, nowUser.token);
        if (recordScenario) {
            setScenario([...scenario, {
                url: `/api/services/number/set_value`,
                body: { entity_id: switchKey.get('countdown3_begin') + entityId + switchKey.get('countdown3_end'), value: parseInt(value.nativeEvent.text.trim()) },
                accessToken: nowUser.token
            }])
        }
    }
    const handleChangeCountdown3 = async (value) => {
        setCountdown3(parseInt(value.nativeEvent.text.trim()));
    }
    /**
     * Get trạng thái của các nút
     */
    const fetchStatus1 = async (token) => {
        try {
            let device = await getData(`/api/states/${switchKey.get('state1_begin') + entityId + switchKey.get('state1_end')}`, token)
            if (device.state != 'on' && device.state != 'off' && switchStatus1 == 'on' && switchStatus1 == 'off') {
                alert("Thiết bị đã bị ngắt kết nối")
            }
            setSwitchStatus1(device.state === 'on' ? true : false)
        } catch (error) {
            console.error('Failed to load device:', error);
        }
    };
    const fetchStatus2 = async (token) => {
        try {
            let device = await getData(`/api/states/${switchKey.get('state2_begin') + entityId + switchKey.get('state2_end')}`, token)
            if (device.state != 'on' && device.state != 'off' && switchStatus2 == 'on' && switchStatus2 == 'off') {
                alert("Thiết bị đã bị ngắt kết nối")
            }
            setSwitchStatus2(device.state === 'on' ? true : false)
        } catch (error) {
            console.error('Failed to load device:', error);
        }
    };
    const fetchStatus3 = async (token) => {
        try {
            let device = await getData(`/api/states/${switchKey.get('state3_begin') + entityId + switchKey.get('state3_end')}`, token)
            if (device.state != 'on' && device.state != 'off' && switchStatus3 == 'on' && switchStatus3 == 'off') {
                alert("Thiết bị đã bị ngắt kết nối")
            }
            setSwitchStatus3(device.state === 'on' ? true : false)
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

    const fetchPowerOnBehavior3 = async (token) => {
        try {
            let device = await getData(`/api/states/${switchKey.get('powerOnBehavior3_begin') + entityId + switchKey.get('powerOnBehavior3_end')}`, token)
            setPowerOnBehavior3(toUpperCaseFirtChar(device.state))
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
    // initial
    useEffect(() => {
        const checkCurrentUser = async () => {
            try {
                const user = await AsyncStorage.getItem(userKey);
                if (user) {
                    let userParsed = JSON.parse(user);
                    setCurrentUser(JSON.parse(user));
                    setNowUser(JSON.parse(user));
                    fetchStatus1(userParsed.token);
                    fetchStatus2(userParsed.token);
                    // fetchStatus3(userParsed.token);
                    fetchBlacklight(userParsed.token);
                    fetchChildLock(userParsed.token);
                    fetchPowerOnBehavior(userParsed.token);
                    fetchPowerOnBehavior1(userParsed.token);
                    fetchPowerOnBehavior2(userParsed.token);
                    // fetchPowerOnBehavior3(userParsed.token);
                    fetchBrightNess(userParsed.token);
                    fetchOnColor(userParsed.token);
                    fetchOffColor(userParsed.token);
                    fetchIndicator(userParsed.token);
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
                fetchStatus1(nowUser.token);
                fetchStatus2(nowUser.token);
                fetchBlacklight(nowUser.token);
                fetchChildLock(nowUser.token);
                fetchPowerOnBehavior(nowUser.token);
                fetchPowerOnBehavior1(nowUser.token);
                fetchPowerOnBehavior2(nowUser.token);
                fetchBrightNess(nowUser.token);
                fetchOnColor(nowUser.token);
                fetchOffColor(nowUser.token);
                fetchIndicator(nowUser.token);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const toUpperCaseFirtChar = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1)
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
                    const result = await postData(`/api/services/switch/turn_on`, { entity_id: switchKey.get('state1_begin') + entityId + switchKey.get('state1_end') }, nowUser.token);
                } else if (status == 'Off') {
                    const result = await postData(`/api/services/switch/turn_off`, { entity_id: switchKey.get('state1_begin') + entityId + switchKey.get('state1_end') }, nowUser.token);
                }
            }, msUntilTimeout);
        } else {
            alert("Thời gian đã chọn đã qua. Vui lòng chọn một thời điểm trong tương lai.");
        }
    };

    const showDatePicker1 = () => {
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
                    const result = await postData(`/api/services/switch/turn_on`, { entity_id: switchKey.get('state2_begin') + entityId + switchKey.get('state2_end') }, nowUser.token);
                } else if (status == 'Off') {
                    const result = await postData(`/api/services/switch/turn_off`, { entity_id: switchKey.get('state2_begin') + entityId + switchKey.get('state2_end') }, nowUser.token);
                }
            }, msUntilTimeout);
        } else {
            alert("Thời gian đã chọn đã qua. Vui lòng chọn một thời điểm trong tương lai.");
        }
    };
    const showDatePicker2 = () => {
        setShowDate2(true);
    };


    const [date3, setDate3] = useState(new Date());
    const [showDate3, setShowDate3] = useState(false);
    const [showTime3, setShowTime3] = useState(false);
    const [scheduleSwitchStatus3, setScheduleSwitchStatus3] = useState('');
    const [showModalScheduleSwitchStatus3, setShowModalScheduleSwitchStatus3] = useState(false);

    const handleDateSelected3 = (event, selectedDate) => {
        if (event.type !== 'dismissed') {
            let currentDate3 = selectedDate || date3;
            setDate3(currentDate3);
            setShowTime3(true);
            console.log(selectedDate);
        }
        setShowDate3(false);
    };

    const handleTimeSelected3 = (event, selectedTime) => {
        if (event.type !== 'dismissed') {
            setShowDate3(false);
            let currentTime3 = selectedTime || date3;
            setDate3(new Date(
                date3.getFullYear(),
                date3.getMonth(),
                date3.getDate(),
                currentTime3.getHours(),
                currentTime3.getMinutes()
            ));
            setShowModalScheduleSwitchStatus3(true)
        }
        setShowTime3(false);
    };

    const toggleSwitchStatus3 = (status) => {
        setScheduleSwitchStatus3(status);
        setShowModalScheduleSwitchStatus3(false);
        let now = new Date();
        let msUntilTimeout = date3.getTime() - now.getTime();
        if (msUntilTimeout > 0) {
            setTimeout(async () => {
                console.log("Hết thời gian hẹn giờ L3");
                if (status == 'On') {
                    const result = await postData(`/api/services/switch/turn_on`, { entity_id: switchKey.get('state3_begin') + entityId + switchKey.get('state3_end') }, nowUser.token);
                } else if (status == 'Off') {
                    const result = await postData(`/api/services/switch/turn_off`, { entity_id: switchKey.get('state3_begin') + entityId + switchKey.get('state3_end') }, nowUser.token);
                }
            }, msUntilTimeout);
        } else {
            alert("Thời gian đã chọn đã qua. Vui lòng chọn một thời điểm trong tương lai.");
        }
    };
    const showDatePicker3 = () => {
        setShowDate3(true);
    };

    /**
     * Kịch bản
     */
    const [scenario, setScenario] = useState([]);
    const [recordScenario, setrecordScenario] = useState(false);
    useEffect(() => {
        const checkHaveScenario = async () => {
            try {
                const localScenario = await AsyncStorage.getItem(scenarioKey);
                if (localScenario !== null) {
                    let scenarioParse = JSON.parse(localScenario);
                    setScenario(scenarioParse);
                } else {
                    setScenario([]);
                }
            } catch (error) {
                console.error('Failed to load localScenario:', error);
            }
        };
        checkHaveScenario();
    }, []);

    const handleDeleteScenario = async () => {
        try {
            const localScenario = await AsyncStorage.removeItem(scenarioKey);
            setrecordScenario(false);
            setScenario([]);
        } catch (error) {
            console.error('Failed to load localScenario:', error);
        }
    }
    const [isRunScenario, setIsRunScenario] = useState(false);
    const handlePlayOrSetScenario = async () => {
        // ghi kịch bản
        if (scenario.length == 0 && recordScenario == false) {
            setrecordScenario(true);
        } else if (scenario.length > 0 && recordScenario == false) {
            setIsRunScenario(true)
            // chạy kịch bản
            let delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
            await delay(1000); // Dừng lại 1 giây
            for (let value of scenario) {
                const result = await postData(value.url, value.body, nowUser.token);
                await delay(1000); // Dừng lại 1 giây
            }
            setIsRunScenario(false)
        } else if (recordScenario == true) {
            // Dừng ghi
            setrecordScenario(false);
            await AsyncStorage.setItem(scenarioKey, JSON.stringify(scenario));
        }
    }

    useEffect(() => {
        console.log(scenario);
    }, [scenario]);

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

                    <View style={deviceCss.switchRow}>
                        <Text style={deviceCss.label}>Status L3</Text>
                        <Switch
                            value={switchStatus3}
                            onValueChange={handleChangeSwitchStatus3}
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

                    <TouchableOpacity style={deviceCss.settingRow} onPress={() => {
                        setModalPowerOnBehavior1(true);
                    }}>
                        <Text style={deviceCss.label}>Power-on behavior L3</Text>
                        <Modal
                            // animationType="slide"
                            transparent={true}
                            visible={modalPowerOnBehavior3}
                            onRequestClose={() => setModalPowerOnBehavior3(false)}
                        >
                            <View style={deviceCss.modalContainer}>
                                <View style={deviceCss.modalView}>
                                    <Text style={deviceCss.modalText}>Select Power-on behavior L3</Text>
                                    <ScrollView contentContainerStyle={{ alignItems: 'center', width: device.width * 0.8 }}>
                                        <TouchableOpacity style={deviceCss.button} onPress={() => handleOnBehaviorPress3('On')}>
                                            <Text style={deviceCss.buttonText}>On</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={deviceCss.button} onPress={() => handleOnBehaviorPress3('Off')}>
                                            <Text style={deviceCss.buttonText}>Off</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={deviceCss.button} onPress={() => handleOnBehaviorPress3('Previous')}>
                                            <Text style={deviceCss.buttonText}>Previous</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={deviceCss.button} onPress={() => setModalPowerOnBehavior3(false)}>
                                            <Text style={deviceCss.buttonText}>Cancel</Text>
                                        </TouchableOpacity>
                                    </ScrollView>
                                </View>
                            </View>
                        </Modal>
                        <Text style={deviceCss.value}>{powerOnBehavior3}</Text>
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

                    <View style={deviceCss.switchRow}>
                        <Text style={deviceCss.label}>Contdown L3 (s)</Text>
                        <TextInput
                            value={countdown3}
                            onSubmitEditing={handleCountdown3}
                            onChange={handleChangeCountdown3}
                            style={{ borderColor: 'gray', borderWidth: 1, paddingHorizontal: 5 }}
                            keyboardType="numeric"
                            inputMode="numeric"
                        />
                    </View>
                    <View style={deviceCss.separator} />

                    <TouchableOpacity style={deviceCss.switchRow} onPress={showDatePicker1}>
                        <Text style={deviceCss.label}>Schedule L1</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={[deviceCss.label, { marginRight: 5 }]}>{scheduleSwitchStatus1 === 'On' ? 'Bật lúc' : (scheduleSwitchStatus1 === 'Off' ? 'Tắt lúc' : 'No')}</Text>
                            <Text style={deviceCss.label}>{scheduleSwitchStatus1 === 'On' || scheduleSwitchStatus1 === 'Off' ? date1.toLocaleString() : ''}</Text>
                        </View>
                        {(showDate1 && (
                            <DateTimePicker
                                value={date1}
                                mode="date"
                                display="default"
                                onChange={handleDateSelected1}
                                maximumDate={new Date(2300, 10, 20)}
                                minimumDate={new Date(1950, 0, 1)}
                            />
                        ))
                            ||
                            (showTime1 && (
                                <DateTimePicker
                                    value={date1}
                                    mode="time"
                                    display="default"
                                    onChange={handleTimeSelected1}
                                />
                            ))
                        }
                        <Modal
                            // animationType="slide"
                            transparent={true}
                            visible={showModalScheduleSwitchStatus1}
                            onRequestClose={() => setShowModalScheduleSwitchStatus1(false)}
                        >
                            <View style={deviceCss.modalContainer}>
                                <View style={deviceCss.modalView}>
                                    <Text style={deviceCss.modalText}>Select Action</Text>
                                    <ScrollView contentContainerStyle={{ alignItems: 'center', width: device.width * 0.8 }}>
                                        <TouchableOpacity style={deviceCss.button} onPress={() => toggleSwitchStatus1('On')}>
                                            <Text style={deviceCss.buttonText}>On</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={deviceCss.button} onPress={() => toggleSwitchStatus1('Off')}>
                                            <Text style={deviceCss.buttonText}>Off</Text>
                                        </TouchableOpacity>
                                    </ScrollView>
                                </View>
                            </View>
                        </Modal>

                    </TouchableOpacity>
                    <View style={deviceCss.separator} />

                    <TouchableOpacity style={deviceCss.switchRow} onPress={showDatePicker2}>
                        <Text style={deviceCss.label}>Schedule L2</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={[deviceCss.label, { marginRight: 5 }]}>{scheduleSwitchStatus2 === 'On' ? 'Bật lúc' : (scheduleSwitchStatus2 === 'Off' ? 'Tắt lúc' : 'No')}</Text>
                            <Text style={deviceCss.label}>{scheduleSwitchStatus2 === 'On' || scheduleSwitchStatus2 === 'Off' ? date2.toLocaleString() : ''}</Text>
                        </View>
                        {(showDate2 && (
                            <DateTimePicker
                                value={date2}
                                mode="date"
                                display="default"
                                onChange={handleDateSelected2}
                                maximumDate={new Date(2300, 10, 20)}
                                minimumDate={new Date(1950, 0, 1)}
                            />
                        ))
                            ||
                            (showTime2 && (
                                <DateTimePicker
                                    value={date2}
                                    mode="time"
                                    display="default"
                                    onChange={handleTimeSelected2}
                                />
                            ))}
                    </TouchableOpacity>
                    <Modal
                        // animationType="slide"
                        transparent={true}
                        visible={showModalScheduleSwitchStatus2}
                        onRequestClose={() => setShowModalScheduleSwitchStatus2(false)}
                    >
                        <View style={deviceCss.modalContainer}>
                            <View style={deviceCss.modalView}>
                                <Text style={deviceCss.modalText}>Select Action</Text>
                                <ScrollView contentContainerStyle={{ alignItems: 'center', width: device.width * 0.8 }}>
                                    <TouchableOpacity style={deviceCss.button} onPress={() => toggleSwitchStatus2('On')}>
                                        <Text style={deviceCss.buttonText}>On</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={deviceCss.button} onPress={() => toggleSwitchStatus2('Off')}>
                                        <Text style={deviceCss.buttonText}>Off</Text>
                                    </TouchableOpacity>
                                </ScrollView>
                            </View>
                        </View>
                    </Modal>
                    <View style={deviceCss.separator} />

                    <TouchableOpacity style={deviceCss.switchRow} onPress={showDatePicker3}>
                        <Text style={deviceCss.label}>Schedule L3</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={[deviceCss.label, { marginRight: 5 }]}>{scheduleSwitchStatus3 === 'On' ? 'Bật lúc' : (scheduleSwitchStatus3 === 'Off' ? 'Tắt lúc' : 'No')}</Text>
                            <Text style={deviceCss.label}>{scheduleSwitchStatus3 === 'On' || scheduleSwitchStatus3 === 'Off' ? date3.toLocaleString() : ''}</Text>
                        </View>
                        {(showDate3 && (
                            <DateTimePicker
                                value={date3}
                                mode="date"
                                display="default"
                                onChange={handleDateSelected3}
                                maximumDate={new Date(2300, 10, 20)}
                                minimumDate={new Date(1950, 0, 1)}
                            />
                        ))
                            ||
                            (showTime3 && (
                                <DateTimePicker
                                    value={date3}
                                    mode="time"
                                    display="default"
                                    onChange={handleTimeSelected3}
                                />
                            ))}
                    </TouchableOpacity>
                    <Modal
                        // animationType="slide"
                        transparent={true}
                        visible={showModalScheduleSwitchStatus3}
                        onRequestClose={() => setShowModalScheduleSwitchStatus3(false)}
                    >
                        <View style={deviceCss.modalContainer}>
                            <View style={deviceCss.modalView}>
                                <Text style={deviceCss.modalText}>Select Action</Text>
                                <ScrollView contentContainerStyle={{ alignItems: 'center', width: device.width * 0.8 }}>
                                    <TouchableOpacity style={deviceCss.button} onPress={() => toggleSwitchStatus3('On')}>
                                        <Text style={deviceCss.buttonText}>On</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={deviceCss.button} onPress={() => toggleSwitchStatus3('Off')}>
                                        <Text style={deviceCss.buttonText}>Off</Text>
                                    </TouchableOpacity>
                                </ScrollView>
                            </View>
                        </View>
                    </Modal>
                    <View style={deviceCss.separator} />
                    {/* <View style={deviceCss.switchRow}>
                        <TouchableOpacity
                            style={deviceCss.buttonScenario}
                            onPress={() => navigate('Scenario')}
                        >
                            <Text style={[deviceCss.buttonText, { color: colors.white }]}>Xem kịch bản</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={deviceCss.separator} /> */}

                    {/* <View style={deviceCss.switchRow}>
                        <TouchableOpacity
                            style={[recordScenario ? deviceCss.buttonScenarioRecord : (isRunScenario ? deviceCss.buttonScenarioDisable : deviceCss.buttonScenario), { marginRight: 8 }]}
                            onPress={handlePlayOrSetScenario}
                            disabled={isRunScenario}
                        >
                            <Text style={[deviceCss.buttonText, { color: colors.white }]}>{(scenario.length > 0 && !recordScenario) ? 'Chạy kịch bản' : (scenario.length == 0 && !recordScenario ? 'Ghi lại kịch bản' : ('Dừng ghi'))}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[(scenario.length > 0 && !recordScenario && !isRunScenario) ? deviceCss.buttonScenario : deviceCss.buttonScenarioDisable, { marginLeft: 8 }]}
                            disabled={scenario.length == 0 || isRunScenario}
                            onPress={handleDeleteScenario}
                        >
                            <Text style={[deviceCss.buttonText, { color: colors.white }]}>Xóa kịch bản</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={deviceCss.separator} /> */}
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