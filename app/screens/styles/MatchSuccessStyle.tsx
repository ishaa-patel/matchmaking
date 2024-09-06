import { StyleSheet } from 'react-native';
import { colors } from '../../theme';
import { windowHeight, windowWidth } from '../../utils/Dimensions';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bgImg: {
        height: windowHeight,
        width: windowWidth,
    },
    componentContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: windowHeight,
        width: windowWidth,
        backgroundColor: colors.bgOpacity,
    },
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
}
);
