import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { styles } from './styles/ProfileScreenStyle';
import { ProfileInterestComponent, CustomButton, ProfileComponent, ProfileBioComponent } from '../components';
import constants from '../constants/AppConstants';
const ProfileScreen = ({ navigation }: any) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.subContainer} >
                <ProfileComponent />
                <ProfileBioComponent />
                <ProfileInterestComponent />
            </ScrollView>
            <View style={styles.btnAlign}>
                <CustomButton label={constants.SEND_MESSAGE} onPress={() => { navigation.navigate(constants.NAV_MATCHSUCCESS); }} />
            </View>
        </SafeAreaView>
    );
};
export default ProfileScreen;
