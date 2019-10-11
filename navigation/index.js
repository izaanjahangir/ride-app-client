import { createAppContainer, createSwitchNavigator } from "react-navigation";

import AuthScreen from "./AuthScreens";
import MainScreens from "./MainScreens";

const AppNavigator = createSwitchNavigator({
  Auth: AuthScreen,
  Main: MainScreens
});

export default createAppContainer(AppNavigator);
