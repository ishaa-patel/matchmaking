import { StyleSheet } from 'react-native';
import { windowWidth } from '../../utils/Dimensions';
import { colors } from '../../theme';

export const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: windowWidth - 15,
        borderRadius: 22,
    },
    indicatorContainer: {
        flexDirection: 'row',
        position: 'absolute',
        top: 15,
        zIndex: 1,
    },
    indicator: {
        width: 50,
        height: 4,
        borderRadius: 10,
        marginHorizontal: 3,
    },
    bioContainer: {
        alignSelf: 'flex-start',
        position: 'absolute',
        bottom: 10,
        zIndex: 1,
        marginHorizontal: 10,
    },
    userName: {
        color: colors.white,
        fontWeight: '800',
        fontSize: 28,
        paddingHorizontal: 10,
    },
    bio: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
});
