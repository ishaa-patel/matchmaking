import React from 'react';
import { styles } from './styles/ProfileCarouselCompStyle';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { ImageBackground, Text, View } from 'react-native';
import InfoButton from './InfoButton';
import { colors } from '../theme';
import images from '../assets/images';
import constants from '../constants/AppConstants';
import RectangleComponent from './RectangleComponent';
const ProfileCarouselComponent = () => {
    return (
        <View style={styles.container}>
            <ImageBackground source={images.carouselImg} style={styles.img}>
                <View style={styles.carouselSlides}>
                    <RectangleComponent color={colors.primary} />
                    <RectangleComponent color={colors.primary} />
                    <RectangleComponent color={colors.white} />
                    <RectangleComponent color={colors.primary} />
                </View>
                <View style={styles.profileInfo}>
                    <Text style={styles.name}>{constants.NAME}</Text>
                    <View style={styles.subContainer}>
                        <InfoButton label={constants.DISTANCE} icon={
                            <MaterialIcons name="location-on" size={20} color={colors.white} />}
                            style={colors.transparent} bgColor={colors.primary}
                        />
                        <InfoButton label={constants.LEVEL} icon={
                            <MaterialIcons name="bolt" size={20} color={colors.white} />}
                            style={colors.transparent} bgColor={colors.primary}
                        />
                        <InfoButton label={constants.STATUS}
                            style={colors.transparent} bgColor={colors.primary}
                        />
                    </View>
                </View>
            </ImageBackground>
        </View >
    );
};
export default ProfileCarouselComponent;
