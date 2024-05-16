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

export default function Setting() {
    return (
        <SafeAreaView style={[styles.customSafeArea, { backgroundColor: colors.white}]}>
            <Text>Setting screen</Text>
        </SafeAreaView>
    );
}