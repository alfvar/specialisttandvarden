import React, { useState } from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import Slider from '@react-native-community/slider';

import MyContext from '../context/context.js'

export default function screenTeeth({ navigation }) {
  const { styles } = React.useContext(MyContext);
  const { inflamValue, setinflamValue } = React.useContext(MyContext);

  let image = require('../assets/inflam1.png')

  if (inflamValue <= 5) {
    image = require('../assets/inflam1.png')

  } else if (inflamValue <= 10) {

    image = require('../assets/inflam2.png')

  } else if (inflamValue <= 15) {

    image = require('../assets/inflam3.png')

  } else if (inflamValue <= 20) {

    image = require('../assets/inflam4.png')

  }

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Image source={image} style={styles.image} />
      </View>

      <View style={styles.slider}>
        <Slider
          maximumValue={20}
          minimumValue={0}
          minimumTrackTintColor="#307ecc"
          maximumTrackTintColor="#000000"
          step={1}
          value={inflamValue}
          onValueChange={(inflamValue) => setinflamValue(inflamValue)}
        />
      </View>

    </View>
  );
};

