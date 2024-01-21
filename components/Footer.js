import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Footer({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>

        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <View style={styles.centericon}>      
              <Icon name="home" size={20} color="black" />
            <Text style={{fontSize:12}}>Trang chủ</Text>
          </View>
        </TouchableOpacity>


       
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <View style={styles.centericon}>          
              <Icon name="shopping-cart" size={20} color="black" />       
            <Text style={{fontSize:12}}>Giỏ hàng</Text>
          </View>
        </TouchableOpacity>
        
        {/* <TouchableOpacity onPress={() => navigation.navigate('Favorite')}>
          <View style={styles.centericon}>
              <Icon name="heart" size={20} color="black" />
            <Text style={{fontSize:12}}>Yêu thích</Text>
          </View>
        </TouchableOpacity> */}

        <TouchableOpacity onPress={() => navigation.navigate('Favorite')}>
        <View style={styles.centericon}>
            <Icon name="bell" size={20} color="black" />       
          <Text style={{fontSize:12}}>Thông báo</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <View style={styles.centericon}>     
            <Icon name="user" size={20} color="black" />    
          <Text style={{fontSize:12}}>Tôi</Text>
        </View>
        </TouchableOpacity>

      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 10,
    shadowRadius: 20,
    elevation: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20, 
    width: '100%', 
  },
  centericon:{
    alignItems: 'center',
  
  }
});
