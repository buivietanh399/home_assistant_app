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
    Alert,
    Modal,
    TextInput,
} from "react-native";
import { styles } from "../components/GlobalStyles";
import colors from "../constants/colors";
import { useNavigation } from "@react-navigation/native";
import Entypo from '@expo/vector-icons/Entypo';
import { MaterialIcons } from '@expo/vector-icons';
import { deleteDataBackend, getDataBackend, postDataBackend } from "../../utils/commonRequestBackend";
import useStore from "../../utils/store";
import { device } from "../../utils/device";

export default function UserManagement() {
    const navigation = useNavigation();
    const { navigate, goBack } = navigation;
    // const [confirmModal, setComfirmModal] = useState(false);
    // const [currentUserId, setCurrentUserId] = useState(null);
    // const handleConfirmModal = (id) => {
    //     setCurrentUserId(id);
    //     setComfirmModal(true);
    // }
    const { currentUser, setCurrentUser, removeCurrentUser } = useStore();
    const showAlert = async (userName, name) => {
        Alert.alert(
            'Cảnh báo',
            `Bạn có chắc chắn muốn xóa người dùng ${name} khỏi hệ thống?`, // Thông báo của alert
            [
                {
                    text: 'Hủy bỏ',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel', // Kiểu nút, có thể là 'default', 'cancel', hoặc 'destructive'
                },
                {
                    text: 'Đồng ý',
                    onPress: async () => {
                        try {
                            const response = await deleteDataBackend(`/api/users/${userName}`, currentUser.tokenBackend);
                            alert("Xóa người dùng thành công!");
                            await fetchUser()
                        } catch (error) {
                            alert("Xóa người dùng thành công!");
                            console.error("Lỗi khi xóa người dùng!");
                        }
                    },
                },
            ],
            { cancelable: false } // Điều này sẽ ngăn việc đóng alert bằng cách nhấn vào bên ngoài alert
        );
    };

    const [users, setUsers] = useState([]);

    const fetchUser = async () => {
        try {
            const response = await getDataBackend('/api/get-users', currentUser.tokenBackend);
            if (response) {
                setUsers(response);
            }
        } catch (error) {
            console.error("Lỗi khi lấy dữ liệu người dùng!");
        }
    }
    useEffect(() => {
        fetchUser();
    }, []);

    const [modalNewUser, setModalNewUser] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');

    const handleNewUser = async () => {
        if (!validateEmail(email)) {
            alert("Email không hợp lệ, vui lòng kiểm tra lại!");
            return;
        }
        try {
            const reqBody = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                login: userName,
            }
            const response = await postDataBackend('/api/users', reqBody, currentUser.tokenBackend);
            if (response) {
                alert("Tạo người dùng thành công, mật khẩu mặc định là 123456aA@");
                setModalNewUser(false);
                setFirstName('');
                setLastName('');
                setUserName('');
                setEmail('');
                await fetchUser();
            }
        } catch (e) {
            console.error(e);
            alert("Có lỗi xảy ra trong quá trình tạo người dùng, vui lòng thử lại!")
        }
    }

    function validateEmail(email) {
        // Biểu thức chính quy để kiểm tra email hợp lệ
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    }

    return (
        <SafeAreaView style={[styles.customSafeArea]}>
            <ScrollView style={styles.container}>
                <View style={styles.flexRow}>
                    <Entypo
                        name="chevron-left"
                        size={24}
                        color={colors.black}
                        onPress={() => goBack()} />
                    <Text style={styles.headerText}>Danh sách người dùng</Text>
                    <View style={{ width: 24 }}></View>
                </View>
                {users.map((item, index) => {
                    return (
                        <View key={index}>
                            <View style={userManagementCss.item}>
                                <TouchableOpacity onPress={() => { }} style={{ flex: 1 }}>
                                    <Text style={userManagementCss.itemTitle}>{item.firstName + ' ' + item.lastName}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => showAlert(item.login, item.firstName + ' ' + item.lastName)} >
                                    <MaterialIcons style={[userManagementCss.itemTitle, { fontSize: 24 }]} name="delete" color={colors.red} />
                                </TouchableOpacity>
                            </View>
                            <View style={userManagementCss.separator}></View>
                        </View>
                    )
                })}
                <TouchableOpacity
                    style={userManagementCss.button}
                    onPress={() => {
                        setModalNewUser(true);
                    }}
                >
                    {/* <Entypo name="log-out" size={24} color={colors.white} /> */}
                    <Text style={userManagementCss.buttonText}>Thêm người dùng mới</Text>
                </TouchableOpacity>
                <Modal
                    // animationType="slide"
                    transparent={true}
                    visible={modalNewUser}
                    onRequestClose={() => setModalNewUser(false)}
                >
                    <View style={userManagementCss.modalContainer}>
                        <View style={userManagementCss.modalView}>
                            <Text style={userManagementCss.modalText}>Thêm người dùng</Text>
                            <ScrollView contentContainerStyle={{ alignItems: 'center', width: device.width * 0.8 }}>
                                <View style={userManagementCss.inputContainer}>
                                    <Text style={userManagementCss.inputLabel}>Tên đăng nhập</Text>
                                    <TextInput
                                        value={userName}
                                        onChangeText={setUserName}
                                        style={{ borderColor: 'gray', borderWidth: 1, paddingHorizontal: 5, borderRadius: 5, height: 40 }}
                                    />
                                </View>
                                <View style={userManagementCss.inputContainer}>
                                    <Text style={userManagementCss.inputLabel}>Email</Text>
                                    <TextInput
                                        value={email}
                                        // onSubmitEditing={handleCountdown1}
                                        onChangeText={setEmail}
                                        style={{ borderColor: 'gray', borderWidth: 1, paddingHorizontal: 5, borderRadius: 5, height: 40 }}
                                    />
                                </View>
                                <View style={userManagementCss.inputContainer}>
                                    <Text style={userManagementCss.inputLabel}>Họ</Text>
                                    <TextInput
                                        value={firstName}
                                        // onSubmitEditing={handleCountdown1}
                                        onChangeText={setFirstName}
                                        style={{ borderColor: 'gray', borderWidth: 1, paddingHorizontal: 5, borderRadius: 5, height: 40 }}
                                    />
                                </View>
                                <View style={userManagementCss.inputContainer}>
                                    <Text style={userManagementCss.inputLabel}>Tên</Text>
                                    <TextInput
                                        value={lastName}
                                        // onSubmitEditing={handleCountdown1}
                                        onChangeText={setLastName}
                                        style={{ borderColor: 'gray', borderWidth: 1, paddingHorizontal: 5, borderRadius: 5, height: 40 }}
                                    />
                                </View>
                                <View style={userManagementCss.footerModal}>
                                    <TouchableOpacity style={userManagementCss.buttonModal} onPress={() => handleNewUser()}>
                                        <Text style={userManagementCss.buttonTextModal}>XÁC NHẬN</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={userManagementCss.buttonModal} onPress={() => setModalNewUser(false)}>
                                        <Text style={userManagementCss.buttonTextModal}>HỦY BỎ</Text>
                                    </TouchableOpacity>
                                </View>
                            </ScrollView>
                        </View>
                    </View>
                </Modal>
            </ScrollView>
        </SafeAreaView>
    );
}

const userManagementCss = StyleSheet.create({
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between"
    },
    item: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    itemTitle: {
        fontSize: 17,
        fontWeight: "400",
        lineHeight: 50,
    },
    separator: {
        height: 1,
        width: '100%',
        backgroundColor: colors.grey,
    },
    button: {
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
    buttonText: {
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
})