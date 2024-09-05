import { StyleSheet } from 'react-native';
import { windowWidth } from '../../utils/Dimensions';
import { colors } from '../../theme';
export const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        width: windowWidth - 15,
        borderRadius: 20,
        borderWidth: 0.2,
        borderColor: colors.opacity,
        paddingVertical: 15,
        marginVertical: 10,
    },
    bioContainer: {
        paddingHorizontal: 15,
        marginBottom: 10,
    },
    aboutMeContainer: {
        paddingHorizontal: 8,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    title: {
        color: colors.black,
        fontWeight: '900',
        fontSize: 16,
        lineHeight: 30,
        letterSpacing: 1,
    },
    userBio: {
        color: colors.black,
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 24,
    },
}
);
