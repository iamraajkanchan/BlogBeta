import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import IndexSearch from "./src/screens/IndexSearch";

const navigator = createStackNavigator(
  {
    Index: IndexSearch
  },
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'Blog'
    }
  }
)

export default createAppContainer(navigator);