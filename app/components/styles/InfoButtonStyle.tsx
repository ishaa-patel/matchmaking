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
        paddingHorizontal: 8,
    },
    btnTxt: {
        letterSpacing: 1,
        paddingHorizontal: 5,
        fontWeight: '700',
        fontSize: 12,
        color: colors.black,
    },
});
