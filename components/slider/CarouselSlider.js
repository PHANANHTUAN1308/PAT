import React, { useRef, useEffect, useState } from "react";
import { Dimensions, FlatList, ImageBackground, Text, View } from "react-native";

const width = Dimensions.get("window").width;

const CarouselSlider = () => {
  const [index, setIndex] = useState(0);
  const flatListRef = useRef(null);
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
        <ImageBackground source={item.image} style={{width: 350, height: 200, justifyContent: "flex-end",marginEnd: 20, marginStart: 20}} imageStyle={{ borderRadius: 10 }}>
          <View style={{ backgroundColor: "rgba(0,0,0,0.7)", height: '100%', borderRadius: 10,}}>
            <Text style={{ color: "white", textAlign:'center', paddingTop: 80, fontSize: 40, fontFamily: 'serif' }}>{item.name}</Text>
          </View>
        </ImageBackground>
      )}
      keyExtractor={(item) => item.name}
    />
  );
};

export default CarouselSlider;

