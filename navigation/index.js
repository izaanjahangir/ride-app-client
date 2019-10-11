import { createAppContainer, createSwitchNavigator } from "react-navigation";

import AuthScreen from "./AuthScreens";
import MainScreens from "./MainScreens";

const AppNavigator = createSwitchNavigator(
  {
    Auth: AuthScreen,
    Main: MainScreens
  },
  { initialRouteName: "Main" }
);

export default createAppContainer(AppNavigator);
