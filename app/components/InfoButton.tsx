import { Text, View } from 'react-native';
import React from 'react';
import { styles } from './styles/InfoButtonStyle';
const InfoButton = ({ label, icon, style, bgColor }: any) => {
    return (
        <View style={[styles.btn, { borderColor: style, backgroundColor: bgColor }]} >
            {icon}
            <Text style={styles.btnTxt}>
                {label}
            </Text>
        </View>
    );
};
export default InfoButton;
