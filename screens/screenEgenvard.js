import React, { useRef, useState } from 'react';
import { Dimensions, PanResponder, View, StyleSheet } from 'react-native';
import Svg, {
  Circle,
  Ellipse,
  G,
  Text,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Image,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
} from 'react-native-svg';


const examplePath = [
  { x: 90, y: 300 },

];

const GesturePath = ({ path, color }) => {
  const { width, height } = Dimensions.get('window');
  const points = path.map(p => `${p.x},${p.y}`).join(' ');
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Svg height="100%" width="60%" >
        <Defs>
          <Mask
            id="Mask"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width={width}
            height={height}
          >
            <Polyline
              id="Polyline"
              points={points}
              fill="none"
              stroke={color}
              strokeWidth="50"
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
            href={require('../assets/teeth2.png')}
          />

        </Defs>
        <Image
          id="img2"
          x="0"
          y="0"
          width='100%'
          height='100%'
          preserveAspectRatio="xMidYMid meet"
          href={require('../assets/teethred.png')}
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