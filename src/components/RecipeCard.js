import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Image } from "react-native";
import { defaultCard, text2Color } from "../constants";
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
  onError,
}: Props) => {
  return (
    <View style={styles.row}>
      <View style={styles.cardContainer}>
        <Image
          style={styles.image}
          source={{ uri: imageSource }}
          onError={onError}
        />
        <View style={styles.badge}>
          <HeartBadge />
        </View>

        <View style={styles.description}>
          <Text style={styles.recipeName} numberOfLines={1}>
            {recipeName}
          </Text>
          <View style={styles.infoContainer}>
            <Text style={styles.info}>{calories.toFixed(0)} cal</Text>
            <Text>{" | "}</Text>
            <Text style={styles.info}>{cookingTime} min</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

RecipeCard.defaultProps = defaultCard;

const styles = StyleSheet.create({
  row: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "stretch",
  },
  cardContainer: {
    borderRadius: 5,
    borderColor: "white",
    borderWidth: 1,
    overflow: "hidden",
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 8,
    marginRight: 8,
  },
  image: {
    height: 200,
  },
  description: {
    justifyContent: "center",
    paddingLeft: 10,
    paddingRight: 95, // to truncate overflowing text
    height: 50,
    backgroundColor: "white",
  },
  infoContainer: {
    flexDirection: "row",
  },
  info: {
    fontSize: 16,
    color: text2Color,
    fontFamily: "Raleway-Regular",
  },
  recipeName: {
    fontSize: 16,
    color: text2Color,
    fontFamily: "Raleway-Bold",
  },
  badge: {
    position: "absolute",
    right: 50,
    bottom: 24, // at size 18 the box is 54 x 54, description box is 50 tall
    zIndex: 10000,
  },
});
export default RecipeCard;
