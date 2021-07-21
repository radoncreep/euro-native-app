import * as React from 'react';
import { ImageBackground, Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useRecoilValue } from 'recoil';

import field from '../assets/images/field.jpg';
import { myPlayersByPosiition } from '../atoms/MyTeam';

// this is a grid 
// each group is a row 
// each player is a column in a row

type FieldPlayerProps = {
    player: null | object,
    position: string,
    index: number
}

const players: { [key: string]: null[] } = {
  FWD: [null, null, null],
  MID: [null, null, null],
  DEF: [null, null, null, null],
  GK: [null],
}

export const Field = () => {
  const teamPlayers = useRecoilValue(myPlayersByPosiition);

  const fieldPlayer = (player, position, index) => {
    console.log('player ', player)
      return (
          <View key={index} style={{ alignItems: 'center' }}>
              <FontAwesome5 name="tshirt" size={35} color={player ? '#d178db' : '#5c5c5cbb'} />
              <Text 
                  style={{ 
                  backgroundColor: '#333333bb',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: 12,
                  paddingVertical: 2,
                  paddingHorizontal: 9
                  }}
              >
                  {player ? player!.name : position}
              </Text>
          </View>
      )
  }
  return (
    <ImageBackground 
      source={field}
      resizeMode="contain"
      style={{ width: '100%', aspectRatio: 2/3, justifyContent: 'space-around', alignItems: 'center' }}
    >
      {/* returns an array of the keys in the player object [FWD, MID, DEF, GK] */}
      {Object.keys(teamPlayers).map((position) => (
        <View 
          key={position} 
          style={{ 
            flexDirection: 'row', 
            justifyContent: 'space-around', 
            width: '100%'
          }}
        >
          {/* teamPlayers[position] is an array for each position */}
          {teamPlayers[position].map((player, index) => fieldPlayer(player, position, index))}
        </View>
      ))}
    </ImageBackground>
  )
};

const styles =  StyleSheet.create({
    container: {
    
    }
})
