import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomLebel from './src/components/CustomLebel';
import Signin from './src/components/Sign_In';
import Signup from './src/components/Sign_Up';
import FirstPage from './src/components/FirstPage';
import SecondPage from './src/components/SecondPage';
import Home from './src/components/Screens/Home1';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home1 from './src/components/Screens/Home1';
import Prediction1 from './src/components/Screens/Prediction1';
import Market1 from './src/components/Screens/Market1';
import Profile1 from './src/components/Screens/profile1';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

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
export default function App() {
  return (
    <NavigationContainer>
    <MyTabs />
  </NavigationContainer>
  );
}

