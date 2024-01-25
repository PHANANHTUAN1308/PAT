import { useNavigation } from "@react-navigation/native";
import React, { useRef, useEffect, useState } from "react";
import { Dimensions, FlatList, ImageBackground, Text, TouchableOpacity, View } from "react-native";

const width = Dimensions.get("window").width;

const CarouselSlider = () => {
  const [index, setIndex] = useState(0);
  const navigation = useNavigation();
  const flatListRef = useRef(null);
  const images = [
    {
      name: "electronics",
      image: require("../../assets/images/electronics.jpg"),
    },
    {
      name: "jewelery",
      image: require("../../assets/images/jewellery.webp"),
    },
    {
      name: "men's clothing",
      image: require("../../assets/images/mencloth.jpg"),
    },
    {
      name: "women's clothing",
      image: require("../../assets/images/womencloth.jpg"),
    },
  ];
  

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < images.length - 1) {
        flatListRef.current.scrollToIndex({ index: index + 1, animated: true });
        setIndex(index + 1);
      } else {
        flatListRef.current.scrollToIndex({ index: 0, animated: true });
        setIndex(0);
      }
    }, 2000); 

    return () => clearInterval(interval);
  }, [index]);

  return (
    <FlatList
      ref={flatListRef}
      data={images}
      horizontal
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate("ProductByCate", {category:item.name} )}>
        <ImageBackground source={item.image} style={{width: 350, height: 200, justifyContent: "flex-end",marginEnd: 20, marginStart: 20}} imageStyle={{ borderRadius: 10 }}>
          <View style={{ backgroundColor: "rgba(0,0,0,0.7)", height: '100%', borderRadius: 10,}}>
            <Text style={{ color: "white", textAlign:'center', paddingTop: 80, fontSize: 40, fontFamily: 'serif', textTransform:"capitalize" }}>{item.name}</Text>
          </View>
        </ImageBackground>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.name}
    />
  );
};

export default CarouselSlider;

