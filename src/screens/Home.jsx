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
    Image,
} from "react-native";
import Colors from "../constants/colors";
import { styles } from "../components/GlobalStyles";
import { devices } from "../../utils/dummyData";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
    //navigation
    const navigation = useNavigation();
    //function of navigate 
    const { navigate, goBack } = navigation;
    const handleDetail = (id) => {
        navigate('DeviceDetail', { id: id });
    }
    return (
        <SafeAreaView style={[styles.customSafeArea]}>
            <ScrollView>

            <Text style={styles.h1}>Tất cả thiết bị</Text>
            <View style={homeCss.container}>
                {devices.map((item, index) => {
                    return (
                        <TouchableOpacity style={homeCss.item} key={index} onPress={() => handleDetail(item.id)}>
                            <Text style={homeCss.itemTitle}>{item.attributes.friendly_name}</Text>
                            <View style={homeCss.itemIcon}>
                            </View>
                        </TouchableOpacity>
                    )
                })}
            </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const homeCss = StyleSheet.create({
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between"
    },
    item: {
        width: Dimensions.get("window").width / 2 - 24,
        height: 150,
        backgroundColor: Colors.white,
        borderRadius: 10,
        padding: 10,
        marginBottom: 16,
        shadowColor: Colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.03,
        shadowRadius: 3.84,
    },
    itemTitle: {
        fontSize: 16,
        fontWeight: "600",
        marginBottom: 10,
    },
    itemDesc: {
        fontSize: 14,
    },
    itemIcon: {
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
    },
    itemIconText: {
        fontSize: 20,
        fontWeight: "600",
    },
    itemImage: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    itemIconTextSmall: {
        fontSize: 14,
    }
})