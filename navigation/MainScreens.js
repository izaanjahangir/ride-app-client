import { createStackNavigator } from "react-navigation-stack";

import Home from "../screens/Home";

const options = {
  headerMode: "none"
};

const Navigation = createStackNavigator(
  {
    Home
  },
  options
);

export default Navigation;
