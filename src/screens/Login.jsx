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
    TextInput,
    Modal,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { userKey } from "../constants/common";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../components/GlobalStyles";
import colors from "../constants/colors";
import Entypo from '@expo/vector-icons/Entypo';
import useStore from "../../utils/store";
import { postData } from "../../utils/commonRequest";
import { postDataBackend } from "../../utils/commonRequestBackend";
import { MaterialIcons } from '@expo/vector-icons';
import { device } from "../../utils/device";

export default function Login() {
    //navigation
    const navigation = useNavigation();
    //function of navigate 
    const { navigate, goBack } = navigation;
    const { setCurrentUser } = useStore();
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setInLoading] = useState(false);
    const [login, setLogin] = useState("");
    const [modalForgotPassword, setModalForgotPassword] = useState(false);

    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiI0M2QwZDhmZTQzZGY0MWY4Yjc1NjhmZTgwNmUxOTQ3YiIsImlhdCI6MTcxNjQ3Nzg5OCwiZXhwIjoyMDMxODM3ODk4fQ.-5RvB-i1_YOutT0N9SGqX_AXl7N2FBEueFLmtWsJN3c';
    const handleLogin = async () => {
        try {
            const reqBody = {
                username: userName,
                password: password,
                rememberMe: true,
            }
            const loginResponse = await postDataBackend('/api/authenticate', reqBody, '');
            // console.log(loginResponse);
            if (loginResponse) {
                // console.log('token: ' + loginResponse.httpHeaders.Authorization[0]);
                // console.log('user: ' + loginResponse.customUserDetails);
                let loginUser = {
                    tokenBackend: loginResponse.httpHeaders.Authorization[0],
                    customUserDetails: loginResponse.customUserDetails,
                    token: token
                }
                await AsyncStorage.setItem(userKey, JSON.stringify(loginUser));
                setCurrentUser(loginUser);
                navigation.replace('UIScreen'); // Navigate to Home after login
            }
            // if (userName === fixUserName && password === fixPassword) {
            //     const user = { name: 'Bùi Việt Anh', token: token }; // Example user data
            //     setCurrentUser(user);
            //     navigation.replace('UIScreen'); // Navigate to Home after login
            // }
        } catch (e) {
            console.error(e);
            alert("Email hoặc password không đúng. Vui lòng thử lại!")
        }
    };

    /**
     * check existed user
     */
    const fetchUser = async () => {
        const currentUser = await AsyncStorage.getItem(userKey);
        if (currentUser) {
            navigation.replace("UIScreen");
        }
    }
    useEffect(() => {
        fetchUser();
    })

    const handleForgotPassword = async () => {
        try {
            const response = await postDataBackend(`/api/users/reset-password/${login}`, null, '');
            if (response) {
                alert('Mật khẩu đã được khôi phục về mật khẩu mặt định là 123456aA@. Vui lòng đăng nhập và đổi lại mật khẩu');
                setModalForgotPassword(false);
                setLogin('');
            }
        } catch (e) {
            console.error(e);
            alert("Có lỗi xảy ra. Vui lòng thử lại sau!")
        }
    }

    return (
        <SafeAreaView style={[styles.customSafeArea, { backgroundColor: colors.white }]}>
            <View style={styles.container}>
                {/* <Text style={styles.h1}>Tất cả thiết bị</Text> */}
                <View style={loginCss.loginHeader}>
                    {/* <EntypoIcon
                        name={"chevron-left"}
                        size={30}
                        // color={colors.primary}
                        onPress={() => {
                            goBack();
                        }}
                        color={colors.black}
                    /> */}
                    <Text style={[loginCss.loginTextHeader, colors.black]}>Đăng nhập</Text>
                    <Text> </Text>
                </View>

                <View style={[loginCss.loginContainer]}>
                    <View style={loginCss.loginInputEmail}>
                        <TextInput
                            style={[loginCss.loginTextInputEmail, colors.black]}
                            value={userName}
                            onChangeText={setUserName}
                            placeholder="Tên đăng nhập"
                            placeholderTextColor={colors.dark_grey}
                        ></TextInput>
                    </View>

                    <View style={loginCss.loginInputPassword}>
                        <TextInput
                            style={[loginCss.loginTextInputPassword, colors.black]}
                            value={password}
                            onChangeText={setPassword}
                            placeholder={"Mật khẩu"}
                            secureTextEntry={true}
                            placeholderTextColor={colors.dark_grey}
                        ></TextInput>
                    </View>

                    <TouchableOpacity
                        style={loginCss.loginButtonViewlogin}
                        onPress={() => {
                            handleLogin();
                        }}
                    >
                        <Entypo name="login" size={25} color={colors.white} />
                        <Text style={loginCss.loginButtonlogin}>Đăng nhập</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={loginCss.forgotPasswordButton}
                        onPress={() => {
                            setModalForgotPassword(true);
                        }}
                    >
                        <MaterialIcons name="password" size={24} color={colors.primary} />
                        <Text style={loginCss.forgotPasswordButtonText}>Quên mật khẩu</Text>
                    </TouchableOpacity>
                    <Modal
                        // animationType="slide"
                        transparent={true}
                        visible={modalForgotPassword}
                        onRequestClose={() => setModalForgotPassword(false)}
                    >
                        <View style={loginCss.modalContainer}>
                            <View style={loginCss.modalView}>
                                <Text style={loginCss.modalText}>Quên mật khẩu</Text>
                                <ScrollView contentContainerStyle={{ alignItems: 'center', width: device.width * 0.8 }}>
                                    <View style={loginCss.inputContainer}>
                                        <Text style={loginCss.inputLabel}>Tên đăng nhập</Text>
                                        <TextInput
                                            value={login}
                                            onChangeText={setLogin}
                                            style={{ borderColor: 'gray', borderWidth: 1, paddingHorizontal: 5, borderRadius: 5, height: 40 }}
                                        />
                                    </View>
                                    <View style={loginCss.footerModal}>
                                        <TouchableOpacity style={loginCss.buttonModal} onPress={() => handleForgotPassword()}>
                                            <Text style={loginCss.buttonTextModal}>XÁC NHẬN</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={loginCss.buttonModal} onPress={() =>setModalForgotPassword(false)}>
                                            <Text style={loginCss.buttonTextModal}>HỦY BỎ</Text>
                                        </TouchableOpacity>
                                    </View>
                                </ScrollView>
                            </View>
                        </View>
                    </Modal>
                </View>
            </View>
        </SafeAreaView>
    );
}

const loginCss = StyleSheet.create({
    login: {
        flex: 1,
        backgroundColor: "#fff",
    },

    loginHeader: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
        justifyContent: "center",
    },

    loginTextHeader: {
        fontWeight: "bold",
        fontSize: 26,
        width: '100%',
        // height: 200,
        textAlign: 'center',
        paddingBottom: 30
    },

    loginContainer: {
        flex: 2,
        backgroundColor: "#fff",
        alignItems: "center",
        // justifyContent: "center",
        marginTop: 20,
        marginHorizontal: 16,
    },

    loginInputEmail: {
        marginHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#C0C0C0",
        width: "100%",
    },

    loginTextInputEmail: {
        fontSize: 17,
    },

    loginInputPassword: {
        flexDirection: "row",
        marginHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#C0C0C0",
        width: "100%",
        marginTop: 46,
        justifyContent: "space-between",
    },

    loginTextForgot: {
        color: "#FF6363",
        fontSize: 16,
    },

    loginViewNoEmail: {
        flexDirection: "row",
        // marginHorizontal: 20,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 55,
    },
    loginTextInputPassword: {
        flex: 1,
        fontSize: 17,
    },
    loginTextNoEmail: {
        color: "red",
        fontSize: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#FF6363",
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
        marginTop: 63,
        flexDirection: "row",
    },
    loginButtonlogin: {
        color: "white",
        fontWeight: "bold",
        fontSize: 17,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 10
    },

    forgotPasswordButton: {
        width: "100%",
        height: 55,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: colors.primary,
        // backgroundColor: colors.primary,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 32,
        flexDirection: "row",
    },
    forgotPasswordButtonText: {
        color: colors.primary,
        fontWeight: "bold",
        fontSize: 17,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 10
    },

    loginButtonViewGoogle: {
        width: "100%",
        height: 55,
        borderRadius: 25,
        borderWidth: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        borderColor: colors.primary,
        marginTop: 30,
        flexDirection: "row",
    },
    loginButtonGoogle: {
        color: colors.primary,
        fontWeight: "bold",
        fontSize: 17,
    },

    loginButtonViewFb: {
        width: "100%",
        height: 55,
        borderRadius: 25,
        borderWidth: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
        borderColor: colors.primary,
        flexDirection: "row",
    },
    loginButtonFb: {
        color: colors.primary,
        fontWeight: "bold",
        fontSize: 17,
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
        maxHeight: '80%',
        marginBottom: 200
    },
    modalText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
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
});