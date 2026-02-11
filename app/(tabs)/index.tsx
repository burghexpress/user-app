import React, { useState } from "react";
import { StyleSheet, Pressable, ScrollView, FlatList, useColorScheme, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Colors } from "@/constants/theme";
import { useRouter } from "expo-router";
import { Category, SAMPLE_CATEGORIES } from "../categories/interface";
import { Resturant, SAMPLE_RESTURANTS } from "../resturants/interface";



const TOPPICKS = [
  {
    label: "Burger",
    poster: require("@/assets/images/burger-1.jpg"),
    delivery_fee: 1.4,
    rating: 4,
    estimated_time: 21
  },
  {
    label: "Pizza",
    poster: require("@/assets/images/pizza-1.jpg"),
    delivery_fee: 1.6,
    rating: 4.8,
    estimated_time: 13
  },
  {
    label: "Beyti Kebab Served with Ayran Pickles",
    poster: require("@/assets/images/beyti-kebab-served-with-ayran-pickles.jpg"),
    delivery_fee: 0.99,
    rating: 4.7,
    estimated_time: 19
  },
  {
    label: "Burger Black Bread Bun with Fried Egg",
    poster: require("@/assets/images/burger-black-bread-bun-with-fried-egg.jpg"),
    delivery_fee: 2,
    rating: 4.4,
    estimated_time: 11
  },
  {
    label: "Fried Prawn Rice With Teriyaki Sauce",
    poster: require("@/assets/images/fried-prawn-rice-with-teriyaki-sauce.jpg"),
    delivery_fee: 0,
    rating: 4.8,
    estimated_time: 15
  }
];



export default function HomeScreen () {

  const [categories, setCategories] = useState<{
    count: number;
    results: Category[];
    next?: string;
    previous?: string;
  }>({
    count: SAMPLE_CATEGORIES.length,
    results: SAMPLE_CATEGORIES
  });

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

    <ScrollView>

      <ThemedView
        style={{
          gap: 30,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FF6347",
          height: "auto",
          paddingTop: 40,
          padding: 14,
        }}
      >

        <ThemedView
          style={{
            flexDirection: "row",
            padding: 4,
            paddingHorizontal: 14,
            alignItems: "center",
            backgroundColor: "#F08080",
            borderRadius: 20,
            gap: 4
          }}
        >

          <IconSymbol
            size={20}
            color={Colors[colorScheme ?? "light"].iconMuted}
            name="location"
          />

          <ThemedText
            type="defaultSemiBold"
            style={{
              fontSize: 12,
              color: Colors["light"].text,
              opacity: 0.7
            }}
          >
            Current Location
          </ThemedText>

          <IconSymbol
            size={20}
            color={Colors[colorScheme ?? "light"].icon}
            name="chevron.down"
          />

        </ThemedView>

        <ThemedView
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 10,
            rowGap: 40,
            alignItems: "center",
            justifyContent: "space-evenly",
            height: "auto",
            backgroundColor: "transparent"
          }}
        >

          {categories.results.map((category, categoryIndex) => (

            <TouchableOpacity
              key={categoryIndex}
              style={styles.categoryTile}
              onPress={() => router.push(`/categories/${category.id}`)}
              activeOpacity={0.8}
            >

              <Image
                source={category.icon}
                style={{
                  width: 50,
                  height: 50
                }}
              />

              <ThemedText
                type="default"
                style={{
                  textAlign: "center",
                  color: Colors["light"].text,
                  fontSize: 14,
                  opacity: 0.7
                }}
              >
                {category.name}
              </ThemedText>

            </TouchableOpacity>

          ))}

        </ThemedView>

      </ThemedView>

      <ThemedView
        style={styles.content}
      >

        <ThemedView
          style={styles.section}
        >

          <ThemedText
            type="title"
            style={{
              fontSize: 22,
              paddingLeft: 14
            }}
          >
            For You
          </ThemedText>

          <FlatList
            horizontal
            pagingEnabled
            data={resturants.results}
            style={{
              paddingLeft: 14
            }}
            renderItem={({ item }) => (

              <TouchableOpacity
                style={{
                  width: 100,
                  height: 100,
                  gap: 8,
                  alignContent: "center",
                  alignItems: "center",
                  padding: 10,
                  backgroundColor: Colors[colorScheme ?? "light"].surfaceMuted,
                  borderRadius: 10
                }}
                activeOpacity={0.8}
              >

                <Image
                  source={item.logo}
                  style={styles.forYouTileImage}
                  contentFit="cover"
                />

                <ThemedText
                  type="defaultSemiBold"
                  style={styles.forYouTileLabel}
                >
                  {item.name}
                </ThemedText>

              </TouchableOpacity>

            )}
            ItemSeparatorComponent={() => <ThemedView style={{ width: 12 }} />}
            showsHorizontalScrollIndicator={false}
          />

        </ThemedView>

        <ThemedView
          style={styles.section}
        >

          <ThemedText
            type="title"
            style={{
              fontSize: 22,
              paddingLeft: 14
            }}
          >
            Top Picks
          </ThemedText>

          <FlatList
            horizontal
            pagingEnabled
            data={TOPPICKS}
            style={{
              paddingLeft: 14
            }}
            renderItem={({ item }) => (

              <ThemedView
                style={{
                  width: 200,
                  height: 200,
                  gap: 4
                }}
              >

                <TouchableOpacity
                  onPress={() => router.push(`/resturants/${item.label}`)}
                  activeOpacity={0.8}
                >

                  <Image
                    source={item.poster}
                    style={{
                      width: 200,
                      height: 140,
                      borderRadius: 20
                    }}
                    contentFit="cover"
                  />

                </TouchableOpacity>

                <ThemedView
                  style={{
                    flexDirection: "column",
                    gap: 0
                  }}
                >

                  <ThemedView
                    style={{
                      flexDirection: "row",
                      gap: 8
                    }}
                  >

                    <TouchableOpacity
                      onPress={() => router.push(`/resturants`)}
                      activeOpacity={0.8}
                      style={{
                        flex: 1,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        gap: 10
                      }}
                    >

                      <ThemedText
                        type="defaultSemiBold"
                        style={{
                          fontSize: 18
                        }}
                      >
                        {item.label}
                      </ThemedText>

                      <IconSymbol
                        size={20}
                        color={Colors[colorScheme ?? "light"].icon}
                        name="heart"
                      />

                    </TouchableOpacity>

                  </ThemedView>

                  <ThemedText
                    type="default"
                    style={{
                      fontSize: 14
                    }}
                  >
                    {item.delivery_fee === 0 ?
                      "Free"
                    :
                      `${item.delivery_fee} CAD`
                    }
                    {" "}
                    Delivery Fee
                    {" "}
                    ( {item.estimated_time} mins )
                  </ThemedText>

                  <ThemedView
                    style={{
                      flexDirection: "row",
                      gap: 2,
                      alignItems: "center"
                    }}
                  >

                    <IconSymbol
                      size={14}
                      color={Colors[colorScheme ?? "light"].icon}
                      name="star.fill"
                    />

                    <ThemedText
                      type="defaultSemiBold"
                      style={{
                        fontSize: 12
                      }}
                    >
                      {item.rating}
                    </ThemedText>

                  </ThemedView>

                </ThemedView>

              </ThemedView>

            )}
            ItemSeparatorComponent={() => <ThemedView style={{ width: 12 }} />}
            showsHorizontalScrollIndicator={false}
          />

        </ThemedView>

      </ThemedView>

    </ScrollView>

  );

}



const styles = StyleSheet.create({
  categoryTile: {
    width: 80,
    height: 80,
    gap: 4,
    alignItems: "center",
    alignContent: "center",
    backgroundColor: "#F08080",
    padding: 4,
    borderRadius: 10
  },
  categoryTileImage: {
    width: "100%",
    height: "70%",
    borderRadius: 10
  },
  tilePressed: {
    transform: [{ scale: 0.98 }],
    opacity: 0.9,
  },
  content: {
    paddingTop: 14,
    gap: 30,
    height: "100%"
  },
  section: {
    gap: 10,
    width: "100%"
  },
  forYouTileImage: {
    width: "70%",
    height: "70%",
    borderRadius: 20
  },
  forYouTileLabel: {
    textAlign: "center",
    fontSize: 12,
    fontWeight: 700
  }
});

