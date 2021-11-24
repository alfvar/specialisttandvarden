import React, { useState } from 'react';
import { TouchableOpacity, Animated } from 'react-native';
import MyContext from '../context/context.js'




const ButtonWithSpin = () => {

  const { sockerklockaImage } = React.useContext(MyContext);
  const { styles } = React.useContext(MyContext);
  const [rotateAnimation, setRotateAnimation] = useState(new Animated.Value(0));

  const handleAnimation = () => {
    Animated.timing(rotateAnimation, {
      toValue: "+1",
      duration: 800,
    }).start(() => {
      rotateAnimation.setValue("+1");
    });
  };

  const interpolateRotating = rotateAnimation.interpolate({
    inputRange: [0, 1, 2, 3],
    outputRange: ['0deg', '20deg', '40deg', '60deg'],
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
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <Animated.Image source={sockerklockaImage} style={[animatedStyle, styles.image]}></Animated.Image>
    </TouchableOpacity >
  );
};

export default ButtonWithSpin;