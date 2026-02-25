import { FlatList, ScrollView, TextInput, useColorScheme, View } from "react-native";
import { Colors } from "@/constants/theme";
import { useRef, useState } from "react";
import { SearchBar } from "@/components/search-bar";



const TOPPERFORMERS = [
  {
    label: "Burger",
    image: require("@/assets/images/burger-1.jpg"),
    resturant: "Burger king",
    price: 5.0
  },
  {
    label: "Pizza",
    image: require("@/assets/images/pizza-1.jpg"),
    resturant: "Dominos",
    price: 7.0
  },
  {
    label: "Beyti Kebab Served with Ayran Pickles",
    image: require("@/assets/images/beyti-kebab-served-with-ayran-pickles.jpg"),
    resturant: "Wendy's",
    price: 3.99
  },
  {
    label: "Burger Black Bread Bun with Fried Egg",
    image: require("@/assets/images/burger-black-bread-bun-with-fried-egg.jpg"),
    resturant: "Burger King",
    price: 4.99
  },
  {
    label: "Fried Prawn Rice With Teriyaki Sauce",
    image: require("@/assets/images/fried-prawn-rice-with-teriyaki-sauce.jpg"),
    resturant: "Wendy's",
    price: 6.99
  }
];



const STORESNEARYOU = [
  {
    label: "Walmart",
    logo: require("@/assets/images/walmart-logo.png"),
    time: "46 min"
  },
  {
    label: "Costco",
    logo: require("@/assets/images/costco-logo.png"),
    time: "20 min"
  },
  {
    label: "Kroger",
    logo: require("@/assets/images/kroger-logo.png"),
    time: "33 min"
  },
  {
    label: "Best Buy",
    logo: require("@/assets/images/best-buy-logo.png"),
    time: "16 min"
  },
  {
    label: "ALDI",
    logo: require("@/assets/images/aldi-logo.png"),
    time: "9 min"
  }
];



export default function DiscoverScreen () {

  const [search, setSearch] = useState("");

  const colorScheme = useColorScheme();

  const inputRef = useRef<TextInput>(null);


  return (

    <ScrollView
      style={{
        backgroundColor: Colors[colorScheme ?? "light"].background
      }}
      contentContainerStyle={{
        paddingBottom: 20
      }}
    >

      <View
        style={{
          height: "auto",
          marginTop: 70,
          padding: 20
        }}
      >

        <SearchBar
          onPress={() => inputRef.current?.focus()}
          value={search}
          onChangeText={setSearch}
        />

      </View>

    </ScrollView>

  );

}
