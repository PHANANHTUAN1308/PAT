import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View,TouchableOpacity, Image, ImageBackground } from 'react-native';
import Footer from './Footer';
import Header from './Header';
import Product from './products/Product';
import CarouselSlider from './slider/CarouselSlider'
import Search from './products/Search';
import bg from '../assets/images/bg2.jpg'
export default function Home({ navigation }) {
  const navigateToProductDetail = (item) => {
   
    navigation.navigate('ProductDetail', { item });
  };
  return (
    
    
      <View style={styles.container}>
     <ScrollView><ImageBackground source={bg}>   
        <View style={styles.search}><Search /></View>
        <View>
          <CarouselSlider/>
          <Product navigateToProductDetail={navigateToProductDetail} />        
        </View></ImageBackground>
      </ScrollView>
      <View style={styles.footer}>
        <Footer navigation={navigation} />
      </View>
      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
   backgroundColor: 'blue'
  },

  footer: {

    justifyContent: 'flex-end',
  },
  search:{
    marginTop:20,
    paddingTop:40,
    paddingBottom:10,
  },
});
