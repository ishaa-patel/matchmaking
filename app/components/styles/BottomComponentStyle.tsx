import { StyleSheet } from 'react-native';
import { colors } from '../../theme';
export const styles = StyleSheet.create({
    greetContainer: {
        position: 'absolute',
        top: 575,
        gap: 5,
    },
    greetText: {
        fontWeight: 'bold',
        fontSize: 24,
        lineHeight: 36,
        alignSelf: 'center',
        color: colors.white,
    },
    matchedText: {
        fontWeight: '500',
        fontSize: 15,
        lineHeight: 23,
        opacity: 0.8,
    },
    profileBtn: {
        top: 670,
    },
});
