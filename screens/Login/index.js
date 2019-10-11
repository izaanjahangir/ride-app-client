import React, { Component } from "react";
import { View, Text, ImageBackground } from "react-native";

import Input from "../../components/Input";
import Button from "../../components/Button";
import GeneralStyles from "../GeneralStyles";
import styles from "./styles";
import colors from "../../config/colors";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  handleTextChange = (key, value) => {
    this.setState({ [key]: value });
  };

  render() {
    const { email, password } = this.state;

    return (
      <View style={[GeneralStyles.container, GeneralStyles.smallMarginTop]}>
        <View style={styles.welcomeContainer}>
          <Text style={GeneralStyles.mainHeading}>Welcome</Text>
          <Text style={styles.belowHeadingText}>Login to ride with us</Text>
        </View>
        <ImageBackground
          style={{ width: "100%", height: "100%" }}
          source={require("../../assets/images/bubbles.png")}
        >
          <View style={styles.container}>
            <View style={styles.form}>
              <Input
                placeholder="Enter email address"
                value={email}
                onChange={email => this.handleTextChange("email", email)}
              />
              <Input
                placeholder="Enter password"
                secureTextEntry={true}
                value={password}
                onChange={password =>
                  this.handleTextChange("password", password)
                }
              />
              <Button loading={false} title="Login" />
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default Login;
