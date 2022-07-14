import React from 'react';
import { Text, View, Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Home from './Home';
import Search from './Search';
import List from './List';
import Notification from './Notification';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

const BottomTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => (
          <MaterialCommunityIcons name="home" color={tintColor} size={28} />
        ),
        tabBarOptions: {
          activeTintColor: '#4164e3',
          inactiveTintColor: 'gray',
        },
      },
    },
    Search: {
      screen: Search,
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => (
          <MaterialCommunityIcons name="magnify" color={tintColor} size={28} />
        ),
        tabBarOptions: {
          activeTintColor: '#4164e3',
          inactiveTintColor: 'gray',
        },
      },
    },
    List: {
      screen: List,
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => (
          <MaterialCommunityIcons name="format-list-bulleted" color={tintColor} size={26} />
        ),
        tabBarOptions: {
          activeTintColor: '#4164e3',
          inactiveTintColor: 'gray',
        },
      },
    },
    Notification: {
      screen: Notification,
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => (
          <MaterialCommunityIcons name="bell-ring" color={tintColor} size={26} />
        ),
        tabBarOptions: {
          activeTintColor: '#4164e3',
          inactiveTintColor: 'gray',
        },
      },
    },
  },
);
export default BottomTabNavigator;