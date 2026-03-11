import React, { useEffect, useState } from "react";
import { ScrollView, useColorScheme, TouchableOpacity, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Stack } from "expo-router";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Colors } from "@/constants/theme";
import { Category, RestaurantBranch } from "@db-types";
import { categories, restaurantBranches } from "@/data";
import { RestaurantBranchTile } from "@/components/restaurant/branch-tile";



export default function CategoryDetail () {

  const { categoryId } = useLocalSearchParams<{ categoryId: string; }>(); 

  const [category, setCategory] = useState<Category>();
  const [isFetchingCategory, setIsFetchingCategory] = useState(false);
  const [foundResturantBranches, setFoundResturantBranches] = useState<RestaurantBranch[]>();

  const colorScheme = useColorScheme();

  const router = useRouter();


  useEffect(() => {
    fetchCategory();
    fetchRestaurantBranches();
  }, []);


  const fetchCategory = () => {
    const foundCategory = categories.find(c => c.id === parseInt(categoryId));
    if (foundCategory) {
      setCategory(foundCategory);
    }
  };


  const fetchRestaurantBranches = () => {
    const results = restaurantBranches;
    setFoundResturantBranches(results);
  };


  if (!category) {

    if (isFetchingCategory) {
      return null;
    }

    return (

      <ScrollView
        contentContainerStyle={{
          paddingBottom: 20
        }}
        style={{
          backgroundColor: Colors[colorScheme ?? "light"].background
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
            backgroundColor: Colors[colorScheme ?? "light"].headerButtonBackground,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
            marginLeft: 24
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
            padding: 14,
            marginTop: 20
          }}
        >

          <Text
            style={{
              fontSize: 22,
              paddingLeft: 14,
              fontFamily: "Atelia"
            }}
          >
            Category not found
          </Text>

          <Text
            style={{
              fontSize: 22,
              paddingLeft: 14,
              fontFamily: "Metropolis-Medium"
            }}
          >
          </Text>

        </View>

      </ScrollView>

    );

  }



  return (

    <SafeAreaView
      style={{
        backgroundColor: Colors[colorScheme ?? "light"].background,
        flex: 1
      }}
    >

      <ScrollView
        contentContainerStyle={{
          paddingBottom: 30
        }}
        showsVerticalScrollIndicator={false}
      >

        <Stack.Screen
          options={{ headerShown: false }}
        />

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 30,
            marginLeft: 14
          }}
        >

          <TouchableOpacity
            style={{
              borderRadius: 20,
              width: 40,
              height: 40,
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
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 10,
              marginTop: 20,
              paddingHorizontal: 14,
              marginBottom: 20
            }}
          >
            <Text
              style={{
                fontSize: 24,
                fontFamily: "Atelia",
                color: Colors[colorScheme ?? "light"].foreground
              }}
            >
              {category.name}
            </Text>
          </View>

        </View>

        <View
          style={{
            flexDirection: "column",
            marginTop: 30,
            gap: 20,
            paddingHorizontal: 10
          }}
        >

          {foundResturantBranches?.map((branch) => (

            <RestaurantBranchTile
              key={branch.id}
              restaurant={branch}
              width={"100%"}
              height={150}
              onPress={() => router.push(`/restaurants/${branch.restaurantId}/branches/${branch.id}`)}
            />

          ))}

        </View>

      </ScrollView>

    </SafeAreaView>

  );

}
