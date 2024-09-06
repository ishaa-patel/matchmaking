import React from 'react';
import { ImageBackground, SafeAreaView, Text, View } from 'react-native';
import { styles } from './styles/MatchSuccessStyle';
import images from '../assets/images';
import { MatchSuccessComponent, CustomButton } from '../components';
import constants from '../constants/AppConstants';
const MatchSuccessScreen = ({ navigation }: any) => {
    return (
        <SafeAreaView style={styles.container} >
            <ImageBackground style={styles.bgImg} source={images.backgroundImg}>
                <View style={styles.componentContainer}>
                    <MatchSuccessComponent />
                    <View style={styles.greetContainer}>
                        <Text style={styles.greetText}>{constants.CONGRATS}</Text>
                        <Text style={styles.matchedText}>{constants.MATCHED_PROFILE}</Text>
                    </View>
                    <CustomButton label={constants.GO_TO_PROFILE} onPress={(() => navigation.navigate(constants.NAV_PROFILE))} />
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
};
export default MatchSuccessScreen;
