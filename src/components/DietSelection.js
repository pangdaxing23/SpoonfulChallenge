import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { ButtonGroup } from "react-native-elements";
import { primaryColor } from "../constants";

type Props = {
  diets: Array<boolean>,
};

export default class DietSelection extends Component<Props> {
  onSelectIndex = index => {
    this.props.onPress(this.props.diets[index]);
  };

  render() {
    const { diets, onPress, selectedDiet } = this.props;
    const selectedIndex = diets.indexOf(selectedDiet);

    return (
      <View style={styles.container}>
        <ButtonGroup
          onPress={this.onSelectIndex}
          selectedIndex={selectedIndex}
          buttons={diets}
          buttonStyle={styles.buttons}
          selectedButtonStyle={styles.selectedButton}
          textStyle={styles.text}
          selectedTextStyle={styles.selectedText}
          containerStyle={styles.diets}
          innerBorderStyle={{ width: 3, color: "#6C2DFC" }}
        />
      </View>
    );
  }
}

DietSelection.defaultProps = {
  selectedDiet: "Vegan",
};

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
  },
  diets: {
    borderRadius: 0,
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    alignItems: "stretch",
    height: 50,
    borderColor: primaryColor,
    borderWidth: 5,
  },
  buttons: {
    backgroundColor: "#FFFFFF",
    borderColor: "#151515",
    borderWidth: 1,
  },
  selectedButton: {
    backgroundColor: primaryColor,
    borderColor: "#FFFFFF",
    borderWidth: 1,
  },
  selectedText: {
    color: "#FFFFFF",
  },
  text: {
    fontSize: 15,
    fontFamily: "Raleway-Regular",
    fontWeight: "bold",
    color: "#151515",
  },
});
