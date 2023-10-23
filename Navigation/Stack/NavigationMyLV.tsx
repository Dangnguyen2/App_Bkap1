import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import LoginScreen from '../../Screens/Component/Login/LoginScreen';
import RegisterScreen from '../../Screens/Component/Login/RegisterScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CollectionScreen from '../../Screens/Component/Home/CollectionScreen';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator(); 
const NavigationMyLV = ()=>{
    return (
    <Stack.Navigator>
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Register' component={RegisterScreen} />
        <Stack.Screen name='Collection' component={CollectionScreen} />
    </Stack.Navigator>
    )
}

export default NavigationMyLV;

