import { Text, View, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React from 'react';

export default function screenHome({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('screenTeeth');
        }}>
        <Text>Tänder!</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('screenCheckboxes');
        }}>
        <Text>Checkbox-skärm</Text>
      </TouchableOpacity>
    </View>

  );
};