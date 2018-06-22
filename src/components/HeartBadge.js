import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Image } from "react-native";
import { Icon, Button } from "react-native-elements";
import { primaryColor, defaultBadgeSize } from "../constants";

type Props = {
  size: number,
};

export default class HeartBadge extends Component<Props> {
  static defaultProps = {
    size: defaultBadgeSize,
  };

  state = {
    liked: false,
  };

  onPress = () => {
    this.setState({ liked: !this.state.liked });
  };

  render() {
    return (
      <View>
        <Icon
          color={primaryColor}
          type={"ionicon"}
          name={this.state.liked ? "ios-heart" : "ios-heart-outline"}
          size={this.props.size}
          reverse
          iconStyle={styles.iconStyle}
          underlayColor={"white"}
          onPress={this.onPress}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  iconStyle: {
    paddingTop: 4, // the heart isn't center without this
    justifyContent: "center",
  },
});
