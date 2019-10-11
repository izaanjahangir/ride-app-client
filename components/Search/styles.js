import { StyleSheet } from "react-native";

import colors from "../../config/colors";
import constants from "../../config/constants";

export default StyleSheet.create({
  containerStyle: {
    backgroundColor: "transparent",
    borderBottomWidth: 0,
    borderTopWidth: 0,
    flex: 1,
    height: "100%",
    borderRadius: 20,
    justifyContent: "center",
  },
  inputContainerStyle: {
    backgroundColor: colors.white,
    justifyContent: "center",
  },
  inputStyles: {
    justifyContent: "center",
    flex: 1,
    borderRadius: 20
  }
});
