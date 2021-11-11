import { StyleSheet, Image, Text, View } from 'react-native';
import React from 'react';

export default function screenTeeth({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Hello from Teeth Screen</Text>
      <Image source={require('../assets/teeth2.png')} style={styles.teethImage}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  teethImage: {
    width: 50,
    scale: 100,
  },
});