import { IconSymbol } from "@/components/ui/icon-symbol";
import { ScrollView, TouchableOpacity, useColorScheme, View } from "react-native";
import { Stack, useRouter } from "expo-router";
import { Colors } from "@/constants/theme";
import { menuItems, menus, menuSections, restaurantBranches, restaurants } from "@/data";
import { SearchBar } from "@/components/search-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { RestaurantTile } from "@/components/restaurant/tile";
import { useEffect, useState } from "react";
import { Restaurant } from "@db-types";




export default function RestaurantListScreen () {

  const [search, setSearch] = useState("");
  const [foundRestaurants, setFoundResturants] = useState<Restaurant[]>();

  const colorScheme = useColorScheme();

  const router = useRouter();


  useEffect(() => {
    searchResturant();
  }, [search]);


  const searchResturant = () => {
    const results = restaurants.filter(r => 
      r.name.includes(search) ||
      r.description?.includes(search) ||
      r.website?.includes(search) ||
      restaurantBranches.some(rb =>
        rb.name.includes(search)
      ) ||
      menus.some(m =>
          m.name.includes(search) ||
          m.description?.includes(search)
        ) ||
      menuSections.some(ms =>
          ms.name.includes(search) ||
          ms.description?.includes(search)
        ) ||
      menuItems.some(mi =>
          mi.name.includes(search) ||
          mi.description?.includes(search)
        )
    );
    setFoundResturants(results);
  };



  return (

    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors[colorScheme ?? "light"].background
      }}
    >

      <ScrollView
        contentContainerStyle={{
          paddingBottom: 20
        }}
        showsVerticalScrollIndicator={false}
      >

        <Stack.Screen
          options={{ headerShown: false }}
        />

        <TouchableOpacity
          style={{
            borderRadius: 20,
            width: 40,
            height: 40,
            marginTop: 40,
            marginLeft: 14,
            backgroundColor: Colors[colorScheme ?? "light"].headerButtonBackground,
            justifyContent: "center",
            alignItems: "center"
          }}
          onPress={() => router.back()}
          activeOpacity={0.7}
        >

          <IconSymbol
            size={30}
            color={Colors[colorScheme ?? "light"].headerButtonForeground}
            name="chevron.left"
            style={{
              marginRight: 3
            }}
          />

        </TouchableOpacity>

        <View
          style={{
            height: "auto",
            marginTop: 30,
            paddingHorizontal: 14
          }}
        >

          <SearchBar
            value={search}
            onChangeText={setSearch}
            onSearch={searchResturant}
          />

        </View>

        <View
          style={{
            marginTop: 30,
            flexDirection: "column",
            gap: 20,
            paddingHorizontal: 14
          }}
        >

          {foundRestaurants?.map((restaurant) => (

            <RestaurantTile
              key={restaurant.id}
              restaurant={restaurant}
              onPress={() => router.push(`/restaurants/${restaurant.id}`)}
              width={50}
              height={50}
            />

          ))}

        </View>

      </ScrollView>

    </SafeAreaView>

  );

}
