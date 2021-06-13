import { Platform } from "react-native";
import { createStackNavigator,createAppContainer } from "react-navigation";
import Colors from "../constants/Colors";
import CreateProduct from '../screens/CreateProduct'
import ShowProduct from '../screens/ShowProductList'

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
  },
  headerTitleStyle: {
    fontFamily: 'open-sans-bold'
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans'
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
};
const ProductsNavigator = createStackNavigator(
    {
      CreateProduct: CreateProduct,
      ProductList: ShowProduct,
    },
    {
  
      defaultNavigationOptions:{
        headerTitle:"InputScreen",
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
        },
        headerTitleStyle: {
          fontFamily: 'open-sans-bold'
        },
        headerBackTitleStyle: {
          fontFamily: 'open-sans'
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
      }
    }
  );

  export default createAppContainer(ProductsNavigator);