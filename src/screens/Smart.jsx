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

export default function Smart() {
    return (
        <SafeAreaView style={[styles.customSafeArea, { backgroundColor: colors.white}]}>
            <Text>Smart screen</Text>
        </SafeAreaView>
    );
}