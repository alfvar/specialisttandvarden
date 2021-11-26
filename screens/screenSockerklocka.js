import React, { useState } from 'react';
import { TouchableOpacity, Animated } from 'react-native';
import MyContext from '../context/context.js'




const ButtonWithSpin = () => {

  const { sockerklockaImage } = React.useContext(MyContext);
  const { styles } = React.useContext(MyContext);
  const [rotateAnimation, setRotateAnimation] = useState(new Animated.Value(0));
  const [Animationposition, setAnimation] = useState(0);
  
  const handleAnimation = () => {
    Animated.timing(rotateAnimation, {
      toValue: 1,
      duration: 800,
    }).start(() => {
      rotateAnimation.setValue(1);
    });
  };

  const interpolateRotating1 = rotateAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '90deg'],
  });

  const interpolateRotating2 = rotateAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['90deg', '180deg'],
  });

  const animatedStyle = {
    Animationposition=0?  source={sockerklockaImage}.
    transform: [
      {
        rotate: interpolateRotating1,
      },
    ],
  };

  return (
    <TouchableOpacity
      onPress={async () => handleAnimation()}
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <Animated.Image source={sockerklockaImage} style={[animatedStyle, styles.image]}></Animated.Image>
    </TouchableOpacity >
  );
};

export default ButtonWithSpin;
