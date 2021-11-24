import React, { useState } from 'react';
import { TouchableOpacity, Animated } from 'react-native';

const ButtonWithSpin = () => {
  const [rotateAnimation, setRotateAnimation] = useState(new Animated.Value(0));

  const handleAnimation = () => {
    Animated.timing(rotateAnimation, {
      toValue: 1,
      duration: 800,
    }).start(() => {
      rotateAnimation.setValue(3);
    });
  };

  const interpolateRotating = rotateAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '20deg'],
  });

  const animatedStyle = {
    transform: [
      {
        rotate: interpolateRotating,
      },
    ],
  };

  return (
    <TouchableOpacity
      onPress={async () => handleAnimation()}
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center'  }}
    >
      
      <Animated.Text style={animatedStyle}>Click me</Animated.Text>
    </TouchableOpacity>
  );
};

export default ButtonWithSpin;