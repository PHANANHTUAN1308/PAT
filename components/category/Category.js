import {Dimensions,FlatList,ImageBackground,StyleSheet,Text,TouchableOpacity,View,} from "react-native";
import Header from "../Header.js";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../Footer.js";
const height = Dimensions.get("screen").height;
const images = [
  {
    name: "Electronics",
    image: require("../../assets/images/electronics.jpg"),
  },
  {
    name: "Jewelry",
    image: require("../../assets/images/jewellery.webp"),
  },
  {
    name: "Men",
    image: require("../../assets/images/mencloth.jpg"),
  },
  {
    name: "Women",
    image: require("../../assets/images/womencloth.jpg"),
  },
];

export default function CategoryList({ navigation }) {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    function DataFetch() {
      axios
        .get(`https://fakestoreapi.com/products/categories`)
        .then(function (response) {
          setCategories(response.data);
        })
        .catch(function (error) {
          alert(error.message);
        })
        .finally(function () {
          console.log("Finally called");
        });
    }
    DataFetch();
  }, []);
  const renderItem = (item, index) => {
    return (
      <TouchableOpacity
        style={{
          height: height / (categories.length - 1),
        }}
        activeOpacity={0.9}
        onPress={() =>
          navigation.navigate("ProductByCate", { category: item })
        }
      >
        <ImageBackground
          source={images[index].image}
          resizeMode="cover"
          style={{
            flex: 1,
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "rgba(0,0,0,.25)",
              paddingHorizontal: 15,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontWeight: "bold",
                fontSize: 45,
                textAlign:'center',
                textTransform: "capitalize",
                fontFamily:'serif' ,
              }}
            >
              {item}
            </Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{marginStart:15, marginTop:20, marginBottom:20}}><Header Title={"Category"} navigation={navigation} /></View>
      <View style={{ flex: 1 }}>
        <FlatList
          renderItem={({ item, index }) => renderItem(item, index)}
          data={categories}
          showsVerticalScrollIndicator={false}
          overScrollMode="never"
        />
      </View>
      
      <View style={{justifyContent: 'flex-end'}}>
        <Footer navigation={navigation} />
      </View>
    </View>
  );
}

