import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './styles/InfoButtonStyle';
const InfoButton = ({ label, icon, style, bgColor, txtColor }: any) => {
    return (
        <TouchableOpacity style={[styles.btn, { borderColor: style, backgroundColor: bgColor }]} >
            {icon}
            <Text style={[styles.btnTxt, { color: txtColor }]}>
                {label}
            </Text>
        </TouchableOpacity>
    );
};
export default InfoButton;
