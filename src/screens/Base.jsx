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
import { styles } from "../components/GlobalStyles";
import colors from "../constants/colors";
import { useNavigation } from "@react-navigation/native";
import Entypo from '@expo/vector-icons/Entypo';

export default function Base() {
    const navigation = useNavigation();
    const { navigate, goBack } = navigation;

    return (
        <SafeAreaView style={[styles.customSafeArea, { backgroundColor: colors.white }]}>
            <ScrollView style={styles.container}>
                <View style={styles.flexRow}>
                    <Entypo
                        name="chevron-left"
                        size={24}
                        color={colors.black}
                        onPress={() => goBack()} />
                    <Text style={styles.headerText}>Bảng điều khiển</Text>
                    <View style={{ width: 24 }}></View>
                </View>
                <Text>Base screen</Text>
            </ScrollView>
        </SafeAreaView>
    );
}