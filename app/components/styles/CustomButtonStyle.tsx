import { StyleSheet } from 'react-native';
import { colors } from '../../theme';
export const styles = StyleSheet.create({
    btn: {
        width: 280,
        height: 50,
        backgroundColor: colors.btnColor,
        padding: 12,
        borderRadius: 8,
    },
    btnTxt: {
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 16,
        color: colors.white,
        lineHeight: 24,
    },
});
