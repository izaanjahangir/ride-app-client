import React, { Component } from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";

import Input from "../../components/Input";
import Button from "../../components/Button";
import GeneralStyles from "../GeneralStyles";
import styles from "./styles";
import colors from "../../config/colors";

class Register extends Component {
  state = {
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  };

  handleTextChange = (key, value) => {
    this.setState({ [key]: value });
  };

  render() {
    const {
      username,
      firstName,
      lastName,
      email,
      password,
      confirmPassword
    } = this.state;

    return (
      <View style={[GeneralStyles.container, GeneralStyles.smallMarginTop]}>
        <View style={styles.welcomeContainer}>
          <Text style={GeneralStyles.mainHeading}>Welcome</Text>
          <Text style={styles.belowHeadingText}>Register to ride with us</Text>
        </View>
        <ImageBackground
          style={{ width: "100%", flex: 1 }}
          source={require("../../assets/images/bubbles.png")}
        >
          <View style={styles.container}>
            <View style={styles.form}>
              <Input
                placeholder="Enter username"
                value={username}
                onChange={username =>
                  this.handleTextChange("username", username)
                }
              />
              <Input
                placeholder="Enter first Name"
                value={firstName}
                onChange={firstName =>
                  this.handleTextChange("firstName", firstName)
                }
              />
              <Input
                placeholder="Enter last Name"
                value={lastName}
                onChange={lastName =>
                  this.handleTextChange("lastName", lastName)
                }
              />
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
              <Input
                placeholder="Confirm password"
                secureTextEntry={true}
                value={confirmPassword}
                onChange={confirmPassword =>
                  this.handleTextChange("confirmPassword", confirmPassword)
                }
              />
              <Button loading={false} title="Register" />
            </View>
            <View style={styles.belowForm}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Login")}
              >
                <Text style={styles.loginText}>Already a member? Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default Register;
