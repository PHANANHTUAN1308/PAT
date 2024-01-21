import React from 'react';
import { StyleSheet, View, ImageBackground, KeyboardAvoidingView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './components/login/Login';
import Home from './components/Home';
import Register from './components/login/Register';
import Profile from './components/profile/Profile';
import Cart from './components/cart/Cart';
import Product from './components/products/Product';
import ProductDetail from './components/products/ProductDetail';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
   
      <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
         name="Home"
         component={Home}
         options={{ headerShown: false }}
        />
        <Stack.Screen
         name="Register"
         component={Register}
         options={{ headerShown: false }}
        />
        <Stack.Screen
         name="Profile"
         component={Profile}
         options={{ headerShown: false }}
        />
        {/* <Stack.Screen
         name="Favorite"
         component={Favorite}
         options={{ headerShown: false }}
        /> */}
         <Stack.Screen
         name="Cart"
         component={Cart}
         options={{ headerShown: false }}
        />
        <Stack.Screen
         name="Product"
         component={Product}
         options={{ headerShown: false }}
        />
        <Stack.Screen
         name="ProductDetail"
         component={ProductDetail}
         options={{ headerShown: false }}
        />


    </Stack.Navigator>
    
  
  </NavigationContainer>    
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },


});
