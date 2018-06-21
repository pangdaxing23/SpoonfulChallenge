import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { createStackNavigator, createTabNavigator } from "react-navigation";
import HomeScreen from "./src/screens/HomeScreen";
import FavoritesScreen from "./src/screens/FavoritesScreen";
import ExploreScreen from "./src/screens/ExploreScreen";

type Props = {};
export default class App extends Component<Props> {
  render() {
    return <TabNavigation />;
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    initialRouteName: "Home",
  },
);

const TabNavigation = createTabNavigator({
  Home: HomeScreen,
  Favorites: FavoritesScreen,
  Explore: ExploreScreen,
});
const styles = StyleSheet.create({});
