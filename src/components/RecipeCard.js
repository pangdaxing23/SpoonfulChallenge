import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Image } from "react-native";
import { defaultCard } from "../constants";
import HeartBadge from "./HeartBadge";

type Props = {
  recipeName: string,
  cookingTime: number,
  calories: number,
  imageSource: string,
};

const RecipeCard = ({
  recipeName,
  cookingTime,
  calories,
  imageSource,
}: Props) => {
  return (
    <View style={styles.container}>
      <Image
        style={{ width: 300, height: 170 }}
        source={{ uri: imageSource }}
      />
      <View style={styles.badge}>
        <HeartBadge />
      </View>

      <View style={styles.description}>
        <Text style={styles.recipeName}>{recipeName}</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.info}>{calories} cal</Text>
          <Text>{" | "}</Text>
          <Text style={styles.info}>{cookingTime} min</Text>
        </View>
      </View>
    </View>
  );
};

RecipeCard.defaultProps = defaultCard;

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 10,
  },
  description: {
    justifyContent: "center",
    paddingLeft: 10,
    height: 50,
    width: 300,
    backgroundColor: "white",
  },
  infoContainer: {
    flexDirection: "row",
  },
  info: {
    fontSize: 16,
    fontFamily: "Raleway-Regular",
  },
  recipeName: {
    fontSize: 16,
    fontFamily: "Raleway-Bold",
  },
  badge: {
    position: "absolute",
    right: 50,
    bottom: 33,
    zIndex: 10000,
  },
});
export default RecipeCard;
