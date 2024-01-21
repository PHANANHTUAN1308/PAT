import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';
import axios from 'axios';

const Product = ({ navigateToProductDetail, addToCart }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getDataUsingSimpleGetCall();
  }, []);

  const getDataUsingSimpleGetCall = () => {
    axios
      .get('https://fakestoreapi.com/products')
      .then(function(response) {
        console.log('Dữ liệu sản phẩm:', response.data);  
        setData(response.data);
      })
      .catch(function(error) {
        console.log('Lỗi khi tải dữ liệu:', error.message);  
        alert(error.message);
      });
  };

  const renderProducts = () => {
    return data.map((item) => (
      <TouchableOpacity key={item.id} onPress={() => navigateToProductDetail(item)}>
        <View style={styles.productItem}>
          <Image source={{ uri: item.image }} style={styles.productImage} />
          <View style={styles.productInfo}>
            <Text style={styles.productName}>{item.title}</Text>
            <Text style={styles.productPrice}>$ {item.price}</Text>
            <View style={styles.ratingContainer}>
              <Text style={styles.productRating}>Đánh giá: </Text>
              <Text style={styles.ratingNumber}>{item.rating.rate}</Text>
              <Text style={styles.ratingCount}> ({item.rating.count} đánh giá)</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    ));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {renderProducts()}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  productItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 10,
    padding: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  productInfo: {
    marginLeft: 10,
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    marginTop: 5,
    fontSize: 14,
    color: 'red',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  productRating: {
    fontSize: 14,
    color: 'orange',
  },
  ratingNumber: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'orange',
  },
  ratingCount: {
    fontSize: 14,
    color: 'gray',
  },
});

export default Product;
