import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

type RootStackParamList = {
    Login: string;
    UIScreen: string;
};

type LoginScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Login'
>;

type UIScreenRouteProp = RouteProp<RootStackParamList, 'UIScreen'>;

export type { RootStackParamList, LoginScreenNavigationProp, UIScreenRouteProp };
