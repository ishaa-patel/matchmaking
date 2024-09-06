import React from 'react';
import { styles } from './styles/ProfileBioComponentStyle';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Text, View } from 'react-native';
import InfoButton from './ProfileInfoButton';
import { colors } from '../theme';
import constants from '../constants/AppConstants';
import { profile } from '../slides/imgSlides';
const ProfileBioComponent = () => {
    return (
        <View style={styles.container}>
            <View style={styles.bioContainer}>
                <Text style={styles.title}>{constants.BIO}</Text>
                <Text style={styles.userBio}>{constants.BIO_DETAIL}</Text>
            </View>
            <Text style={[styles.title, {
                paddingHorizontal: 15,
                paddingBottom: 5,
            }]}>{constants.ABOUT_ME}</Text>
            <View style={styles.aboutMeContainer}>
                {profile[0].aboutMe.map((_, i) => (
                    <InfoButton label={profile[0].aboutMe[i]} icon={
                        <MaterialIcons name="add-reaction" size={20} color={colors.neutral} />}
                        style={colors.gray} txtColor={colors.black}
                    />
                ))}
            </View>
        </View >
    );
};
export default ProfileBioComponent;
