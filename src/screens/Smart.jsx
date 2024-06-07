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
    Modal,
} from "react-native";
import { styles } from "../components/GlobalStyles";
import colors from "../constants/colors";
import { useNavigation } from "@react-navigation/native";
import useStore from "../../utils/store";
import { deleteDataBackend, getDataBackend } from "../../utils/commonRequestBackend";
import { device } from "../../utils/device";
import { getData, postData } from "../../utils/commonRequest";

export default function Smart() {
    const navigation = useNavigation();
    const { navigate, goBack } = navigation;
    const [allScenarios, setAllScenarios] = useState([]);
    const {
        currentUser,
        setCurrentUser,
        removeCurrentUser,
        entityId,
        setEntityId,
        scenarioId,
        setScenarioId,
        toggleSmartPage,
        setToggleSmartPage,
        entityName,
        setEntityName
    } = useStore();
    const fetchAllScenarios = async () => {
        const dataRes = await getDataBackend('/api/scenarios', currentUser.tokenBackend);
        const filteredScenarios = dataRes.filter((element) => {
            return element?.userId == currentUser?.customUserDetails?.id
        }
        );
        setAllScenarios(filteredScenarios);
    }
    useEffect(() => {
        fetchAllScenarios();
    }, [currentUser, toggleSmartPage])
    const [showModal, setShowModal] = useState(false);
    const [devices, setDevices] = useState([]);
    const [showRunModal, setShowRunModal] = useState(false);
    const handleRunScenario = async () => {
        try {
            setShowRunModal(false)
            const dataRes = await getDataBackend(`/api/scenarios/${scenarioId}`, currentUser.tokenBackend);
            const newScenarios = dataRes.action.map(element => JSON.parse(element.payload));
            // let delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
            for (let value of newScenarios) {
                // if (value.body.entity_id.includes('switch')) {
                const result = await postData(value.url, value.body, currentUser.token);
                // await delay(500); // Dừng lại 0.5 giây
                // }
            }
            alert('Chạy kịch bản thành công!')
        } catch (e) {
            console.error(e);
            alert("Chạy kịch bản thất bại")
        }
    }
    const handleDeleteScenario = async () => {
        try {
            setShowRunModal(false)
            await deleteDataBackend(`/api/scenarios/${scenarioId}`, currentUser.tokenBackend);
            alert('Xóa bản thành công!')
            setToggleSmartPage()
        } catch (e) {
            console.error(e);
            alert("Xóa bản thất bại")
        }
    }
    return (
        <SafeAreaView style={[styles.customSafeArea]}>
            <ScrollView style={styles.container}>
                <Text style={styles.headerText}>Danh sách kịch bản</Text>
                {allScenarios.map((item, index) => {
                    return (
                        <TouchableOpacity style={smartCss.item} key={index}
                            onPress={() => {
                                // handleRunScenario(item.id)
                                setScenarioId(item.id);
                                setShowRunModal(true)
                                // navigate('Scenario');
                            }}
                        >
                            <Text style={smartCss.itemTitle}>{item.name}</Text>
                            <Text style={smartCss.itemTitle}>Thiết bị: {item.entityId}</Text>
                            {/* <View style={smartCss.itemIcon}>
                                </View> */}
                        </TouchableOpacity>
                    )
                })}
                <TouchableOpacity
                    style={smartCss.buttonView}
                    onPress={async () => {
                        const allDevices = await getData('/api/states', currentUser.token);
                        var existingName = []
                        var filteredData = []
                        allDevices.forEach(item => {
                            if (item.entity_id.split('.')[1].slice(0, 2) == '0x') {
                                const name = item.attributes.friendly_name.split('-')[0];
                                if (existingName.length === 0) {
                                    // console.log("====" + name);
                                    existingName.push(name)
                                    filteredData.push(item);
                                } else {
                                    let existingGroup = existingName.find(groupName => groupName === name);
                                    if (existingGroup) {
                                        // console.log("====" + name);
                                        // existingGroup.devices.push(item);
                                    } else {
                                        // console.log("====" + name);
                                        existingName.push(name)
                                        filteredData.push(item);
                                    }
                                }
                            }
                        });
                        setDevices(filteredData);
                        setShowModal(true);
                    }}
                >
                    <Text style={smartCss.button}>Thêm mới kịch bản</Text>
                    <Modal
                        transparent={true}
                        visible={showModal}
                        onRequestClose={() => setShowModal(false)}
                    >
                        <View style={smartCss.modalContainer}>
                            <View style={smartCss.modalView}>
                                <Text style={smartCss.modalText}>Chọn thiết bị</Text>
                                <ScrollView contentContainerStyle={{ alignItems: 'center', width: device.width * 0.8 }}>
                                    {devices.map((item, index) => {
                                        return (
                                            <TouchableOpacity
                                                style={smartCss.modalButton}
                                                key={index}
                                                onPress={() => {
                                                    setScenarioId(null);
                                                    let entityId = item.entity_id.split('.')[1].split('_')[0] + '_' + item.entity_id.split('.')[1].split('_')[1];
                                                    setEntityId(entityId)
                                                    setEntityName(item.attributes.friendly_name.split('-')[0] ? item.attributes.friendly_name.split('-')[0] : null)
                                                    setShowModal(false)
                                                    // STEP 3: check điều kiện của id để chuyển màn hình
                                                    if (entityId.split('_')[1] == '2gang') {
                                                        console.log('2 công tắc');
                                                        navigate('Scenario');
                                                    } else if (entityId.split('_')[1] == '3gang') {
                                                        console.log('3 công tắc');
                                                        navigate('Scenario3');
                                                    } else {
                                                        alert("Thiết bị không hợp lệ!");
                                                    }
                                                }}
                                            >
                                                <Text style={smartCss.modalButtonText}>{item.attributes.friendly_name.split('-')[0]}</Text>
                                            </TouchableOpacity>
                                        )
                                    })}
                                    <TouchableOpacity style={smartCss.modalButton} onPress={() => setShowModal(false)}>
                                        <Text style={smartCss.modalButtonText}>Cancel</Text>
                                    </TouchableOpacity>
                                </ScrollView>
                            </View>
                        </View>
                    </Modal>

                    <Modal
                        transparent={true}
                        visible={showRunModal}
                        onRequestClose={() => setShowRunModal(false)}
                    >
                        <View style={smartCss.modalContainer}>
                            <View style={smartCss.modalView}>
                                <Text style={smartCss.modalText}>Chọn thiết bị</Text>
                                <ScrollView contentContainerStyle={{ alignItems: 'center', width: device.width * 0.8 }}>
                                    <TouchableOpacity style={smartCss.modalButton} onPress={() => handleRunScenario()}>
                                        <Text style={smartCss.modalButtonText}>Chạy kịch bản</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={smartCss.modalButton} onPress={() => handleDeleteScenario()}>
                                        <Text style={smartCss.modalButtonText}>Xóa kịch bản</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={smartCss.modalButton} onPress={() => setShowRunModal(false)}>
                                        <Text style={smartCss.modalButtonText}>Đóng</Text>
                                    </TouchableOpacity>
                                </ScrollView>
                            </View>
                        </View>
                    </Modal>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}

const smartCss = StyleSheet.create({
    item: {
        width: Dimensions.get("window"),
        height: 100,
        backgroundColor: colors.white,
        borderRadius: 10,
        padding: 10,
        marginBottom: 16,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.03,
        shadowRadius: 3.84,
        alignItems: 'center',
        justifyContent: 'center'
    },
    itemTitle: {
        fontSize: 17,
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
    buttonView: {
        width: "100%",
        height: 55,
        borderRadius: 8,
        backgroundColor: colors.primary,
        alignItems: "center",
        justifyContent: "center",
        borderColor: "white",
        flexDirection: "row",
    },
    button: {
        color: "white",
        fontWeight: "bold",
        fontSize: 17,
        alignItems: "center",
        justifyContent: "center",
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
        maxHeight: '80%'
    },
    modalText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    modalButton: {
        backgroundColor: 'white',
        width: '1000%',
        alignItems: 'center',
        padding: 10
    },
    modalButtonText: {
        color: 'black',
        fontSize: 16,
    },
})