import React, { useState } from "react";
import { Pressable, ScrollView, FlatList, useColorScheme, TouchableOpacity, Text, View } from "react-native";
import { Image } from "expo-image";
import { Colors } from "@/constants/theme";
import { useRouter } from "expo-router";
import { StarIcon } from "@/components/icons/star";
import { WatchIcon } from "@/components/icons/watch";
import { SearchBar } from "@/components/search-bar";
import { Restaurant } from "@db-types";
import { menuItems, restaurants } from "@/data";
import { SafeAreaView } from "react-native-safe-area-context";



const TOPPICKS = [
  {
    id: 101,
    label: "Chicken Shawarma Wrap",
    poster: require("@/assets/images/burger-1.jpg"),
    delivery_fee: 1.99,
    rating: 4.8,
    review_count: "1.2k+",
    estimated_time: "12-15 min",
    price: 7.50,
    restaurantId: 1,
    restaurantBranchId: 1,
    menuItemId: 4,
    menuSectionId: 3,
    cuisineIds: [1, 3],
    categoryIds: [2, 5],
    halal: true
  },
  {
    id: 102,
    label: "Butter Chicken",
    poster: require("@/assets/images/burger-1.jpg"),
    delivery_fee: 2.49,
    rating: 4.9,
    review_count: "2.5k+",
    estimated_time: "20-25 min",
    price: 18.99,
    restaurantId: 2,
    restaurantBranchId: 3,
    menuItemId: 12,
    menuSectionId: 13,
    cuisineIds: [2],
    categoryIds: [1, 5],
    halal: true
  },
  {
    id: 103,
    label: "Dragon Roll",
    poster: require("@/assets/images/burger-1.jpg"),
    delivery_fee: 0.99,
    rating: 4.7,
    review_count: "850+",
    estimated_time: "18-22 min",
    price: 16.99,
    restaurantId: 3,
    restaurantBranchId: 5,
    menuItemId: 14,
    menuSectionId: 17,
    cuisineIds: [4],
    categoryIds: [1, 4],
    halal: false
  },
  {
    id: 104,
    label: "Falafel Plate",
    poster: require("@/assets/images/burger-1.jpg"),
    delivery_fee: 1.49,
    rating: 4.6,
    review_count: "630+",
    estimated_time: "15-20 min",
    price: 14.00,
    restaurantId: 1,
    restaurantBranchId: 1,
    menuItemId: 3,
    menuSectionId: 1,
    cuisineIds: [1, 3],
    categoryIds: [2, 5],
    halal: true,
    vegetarian: true
  },
  {
    id: 105,
    label: "Lamb Rogan Josh",
    poster: require("@/assets/images/burger-1.jpg"),
    delivery_fee: 2.99,
    rating: 4.8,
    review_count: "1.1k+",
    estimated_time: "25-30 min",
    price: 20.99,
    restaurantId: 2,
    restaurantBranchId: 4,
    menuItemId: 13,
    menuSectionId: 13,
    cuisineIds: [2],
    categoryIds: [1, 5],
    isSpicy: true
  },
  {
    id: 106,
    label: "Rainbow Roll",
    poster: require("@/assets/images/burger-1.jpg"),
    delivery_fee: 1.89,
    rating: 4.8,
    review_count: "720+",
    estimated_time: "20-25 min",
    price: 18.99,
    restaurantId: 3,
    restaurantBranchId: 6,
    menuItemId: 15,
    menuSectionId: 17,
    cuisineIds: [4],
    categoryIds: [1, 4],
    halal: false
  },
  {
    id: 107,
    label: "Tenderloin Kabob",
    poster: require("@/assets/images/burger-1.jpg"),
    delivery_fee: 1.99,
    rating: 4.9,
    review_count: "950+",
    estimated_time: "25-30 min",
    price: 27.00,
    restaurantId: 1,
    restaurantBranchId: 2,
    menuItemId: 6,
    menuSectionId: 5,
    cuisineIds: [1, 3],
    categoryIds: [1, 5],
    halal: true,
    chef_special: true
  },
  {
    id: 108,
    label: "Samosas (2 pcs)",
    poster: require("@/assets/images/burger-1.jpg"),
    delivery_fee: 0.99,
    rating: 4.5,
    review_count: "890+",
    estimated_time: "12-15 min",
    price: 6.99,
    restaurantId: 2,
    restaurantBranchId: 3,
    menuItemId: 10,
    menuSectionId: 11,
    cuisineIds: [2],
    categoryIds: [1, 5],
    vegetarian: true
  },
  {
    id: 109,
    label: "Spicy Tuna Roll",
    poster: require("@/assets/images/burger-1.jpg"),
    delivery_fee: 1.29,
    rating: 4.7,
    review_count: "680+",
    estimated_time: "15-18 min",
    price: 14.99,
    restaurantId: 3,
    restaurantBranchId: 5,
    menuItemId: 16,
    menuSectionId: 17,
    cuisineIds: [4],
    categoryIds: [1, 4],
    isSpicy: true
  },
  {
    id: 110,
    label: "Feast for 2",
    poster: require("@/assets/images/burger-1.jpg"),
    delivery_fee: 3.99,
    rating: 4.9,
    review_count: "430+",
    estimated_time: "30-35 min",
    price: 66.00,
    restaurantId: 1,
    restaurantBranchId: 2,
    menuItemId: 7,
    menuSectionId: 5,
    cuisineIds: [1, 3],
    categoryIds: [1, 2, 5],
    halal: true,
    chef_special: true,
    serves: 2
  },
  {
    id: 111,
    label: "Chicken Bowl",
    poster: require("@/assets/images/burger-1.jpg"),
    delivery_fee: 1.79,
    rating: 4.7,
    review_count: "520+",
    estimated_time: "15-20 min",
    price: 19.00,
    restaurantId: 1,
    restaurantBranchId: 1,
    menuItemId: 8,
    menuSectionId: 6,
    cuisineIds: [1, 3],
    categoryIds: [2, 5],
    halal: true
  },
  {
    id: 112,
    label: "Chicken Pakora",
    poster: require("@/assets/images/burger-1.jpg"),
    delivery_fee: 1.49,
    rating: 4.6,
    review_count: "410+",
    estimated_time: "15-18 min",
    price: 8.99,
    restaurantId: 2,
    restaurantBranchId: 4,
    menuItemId: 11,
    menuSectionId: 11,
    cuisineIds: [2],
    categoryIds: [1, 5],
    isSpicy: true
  }
];



export default function HomeScreen () {

  const colorScheme = useColorScheme();

  const router = useRouter();



  return (

    <SafeAreaView
      style={{
        backgroundColor: Colors[colorScheme ?? "light"].background
      }}
    >

      <ScrollView
        contentContainerStyle={{
          paddingBottom: 20
        }}
        showsVerticalScrollIndicator={false}
      >

        <View
          style={{
            height: "auto",
            marginTop: 40,
            padding: 20
          }}
        >

          <SearchBar
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
            FEATURED ITEMS
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

        <FlatList
          horizontal
          data={menuItems.slice(menuItems.length - 5, menuItems.length)}
          style={{
            marginTop: 10
          }}
          contentContainerStyle={{
            paddingHorizontal: 14,
            gap: 10
          }}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (

            <TouchableOpacity
              onPress={() => router.push(`/restaurants/${item.id}`)}
              activeOpacity={0.8}
              style={{
                width: 150,
                height: "auto",
                gap: 10
              }}
            >

              <Image
                source={item.imageUrl}
                style={{
                  width: 150,
                  height: 200,
                  borderRadius: 20
                }}
                contentFit="cover"
              />

              <View
                style={{
                  flexDirection: "column",
                  gap: 5
                }}
              >

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 10
                  }}
                >

                  <Text
                    style={{
                      fontSize: 18,
                      fontFamily: "Atelia"
                    }}
                  >
                    {item.name}
                  </Text>

                </View>

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
                      {4.8}({"1.2k+"})
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
                      {"12-15 min"}
                    </Text>

                  </View>

                </View>

                <Text
                  style={{
                    fontSize: 28,
                    fontFamily: "Atelia",
                    color: Colors[colorScheme ?? "light"].cardPrice
                  }}
                >
                  {item.price}$
                </Text>

              </View>

            </TouchableOpacity>

          )}
        />

        <View
          style={{
            marginTop: 30,
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
            QUICK DELIVERY
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

        <FlatList
          horizontal
          data={TOPPICKS}
          style={{
            marginTop: 10
          }}
          contentContainerStyle={{
            paddingHorizontal: 14,
            gap: 10
          }}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (

            <View
              style={{
                width: 150,
                height: "auto",
                gap: 10
              }}
            >

              <TouchableOpacity
                onPress={() => router.push(`/restaurants/${item.id}`)}
                activeOpacity={0.8}
              >

                <Image
                  source={item.poster}
                  style={{
                    width: 150,
                    height: 200,
                    borderRadius: 20
                  }}
                  contentFit="cover"
                />

              </TouchableOpacity>

              <View
                style={{
                  flexDirection: "column",
                  gap: 5
                }}
              >

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 10
                  }}
                >

                  <TouchableOpacity
                    onPress={() => router.push(`/restaurants/${item.restaurantId}`)}
                    activeOpacity={0.8}
                  >

                    <Text
                      style={{
                        fontSize: 18,
                        fontFamily: "Atelia"
                      }}
                    >
                      {item.label}
                    </Text>

                  </TouchableOpacity>

                </View>

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
                      {item.rating}({item.review_count})
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
                      {item.estimated_time}
                    </Text>

                  </View>

                </View>

                <Text
                  style={{
                    fontSize: 28,
                    fontFamily: "Atelia",
                    color: Colors[colorScheme ?? "light"].cardPrice
                  }}
                >
                  {item.price}$
                </Text>

              </View>

            </View>

          )}
        />

        <View
          style={{
            marginTop: 30,
            flexDirection: "row",
            gap: 10,
            justifyContent: "space-between",
            paddingHorizontal: 14
          }}
        >

          <Text
            style={{
              fontFamily: "Atelia",
              fontSize: 32
            }}
          >
            NEAR YOU
          </Text>

        </View>

        <FlatList
          horizontal
          data={restaurants}
          style={{
            marginTop: 20
          }}
          contentContainerStyle={{
            paddingHorizontal: 14,
            gap: 10
          }}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (

            <TouchableOpacity
              key={item.id}
              style={{
                flexDirection: "column",
                gap: 10,
                alignItems: "center",
                width: 100
              }}
              activeOpacity={0.8}
              onPress={() => router.push(`/restaurants/${item.id}`)}
            >

              <Image
                source={item.logoUrl}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 20,
                  backgroundColor: Colors[colorScheme ?? "light"].logoBackground
                }}
                contentFit="cover"
              />

              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Metropolis-SemiBold",
                  textAlign: "center"
                }}
              >
                {item.name}
              </Text>

            </TouchableOpacity>

          )}

        />

        <View
          style={{
            marginTop: 30,
            flexDirection: "row",
            gap: 10,
            justifyContent: "space-between",
            paddingHorizontal: 14
          }}
        >

          <Text
            style={{
              fontFamily: "Atelia",
              fontSize: 32
            }}
          >
            FROM TOP RESTAURANTS
          </Text>

        </View>

        <View
          style={{
            marginTop: 10,
            padding: 14,
            gap: 10
          }}
        >

          {menuItems.slice(0, 5).map((item) => (

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
                source={item.imageUrl}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 20,
                  backgroundColor: Colors[colorScheme ?? "light"].logoBackground
                }}
                contentFit="cover"
              />

              <View
                style={{
                  flexDirection: "column",
                  paddingVertical: 10,
                  gap: 5,
                  flex: 1
                }}
              >

                <Text
                  style={{
                    fontFamily: "Atelia",
                    fontSize: 18
                  }}
                >
                  {item.name}
                </Text>

                <Text
                  style={{
                    fontSize: 28,
                    fontFamily: "Atelia",
                    color: Colors[colorScheme ?? "light"].cardPrice
                  }}
                >
                  {item.price}$
                </Text>

              </View>

              <TouchableOpacity
                style={{
                  gap: 10,
                  backgroundColor: Colors[colorScheme ?? "light"].buttonBackground,
                  minHeight: 40,
                  minWidth: 40,
                  borderRadius: 40,
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "row",
                  marginVertical: "auto"
                }}
                activeOpacity={0.8}
              >
                <Text
                  style={{
                    fontFamily: "Atelia",
                    fontSize: 32,
                    color: Colors[colorScheme ?? "light"].buttonForeground
                  }}
                >
                  +
                </Text>
              </TouchableOpacity>

            </TouchableOpacity>

          ))}

        </View>

      </ScrollView>

    </SafeAreaView>

  );

}
