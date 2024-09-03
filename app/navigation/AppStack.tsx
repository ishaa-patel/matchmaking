// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProfileScreen, MatchSuccessScreen, SplashScreen } from '../screens';
import constants from '../constants/AppConstants';

const Stack = createNativeStackNavigator();

const AppStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name={constants.NAV_SPLASH} component={SplashScreen} />
                <Stack.Screen name={constants.NAV_MATCHSUCCESS} component={MatchSuccessScreen} />
                <Stack.Screen name={constants.NAV_PROFILE} component={ProfileScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppStack;
