import React from 'react';

import { Image, StyleSheet, Text, View } from "react-native";

export const Filters= () => {
    return (
        <View style={styles.container}>
            <View style={styles.filterTextContainer}>
                <Text style={styles.text}>FWD</Text>
            </View>
            <View style={styles.filterTextContainer}>
                <Text style={styles.text}>MID</Text>
            </View>
            <View style={styles.filterTextContainer}>
                <Text style={styles.text}>DEF</Text>
            </View>
            <View style={styles.filterTextContainer}>
                <Text style={styles.text}>GK</Text>
            </View>
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