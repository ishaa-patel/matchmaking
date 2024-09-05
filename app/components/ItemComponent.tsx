import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { windowWidth } from '../utils/Dimensions';

const ItemComponent = ({ data }: any) => {
    return (
        <View>
            <Image source={{ uri: data }} style={styles.img} />
        </View>
    );
};
export default ItemComponent;

const styles = StyleSheet.create({
    img: {
        width: windowWidth - 20,
        height: windowWidth - 15,
        marginHorizontal: 2,
        borderRadius: 22,
    },
});
