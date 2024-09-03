import React from 'react';
import { styles } from './styles/CommonInterestStyle';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Text, View } from 'react-native';
import InfoButton from './InfoButton';
import { colors } from '../theme';
import constants from '../constants/AppConstants';
const CommonInterestComponent = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.interestTitle}>{constants.COMMON_INTEREST}</Text>
            <View style={styles.subContainer}>
                <InfoButton label={constants.MUSIC} icon={
                    <MaterialIcons name="headphones" size={20} color={colors.neutral} />}
                    style={colors.borderColor} />
                <InfoButton label={constants.BOOKS} icon={
                    <MaterialIcons name="library-books" size={20} color={colors.neutral} />}
                    style={colors.borderColor} />
                <InfoButton label={constants.GYM} icon={
                    <MaterialIcons name="fitness-center" size={20} color={colors.neutral} />}
                    style={colors.borderColor} />
            </View>
        </View>
    );
};
export default CommonInterestComponent;
