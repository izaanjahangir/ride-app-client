import React, { Component } from "react";
import * as Font from "expo-font";

import Navigation from "./navigation";

class App extends Component {
  state = {
    isFontLoaded: false
  };

  componentDidMount() {
    console.disableYellowBox = true;
    this.loadFonts();
  }

  loadFonts = async () => {
    try {
      await Font.loadAsync({
        "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
        "Montserrat-Light": require("./assets/fonts/Montserrat-Light.ttf"),
        "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
      });

      this.setState({ isFontLoaded: true });
    } catch (e) {
      console.log("e =>", e);
    }
  };

  render() {
    if (!this.state.isFontLoaded) return null;

    return <Navigation />;
  }
}

export default App;
