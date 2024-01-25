import { useNavigation } from "@react-navigation/native";
import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const width = Dimensions.get("window").width / 2 - 30;
export default function CartItem({ item }) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("ProductDetail", { item })}
        >
            <View style={style.card}>
                <Image
                    source={{ uri: item.image }}
                    style={{
                        flex: 1,
                        height: 125,
                        backgroundColor: "#fff",
                        borderRadius: 10,
                    }}
                    resizeMode="contain"
                />
                <Text
                    style={{
                        fontWeight: "bold",
                        fontSize: 17,
                        marginTop: 10,
                        color: "#616161",
                    }}
                >
                    {item.title}
                </Text>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginTop: 5,
                    }}
                >
                    <Text
                        style={{
                            fontSize: 19,
                            fontWeight: "bold",

                        }}
                    >
                        ${item.price}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const style = StyleSheet.create({
    card: {
        backgroundColor: "light",
        width: width,
        marginHorizontal: 2,
        borderRadius: 10,
        marginBottom: 20,
        padding: 15,
    },
    sortBtn: {
        height: 50,
        width: 50,
        borderRadius: 10,
        backgroundColor: "light",
        justifyContent: "center",
        alignItems: "center",
    },
});