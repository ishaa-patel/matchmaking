import { StyleSheet } from 'react-native';
import { windowWidth } from '../../utils/Dimensions';
import { colors } from '../../theme';
export const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: windowWidth - 15,
    },
    subContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    img: {
        width: windowWidth - 20,
        height: windowWidth - 15,
        justifyContent: 'flex-end',
        paddingBottom: 8,
    },
    name: {
        color: colors.white,
        paddingLeft: 10,
        fontSize: 28,
        fontWeight: '700',
        letterSpacing: 1,
    },
}
);
