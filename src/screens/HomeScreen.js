import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import DietSelection from "../components/DietSelection";
import SearchBar from "../components/SearchBar";
import RecipeList from "../components/RecipeList";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as actions from "../actions";

import { diets } from "../constants";

type Props = {};
class HomeScreen extends Component<Props> {
  static navigationOptions = {
    headerTitle: "Home",
    headerTitleStyle: {
      fontSize: 18,
      fontFamily: "Raleway-Regular",
      fontWeight: "200",
    },
  };

  componentDidMount() {
    // this.props.fetchRecipes(this.props.searchTerm, this.props.diet);
  }

  onSelectDiet = diet => {
    if (this.props.searchTerm.length) {
      this.props.fetchRecipes(this.props.searchTerm, diet);
    }
    this.props.changeDiet(diet);
  };

  onSubmit = searchTerm => {
    this.props.fetchRecipes(searchTerm, this.props.diet);
  };

  onEndReached = () => {
    this.props.fetchMoreRecipes(
      this.props.searchTerm,
      this.props.diet,
      this.props.data,
    );
  };

  render() {
    const { data, loading, refreshing, diet } = this.props;
    return (
      <View style={styles.container}>
        <DietSelection
          diets={diets}
          onPress={this.onSelectDiet}
          selectedDiet={diet}
        />
        <SearchBar onSubmit={this.onSubmit} />
        <RecipeList
          data={data}
          loading={loading}
          refreshing={refreshing}
          onEndReached={this.onEndReached}
        />
      </View>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    loading: state.recipes.loading,
    refreshing: state.recipes.refreshing,
    data: state.recipes.data,
    diet: state.diet,
    searchTerm: state.searchTerm,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "stretch",
    backgroundColor: "#ECECEF",
  },
  headerTitleStyle: {
    fontSize: 30,
    fontFamily: "Raleway-Regular",
  },
});
