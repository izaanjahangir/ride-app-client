import { StyleSheet } from "react-native";

import constants from "../config/constants";
import colors from "../config/colors";

export default StyleSheet.create({
  container: {
    flex: 1
  },
  fontWhite: {
    color: "white"
  },
  smallMarginTop: {
    marginTop: constants.marginTop
  },
  mainHeading: {
    fontSize: constants.fontLarge,
    fontFamily: "Montserrat-Bold",
    color: colors.black
  }
});
