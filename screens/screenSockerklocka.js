import React, { useState } from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';

import { Slider } from '@miblanchard/react-native-slider';
import MyContext from '../context/context.js'

export default function screenTeeth({ navigation }) {
  const { styles } = React.useContext(MyContext);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Detta är en sockerklocka</Text>
      <Image source={require('../assets/sockerklocka.png')} style={styles.image}
      />

    </View>
  );
};

