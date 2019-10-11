import { createStackNavigator } from "react-navigation-stack";

import Login from "../screens/Login";

const options = {
  headerMode: "none"
};

const Navigation = createStackNavigator(
  {
    Login
  },
  options
);

export default Navigation;
