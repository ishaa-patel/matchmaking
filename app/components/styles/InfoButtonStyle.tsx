import { StyleSheet } from 'react-native';
import { colors } from '../../theme';
export const styles = StyleSheet.create({
    btn: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 40,
        backgroundColor: colors.transparent,
        borderRadius: 20,
        borderWidth: 1,
        paddingHorizontal: 7,
        marginHorizontal: 5,
        marginVertical: 3,
    },
    btnTxt: {
        letterSpacing: 1,
        paddingHorizontal: 4,
        fontWeight: '700',
        fontSize: 12,
    },
});
