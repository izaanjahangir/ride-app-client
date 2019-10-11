import { createStackNavigator } from "react-navigation-stack";

import Login from "../screens/Login";
import Register from "../screens/Register";

const options = {
  headerMode: "none"
};

const Navigation = createStackNavigator(
  {
    Login,
    Register
  },
  options
);

export default Navigation;
