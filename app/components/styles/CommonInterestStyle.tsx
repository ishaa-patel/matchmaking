import { StyleSheet } from 'react-native';
import { windowWidth } from '../../utils/Dimensions';
import { colors } from '../../theme';
export const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        width: windowWidth - 15,
        borderRadius: 22,
        borderWidth: 0.2,
        borderColor: colors.opacity,
        paddingVertical: 15,
    },
    subContainer: {
        flexDirection: 'row',
        paddingVertical: 15,
        justifyContent: 'space-around',
        paddingBottom: 50,
    },
    interestTitle: {
        color: colors.black,
        fontWeight: '900',
        paddingHorizontal: 15,
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 1,
    },
}
);
