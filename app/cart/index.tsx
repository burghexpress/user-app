import { SearchBar } from "@/components/search-bar";
import { Colors } from "@/constants/theme";
import { useRef, useState } from "react";
import { ScrollView, Text, TextInput, useColorScheme, View } from "react-native";



export default function CartScreen () {

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
          paddingTop: 70,
          padding: 20
        }}
      >

        <SearchBar
          onPress={() => inputRef.current?.focus()}
          value={search}
          onChangeText={setSearch}
        />

      </View>

      <View
        style={{
          marginTop: 20,
          flexDirection: "row",
          gap: 10,
          justifyContent: "space-between",
          paddingHorizontal: 20
        }}
      >

        <Text
          style={{
            fontSize: 32,
            lineHeight: 48,
            fontFamily: "Atelia"
          }}
        >
          CART
        </Text>

      </View>

    </ScrollView>

  );

}
