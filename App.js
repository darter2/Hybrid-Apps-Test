import React from 'react';
import {Text, View} from "react-native";
import styles from "./stylesheet";
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.boxText}>I'm in a box!</Text>
      </View>
    </View>
  );
}