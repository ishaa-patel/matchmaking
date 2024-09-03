import React from 'react';
import { styles } from './styles/ProfileDetailComponentStyle';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Text, View } from 'react-native';
import InfoButton from './InfoButton';
import { colors } from '../theme';
import constants from '../constants/AppConstants';
const ProfileDetailComponent = () => {
    return (
        <View style={styles.container}>
            <View style={styles.bioContainer}>
                <Text style={styles.title}>{constants.BIO}</Text>
                <Text style={styles.userBio}>{constants.BIO_DETAIL}</Text>
            </View>
            <View style={styles.aboutMeContainer}>
                <Text style={styles.title}>{constants.ABOUT_ME}</Text>
                <View style={styles.subContainer}>
                    <InfoButton label={constants.WOMAN} icon={
                        <MaterialIcons name="woman" size={20} color={colors.neutral} />}
                        style={colors.gray}
                    />
                    <InfoButton label={constants.HINDU} icon={
                        <MaterialIcons name="temple-hindu" size={20} color={colors.neutral} />}
                        style={colors.gray}
                    />
                    <InfoButton label={constants.TAURUS} icon={
                        <MaterialIcons name="looks" size={20} color={colors.neutral} />}
                        style={colors.gray}
                    />
                    <InfoButton label={constants.NEVER} icon={
                        <MaterialIcons name="liquor" size={20} color={colors.neutral} />}
                        style={colors.gray}
                    />
                    <InfoButton label={constants.SOMETIMES} icon={
                        <MaterialIcons name="smoking-rooms" size={20} color={colors.neutral} />}
                        style={colors.gray}
                    />
                </View>
            </View>
        </View >
    );
};
export default ProfileDetailComponent;
