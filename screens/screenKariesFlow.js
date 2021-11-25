import React, { useState } from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import Slider from '@react-native-community/slider';

import MyContext from '../context/context.js'

export default function screenTeeth({ navigation }) {
  const { styles } = React.useContext(MyContext);
  const { kariesValue, setkariesValue } = React.useContext(MyContext);

  let image = require('../assets/karies1.svg')

  if (kariesValue <= 5) {
    image = require('../assets/karies1.svg')

  } else if (kariesValue <= 10) {

    image = require('../assets/karies2.svg')

  } else if (kariesValue <= 15) {

    image = require('../assets/karies3.svg')

  } else if (kariesValue <= 20) {

    image = require('../assets/karies4.svg')

  }

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Image source={image} style={styles.singleToothImage} />
      </View>

      <View style={styles.slider}>
        <Slider
          maximumValue={20}
          minimumValue={0}
          minimumTrackTintColor="#307ecc"
          maximumTrackTintColor="#000000"
          step={1}
          value={kariesValue}
          onValueChange={(kariesValue) => setkariesValue(kariesValue)}
        />
      </View>

    </View>
  );
};

