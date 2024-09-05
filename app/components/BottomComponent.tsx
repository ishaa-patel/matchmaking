import React from 'react';
import { styles } from './styles/BottomComponentStyle';
import { Text, View } from 'react-native';
import constants from '../constants/AppConstants';

const BottomComponent = () => {
    return (
        <View style={styles.greetContainer}>
            <Text style={styles.greetText}>{constants.CONGRATS}</Text>
            <Text style={styles.matchedText}>{constants.MATCHED_PROFILE}</Text>
        </View>
    );
};
export default BottomComponent;
