import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyContext from '../context/context.js'

export default function screenHome({ navigation }) {
  const { styles } = React.useContext(MyContext);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('screenKariesFlow');
        }}>
        <Text style={styles.header}>Karies-flow</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('screenInflamFlow');
        }}>
        <Text style={styles.header}>Inflammations-flow</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('screenEgenvard');
        }}>
        <Text style={styles.header}>Egenvård</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('screenSockerklocka');
        }}>
        <Text style={styles.header}>Sockerklocka</Text>
      </TouchableOpacity>

    </View>

  );
};
