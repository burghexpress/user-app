import React, { useState } from "react";
import { StyleSheet, Pressable, ScrollView, FlatList, useColorScheme, TouchableOpacity, Text, View } from "react-native";
import { Image } from "expo-image";
import { ThemedView } from "@/components/themed-view";
import { Colors } from "@/constants/theme";
import { useRouter } from "expo-router";
import { Resturant, SAMPLE_RESTURANTS } from "../resturants/interface";
import { MagnifierIcon } from "@/components/icons/magnifier";
import { StarIcon } from "@/components/icons/star";
import { WatchIcon } from "@/components/icons/watch";



const TOPPICKS = [
  {
    label: "Burger",
    poster: require("@/assets/images/burger-1.jpg"),
    delivery_fee: 1.4,
    rating: 4,
    review_count: "520+",
    estimated_time: "17-21 min",
    price: 15.49
  },
  {
    label: "Pizza",
    poster: require("@/assets/images/pizza-1.jpg"),
    delivery_fee: 1.6,
    rating: 4.8,
    review_count: "500+",
    estimated_time: "13 min",
    price: 17.0
  },
  {
    label: "Beyti Kebab Served with Ayran Pickles",
    poster: require("@/assets/images/beyti-kebab-served-with-ayran-pickles.jpg"),
    delivery_fee: 0.99,
    rating: 4.7,
    review_count: "500+",
    estimated_time: "20-30 min",
    price: 13.0
  },
  {
    label: "Burger Black Bread Bun with Fried Egg",
    poster: require("@/assets/images/burger-black-bread-bun-with-fried-egg.jpg"),
    delivery_fee: 2,
    rating: 4.4,
    review_count: "13",
    estimated_time: "29 min",
    price: 9.0
  },
  {
    label: "Fried Prawn Rice With Teriyaki Sauce",
    poster: require("@/assets/images/fried-prawn-rice-with-teriyaki-sauce.jpg"),
    delivery_fee: 0,
    rating: 4.8,
    review_count: "112",
    estimated_time: "20-40 min",
    price: 7.2
  }
];



export default function HomeScreen () {

  const [resturants, setResturants] = useState<{
    count: number;
    results: Resturant[];
    next?: string;
    previous?: string;
  }>({
    count: SAMPLE_RESTURANTS.length,
    results: SAMPLE_RESTURANTS
  });

  const colorScheme = useColorScheme();

  const router = useRouter();



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

        <Pressable
          style={{
            flexDirection: "row",
            padding: 13,
            paddingHorizontal: 20,
            alignItems: "center",
            justifyContent: "flex-start",
            backgroundColor: Colors[colorScheme ?? "light"].searchBarBackground,
            borderRadius: 60,
            gap: 10
          }}
        >

          <MagnifierIcon
            color={Colors[colorScheme === "light" ? "dark" : "light"].searchBarForeground}
          />

          <Text
            style={{
              fontSize: 18,
              color: Colors["light"].searchBarForeground,
              fontFamily: "Metropolis-Regular"
            }}
          >
            Search
          </Text>

        </Pressable>

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

        <Pressable
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
        </Pressable>

      </View>

      <FlatList
        horizontal
        pagingEnabled
        data={TOPPICKS}
        style={{
          marginTop: 10,
          paddingLeft: 14
        }}
        renderItem={({ item }) => (

          <View
            style={{
              width: 150,
              height: "auto",
              gap: 10
            }}
          >

            <TouchableOpacity
              onPress={() => router.push(`/resturants/${item.label}`)}
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
                  onPress={() => router.push(`/resturants`)}
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
        ItemSeparatorComponent={() => <ThemedView style={{ width: 12 }} />}
        showsHorizontalScrollIndicator={false}
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

        <Pressable
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
        </Pressable>

      </View>

      <FlatList
        horizontal
        pagingEnabled
        data={TOPPICKS}
        style={{
          marginTop: 10,
          paddingLeft: 14
        }}
        renderItem={({ item }) => (

          <View
            style={{
              width: 150,
              height: "auto",
              gap: 10
            }}
          >

            <TouchableOpacity
              onPress={() => router.push(`/resturants/${item.label}`)}
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
                  onPress={() => router.push(`/resturants`)}
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
        ItemSeparatorComponent={() => <ThemedView style={{ width: 12 }} />}
        showsHorizontalScrollIndicator={false}
      />

    </ScrollView>

  );

}
