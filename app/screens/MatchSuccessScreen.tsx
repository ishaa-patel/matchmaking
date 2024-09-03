import React from 'react';
import { ImageBackground, SafeAreaView } from 'react-native';
import { styles } from './styles/MatchSuccessStyle';
import images from '../assets/images';
import { BottomComponent, CenterComponent } from '../components';
const MatchSuccessScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground style={styles.bgImg} source={images.backgroundImg}>
                <CenterComponent />
                <BottomComponent />
            </ImageBackground>
        </SafeAreaView>
    );
};
export default MatchSuccessScreen;
