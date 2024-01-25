import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../Header';
import bg from '../../assets/images/bg2.jpg'
import data from '../../data';
export default function ProductDetail({ route, navigation }) {
  const { item } = route.params;

  const addToCart = async (product) => {

    try {
      const existingCart = await AsyncStorage.getItem("cart");

      let cart = existingCart ? JSON.parse(existingCart) : [];

      const existingProductIndex = cart.findIndex(
        (item) => item.id === product.id
      );

      if (existingProductIndex >= 0) {
        cart[existingProductIndex].quantity += 1;
      } else {
        product.quantity = 1;
        cart.push(product);
      }

      await AsyncStorage.setItem("cart", JSON.stringify(cart));

      console.log("Sản phẩm đã được thêm vào giỏ hàng thành công!");
      alert("Thêm vào giỏ hàng thành công!");
    } catch (error) {
      console.error("Lỗi khi thêm vào giỏ hàng:", error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView >
      <ImageBackground source={bg} style={{flex:1 }}>
        

        <View style={styles.header}>
          <Header navigation={navigation} />
        </View>
        <View style={styles.itembg}>
        <View style={styles.image}>
          <Image
            source={data[data.findIndex((itemData) => itemData.id === item.id)].image}
            style={styles.productImage}
          />

        </View></View>
      <View style={{paddingBottom:200}}>
      <Text style={styles.productTitle}>{item.title}</Text> 
        <Text style={styles.productPrice}>${item.price}</Text>
        <Text style={styles.productDescription}>{item.description}</Text>
        <Text style={styles.productCategory}>Danh mục: {item.category}</Text>
        <TouchableOpacity
          style={styles.addToCartButton}
          onPress={() => addToCart(item)}
        >
          <Text style={styles.addToCartButtonText}>Thêm vào giỏ hàng</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',

  },
  header: {
    marginStart: 15, marginTop: 20
  },
  image: {
    alignItems: "center",
    margin: 50,
  },
  itembg: {
    alignSelf: 'center',
    backgroundColor: '#f3f3f3',
    width: '94%',
    height: 350,
    
    borderRadius: 30
  },
  productImage: {
    width: '100%',
    height: 200,
    aspectRatio: 1,
    resizeMode: 'center',
    marginBottom: 16,

  },
  productTitle: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    alignItems: 'flex-start',
    marginBottom: 8,
    marginStart: 15,

  },
  productPrice: {
    fontSize: 25,
    color: 'yellow',
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'right',
    marginEnd: 20,

    marginBottom: 20
  },
  productDescription: {
    fontSize: 16,
    marginBottom: 16,
    marginStart: 15,

  },
  productCategory: {
    fontSize: 16,
    color: 'white',
    marginBottom: 16,
    marginStart: 15,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productRating: {
    fontSize: 16,
    color: 'orange',
  },
  ratingNumber: {
    fontSize: 16,
    color: 'orange',
    fontWeight: 'bold',
  },
  ratingCount: {
    fontSize: 16,
    color: 'gray',
  },
  addToCartButton: {
    backgroundColor: '#59caa7',
    padding: 20,
    borderRadius: 15,
    alignSelf: 'center',
    width: '80%',
    alignItems: "center",
  },
  addToCartButtonText: {
    color: 'black',
    fontWeight: 'bold',
  },
});