import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import screenHome from './screens/screenHome';
import screenCheckboxes from './screens/screenCheckboxes';
import screenTeeth from './screens/screenTeeth';
import screenKariesFlow from './screens/screenKariesFlow';

import { MyProvider } from './context/context.js'

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <MyProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="screenHome">
          <Stack.Screen name="screenHome" component={screenHome} />
          <Stack.Screen name="screenCheckboxes" component={screenCheckboxes} />
          <Stack.Screen name="screenTeeth" component={screenTeeth} />
          <Stack.Screen name="screenKariesFlow" component={screenKariesFlow} />

        </Stack.Navigator>
      </NavigationContainer>
    </MyProvider>

  );
}