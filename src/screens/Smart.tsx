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
import GlobalStyles from "../components/GlobalStyles";
import colors from "../constants/colors";

export default function Smart(): React.JSX.Element {
    return (
        <SafeAreaView style={[GlobalStyles.customSafeArea, { backgroundColor: colors.white}]}>
            <Text>Smart screen</Text>
        </SafeAreaView>
    );
}