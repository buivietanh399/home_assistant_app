import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UIScreen from "./UIScreen";
import Smart from "../screens/Smart";
import Setting from "../screens/Setting";
import Home from "../screens/Home";

const Stack = createNativeStackNavigator();
export default function Navigator(): React.JSX.Element {
    // const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="UIScreen" screenOptions={{ headerShown: false }} >
                <Stack.Screen name={"Home"} component={Home} />
                <Stack.Screen name={"UIScreen"} component={UIScreen} />
                <Stack.Screen name={"Smart"} component={Smart} />
                <Stack.Screen name={"Setting"} component={Setting} />
            </Stack.Navigator>
        </NavigationContainer>
    )

}

