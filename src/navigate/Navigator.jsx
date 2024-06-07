import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UIScreen from "./UIScreen";
import Smart from "../screens/Smart";
import Setting from "../screens/Setting";
import Home from "../screens/Home";
import Login from "../screens/Login";
import DeviceDetail from "../screens/DeviceDetail";
import Scenario from "../screens/Scenario";
import Scenario3 from "../screens/Scenario3";
import DeviceDetail3 from "../screens/DeviceDetail3";
import UserManagement from "../screens/UserManagement";

const Stack = createNativeStackNavigator();
export default function Navigator() {
    // const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);
    return (
        /**
         * STEP 1: Khai báo thêm các màn mới
         */
        <NavigationContainer>
            <Stack.Navigator initialRouteName="UIScreen" screenOptions={{ headerShown: false }} >
                <Stack.Screen name={"Home"} component={Home} />
                <Stack.Screen name={"UIScreen"} component={UIScreen} />
                <Stack.Screen name={"Smart"} component={Smart} />
                <Stack.Screen name={"Login"} component={Login} />
                <Stack.Screen name={"Setting"} component={Setting} />
                <Stack.Screen name={"DeviceDetail"} component={DeviceDetail} />
                <Stack.Screen name={"DeviceDetail3"} component={DeviceDetail3} />
                <Stack.Screen name={"Scenario"} component={Scenario} />
                <Stack.Screen name={"Scenario3"} component={Scenario3} />
                <Stack.Screen name={"UserManagement"} component={UserManagement} />
            </Stack.Navigator>
        </NavigationContainer>
    )

}

