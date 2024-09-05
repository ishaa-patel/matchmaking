import { StyleSheet } from 'react-native';
import { colors } from '../../theme';
export const styles = StyleSheet.create({
    greetContainer: {
        marginVertical: 30,
        gap: 6,
    },
    greetText: {
        fontWeight: 'bold',
        fontSize: 24,
        lineHeight: 36,
        alignSelf: 'center',
        color: colors.white,
    },
    matchedText: {
        color: colors.primary,
        fontWeight: '500',
        fontSize: 15,
        lineHeight: 23,
        opacity: 0.8,
    },
});
