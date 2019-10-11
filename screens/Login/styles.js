import { StyleSheet } from "react-native";

import constants from "../../config/constants";
import colors from "../../config/colors";

export default StyleSheet.create({
  welcomeContainer: {
    paddingHorizontal: constants.paddingLarge,
    paddingVertical: constants.paddingLarge
  },
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    borderTopLeftRadius: constants.borderRadius,
    borderTopRightRadius: constants.borderRadius,
    paddingHorizontal: constants.paddingLarge,
    opacity: 0.88
  },
  belowHeadingText: {
    color: colors.primary,
    fontFamily: "Montserrat-Medium"
  },
  form: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: constants.borderRadius,
    marginBottom: 10
  },
  belowForm: {
    marginVertical: constants.marginExtraSmall * 1.3
  },
  registerText: {
    textAlign: "center",
    fontSize: constants.fontMedium * 0.8,
    fontFamily: "Montserrat-Medium",
    color: "white"
  }
});
