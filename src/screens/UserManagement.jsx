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
    Alert,
} from "react-native";
import { styles } from "../components/GlobalStyles";
import colors from "../constants/colors";
import { useNavigation } from "@react-navigation/native";
import Entypo from '@expo/vector-icons/Entypo';
import { MaterialIcons } from '@expo/vector-icons';

export default function UserManagement() {
    const navigation = useNavigation();
    const { navigate, goBack } = navigation;
    const [confirmModal, setComfirmModal] = useState(false);
    const [currentUserId, setCurrentUserId] = useState(null);
    const handleConfirmModal = (id) => {
        setCurrentUserId(id);
        setComfirmModal(true);
    }

    const showAlert = (id, name) => {
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
              onPress: () => console.log('OK Pressed'),
            },
          ],
          { cancelable: false } // Điều này sẽ ngăn việc đóng alert bằng cách nhấn vào bên ngoài alert
        );
      };

    const user = [
        {
            "id": 3,
            "login": "admin",
            "firstName": "Administrator",
            "lastName": "Administrator",
            "email": "admin@localhost",
            "imageUrl": "",
            "activated": true,
            "langKey": "en",
            "createdBy": "system",
            "createdDate": null,
            "lastModifiedBy": "system",
            "lastModifiedDate": null,
            "authorities": [
                "ROLE_USER",
                "ROLE_ADMIN"
            ]
        },
        {
            "id": 1,
            "login": "system",
            "firstName": "System",
            "lastName": "System",
            "email": "system@localhost",
            "imageUrl": "",
            "activated": true,
            "langKey": "en",
            "createdBy": "system",
            "createdDate": null,
            "lastModifiedBy": "system",
            "lastModifiedDate": null,
            "authorities": [
                "ROLE_USER",
                "ROLE_ADMIN"
            ]
        },
        {
            "id": 2,
            "login": "user",
            "firstName": "User",
            "lastName": "User",
            "email": "user@localhost",
            "imageUrl": "",
            "activated": true,
            "langKey": "en",
            "createdBy": "system",
            "createdDate": null,
            "lastModifiedBy": "system",
            "lastModifiedDate": null,
            "authorities": [
                "ROLE_USER"
            ]
        }
    ]

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
                {user.map((item, index) => {
                    return (
                        <View key={index}>
                            <View style={userManagementCss.item}>
                                <TouchableOpacity onPress={() => { }} style={{ flex: 1 }}>
                                    <Text style={userManagementCss.itemTitle}>{item.firstName + ' ' + item.lastName}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => showAlert(item.id, item.firstName + ' ' + item.lastName)} >
                                    <MaterialIcons style={[userManagementCss.itemTitle, { fontSize: 24 }]} name="delete" color={colors.red} />
                                </TouchableOpacity>
                            </View>
                            <View style={userManagementCss.separator}></View>
                        </View>
                    )
                })}
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
})