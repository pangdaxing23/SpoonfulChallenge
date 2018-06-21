import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator,
} from "react-navigation";
import HomeScreen from "./src/screens/HomeScreen";
import FavoritesScreen from "./src/screens/FavoritesScreen";
import ExploreScreen from "./src/screens/ExploreScreen";

import Ionicons from "react-native-vector-icons/Ionicons";

type Props = {};
export default class App extends Component<Props> {
  render() {
    return <TabNavigation />;
  }
}

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    initialRouteName: "Home",
  },
);

const TabNavigation = createBottomTabNavigator(
  {
    Home: HomeStack,
    Favorites: FavoritesScreen,
    Explore: ExploreScreen,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case "Home":
            iconName = `ios-home${focused ? "" : "-outline"}`;
            break;
          case "Favorites":
            iconName = `ios-heart${focused ? "" : "-outline"}`;
            break;
          case "Explore":
            iconName = `ios-search${focused ? "" : "-outline"}`;
        }

        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: "#6C2DFC",
      inactiveTintColor: "#6C2DFC",
    },
  },
);
const styles = StyleSheet.create({});
