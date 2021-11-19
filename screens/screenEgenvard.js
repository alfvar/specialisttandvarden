import React, { useState } from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';

import MyContext from '../context/context.js'

export default function screenTeeth({ navigation }) {
  const { styles } = React.useContext(MyContext);


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Hello from Teeth Screen</Text>
      <Image source={require('../assets/teeth2.png')} style={styles.image}
      />

    </View>
  );
};
