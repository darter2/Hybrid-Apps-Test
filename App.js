import React from 'react';
import {Text, View} from "react-native";
import styles from "./stylesheet";
export default function App() {
  return (
    <View style={stylesheet.container}>
      <View style={stylesheet.box}>
        <Text style={stylesheet.boxText}>I'm in a box!</Text>
      </View>
    </View>
  );
}