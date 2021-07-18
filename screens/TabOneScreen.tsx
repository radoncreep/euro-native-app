import * as React from 'react';
import { Platform, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import field from '../assets/images/field.jpg';
import { Field } from '../components/Field';

// this is a grid 
// each group is a row 
// each player is a column in a row

// const players: { [key: string]: null[] } = {
//   FWD: [null, null, null],
//   MID: [null, null, null],
//   DEF: [null, null, null, null],
//   GK: [null],
// }

export default function TabOneScreen() {
  const handleViewPlayers = () => {

  }

  return (
    <SafeAreaView style={styles.container}>
      <Field />
      <Pressable onPress={handleViewPlayers} style={styles.viewplayerbtn}>
        <Text style={styles.btnText}>View Players</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: Platform.OS === 'android' ? 30 : 0
  },
  viewplayerbtn: {
    backgroundColor: 'orange',
    marginVertical: 20,
    padding: 10,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20
  },
  btnText: {
    color: 'black',
    fontSize: 16,
    fontWeight: '500'
  }
});
