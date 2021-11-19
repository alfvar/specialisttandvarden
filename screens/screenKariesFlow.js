import React, { useState } from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';

import MyContext from '../context/context.js'

export default function screenTeeth({ navigation }) {

  let image = require('../assets/kariesFlow1.png')
  let kariesValue = 2

  if (kariesValue == 1) {
    image = require('../assets/kariesFlow1.png')
    console.log("kariesFlow1")

  } else if (kariesValue = 2) {

    image = require('../assets/kariesFlow2.png')
    console.log("kariesFlow2")

  } else {
    image = "yolo"
  }



  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Hello from Teeth Screen</Text>
      <Image source={image} style={styles.teethImage}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  teethImage: {
    width: 50,
  },
});