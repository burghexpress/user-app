import { ScrollView, Text, TextInput, TouchableOpacity, useColorScheme, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/constants/theme";
import { useEffect, useRef, useState } from "react";
import { SearchBar } from "@/components/search-bar";
import { Stack, useRouter } from "expo-router";
import { categories, menuItems, menus, menuSections, restaurantBranches, restaurants } from "@/data";
import { RestaurantBranch } from "@db-types";
import { RestaurantBranchTile } from "@/components/restaurant/branch-tile";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { DishTile } from "@/components/restaurant/dish-tile";



export default function SearchResturantBranchScreen () {

  const [search, setSearch] = useState("");

  const [tabs, setTabs] = useState(["all", "resturants"]);
  const [activeTab, setActiveTab] = useState("all");

  const [foundRestaurantBranches, setFoundResturantBranches] = useState<RestaurantBranch[]>();

  const colorScheme = useColorScheme();

  const inputRef = useRef<TextInput>(null);
  
  const router = useRouter();


  useEffect(() => {
    if (search) {
      searchMenuItems();
    }
  }, [search]);


  const onSearch = () => {
    if (search) {
      searchMenuItems();
    }
  };


  const searchMenuItems = () => {
    const results = restaurantBranches.filter(rb =>
      rb.name.includes(search) ||
      restaurants
          .filter(r => r.id === rb.restaurantId)
          .some(r =>
            r.name.includes(search) ||
            r.description?.includes(search) ||
            r.website?.includes(search)
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
    setFoundResturantBranches(results);
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

        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            zIndex: 10,
            paddingHorizontal: 14,
            marginTop: 30,
            width: "100%",
            backgroundColor: "transparent"
          }}
        >

          <TouchableOpacity
            style={{
              borderRadius: 20,
              width: 40,
              height: 40,
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

          <Text
            style={{
              fontFamily: "Atelia",
              color: Colors[colorScheme ?? "light"].foreground,
              fontSize: 18
            }}
          >
            Search restaurant
          </Text>

        </View>

        <View
          style={{
            height: "auto",
            marginTop: 70,
            paddingHorizontal: 14
          }}
        >

          <SearchBar
            onPress={() => inputRef.current?.focus()}
            value={search}
            onChangeText={setSearch}
            onSearch={onSearch}
            placeholder="Search menu"
          />

        </View>

        <View
          style={{
            marginTop: 30,
            paddingHorizontal: 14,
            gap: 20
          }}
        >

          {foundRestaurantBranches && foundRestaurantBranches.length > 0 &&

            foundRestaurantBranches.map((item) =>

              <DishTile
                restaurant={item}
                height={"auto"}
                width={"100%"}
                onPress={() => router.push(`/restaurants/${item.restaurantId}/branches/${item.id}`)}
              />

            )

          }

        </View>

      </ScrollView>

    </SafeAreaView>

  );

}
