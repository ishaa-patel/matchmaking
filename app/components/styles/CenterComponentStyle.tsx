import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    pin: {
        position: 'absolute',
        height: 40,
        width: 40,
        top: 60,
        left: 180,
        zIndex: 2,
    },
    femaleImg: {
        width: 190,
        height: 200,
        position: 'absolute',
        top: 65,
        left: 15,
        zIndex: 1,
    },
    matchedString: {
        position: 'absolute',
        top: 165,
        left: 50,
    },
    maleImg: {
        width: 190,
        height: 200,
        position: 'absolute',
        top: 335,
        left: 155,
        zIndex: 1,
    },
    roundStar: {
        width: 50,
        height: 50,
        position: 'absolute',
        top: 300,
        left: 275,
    },
    arrowStar: {
        width: 55,
        height: 55,
        position: 'absolute',
        top: 410,
        left: 40,
    },
    miniArrowStar: {
        width: 20,
        height: 20,
        position: 'absolute',
        top: 435,
        left: 90,
    },
}
);
