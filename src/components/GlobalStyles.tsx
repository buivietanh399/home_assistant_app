import { StyleSheet, Platform } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import colors from '../constants/colors';

export const styles = StyleSheet.create({
    customSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 45 : 0,
        marginHorizontal: 16,
        flexDirection: 'column'
    },
    container: {
        marginHorizontal: 16,
        flexDirection: "row",
        backgroundColor: colors.white,
    },
    goback: {
        flexDirection: "row",
        alignItems: "center",
        width: 150,
        marginBottom: 8
        // backgroundColor: colors.gray_bg,F
    },
    gobackText: {
        fontSize: 16,
        fontWeight: '500'
    },
    h1: {
        fontSize: 20,
        fontWeight: "600",
        marginBottom: 8
        // alignSelf: "center",
        // marginTop: 40
    }
}); 