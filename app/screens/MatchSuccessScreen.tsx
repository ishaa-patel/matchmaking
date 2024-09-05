import React from 'react';
import { ImageBackground, SafeAreaView, View } from 'react-native';
import { styles } from './styles/MatchSuccessStyle';
import images from '../assets/images';
import { BottomComponent, CenterComponent, CustomButton } from '../components';
import constants from '../constants/AppConstants';
const MatchSuccessScreen = ({ navigation }: any) => {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground style={styles.bgImg} source={images.backgroundImg}>
                <View style={styles.compContainer}>
                    <CenterComponent />
                    <BottomComponent />
                    <CustomButton label={constants.GO_TO_PROFILE} onPress={(() => navigation.navigate(constants.NAV_PROFILE))} />
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
};
export default MatchSuccessScreen;
