import { StyleSheet, Platform } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import colors from '../constants/colors';

export const styles = StyleSheet.create({
    customSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 45 : 0,
        // marginHorizontal: 16,
        flexDirection: 'column'
    },
    container: {
        flexDirection: "column",
        marginHorizontal: 16,
        flex: 1
    },
    goback: {
        flexDirection: "row",
        alignItems: "center",
        width: 150,
        // backgroundColor: colors.gray_bg,F
    },
    gobackText: {
        fontSize: 22,
        fontWeight: '600'
    },
    h1: {
        fontSize: 20,
        fontWeight: "600",
        marginBottom: 8
        // alignSelf: "center",
        // marginTop: 40
    }
}); 