import React, { useRef, useState } from 'react';
import { Dimensions, PanResponder, View, Text, StyleSheet } from 'react-native';
import Svg, {
  Polyline,
  Use,
  Image,
  Defs,
  Mask,
} from 'react-native-svg';

import MyContext from '../context/context.js'

const examplePath = [
  { x: 90, y: 300 },

];

const GesturePath = ({ path, color }) => {
  const { styles } = React.useContext(MyContext);
  const { defaultTeethImage } = React.useContext(MyContext);
  const { width, height } = Dimensions.get('window');
  const points = path.map(p => `${p.x},${p.y}`).join(' ');
  return (
    <View style={styles.container}>
      <Svg height="100%" width="100%" style={{ flex: 1 }}>
        <Defs>
          <Mask
            id="Mask"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="100%"
            height="100%"
          >
            <Polyline
              id="Polyline"
              points={points}
              fill="none"
              stroke={color}
              strokeWidth="100"
            />
          </Mask>
          <Image
            id="img1"
            x="0"
            y="0"
            originX="0"
            width='100%'
            height='100%'
            preserveAspectRatio="xMidYMid meet"
            href={defaultTeethImage}
          />

        </Defs>
        <Image
          id="img2"
          x="0"
          y="0"
          width='100%'
          height='100%'
          preserveAspectRatio="xMidYMid meet"
          href={require('../assets/egenvard-dirty.png')}
        />
        <Use href="#img1" mask="url(#Mask)" />
      </Svg>
    </View>
  );
};

const GestureRecorder = ({ onPathChanged }) => {
  const pathRef = useRef([]);

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => { pathRef.current = [] },
      onPanResponderMove: (event) => {
        pathRef.current.push({
          x: event.nativeEvent.locationX,
          y: event.nativeEvent.locationY,
        })
        // Uncomment the next line to draw the path as the user is performing the touch. (A new array must be created so setState recognises the change and re-renders the App)
        onPathChanged([...pathRef.current]);
      },
      onPanResponderRelease: () => { onPathChanged([...pathRef.current]) }
    })
  ).current;

  return (
    <View
      style={StyleSheet.absoluteFill}
      {...panResponder.panHandlers}
    />
  );
}

const App = () => {
  const [path, setPath] = useState(examplePath);
  return (
    <View style={StyleSheet.absoluteFill}>
      <GesturePath path={path} color="white" />
      <GestureRecorder onPathChanged={setPath} />
    </View>

  );
}

export default App