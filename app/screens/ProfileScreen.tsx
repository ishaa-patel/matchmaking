import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { styles } from './styles/ProfileScreenStyle';
import { CommonInterestComponent, CustomButton, ProfileCarouselComponent, ProfileDetailComponent } from '../components';
import constants from '../constants/AppConstants';
const ProfileScreen = ({ navigation }: any) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.subContainer} >
                <ProfileCarouselComponent />
                <ProfileDetailComponent />
                <CommonInterestComponent />
            </ScrollView>
            <View style={styles.btnAlign}>
                <CustomButton label={'Send Message'} onPress={() => { navigation.navigate(constants.NAV_MATCHSUCCESS); }} />
            </View>
        </SafeAreaView>
    );
};
export default ProfileScreen;
