import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useRecoilValue } from 'recoil';
import { numOfPlayers, valueOfPlayers } from '../atoms/MyTeam';

export const TeamStats = () => {
    const noOfPlayers = useRecoilValue(numOfPlayers);
    const value = useRecoilValue(valueOfPlayers);

    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Text style={styles.label}>Players</Text>
                <Text style={styles.value}>{noOfPlayers} / 15</Text>
            </View>

            <View style={styles.innerContainer}>
                <Text style={styles.label}>Remaining</Text>
                <Text style={styles.value}>${((100000000 - value) / 1000000).toFixed(1) }m</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        width: '90%',
        padding: 10,
        marginVertical: 5,
        borderWidth: 2,
        borderColor: '#3Eabd1'
    },
    innerContainer: {
        marginRight: 20
    },
    label: {
        fontSize: 14,
        fontWeight: "500",
        color: '#333'
    },
    value: {
        fontSize: 18,
        fontWeight: "bold"
    }
})