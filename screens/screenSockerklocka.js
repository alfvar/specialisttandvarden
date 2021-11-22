import React, { useState } from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';

import MyContext from '../context/context.js'

export default function screenTeeth({ navigation }) {
  const { styles } = React.useContext(MyContext);
  const { sockerklockaImage } = React.useContext(MyContext);

  return (
    <View style={styles.container}>
      <Text>Detta är en sockerklocka</Text>
      <Image source={sockerklockaImage} style={styles.image}
      />

    </View>
  );
};

