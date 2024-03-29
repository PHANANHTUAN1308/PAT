import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import Header from '../Header';


export default function Cart({navigation,navigateToProductDetail}) {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    const loadCartItems = async () => {
      try {
        const cartData = await AsyncStorage.getItem('cart');
        if (cartData) {
          const parsedCart = JSON.parse(cartData);
  
        
          const updatedCart = parsedCart.map(item => ({
            ...item,
            quantity: item.quantity || 1,
          }));
  
          setCartItems(updatedCart);
        }
      } catch (error) {
        console.error('Lỗi khi đọc dữ liệu giỏ hàng:', error);
      }
    };
  
    loadCartItems();
  }, []);

  const calculateTotalPrice = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const handleDeleteItem = (itemId) => {

    const updatedCart = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCart);

   
    AsyncStorage.setItem('cart', JSON.stringify(updatedCart))
      .then(() => {
        console.log('Sản phẩm đã được xóa khỏi giỏ hàng');
      })
      .catch((error) => {
        console.error('Lỗi khi lưu giỏ hàng mới:', error);
      });
  };
  const handleDecreaseQuantity = (itemId) => {

  const updatedCart = cartItems.map(item => {
    if (item.id === itemId) {
      
      const newQuantity = Math.max(1, item.quantity - 1);
      return { ...item, quantity: newQuantity };
    }
    return item;
  });

  setCartItems(updatedCart);


  AsyncStorage.setItem('cart', JSON.stringify(updatedCart))
    .then(() => {
      console.log('Số lượng sản phẩm đã được giảm');
    })
    .catch((error) => {
      console.error('Lỗi khi lưu giỏ hàng mới:', error);
    });
};

  const handleIncreaseQuantity = (itemId) => {

    const updatedCart = cartItems.map(item => {
      if (item.id === itemId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedCart);


    AsyncStorage.setItem('cart', JSON.stringify(updatedCart))
      .then(() => {
        console.log('Số lượng sản phẩm đã được tăng');
      })
      .catch((error) => {
        console.error('Lỗi khi lưu giỏ hàng mới:', error);
      });
  };

  const handleSubmit = () => {
    setCartItems([]);
    AsyncStorage.setItem("cart", JSON.stringify([]))
      .then((result) => {
        alert("Thanh toán thành công!");
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  };
  


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header navigation={navigation} />
      </View>
      <Text style={styles.headerText}>Giỏ hàng của tôi</Text>
      {cartItems.length > 0 ? (
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.cartItem}>
              <Image source={{ uri: item.image }} style={styles.productImage} />
              <View style={styles.productDetails}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.price}>Giá tiền: ${item.price}</Text>
                <View style={styles.quantityContainer}>
                  <TouchableOpacity
                    style={styles.quantityButton}
                    onPress={() => handleDecreaseQuantity(item.id)}
                  >
                    <Text>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.quantity}>{item.quantity}</Text>
                  <TouchableOpacity
                    style={styles.quantityButton}
                    onPress={() => handleIncreaseQuantity(item.id)}
                  >
                    <Text>+</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  style={styles.deleteButton}
                  onPress={() => handleDeleteItem(item.id)}
                >
                  <Text style={styles.deleteText}>Xóa</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      ) : (
        <Text style={styles.emptyCartText}>Giỏ hàng trống</Text>
      )}
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Tổng thanh toán:</Text>
        <Text style={styles.totalPrice}>${calculateTotalPrice()}</Text>
      </View>
      <TouchableOpacity style={styles.paymentButton} onPress={handleSubmit}>
        <Text style={styles.paymentButtonText}>Thanh toán</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 15,
  },
  header: {
    marginTop: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  cartItem: {
    flexDirection: 'row',
    padding: 8,
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  productImage: {
    width: 100,
    height: 100,
    marginRight: 8,
  },
  productDetails: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  price: {
    fontSize: 14,
    color: '#F15B31',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  quantityButton: {
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 3,
    padding: 8,
    marginHorizontal: 4,
  },
  quantity: {
    fontSize: 16,
    marginHorizontal: 8,
  },
  deleteButton: {
    marginTop: 8,
  },
  deleteText: {
    color: 'red',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalPrice: {
    fontSize: 18,
    color: '#F15B31',
    fontWeight: 'bold',
  },
  paymentButton: {
    backgroundColor: '#59caa7',
    padding: 12,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  paymentButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  emptyCartText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
    color: 'gray',
  },
});
