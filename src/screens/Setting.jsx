import React from "react";
import {
    SafeAreaView,
    Text,
    View,
    TouchableOpacity,
    FlatList,
    StyleSheet,
    ScrollView,
    Dimensions,
} from "react-native";
import colors from "../constants/colors";
import { styles } from "../components/GlobalStyles";
import Entypo from '@expo/vector-icons/Entypo';
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { userKey } from "../constants/common";
import useStore from "../../utils/store";
// import Icon from "react-native-vector-icons/FontAwesome5";

export default function Setting() {
    //navigation
    const navigation = useNavigation();
    //function of navigate 
    const { navigate, goBack } = navigation;
    const { removeCurrentUser } = useStore();
    const handleLogout = async () => {
        await AsyncStorage.removeItem(userKey);
        removeCurrentUser();
        navigation.replace('Login');
    }
    return (
        <SafeAreaView style={[styles.customSafeArea, { backgroundColor: colors.white }]}>
            <View style={styles.container}>
                <TouchableOpacity
                    style={settingCss.loginButtonViewlogin}
                    onPress={() => {
                        handleLogout();
                    }}
                >
                    {/* <Icon
                            name="sign-out-alt"
                            style={{ paddingStart: 10, opacity: 0.6 }}
                            size={18}
                            color={colors.white}
                        /> */}
                    <Entypo name="log-out" size={24} color={colors.white} />
                    <Text style={settingCss.loginButtonlogin}>Đăng xuất</Text>
                    {/* <Icon
                        name="chevron-right"
                        style={{ paddingEnd: 10, opacity: 0.5 }}
                        size={20}
                        color={colors.white}
                    /> */}
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const settingCss = StyleSheet.create({
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
        marginLeft: 10,
    },
})
