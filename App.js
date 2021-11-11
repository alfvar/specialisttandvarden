import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import screenHome from './screens/screenHome';
import screenCheckboxes from './screens/screenCheckboxes';
import screenTeeth from './screens/screenTeeth';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="screenHome">
        <Stack.Screen name="screenHome" component={screenHome} />
        <Stack.Screen name="screenCheckboxes" component={screenCheckboxes} />
        <Stack.Screen name="screenTeeth" component={screenTeeth} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}