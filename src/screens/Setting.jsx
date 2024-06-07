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
    TextInput,
} from "react-native";
import colors from "../constants/colors";
import { styles } from "../components/GlobalStyles";
import Entypo from '@expo/vector-icons/Entypo';
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { userKey } from "../constants/common";
import useStore from "../../utils/store";
import { FontAwesome5 } from '@expo/vector-icons';
import { device } from "../../utils/device";
import { MaterialIcons } from '@expo/vector-icons';

export default function Setting() {
    //navigation
    const navigation = useNavigation();
    //function of navigate 
    const { navigate, goBack } = navigation;
    const { currentUser, setCurrentUser, removeCurrentUser } = useStore();
    const handleLogout = async () => {
        await AsyncStorage.removeItem(userKey);
        navigation.replace('Login');
        removeCurrentUser();
    }
    const [isAdmin, setIsAdmin] = useState(false);
    const [modalChangePassword, setModalChangePassword] = useState(false);

    const [currentPassword, setCurrentPassword] = useState(false);
    const [newPassword, setNewPassword] = useState(false);
    const [confirmPassword, setConirmPassword] = useState(false);
    const handleChangePassword = async () => {
        if (newPassword !== confirmPassword) {
            alert('Mật khẩu mới không trùng khớp');
            return;
        }
        if (newPassword.length < 6) {
            alert('Mật khẩu mới phải dài hơn 6 ký tự');
            return;
        }
        if (currentPassword === newPassword) {
            alert('Mật khẩu mới không được trùng với mật khẩu cũ');
            return;
        }
        // Call API to change password
        // const response = await postData('/api/change-password', { currentPassword, newPassword }, currentUser.token);
        setModalChangePassword(false);
    
    }
    useEffect(() => {
        const checkCurrentUser = async () => {
            try {
                const user = await AsyncStorage.getItem(userKey);
                if (user !== null) {
                    var parsedUser = JSON.parse(user);
                    setCurrentUser(parsedUser);
                    if (parsedUser?.customUserDetails?.authorities?.includes('ROLE_ADMIN')) {
                        setIsAdmin(true);
                    }
                } else {
                    replace('Login');
                }
            } catch (error) {
                console.error(error);
            }
        };
        checkCurrentUser();
    }, []);

    return (
        <SafeAreaView style={[styles.customSafeArea]}>
            <View style={[styles.flexRow, { marginBottom: -8 }]}>
                <Text style={styles.headerText}>Bảng điều khiển</Text>
            </View>
            <View style={styles.container}>
                {isAdmin && <TouchableOpacity
                    style={settingCss.buttonView}
                    onPress={() => {
                        navigate('UserManagement');
                    }}
                >
                    <FontAwesome5 name="users-cog" size={24} color={colors.black} />
                    <Text style={settingCss.button}>Quản lý người dùng</Text>
                </TouchableOpacity>}

                <TouchableOpacity
                    style={settingCss.buttonView}
                    onPress={() => {
                        setModalChangePassword(true);
                    }}
                >
                    <MaterialIcons name="password" size={24} color={colors.black} />
                    <Text style={settingCss.button}>Đổi mật khẩu</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={settingCss.loginButtonViewlogin}
                    onPress={() => {
                        handleLogout();
                    }}
                >
                    <Entypo name="log-out" size={24} color={colors.white} />
                    <Text style={settingCss.loginButtonlogin}>Đăng xuất</Text>
                </TouchableOpacity>
            </View>

            <Modal
                // animationType="slide"
                transparent={true}
                visible={modalChangePassword}
                onRequestClose={() => setModalChangePassword(false)}
            >
                <View style={settingCss.modalContainer}>
                    <View style={settingCss.modalView}>
                        <Text style={settingCss.modalText}>Đổi mật khẩu</Text>
                        <ScrollView contentContainerStyle={{ alignItems: 'center', width: device.width * 0.8 }}>
                            <View style={settingCss.inputContainer}>
                                <Text style={settingCss.inputLabel}>Mật khẩu hiện tại</Text>
                                <TextInput
                                    secureTextEntry={true}
                                    value={currentPassword}
                                    onChangeText={setCurrentPassword}
                                    style={{ borderColor: 'gray', borderWidth: 1, paddingHorizontal: 5, borderRadius: 5 }}
                                />
                            </View>
                            <View style={settingCss.inputContainer}>
                                <Text style={settingCss.inputLabel}>Mật khẩu mới</Text>
                                <TextInput
                                    secureTextEntry={true}
                                    value={newPassword}
                                    // onSubmitEditing={handleCountdown1}
                                    onChangeText={setNewPassword}
                                    style={{ borderColor: 'gray', borderWidth: 1, paddingHorizontal: 5, borderRadius: 5 }}
                                />
                            </View>
                            <View style={settingCss.inputContainer}>
                                <Text style={settingCss.inputLabel}>Nhập lại mật khẩu mới</Text>
                                <TextInput
                                    secureTextEntry={true}
                                    value={confirmPassword}
                                    // onSubmitEditing={handleCountdown1}
                                    onChangeText={setConirmPassword}
                                    style={{ borderColor: 'gray', borderWidth: 1, paddingHorizontal: 5, borderRadius: 5 }}
                                />
                            </View>
                            <View style={settingCss.footerModal}>
                                <TouchableOpacity style={settingCss.buttonModal} onPress={() => handleChangePassword()}>
                                    <Text style={settingCss.buttonTextModal}>XÁC NHẬN</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={settingCss.buttonModal} onPress={() => setModalChangePassword(false)}>
                                    <Text style={settingCss.buttonTextModal}>HỦY BỎ</Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
}

const settingCss = StyleSheet.create({
    inputContainer: {
        width: '90%',
        marginTop: 16,
    },
    inputLabel: {
        fontSize: 16,
        marginBottom: 5
    },
    footerModal: {
        flexDirection: 'row',
    },
    buttonTextModal: {
        marginTop: 16,
        color: colors.primary,
        fontSize: 16,
    },
    buttonModal: {
        color: colors.black,
        fontWeight: "bold",
        fontSize: 17,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 10,
        flex: 1,
    },
    loginButtonViewlogin: {
        width: "100%",
        height: 55,
        borderRadius: 25,
        borderWidth: 1,
        backgroundColor: colors.primary,
        alignItems: "center",
        justifyContent: "center",
        borderColor: "white",
        marginTop: 16,
        flexDirection: "row",
    },
    loginButtonlogin: {
        color: "white",
        fontWeight: "bold",
        fontSize: 17,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 10,
    },
    buttonView: {
        width: "100%",
        height: 55,
        borderRadius: 25,
        borderWidth: 1,
        backgroundColor: colors.white,
        alignItems: "center",
        justifyContent: "center",
        borderColor: colors.black,
        marginTop: 16,
        flexDirection: "row",
    },
    button: {
        color: colors.black,
        fontWeight: "bold",
        fontSize: 17,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 10,
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
})
