import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, {useContext} from 'react';
import CustomLebel from './src/components/CustomLebel';
import Signin from './src/components/Sign_In';
import Signup from './src/components/Sign_Up';
import FirstPage from './src/components/FirstPage';
import SecondPage from './src/components/SecondPage';

import Home from './src/components/Screens/Home1';

import OTP from './src/components/Ots';

import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home1 from './src/components/Screens/Home1';
import Prediction1 from './src/components/Screens/Prediction1';
import Market1 from './src/components/Screens/Market1';
import Profile1 from './src/components/Screens/Profile1';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {AuthContext} from './src/components/AuthContext';
import SplashScreen from './src/components/SplashScreen';
import {AuthProvider} from './src/components/AuthContext';
import Navigation from './src/components/navigation';




export default function App() {
  return (
    <AuthProvider>
      <StatusBar backgroundColor="#06bcee" />
      <Navigation />
    </AuthProvider>
  );
};



