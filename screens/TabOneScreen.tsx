import * as React from 'react';
import { Dimensions, ImageBackground, StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';

import field from '../assets/images/field.jpg';

let { height } = Dimensions.get("window");

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground 
        source={field}
        style={{ width: '100%', height }}
      ></ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
