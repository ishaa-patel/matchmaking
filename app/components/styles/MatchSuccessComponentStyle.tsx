import { StyleSheet } from 'react-native';
import { windowHeight, windowWidth } from '../../utils/Dimensions';
export const styles = StyleSheet.create({
    container: {
        width: windowWidth - 15,
        height: windowHeight - 300,
    },
    pin: {
        position: 'absolute',
        height: 40,
        width: 40,
        top: 5,
        right: 120,
        zIndex: 2,
    },
    femaleImg: {
        width: 200,
        height: 200,
        top: 5,
        left: 5,
        zIndex: 1,
    },
    matchedString: {
        position: 'absolute',
        top: 110,
        left: 50,
    },
    maleImg: {
        width: 200,
        height: 200,
        position: 'absolute',
        bottom: 5,
        right: 5,
        zIndex: 1,
    },
    roundStar: {
        width: 50,
        height: 50,
        position: 'absolute',
        bottom: 170,
        right: 45,
    },
    arrowStar: {
        width: 55,
        height: 55,
        position: 'absolute',
        bottom: 50,
        left: 30,
    },
    miniArrowStar: {
        width: 20,
        height: 20,
        position: 'absolute',
        bottom: 65,
        left: 85,
    },
}
);
