import { useEffect, useState } from "react";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Image } from "expo-image";
import { FlatList, Pressable, ScrollView, Text, TouchableOpacity, useColorScheme, View } from "react-native";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { Colors } from "@/constants/theme";
import { Category, Cuisine, Restaurant, RestaurantBranch } from "@db-types";
import { restaurantBranches, restaurants } from "@/data";
import { MagnifierIcon } from "@/components/icons/magnifier";
import { StarIcon } from "@/components/icons/star";
import { WatchIcon } from "@/components/icons/watch";
import { SafeAreaView } from "react-native-safe-area-context";



export default function RestaurantScreen () {

  const { restaurantId } = useLocalSearchParams<{ restaurantId: string; }>();

  const [restaurant, setRestaurant] = useState<Restaurant>();
  const [isFetchingRestaurant, setIsFetchingRestaurant] = useState(false);

  const [restaurantCategories, setRestaurantCategories] = useState<Category[]>();
  const [isFetchingRestaurantCategories, setIsFetchingRestaurantCategories] = useState(false);

  const [cuisines, setCuisines] = useState<Cuisine[]>();
  const [isFetchingCuisines, setIsFetchingCuisines] = useState(false);

  const [branches, setBranches] = useState<RestaurantBranch[]>();
  const [isFetchingBranches, setIsFetchingBranches] = useState(false);

  const colorScheme = useColorScheme();

  const router = useRouter();



  useEffect(() => {
    fetchRestaurant();
    fetchBranches();
  }, []);



  const fetchRestaurant = () => {
    setIsFetchingRestaurant(true);

    const foundRestaurant = restaurants.find(r => r.id === parseInt(restaurantId));
    if (foundRestaurant) {
      setRestaurant(foundRestaurant);
    }

    setIsFetchingRestaurant(false);
  };



  const fetchBranches = () => {
    setIsFetchingBranches(true);

    const branches = restaurantBranches.filter(rb => rb.restaurantId === parseInt(restaurantId));
    setBranches(branches);

    setIsFetchingRestaurant(false);
  };



  if (!restaurant) {

    if (isFetchingRestaurant) {
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
            Restaurant not found
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
            justifyContent: "space-between",
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

          <View
            style={{
              flexDirection: "row",
              backgroundColor: "transparent",
              gap: 10
            }}
          >

            <TouchableOpacity
              onPress={() => router.push(`/restaurants/${restaurantId}/search`)}
              style={{
                borderRadius: 20,
                width: 40,
                height: 40,
                backgroundColor: Colors[colorScheme ?? "light"].headerButtonBackground,
                justifyContent: "center",
                alignItems: "center"
              }}
              activeOpacity={0.8}
            >

              <MagnifierIcon
                size={24}
                color={Colors[colorScheme ?? "light"].headerButtonForeground}
              />

            </TouchableOpacity>

          </View>

        </View>

        <Image
          source={restaurant.logoUrl}
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            padding: 10,
            backgroundColor: Colors[colorScheme ?? "light"].logoBackground,
            marginTop: 30,
            marginHorizontal: "auto"
          }}
          contentFit="cover"
        />

        <Text
          style={{
            fontFamily: "Atelia",
            fontSize: 22,
            paddingHorizontal: 14,
            marginTop: 20,
            textAlign: "center",
            color: Colors[colorScheme ?? "light"].foreground
          }}
        >
          {restaurant.name}
        </Text>

        <Text
          style={{
            fontFamily: "Metropolis-Regular",
            fontSize: 18,
            textAlign: "center",
            paddingHorizontal: 14,
            color: Colors[colorScheme ?? "light"].foreground
          }}
        >
          {restaurant.description}
        </Text>

        <FlatList
          horizontal
          pagingEnabled
          contentContainerStyle={{
            paddingHorizontal: 14,
            marginTop: 30
          }}
          data={cuisines}
          renderItem={({ item }) => (
            
            <TouchableOpacity
              style={{
              }}
            >

              <Text
                style={{
                  textAlign: "center",
                  fontSize: 20,
                  color: Colors[colorScheme ?? "light"].foreground
                }}
              >
                {item.name}
              </Text>

            </TouchableOpacity>

          )}
          ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
          showsHorizontalScrollIndicator={false}
        />

        <View
          style={{
            marginTop: 30,
            paddingHorizontal: 14
          }}
        >

          {branches?.map((branch, branchIndex) => (

            <TouchableOpacity
              key={branchIndex}
              style={{
                flexDirection: "column",
                gap: 10,
                marginTop: 20
              }}
              activeOpacity={0.8}
              onPress={() => router.push(`/restaurants/${restaurantId}/branches/${branch.id}`)}
            >

              <Image
                source={branch.posterUrl}
                style={{
                  width: "100%",
                  height: 150,
                  borderRadius: 20,
                  backgroundColor: Colors[colorScheme ?? "light"].logoBackground
                }}
                contentFit="cover"
              />

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 10
                }}
              >

                <Text
                  style={{
                    fontSize: 18,
                    fontFamily: "Atelia",
                    color: Colors[colorScheme ?? "light"].cardForeground,
                    flexShrink: 1
                  }}
                  numberOfLines={2}
                  ellipsizeMode="tail"
                >
                  {branch.name}
                </Text>

                <TouchableOpacity
                  activeOpacity={0.8}
                >

                  <IconSymbol
                    size={24}
                    color={Colors[colorScheme ?? "light"].headerButtonForeground}
                    name="heart"
                  />

                </TouchableOpacity>

              </View>

              <Text
                style={{
                  fontFamily: "Metropolis-Regular",
                  fontSize: 10,
                  color: Colors[colorScheme ?? "light"].cardSecondaryText
                }}
              >
                ${2} Delivery fee
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 10
                }}
              >

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 5
                  }}
                >

                  <StarIcon
                    color={Colors[colorScheme ?? "light"].cardIcon}
                    size={10}
                  />

                  <Text
                    style={{
                      fontFamily: "Metropolis-Regular",
                      fontSize: 8,
                      color: Colors[colorScheme ?? "light"].cardSecondaryText
                    }}
                  >
                    {4.5}({2000}+)
                  </Text>

                </View>

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 5
                  }}
                >

                  <WatchIcon
                    color={Colors[colorScheme ?? "light"].cardIcon}
                    size={10}
                  />

                  <Text
                    style={{
                      fontFamily: "Metropolis-Regular",
                      fontSize: 8,
                      color: Colors[colorScheme ?? "light"].cardSecondaryText
                    }}
                  >
                    {"13-19 mins"}
                  </Text>

                </View>

              </View>

            </TouchableOpacity>

          ))}

        </View>

      </ScrollView>

    </SafeAreaView>

  );

}
