import React, { useEffect } from "react";
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
import AsyncStorage from "@react-native-async-storage/async-storage";
import { userKey } from "../constants/common";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../components/GlobalStyles";

export default function Login() {
    //navigation
    const navigation = useNavigation();
    //function of navigate 
    const { navigate, goBack } = navigation;
    const fetchUser = async () => {
        const currentUser = await AsyncStorage.getItem(userKey);
        if (currentUser) {
            navigate("UIScreen");
        }
    }
    useEffect(() => {
        fetchUser();
    })
    return (
        <SafeAreaView style={[styles.customSafeArea]}>
            <View style={styles.container}>
                <Text style={styles.h1}>Tất cả thiết bị</Text>
                
            </View>
        </SafeAreaView>
    );
}