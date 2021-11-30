import React, { useState, Component } from 'react';
import 'react-native-gesture-handler';

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
//import screenSockerklocka from './screens/screenSockerklocka';

import { MyProvider } from './context/context.js'


export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <MyProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="screenHome">
          <Stack.Screen name="Hem" component={screenHome} />
          <Stack.Screen name="Karies" component={screenKariesFlow} />
          <Stack.Screen name="Tandköttsinflammation" component={screenInflamFlow} />
          <Stack.Screen name="Egenvård" component={screenEgenvard} />
          <Stack.Screen name="Sockerklocka" component={screenHome} />

        </Stack.Navigator>
      </NavigationContainer>
    </MyProvider>

  );
}