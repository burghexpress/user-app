import { FlatList, Image, ScrollView, Text, TextInput, TouchableOpacity, useColorScheme, View } from "react-native";
import { Colors } from "@/constants/theme";
import { useEffect, useRef, useState } from "react";
import { SearchBar } from "@/components/search-bar";
import { useRouter } from "expo-router";
import { categories, menuItems, menus, menuSections, restaurantBranches, restaurants } from "@/data";
import { Restaurant, RestaurantBranch } from "@db-types";
import { RestaurantBranchTile } from "@/components/restaurant/branch-tile";



export default function SearchScreen () {

  const [search, setSearch] = useState("");

  const [tabs, setTabs] = useState(["all", "resturants"]);
  const [activeTab, setActiveTab] = useState("all");

  const [foundRestaurants, setFoundResturants] = useState<Restaurant[]>();
  const [foundRestaurantBranches, setFoundResturantBranches] = useState<RestaurantBranch[]>();

  const colorScheme = useColorScheme();

  const inputRef = useRef<TextInput>(null);
  
  const router = useRouter();


  useEffect(() => {
    if (search) {
      searchResturants();
    }
  }, [search]);


  const onSearch = () => {
    if (search) {
      searchResturantBranches();
    }
  };


  const searchResturantBranches = () => {
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


  const searchResturants = () => {
    const results = restaurants.filter(r => r.name.includes(search));
    setFoundResturants(results);
  };


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
          paddingHorizontal: 14
        }}
      >

        <SearchBar
          onPress={() => inputRef.current?.focus()}
          value={search}
          onChangeText={setSearch}
          onSearch={onSearch}
        />

      </View>
      
      <FlatList
        horizontal
        data={tabs}
        style={{
          marginTop: 30
        }}
        contentContainerStyle={{
          paddingHorizontal: 14,
          gap: 10
        }}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (

          <TouchableOpacity
            onPress={() => setActiveTab(item)}
            activeOpacity={0.8}
            style={{
              paddingHorizontal: 14,
              paddingVertical: 4,
              borderRadius: 20,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: item == activeTab ? Colors[colorScheme ?? "light"].activeFilterBackground : Colors[colorScheme ?? "light"].filterBackground
            }}
          >

            <Text
              style={{
                color: item == activeTab ? Colors[colorScheme ?? "light"].filterForeground : Colors[colorScheme ?? "light"].filterForeground,
                fontFamily: item == activeTab ? "Metropolis-SemiBold" : "Metropolis-Regular",
                fontSize: 18
              }}
            >
              {item}
            </Text>

          </TouchableOpacity>

          )}
        />

      <View
        style={{
          marginTop: 30,
          paddingHorizontal: 14,
          gap: 20
        }}
      >

        {foundRestaurantBranches && foundRestaurantBranches.length > 0 ?

          foundRestaurantBranches.map((item) =>

            <RestaurantBranchTile
              restaurant={item}
              height={"auto"}
              width={"100%"}
              onPress={() => router.push(`/restaurants/${item.restaurantId}/branches/${item.id}`)}
            />

          )

        : search ?

          foundRestaurants?.map((item) =>

            <TouchableOpacity
              key={item.id}
              style={{
                flexDirection: "row",
                gap: 10,
                width: "100%"
              }}
              activeOpacity={0.8}
              onPress={() => router.push(`/restaurants/${item.id}`)}
            >

              <Image
                source={item.logoUrl}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 30,
                  backgroundColor: Colors[colorScheme ?? "light"].logoBackground
                }}
                contentFit="cover"
              />

              <View
                style={{
                  flexDirection: "column",
                  paddingVertical: 10,
                  justifyContent: "center",
                  gap: 5,
                  flex: 1
                }}
              >

                <Text
                  style={{
                    fontFamily: "Metropolis-Regular",
                    fontSize: 18,
                    color: Colors[colorScheme ?? "light"].cardForeground
                  }}
                >
                  {item.name}
                </Text>

              </View>

            </TouchableOpacity>

          )
        
        : categories.slice(0, 5).map((item) => (

          <TouchableOpacity
            key={item.id}
            style={{
              flexDirection: "row",
              gap: 10,
              width: "100%"
            }}
            activeOpacity={0.8}
            onPress={() => router.push(`/categories/${item.id}`)}
          >

            <Image
              source={item.iconUrl}
              style={{
                width: 50,
                height: 50,
                borderRadius: 10,
                backgroundColor: Colors[colorScheme ?? "light"].logoBackground
              }}
              contentFit="cover"
            />

            <View
              style={{
                flexDirection: "column",
                paddingVertical: 10,
                justifyContent: "center",
                gap: 5,
                flex: 1
              }}
            >

              <Text
                style={{
                  fontFamily: "Metropolis-Regular",
                  fontSize: 18,
                  color: Colors[colorScheme ?? "light"].cardForeground
                }}
              >
                {item.name}
              </Text>

            </View>

          </TouchableOpacity>

        ))}

      </View>

    </ScrollView>

  );

}
