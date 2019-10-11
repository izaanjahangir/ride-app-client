import { StyleSheet } from "react-native";

import constants from "../../config/constants";
import colors from "../../config/colors";

export default StyleSheet.create({
  container: {
    flex: 1
  },
  headerContainer: {
    paddingHorizontal: constants.paddingLarge,
    backgroundColor: colors.primary,
    height: constants.windowHeight * 0.14
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: constants.windowHeight * 0.09
  },
  searchContainer: {
    marginHorizontal: constants.marginSmall
  },
  contentContainer: {
    flex: 1,
    borderTopLeftRadius: constants.borderRadius,
    borderTopRightRadius: constants.borderRadius,
    backgroundColor: colors.white,
    marginTop: -constants.windowHeight * 0.04
  }
});
