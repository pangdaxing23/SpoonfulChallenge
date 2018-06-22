import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { SearchBar as ElementsSearchBar } from "react-native-elements";

const SearchBar = props => {
  return (
    <ElementsSearchBar
      containerStyle={styles.container}
      placeholder={text.placeholderText}
      lightTheme
      containerStyle={styles.container}
      inputStyle={styles.inputStyle}
    />
  );
};

export default SearchBar;

const text = {
  placeholderText: "Search recipes",
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
  },
  inputStyle: {
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    color: "#4D4D4D",
  },
});
