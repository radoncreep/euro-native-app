import * as React from 'react';
import { ImageBackground, Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import field from '../assets/images/field.jpg';

// this is a grid 
// each group is a row 
// each player is a column in a row

type FieldPlayerProps = {
    player: null,
    position: string
}

const players: { [key: string]: null[] } = {
  FWD: [null, null, null],
  MID: [null, null, null],
  DEF: [null, null, null, null],
  GK: [null],
}

export const Field = () => {

    const fieldPlayer = (player: null, position: string, index: number) => {
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
                    {position}
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
        {/* [FWD, MID, DEF, GK] */}
        {Object.keys(players).map((position) => (
          <View 
            key={position} 
            style={{ 
              flexDirection: 'row', 
              justifyContent: 'space-around', 
              width: '100%'
            }}
          >
            {players[position].map((player, index) => fieldPlayer(player, position, index))}
          </View>
        ))}
      </ImageBackground>
    )
};

const styles =  StyleSheet.create({
    container: {
    
    }
})
