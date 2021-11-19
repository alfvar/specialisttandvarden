import { StyleSheet, Image, Text, View } from 'react-native';
import React, { useState } from 'react';
import Slider from '@react-native-community/slider';


import MyContext from '../context/context.js'
export default function screenTeeth({ navigation }) {

  const { isEnabled, setIsEnabled } = React.useContext(MyContext);
  //const App = () => {
    const [sliderValue, setSliderValue] = useState(15);
    console.log(isEnabled)



    return (
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          {/*Text to show slider value*/}
          <Text style={{ color: 'black' }}>Value of slider is : {sliderValue}</Text>

          {/*Slider with max, min, step and initial value*/}
          <Slider
            maximumValue={100}
            minimumValue={0}
            minimumTrackTintColor="#307ecc"
            maximumTrackTintColor="#000000"
            step={1}
            value={sliderValue}
            onValueChange={(sliderValue) => setSliderValue(sliderValue)}
          />
        </View>
      </View>
    );
 // };

};

const styles = StyleSheet.create({
  teethImage: {
    width: 50
  },

});