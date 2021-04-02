import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../screens/HomeScreen.js';
import LisitingScreen from '../screens/ListingScreen.js';
import ProfileScreen from '../screens/ProfileScreen.js'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as React from 'react';
const Tab = createMaterialBottomTabNavigator();
function TabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
      name="Home"
      component={HomeScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }}
      />
      <Tab.Screen 
      name="Listing"
      component={LisitingScreen}
      options={{
        tabBarLabel: 'Listing',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="book" color={color} size={26} />
        ),
      }}
      />
      <Tab.Screen
       name="Profile" 
       component={ProfileScreen} 
       options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={26} />
        ),
      }}
       /> 
    </Tab.Navigator>
  );
}

export default TabNavigation