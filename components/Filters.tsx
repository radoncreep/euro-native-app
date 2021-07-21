import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useRecoilState, useSetRecoilState } from 'recoil';

import { positionFilterState } from '../atoms/Players';

const staticArrayPositions = ['FWD', 'MID', 'DEF', 'GCK'];

export const Filters= () => {
    const [ positionFilter, setPositionFilter ] = useRecoilState(positionFilterState);

    // instead of doing its open its closed
    const handleFilterPress = (position: string) => {
        setPositionFilter((currentPositionFilter) => {
            if (currentPositionFilter.includes(position)) {
                return currentPositionFilter.filter((pos) => pos !== position) // to avoid duplicates in the state
            } else {
               return [...currentPositionFilter, position];
            }
        });
    };

    const isSelected = position => positionFilter.includes(position);

    return (
        <View style={styles.container}>
            {staticArrayPositions.map((elem) => (
                <Pressable 
                    style={[styles.filterTextContainer, { 
                        backgroundColor: isSelected(elem) ? 'purple' : '#ddd'
                    }]} 
                    onPress={() => handleFilterPress(elem)}
                    key={elem}
                >
                    <Text style={styles.text}>{elem}</Text>
                </Pressable>
            ))}
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      width: "100%",
      justifyContent: 'space-between',
      paddingVertical: 5,
      paddingHorizontal: 15
    },
    text: {

    },
    filterTextContainer: {
        backgroundColor: "#ddd",
        width: 45,
        height: 45,
        borderRadius: 22.5,
        alignItems: "center",
        justifyContent: "center"
    }
})