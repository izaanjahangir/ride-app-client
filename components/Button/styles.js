import { StyleSheet } from "react-native";

import colors from "../../config/colors";
import constants from "../../config/constants";

export default StyleSheet.create({
  containerStyles: {
    width: "100%",
    alignItems: "center",
    marginVertical: constants.marginSmall,
    borderRadius: constants.borderRadius
  },
  buttonStyles: {
    width: "100%",
    backgroundColor: colors.secondary,
    height: constants.windowHeight * 0.06,
    borderRadius: constants.borderRadius
  },
  titleStyles: {
    fontSize: constants.fontMedium
  }
});
