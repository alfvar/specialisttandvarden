import React, { useState } from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';

import MyContext from '../context/context.js'


export default function screenTeeth({ navigation }) {

  const { isEnabled, setIsEnabled } = React.useContext(MyContext);

  console.log(isEnabled)

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Hello from Teeth Screen</Text>
      <Image source={require('../assets/teeth2.png')} style={styles.image}
      />

    </View>
  );
};
