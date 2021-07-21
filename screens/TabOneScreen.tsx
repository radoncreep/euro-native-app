import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import React, { Suspense, useRef } from 'react';
import { Platform, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import field from '../assets/images/field.jpg';
import { Field } from '../components/Field';
import { PlayerListItem } from '../components/PlayerListItem';
import { TeamStats } from '../components/TeamStats';
import { players } from '../assets/data/players';
import { Filters } from '../components/Filters';
import { PlayersList } from '../components/PlayersList';

export default function TabOneScreen() {
  const playersBottomSheet = useRef<BottomSheet>(null);
  const filterBottomSheet = useRef<BottomSheet>(null);

  // an array of positions wherre we wanr our flatlist to snap
  const snapPoints = [0, '50%', '100%'];

  const handleViewPlayers = () => {
    playersBottomSheet.current?.snapTo(1)
    // expands to the max point in snapPoints
    // playersBottomSheet.current?.expand()
  };

  const handleFilters = () => filterBottomSheet.current?.snapTo(1);

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
        <Pressable onPress={handleFilters} style={[styles.viewplayerbtn, { alignSelf: 'center' }]}>
          <Text style={styles.btnText}>Filters</Text>
        </Pressable>
        <Suspense fallback={() => <Text>Loading...</Text>}>
          <PlayersList />
        </Suspense>
      </BottomSheet>

      <BottomSheet
        ref={filterBottomSheet}
        index={0}
        snapPoints={snapPoints}
      >
        <Filters />
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
