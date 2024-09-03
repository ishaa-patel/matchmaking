import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './styles/CustomButtonStyle';
const CustomButton = ({ label, onPress }: any) => {
    return (
        <TouchableOpacity style={styles.btn} onPress={onPress}>
            <Text style={styles.btnTxt}>
                {label}
            </Text>
        </TouchableOpacity>
    );
};
export default CustomButton;
