import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, StatusBar } from "react-native";
import Home from "../screens/Home";
import colors from "../constants/colors";
import Smart from "../screens/Smart";
import Setting from "../screens/Setting";
import { RouteProp } from "@react-navigation/native";

interface ScreenOptionsProps {
    route: RouteProp<Record<string, object | undefined>, string>;
    navigation: any;
}

const Tab = createBottomTabNavigator();
const screenOptions = ({ route }: ScreenOptionsProps) => ({
    headerShown: false,
    tabBarActiveTintColor: colors.primary,
    tabBarInactiveTintColor: colors.inactive,
    tabBarIcon: ({ focused, color, size }: { focused: boolean, color: string, size: number }) => {
        let screenName = route.name;
        if (screenName == "Home") {
            return <Image
                style={{ width: 25, height: 25, marginTop: 3 }}
                source={focused ? require("../../assets/icons/ico_home_active.png") : require("../../assets/icons/ico_home_inactive.png")} />
        }
        else if (screenName == "Smart") {
            return <Image
                style={{ width: 25, height: 25, marginTop: 3 }}
                source={focused ? require("../../assets/icons/ico_follow_active.png") : require("../../assets/icons/ico_follow_inactive.png")} />
        } else if (screenName == "Setting") {
            return <Image
                style={{ width: 25, height: 25, marginTop: 3 }}
                source={focused ? require("../../assets/icons/ico_setting_active.png") : require("../../assets/icons/ico_setting_inactive.png")} />
        }
    }
});

export default function UIScreen() {
    // const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);
    // const currentLanguage = useSelector(
    //     (state) => state.language.currentLanguage
    // );

    return (
        <Tab.Navigator initialRouteName="Home" screenOptions={screenOptions}
        >
            <Tab.Screen
                name="Home"
                component={Home}
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
            <Tab.Screen
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
            />
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
