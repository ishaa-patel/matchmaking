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
        paddingBottom: 40,
    },
    subContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 10,
        paddingHorizontal: 8,
    },
    interestTitle: {
        color: colors.black,
        fontWeight: '900',
        paddingHorizontal: 16,
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 1,
    },
}
);
