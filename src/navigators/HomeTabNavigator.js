import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../screens/Home/Home';
import Chat from '../screens/Chat/Chat';
import Profile from '../screens/Profile/Profile';
import Images from '../utils/Images';
import Colors from '../utils/Colors';

const Tab = createBottomTabNavigator();

function HomeTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="homeScreen"
      tabBarOptions={{
        activeTintColor: 'rgba(255,255,255,0.5)',
        inactiveTintColor: Colors.themeColor2,
        inactiveBackgroundColor: Colors.themeColor1,
        activeBackgroundColor: Colors.themeColor1,
        style: {height: 70},
        labelStyle: {
          textAlign: 'center',
        },
        // tabStyle:{width: 20},
        showIcon: true,
        showLabel: true,
        safeAreaInsets: {
          bottom: 0,
        },
      }}>
      <Tab.Screen
        name="homeScreen"
        component={Home}
        options={{
          tabBarLabel: ({color, size}) => (
            <Text
              style={{
                height: 25,
                marginTop: -10,
                textAlign: 'center',
                fontSize: 12,
                color: color,
                fontFamily: Colors.font
              }}>
              Home
            </Text>
          ),
          tabBarIcon: ({color, size}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                style={{
                  width: 20,
                  height: 20,
                }}
                source={Images.home}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="chatScreen"
        component={Chat}
        options={{
          tabBarLabel: ({color, size}) => (
            <Text
              style={{
                height: 25,
                marginTop: -10,
                textAlign: 'center',
                fontSize: 12,
                color: color,
                fontFamily: Colors.font
              }}>
              Chat
            </Text>
          ),
          tabBarIcon: ({color, size}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                style={{
                  width: 20,
                  height: 20,
                }}
                source={Images.chat}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="profileScreen"
        component={Profile}
        options={{
          tabBarLabel: ({color, size}) => (
            <Text
              style={{
                height: 25,
                marginTop: -10,
                textAlign: 'center',
                fontSize: 12,
                color: color,
                fontFamily: Colors.font
              }}>
              Profile
            </Text>
          ),
          tabBarIcon: ({color, size}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                style={{
                  width: 20,
                  height: 20,
                }}
                source={Images.profile}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default HomeTabNavigator;
