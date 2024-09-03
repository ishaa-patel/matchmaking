import React, { useEffect } from 'react';
import { Image, SafeAreaView, StyleSheet } from 'react-native';
import images from '../assets/images';
import constants from '../constants/AppConstants';
const SplashScreen = ({ navigation }: any) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate(constants.NAV_MATCHSUCCESS);
        }, 2000);
    });
    return (
        <SafeAreaView style={styles.container}>
            <Image source={images.splashImg} style={styles.img} />
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    img: {
        width: '100%',
        height: '100%',
    },
});
export default SplashScreen;
