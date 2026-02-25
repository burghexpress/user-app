import { SearchBar } from "@/components/search-bar";
import { Colors } from "@/constants/theme";
import { useRef, useState } from "react";
import { ScrollView, TextInput, useColorScheme, View } from "react-native";



export default function OrdersScreen () {

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
