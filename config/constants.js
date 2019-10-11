import { Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

export default {
  windowWidth: width,
  windowHeight: height,
  paddingLarge: width * 0.06,
  paddingMedium: width * 0.04,
  paddingSmall: width * 0.03,
  paddingExtraSmall: width * 0.012,
  marginTop: height * 0.03,
  marginLarge: width * 0.06,
  marginSmall: width * 0.03,
  marginExtraSmall: width * 0.012,
  fontLarge: width * 0.07,
  fontMedium: width * 0.045,
  borderRadius: width * 0.08
};
