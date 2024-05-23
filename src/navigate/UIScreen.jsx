import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, StatusBar } from "react-native";
import Home from "../screens/Home";
import colors from "../constants/colors";
import Smart from "../screens/Smart";
import Setting from "../screens/Setting";
import { RouteProp } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import DeviceDetail from "../screens/DeviceDetail";

const Tab = createBottomTabNavigator();
const screenOptions = ({ route }) => ({
    headerShown: false,
    tabBarActiveTintColor: colors.primary,
    tabBarInactiveTintColor: colors.inactive,
    tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'DeviceDetail') {
            return <Entypo name="home" size={size} color={color} />;
        } else if (route.name === 'Smart') {
            return <MaterialIcons name="library-add-check" size={size} color={color} />;
        } else if (route.name === 'Setting') {
            return <Ionicons name="settings-sharp" size={size} color={color} />
        }
    }
});

export default function UIScreen() {
    // const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);
    // const currentLanguage = useSelector(
    //     (state) => state.language.currentLanguage
    // );

    return (
        <Tab.Navigator initialRouteName="DeviceDetail" screenOptions={screenOptions}
        >
            <Tab.Screen
                name="DeviceDetail"
                component={DeviceDetail}
                // options={{
                //     title: currentLanguage == 'vi' ? 'Trang chủ' : 'Home',
                //     tabBarActiveBackgroundColor: isDarkTheme ? colors.black : colors.white,
                //     tabBarInactiveBackgroundColor: isDarkTheme ? colors.black : colors.white,
                // }}
                options={{
                    title: 'Trang chủ',
                    tabBarActiveBackgroundColor: colors.white,
                    tabBarInactiveBackgroundColor: colors.white,
                }}
            />
            {/* <Tab.Screen
                name="Smart"
                component={Smart}
                // options={{
                //     tabBarLabel: currentLanguage == 'vi' ? 'Thư viện' : 'Library',
                //     tabBarActiveBackgroundColor: isDarkTheme ? colors.black : colors.white,
                //     tabBarInactiveBackgroundColor: isDarkTheme ? colors.black : colors.white,
                // }}
                options={{
                    tabBarLabel: 'Thông minh',
                    tabBarActiveBackgroundColor: colors.white,
                    tabBarInactiveBackgroundColor: colors.white,
                }}
            /> */}
            <Tab.Screen
                name="Setting"
                // component={Setting} options={{
                //     tabBarLabel: currentLanguage == 'vi' ? 'Cài đặt' : 'Setting',
                //     tabBarActiveBackgroundColor: isDarkTheme ? colors.black : colors.white,
                //     tabBarInactiveBackgroundColor: isDarkTheme ? colors.black : colors.white,
                // }} />
                component={Setting} options={{
                    tabBarLabel: 'Cài đặt',
                    tabBarActiveBackgroundColor: colors.white,
                    tabBarInactiveBackgroundColor: colors.white,
                }} />
        </Tab.Navigator>
    )
}
