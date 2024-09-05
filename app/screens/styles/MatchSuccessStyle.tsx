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
    compContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: windowHeight,
        width: windowWidth,
        backgroundColor: colors.bgOpacity,
    },
    btnAlign: {
    },
}
);
