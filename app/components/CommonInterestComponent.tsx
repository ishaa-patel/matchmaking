import React from 'react';
import { styles } from './styles/CommonInterestStyle';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Text, View } from 'react-native';
import InfoButton from './InfoButton';
import { colors } from '../theme';
import constants from '../constants/AppConstants';
import { profile } from '../slides/imgSlides';
const CommonInterestComponent = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.interestTitle}>{constants.COMMON_INTEREST}</Text>
            <View style={styles.subContainer}>
                {profile[0].interest.map((_, i) => (
                    <InfoButton label={profile[0].interest[i]} icon={
                        <MaterialIcons name="add-reaction" size={20} color={colors.neutral} />}
                        style={colors.borderColor} txtColor={colors.black} />
                ))}
            </View>
        </View>
    );
};
export default CommonInterestComponent;
