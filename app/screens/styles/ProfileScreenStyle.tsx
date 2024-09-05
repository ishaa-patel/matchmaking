import { StyleSheet } from 'react-native';
import { colors } from '../../theme';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    subContainer: {
        paddingVertical: 10,
        alignItems: 'center',
    },
    btnAlign: {
        alignSelf: 'center',
        position: 'absolute',
        top: '92%',
    },
}
);
