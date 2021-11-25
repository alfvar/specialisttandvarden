import React from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyContext from '../context/context.js'

export default function screenHome({ navigation }) {
  const { styles } = React.useContext(MyContext);
  const { defaultTeethImage } = React.useContext(MyContext);

  const { iconKariesFlow } = React.useContext(MyContext);
  const { iconInflamFlow } = React.useContext(MyContext);
  const { iconEgenvard } = React.useContext(MyContext);
  const { iconSockerklocka } = React.useContext(MyContext);

  return (
    <View style={styles.container}>

      <View style={{ flex: 1, flexDirection: "row" }}>
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => {
            navigation.navigate('Karies');
          }}>
          <Image style={styles.icon} source={iconKariesFlow} />
        </TouchableOpacity>

        <TouchableOpacity
          style={{ flex: 1 }}

          onPress={() => {
            navigation.navigate('Tandköttsinflammation');
          }}>
          <Image style={styles.icon} source={iconInflamFlow} />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <TouchableOpacity
          style={{ flex: 1 }}

          onPress={() => {
            navigation.navigate('Egenvård');
          }}>
          <Image style={styles.icon} source={iconEgenvard} />
        </TouchableOpacity>

        <TouchableOpacity
          style={{ flex: 1 }}

          onPress={() => {
            navigation.navigate('Sockerklocka');
          }}>
          <Image style={styles.icon} source={iconSockerklocka} />
        </TouchableOpacity>

      </View>

    </View>

  );
};
