import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import React, { useRef } from 'react';
import { Platform, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import field from '../assets/images/field.jpg';
import { Field } from '../components/Field';
import { PlayerListItem } from '../components/PlayerListItem';
import { TeamStats } from '../components/TeamStats';
import { players } from '../assets/data/players';

export default function TabOneScreen() {
  const playersBottomSheet = useRef<BottomSheet>(null);

  const handleViewPlayers = () => {
    playersBottomSheet.current?.snapTo(1)

    // expands to the max point in snapPoints
    // playersBottomSheet.current?.expand()
  }
// an array of positions wherre we wanr our flatlist to snap
  const snapPoints = [0, '50%', '100%'];

  return (
    <SafeAreaView style={styles.container}>

      <TeamStats />

      <Field />

      <Pressable onPress={handleViewPlayers} style={styles.viewplayerbtn}>
        <Text style={styles.btnText}>View Players</Text>
      </Pressable>

      {/* used to display a view onPressing view playes btn */}
      <BottomSheet
        ref={playersBottomSheet}
        index={0}
        snapPoints={snapPoints}
        // onChange={handleSheetChanges}
      >
        <BottomSheetFlatList 
          data={players}
          renderItem={({ item }) => (
              <PlayerListItem player={item} />
            )
          }
        />
      </BottomSheet>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#72CC5E',
    alignItems: 'center',
    flex: 1,
    marginTop: Platform.OS === 'android' ? 30 : 0
  },
  contentContainer: {},
  viewplayerbtn: {
    backgroundColor: 'orange',
    marginVertical: 10,
    padding: 10,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginTop: 'auto'
  },
  btnText: {
    color: 'black',
    fontSize: 16,
    fontWeight: '500'
  }
});
