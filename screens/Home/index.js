import React, { Component } from "react";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MapView from "react-native-maps";

import Search from "../../components/Search";
import GeneralStyles from "../GeneralStyles";
import styles from "./styles";
class Home extends Component {
  state = {
    search: "",
    region: {
      latitude: 24.8916996,
      longitude: 67.2046189,
      latitudeDelta: 0.0043,
      longitudeDelta: 0.0034
    }
  };

  handleTextChange = (key, value) => {
    this.setState({ [key]: value });
  };

  render() {
    const { search, region } = this.state;

    return (
      <View style={[GeneralStyles.smallMarginTop, styles.container]}>
        <View style={styles.headerContainer}>
          <View style={styles.header}>
            <Ionicons name="ios-menu" size={32} color="white" />
            <Search
              containerStyle={styles.searchContainer}
              value={search}
              placeholder="search place"
              onChangeText={value => this.handleTextChange("search", value)}
            />
          </View>
        </View>
        <View style={styles.contentContainer}>
          <MapView region={region} style={styles.mapView} />
        </View>
      </View>
    );
  }
}

export default Home;
