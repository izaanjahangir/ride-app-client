import React from "react";
import { Input as ElementInput } from "react-native-elements";
import { View } from "react-native";

import styles from "./styles";
import GeneralStyles from "../../screens/GeneralStyles";

const Input = props => (
  <View style={styles.container}>
    <ElementInput inputStyle={[GeneralStyles.fontWhite]} {...props} />
  </View>
);

export default Input;
