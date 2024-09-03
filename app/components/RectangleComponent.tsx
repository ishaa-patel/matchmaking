import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
const RectangleComponent = ({ color }: any) => {
    return (
        <View style={[styles.container, { backgroundColor: color }]}>
            <Text>-</Text>
        </View >
    );
};
export default RectangleComponent;

const styles = StyleSheet.create({
    container: {
        width: 50,
        height: 4,
        borderRadius: 10,
    },
});
