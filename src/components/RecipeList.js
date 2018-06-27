import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";
import RecipeCard from "../components/RecipeCard";
import { defaultCard } from "../constants";

type Props = {};
export default class RecipeList extends Component<Props> {
  static defaultProps = {
    data: [],
    loading: true,
  };

  onEndReached = () => {
    this.props.onEndReached();
  };

  onError = ({ nativeEvent: { error } }) => {
    console.log(error);
  };

  keyExtractor = ({ item, index }) => index;

  renderItem = ({ item }) => {
    return (
      <RecipeCard
        recipeName={item.recipeName}
        cookingTime={item.cookingTime}
        calories={item.calories}
        imageSource={item.imageSource}
        onError={this.onError}
      />
    );
  };

  render() {
    const { data, loading } = this.props;
    return (
      <View>
        <FlatList
          data={data}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
          initialNumToRender={10}
          onEndReached={this.onEndReached}
        />
        {loading && <ActivityIndicator style={styles.loading} />}
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loading: {
    margin: 10,
  },
});
