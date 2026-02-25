import { useEffect, useState } from "react";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Image } from "expo-image";
import { FlatList, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, useColorScheme, View } from "react-native";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { Colors } from "@/constants/theme";
import { DishTileHorizontal } from "@/components/restaurant/dish-tile-horizontal";
import { DishTile } from "@/components/restaurant/dish-tile";
import { Category, Cuisine, Restaurant, RestaurantBranch } from "@db-types";
import { restaurantBranches, restaurants } from "@/data";
import { MagnifierIcon } from "@/components/icons/magnifier";



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
        style={{
          backgroundColor: Colors[colorScheme ?? "light"].background
        }}
        contentContainerStyle={{
          paddingBottom: 20
        }}
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
            marginTop: 70,
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

    <ScrollView>

      <Stack.Screen
        options={{ headerShown: false }}
      />

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          gap: 10,
          position: "absolute",
          zIndex: 10,
          padding: 14,
          marginTop: 40,
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

          <Pressable
            style={{
              borderRadius: 20,
              width: 40,
              height: 40,
              backgroundColor: Colors[colorScheme ?? "light"].headerButtonBackground,
              justifyContent: "center",
              alignItems: "center"
            }}
          >

            <MagnifierIcon
              size={24}
              color={Colors[colorScheme ?? "light"].headerButtonForeground}
            />

          </Pressable>

          <Pressable
            style={{
              borderRadius: 20,
              width: 40,
              height: 40,
              backgroundColor: Colors[colorScheme ?? "light"].headerButtonBackground,
              justifyContent: "center",
              alignItems: "center"
            }}
          >

            <IconSymbol
              size={24}
              color={Colors[colorScheme ?? "light"].headerButtonForeground}
              name="heart"
            />

          </Pressable>

          <Pressable
            style={{
              borderRadius: 20,
              width: 40,
              height: 40,
              backgroundColor: Colors[colorScheme ?? "light"].headerButtonBackground,
              justifyContent: "center",
              alignItems: "center"
            }}
          >

            <IconSymbol
              size={30}
              color={Colors[colorScheme ?? "light"].headerButtonForeground}
              name="line.horizontal.3"
            />

          </Pressable>

        </View>

      </View>

      <Image
        source={restaurant.posterUrl}
        style={{
          width: "100%",
          height: 200
        }}
        contentFit="cover"
      />

      <View
        style={{
          flexDirection: "column",
          gap: 10
        }}
      >

        <Image
          source={restaurant.logoUrl}
          style={{
            width: 100,
            height: 100,
            borderRadius: 10,
            padding: 10,
            backgroundColor: Colors[colorScheme ?? "light"].logoBackground,
            marginTop: -80,
            marginLeft: 14
          }}
          contentFit="cover"
        />

        <Text
          style={{
            fontFamily: "Atelia",
            fontSize: 22,
            marginLeft: 14
          }}
        >
          {restaurant.name}
        </Text>

        <View
          style={{
            flexDirection: "row",
            gap: 10,
            justifyContent: "space-evenly",
            padding: 14
          }}
        >

          <View
            style={{
              alignContent: "center",
              justifyContent: "center"
            }}
          >

            <Pressable
              style={{
                borderRadius: 20,
                alignSelf: "center"
              }}
            >

              <IconSymbol
                size={24}
                color={Colors[colorScheme ?? "light"].icon}
                name="star"
                style={{

                }}
              />

            </Pressable>

            <Text
              style={{
                fontFamily: "Metropolis-Light",
                fontSize: 12,
                alignSelf: "center"
              }}
            >
              {"rating"}{" "}
              ( {"like count"} )
            </Text>

            <Text
              style={{
                fontFamily: "Metropolis-Light",
                textAlign: "center",
                fontSize: 12
              }}
            >
              {"review count"}{" "}
              reviews
            </Text>

          </View>

          <View
            style={{
              alignContent: "center",
              justifyContent: "center"
            }}
          >

            <Text
              style={{
                fontFamily: "Metropolis-Light",
                fontSize: 12,
                alignSelf: "center"
              }}
            >
              {"Delivery fee"}$
            </Text>

            <Text
              style={{
                fontSize: 12,
                alignSelf: "center"
              }}
            >
              Delivery fee
            </Text>

          </View>

          <View
            style={{
              alignContent: "center",
              justifyContent: "center"
            }}
          >

            <Pressable
              style={{
                borderRadius: 20,
                alignSelf: "center"
              }}
            >

              <IconSymbol
                size={28}
                color={Colors[colorScheme ?? "light"].icon}
                name="clock.fill"
              />

            </Pressable>

            <Text
              style={{
                textAlign: "center",
                fontSize: 12
              }}
            >
              {"estimated time"}
            </Text>

          </View>

        </View>

        <FlatList
          horizontal
          pagingEnabled
          contentContainerStyle={{
            paddingHorizontal: 14
          }}
          data={cuisines}
          renderItem={({ item }) => (
            
            <Pressable
              style={
                ({ pressed }) => [
                  styles.tabButton
                ]
              }
            >

              <Text
                style={{
                  textAlign: "center",
                  fontSize: 20
                }}
              >
                {item.name}
              </Text>

            </Pressable>

          )}
          ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
          showsHorizontalScrollIndicator={false}
        />

        <View
          style={{
            flexDirection: "column",
            gap: 20,
            paddingHorizontal: 14
          }}
        >

          <View
            style={{
              marginTop: 20,
              flexDirection: "row",
              gap: 10,
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >

            <Text
              style={{
                fontFamily: "Atelia",
                fontSize: 20
              }}
            >
              Branches
            </Text>

            <TouchableOpacity
              style={{
                paddingHorizontal: 5,
                paddingVertical: 4,
                gap: 10,
                backgroundColor: Colors[colorScheme ?? "light"].buttonBackground,
                minHeight: 30,
                minWidth: 63,
                borderRadius: 30,
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row"
              }}
              activeOpacity={0.8}
              onPress={() => router.push(`/restaurants/${restaurantId}/branches`)}
            >
              <Text
                style={{
                  fontFamily: "Metropolis-Medium",
                  fontSize: 10,
                  color: Colors[colorScheme ?? "light"].buttonForeground
                }}
              >
                See all
              </Text>
            </TouchableOpacity>

          </View>

          {branches?.map((branch, branchIndex) => (

            <TouchableOpacity
              key={branchIndex}
              style={{
                flexDirection: "column",
                gap: 10
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

              <Text
                style={{
                  fontSize: 20,
                  fontFamily: "Metropolis-SemiBold"
                }}
              >
                {branch.name}
              </Text>

              <Text
                style={{
                  fontSize: 20,
                  fontFamily: "Metropolis-Light"
                }}
              >
                {branch.addressId}
              </Text>

            </TouchableOpacity>

          ))}

        </View>

      </View>

    </ScrollView>

  );

}



const styles = StyleSheet.create({
  title: {
    marginLeft: 14,
    fontSize: 24
  },
  tabButton: {
  },
  offersContainer: {
    paddingLeft: 14,
    gap: 20
  },
  offersTileLabelContainer: {
    flex: 1,
    flexDirection: "row",
    gap: 20,
  }
});
