import React from 'react';
import { styles } from './styles/MatchSuccessComponentStyle';
import { Image, View } from 'react-native';
import images from '../assets/images';
const MatchSuccessComponent = () => {
    return (
        <View style={styles.container}>
            <Image source={images.heartPin} style={styles.pin} />
            <Image source={images.profileF} style={styles.femaleImg} />
            <Image source={images.matchString} style={styles.matchedString} />
            <Image source={images.round_star} style={styles.roundStar} />
            <Image source={images.profileM} style={styles.maleImg} />
            <Image source={images.miniArrowStar} style={styles.miniArrowStar} />
            <Image source={images.arrowStar} style={styles.arrowStar} />
        </View>
    );
};
export default MatchSuccessComponent;
