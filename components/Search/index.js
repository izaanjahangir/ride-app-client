import React from "react";
import { SearchBar } from "react-native-elements";

import styles from "./styles.js";

const Search = props => (
  <SearchBar
    containerStyle={[styles.containerStyle, props.containerStyle]}
    inputContainerStyle={styles.inputContainerStyle}
    inputStyle={styles.inputStyles}
    placeholder={props.placeholder}
    onChangeText={props.onChangeText}
    value={props.value}
  />
);

export default Search;
