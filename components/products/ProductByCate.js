import { useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Header from "../Header";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
const width = Dimensions.get("window").width / 2 - 30;

export default function ProductByCate({ route }) {
  const { category } = route.params;
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    FetchData();
  }, []);

  const FetchData = () => {
    axios
      .get(`https://fakestoreapi.com/products/category/${category}`)
      .then(function (result) {
        setProducts(result.data);
      })
      .catch(function (error) {
        Alert.alert(error.message);
      })
      .finally(function () {
        console.log("Finally called");
      });
  };

  // Navigate
  const navigateToProductDetail = (item) => {
    navigation.navigate("ProductDetail", { item });
  };

  // Card Item
  const Card = ({ item }) => (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigateToProductDetail(item)}
    >
      <View style={style.card}>
        <Image
          source={{ uri: item.image }}
          style={{
            flex: 1,
            resizeMode: "contain",
            backgroundColor: "#fff",
            borderRadius: 10,
          }}
        />
        <Text style={{ fontWeight: "bold", fontSize: 17, marginTop: 10 }}>
          {item.title}
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 5,
          }}
        >
          <Text style={{ fontSize: 19, fontWeight: "bold" }}>
            ${item.price}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView
      style={{
        flex: 1,

        backgroundColor: "white",
      }}
    >
      <Header Title={category} navigation={navigation} />
      <View style={{ flex: 1, paddingHorizontal: 20 }}>
        <FlatList
          columnWrapperStyle={{ justifyContent: "space-between" }}
          showsVerticalScrollIndicator={false}
          overScrollMode="never"
          contentContainerStyle={{
            marginTop: 10,
            paddingBottom: 50,
          }}
          key={2}
          data={products}
          renderItem={Card}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  card: {
    height: 225,
    backgroundColor: "light",
    width: width,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
  },
  searchContainer: {
    height: 50,
    backgroundColor: "light",
    borderRadius: 10,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    marginLeft: 20,
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
  },
  sortBtn: {
    height: 50,
    width: 50,
    borderRadius: 10,
    backgroundColor: "light",
    justifyContent: "center",
    alignItems: "center",
  },
  goBack: {
    marginLeft: 10,
    marginTop: 10,
  },
});