import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

type Props = {};
export default class FavoritesScreen extends Component<Props> {
  static navigationOptions = {
    title: "FAVORITES",
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Hello World from Favorites!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontFamily: "Raleway-Regular",
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
});
