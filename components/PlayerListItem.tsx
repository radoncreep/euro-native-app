import React from 'react';

import { Image, StyleSheet, Text, View } from "react-native";
import { Player } from '../types';

interface Props {
    player: Player;
}

export const PlayerListItem = ({ player } : Props) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: `https://media.api-sports.io/football/players/${player.id}.png`}}/>

            <View style={{ flexGrow: 1 }}>
                <Text style={styles.name}>{player.name}</Text>
                <Text>GSD vs SDJ</Text>
            </View>

            <View style={[styles.colContainer, { alignItems: 'flex-end' }]}>
                <Text style={styles.name}>${(player.price / 1000000).toFixed(1)}m</Text>
                <Text>{player.position}</Text>
            </View>

            <Text style={styles.points}>{player.totalPoints}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        padding: 5,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ddd'
    },
    colContainer: {
        marginHorizontal: 10
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#ddd',
        marginRight: 10
    },
    name: {
        fontWeight: 'bold',
    },
    points: {
        fontWeight: 'bold',
        fontSize: 18
    }
})