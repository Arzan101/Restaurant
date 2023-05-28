/* eslint-disable prettier/prettier */
import React from "react";
import { StatusBar, StyleSheet, SafeAreaView, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

export const RestaurantsScreen = () =>(
    
    <><SafeAreaView style={styles.container}>
        <View style={styles.search}>
            <Searchbar />
        </View>
        <View style={styles.list}>
            <Text>list</Text>
        </View>
    </SafeAreaView><ExpoStatusBar style="auto" /></>
 
);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight,
    },
    search: {
      padding: 16,
      backgroundColor: "white",
    },
    list: {
      flex: 1,
      padding: 16,
      backgroundColor: "blue",
    },
  });
  