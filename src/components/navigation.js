import React, {useContext} from 'react';
import Signin from './Sign_In';
import Signup from './Sign_Up';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import OTP from './Ots';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home1 from './Screens/Home1';
import Prediction1 from './Screens/Prediction1';
import Market1 from './Screens/Market1';
import Profile1 from './Screens/Profile1';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import {AuthContext} from './AuthContext';
import SplashScreen from './SplashScreen';

function HomeScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Home1></Home1>
      </View>
    );
  }
  
  function PredictionScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Prediction1></Prediction1>
      </View>
    );
  }
  function MarketScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Market1></Market1>
      </View>
    );
  }
  function ProfileScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Profile1></Profile1>
      </View>
    );
  }
  
  const Tab = createBottomTabNavigator();
  
  function MyTabs() {
    return (
      <Tab.Navigator  initialRouteName="FEED"
      
         
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
  
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Prediction') {
            iconName = focused ? 'head-lightbulb' : 'head-lightbulb-outline';
          }  else if (route.name === 'Planner') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          }else if (route.name === 'Profile') {
            iconName = focused ? 'account' : 'account-outline';
          }
  
          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
        tabBarLabelStyle: {
          fontSize: 14,
          marginBottom: 6,
          
        },
        tabBarActiveTintColor: '#007053',
        tabBarInactiveTintColor: '#000',
        
        tabBarStyle: {
          backgroundColor: '#BFDECB',
          height: 70,
          
         
          
        },
        headerStyle: {
          backgroundColor: '#BFDECB', // Customize the header background color
          height: 120, // Customize the header height
        },
        headerTintColor: '#000', // Customize the text color of the header
        headerTitleAlign: 'center',
        headerRight: () => (
          <MaterialCommunityIcons
            name="bell"
            size={23}
            color="#000"
            style={{ marginRight: 30 }}
          />
        ),
      
       
       
      })}>
        <Tab.Screen name="Home" component={HomeScreen} options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}/>
              
        <Tab.Screen name="Prediction" component={PredictionScreen} options={{
            
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="head-lightbulb" color={color} size={size} />
            ),
          }} />
        <Tab.Screen name="Market" component={MarketScreen}  options={{
           
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="cart" color={color} size={size} />
            ),
          }}/>
        <Tab.Screen name="Profile" component={ProfileScreen}  options={{
            
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account-circle" color={color} size={size} />
            ),
          }}/>
      </Tab.Navigator>
    );
  }
  

const Stack = createStackNavigator();
const Navigation = () => {

    const {userInfo, splashLoading} = useContext(AuthContext);

    return (
      
      <NavigationContainer>
         
         <Stack.Navigator screenOptions={{headerShown:false}}  >
         <Stack.Screen name="firstpage" component={FirstPage} />
          <Stack.Screen name="SecondPage" component={SecondPage} />
         {splashLoading ? (
            <Stack.Screen
              name="Splash Screen"
              component={SplashScreen}
              options={{headerShown: false}}
            />
          ) : userInfo.access_token ? (
            <Stack.Screen name="Home" component={HomeScreen} />
          ) : (
            <>
              <Stack.Screen
                name="signin"
                component={Signin}
                options={{headerShown: false}}
              />
              {/* <Stack.Screen
                name="Register"
                component={RegisterScreen}
                options={{headerShown: false}}
              /> */}
            </>
          )}
         
          {/* <Stack.Screen name="signin" component={Signin} /> */}
          <Stack.Screen name="signup" component={Signup} />
          <Stack.Screen name="otp" component={OTP} />
          {/* <Stack.Screen name="Home"   component={HomeScreen} /> */}
          <Stack.Screen name="Tab"   component={MyTabs} />
        </Stack.Navigator>
      
      </NavigationContainer>
  
   
    );
}

export default Navigation;