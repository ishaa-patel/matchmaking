import React from 'react';
import { styles } from './styles/BottomComponentStyle';
import { Text, View } from 'react-native';
import CustomButton from './CustomButton';
import constants from '../constants/AppConstants';
import { useNavigation } from '@react-navigation/native';

const BottomComponent = () => {
    const navigation = useNavigation();
    return (
        <>
            <View style={styles.greetContainer}>
                <Text style={styles.greetText}>{constants.CONGRATS}</Text>
                <Text style={styles.matchedText}>{constants.MATCHED_PROFILE}</Text>
            </View>
            <View style={styles.profileBtn}>
                <CustomButton label={'Go to profile'} onPress={() => { navigation.navigate(constants.NAV_PROFILE); }} />
            </View>
        </>
    );
};
export default BottomComponent;
