import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import DietSelection from "../components/DietSelection";
import SearchBar from "../components/SearchBar";

import { diets } from "../constants";

type Props = {};
export default class HomeScreen extends Component<Props> {
  static navigationOptions = {
    title: "HOME",
  };

  render() {
    return (
      <View style={styles.container}>
        <DietSelection diets={diets} />
        <SearchBar />
        <Text style={styles.welcome}>Hello World from Home!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
    backgroundColor: "#ECECEF",
  },
  welcome: {
    fontSize: 20,
    fontFamily: "Raleway-Regular",
    textAlign: "center",
    margin: 10,
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
});
