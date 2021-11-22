import React, { useState, Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import screenHome from './screens/screenHome';
import screenKariesFlow from './screens/screenKariesFlow';
import screenInflamFlow from './screens/screenInflamFlow';
import screenEgenvard from './screens/screenEgenvard';
import screenSockerklocka from './screens/screenSockerklocka';
//import screenTeeth from './screens/screenTeeth';

import { MyProvider } from './context/context.js'


export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <MyProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="screenHome">
          <Stack.Screen name="screenHome" component={screenHome} />
          <Stack.Screen name="screenKariesFlow" component={screenKariesFlow} />
          <Stack.Screen name="screenInflamFlow" component={screenInflamFlow} />
          <Stack.Screen name="screenEgenvard" component={screenEgenvard} />
          <Stack.Screen name="screenSockerklocka" component={screenSockerklocka} />

        </Stack.Navigator>
      </NavigationContainer>
    </MyProvider>

  );
}