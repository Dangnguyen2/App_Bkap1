import React, { useEffect } from "react";

import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./Navigation/tabs";
import NavigationMyLV from "./Navigation/Stack/NavigationMyLV";
import SplashScreen from "react-native-splash-screen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./Screens/Component/Login/LoginScreen";
import RegisterScreen from "./Screens/Component/Login/RegisterScreen";
import CollectionScreen from "./Screens/Component/Home/CollectionScreen";
import ListProductScreen from "./Screens/Component/Product/ListProductScreen";
import ProductDetail from "./Screens/Component/Product/ProductDetail";
import UserProvider from "./context/UserProvider";
import Toast from "react-native-toast-message";
import EditProfile from "./Screens/Component/Login/EditProfile";
import DeliverScreens from "./Screens/Component/deliver/DeliverScreens";
import PaymentScreens from "./Screens/Component/payment/PaymentScreens";
import SummaryScreens from "./Screens/Component/payment/SummaryScreens";
import ThankScreens from "./Screens/Component/payment/ThankScreens";
import Order from "./Screens/Component/cart/Order";
import DeliveryOrderHistory from "./Screens/Component/cart/DeliveryOrderHistory";
import CancelOrder from "./Screens/Component/cart/CancelOrder";
import CartProvider from "./context/CartProvider";
const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, [])
  return (
    <UserProvider>
      <CartProvider>
        <NavigationContainer >
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={LoginScreen}></Stack.Screen>
            <Stack.Screen name="Register" component={RegisterScreen}></Stack.Screen>
            <Stack.Screen name="EditProfile" component={EditProfile}></Stack.Screen>
            <Stack.Screen name="Home" component={Tabs} ></Stack.Screen>
            <Stack.Screen name='ProductDetail' component={ProductDetail}></Stack.Screen>
            <Stack.Screen name='address' component={DeliverScreens}></Stack.Screen>
            <Stack.Screen name='payment' component={PaymentScreens}></Stack.Screen>
            <Stack.Screen name='summary' component={SummaryScreens}></Stack.Screen>
            <Stack.Screen name="thankscreen" component={ThankScreens}></Stack.Screen>
            <Stack.Screen name="Order" component={Order}></Stack.Screen>
            <Stack.Screen name="DeliveryOrderHistory" component={DeliveryOrderHistory}></Stack.Screen>
            <Stack.Screen name="CancelOrder" component={CancelOrder}></Stack.Screen>
          </Stack.Navigator>
          <Toast />
        </NavigationContainer>
      </CartProvider>
    </UserProvider>
  )
};

export default App