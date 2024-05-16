import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UIScreen from "./UIScreen";
import Smart from "../screens/Smart";
import Setting from "../screens/Setting";
import Home from "../screens/Home";
import Login from "../screens/Login";
import DeviceDetail from "../screens/DeviceDetail";

const Stack = createNativeStackNavigator();
export default function Navigator() {
    // const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="UIScreen" screenOptions={{ headerShown: false }} >
                <Stack.Screen name={"Home"} component={Home} />
                <Stack.Screen name={"UIScreen"} component={UIScreen} />
                <Stack.Screen name={"Smart"} component={Smart} />
                <Stack.Screen name={"Login"} component={Login} />
                <Stack.Screen name={"Setting"} component={Setting} />
                <Stack.Screen name={"DeviceDetail"} component={DeviceDetail} />
            </Stack.Navigator>
        </NavigationContainer>
    )

}

