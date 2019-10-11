import React from "react";
import { Button as ElementButton } from "react-native-elements";

import styles from "./styles";

const Button = props => (
  <ElementButton
    containerStyle={[styles.containerStyles, props.containerStyles]}
    buttonStyle={[styles.buttonStyles, props.buttonStyles]}
    titleStyle={[styles.titleStyles, props.titleStyles]}
    title={props.title}
    loading={props.loading}
    raised
  />
);

Button.defaultProps = {
  loading: false,
  containerStyles: {},
  buttonStyles: {},
  titleStyles: {}
};

export default Button;
