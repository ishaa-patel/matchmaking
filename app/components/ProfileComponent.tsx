import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { profile } from '../slides/imgSlides';
import ItemComponent from './ItemComponent';
import { styles } from './styles/ProfileComponentStyle';
import { colors } from '../theme';
import InfoButton from './InfoButton';

const ProfileComponent = () => {
    const [index, setIndex] = useState(Number);
    return (
        <View style={styles.container}>
            <View style={styles.indicatorContainer}>
                {profile[0].images.map((_, i) => (
                    <View
                        key={i}
                        style={[
                            styles.indicator,
                            { backgroundColor: i === index ? colors.white : colors.primary },
                        ]}
                    />
                ))}
            </View>
            <FlatList
                data={profile[0].images}
                renderItem={({ item }) => <ItemComponent data={item} />}
                horizontal
                showsHorizontalScrollIndicator={false}
                onScroll={(event) => {
                    const totalWidth = event.nativeEvent.layoutMeasurement.width;
                    const xPosition = event.nativeEvent.contentOffset.x;
                    const newIndex = Math.round(xPosition / totalWidth);
                    if (newIndex !== index) {
                        setIndex(newIndex);
                    }
                }} />
            <View style={styles.bioContainer}>
                <Text style={styles.userName}>{profile[0].userName}</Text>
                <View style={styles.bio}>
                    {profile[0].bio.map((_, i) => (
                        <InfoButton label={profile[0].bio[i]} txtColor={colors.white} style={colors.transparent} bgColor={colors.primary} />
                    ))}
                </View>
            </View>
        </View>
    );
};

export default ProfileComponent;
