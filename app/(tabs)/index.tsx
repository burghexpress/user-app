import React from "react";
import { StyleSheet, View, Pressable, Dimensions, ScrollView } from "react-native";
import { Image } from "expo-image";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";


const { width } = Dimensions.get("window");


const CATEGORIES = [
  { label: "Food", image: require("@/assets/images/burger-black-bread-bun-with-fried-egg.jpg") },
  { label: "Groceries", image: require("@/assets/images/basket-with-healthy-food.jpg") },
  { label: "Shops", image: require("@/assets/images/partial-react-logo.png") },
  { label: "Pharmacy", image: require("@/assets/images/partial-react-logo.png") },
  { label: "Courier", image: require("@/assets/images/partial-react-logo.png") },
];


const FORYOU = [
  {
    label: "Dominos",
    image: require("@/assets/images/dominos.png")
  },
  {
    label: "KFC",
    image: require("@/assets/images/kfc-logo.png")
  },
  {
    label: "Wendy's",
    image: require("@/assets/images/wendys-logo.png")
  },
  {
    label: "Burger King",
    image: require("@/assets/images/burger-king-logo.png")
  },
  {
    label: "Pizza hut",
    image: require("@/assets/images/pizza-hut-logo.png")
  }
];


const TOPPICKS = [
  {
    label: "Burger",
    image: require("@/assets/images/burger-1.jpg")
  },
  {
    label: "Pizza",
    image: require("@/assets/images/pizza-1.jpg")
  },
  {
    label: "Beyti Kebab Served with Ayran Pickles",
    image: require("@/assets/images/beyti-kebab-served-with-ayran-pickles.jpg")
  },
  {
    label: "Burger Black Bread Bun with Fried Egg",
    image: require("@/assets/images/burger-black-bread-bun-with-fried-egg.jpg")
  },
  {
    label: "Fried Prawn Rice With Teriyaki Sauce",
    image: require("@/assets/images/fried-prawn-rice-with-teriyaki-sauce.jpg")
  }
];


export default function HomeScreen () {

  return (

    <ScrollView
      style={{
        padding: 14
      }}
    >

      <View
        style={{
          gap: 20
        }}
      >

        <View
          style={styles.categoriesView}
        >

          {CATEGORIES.map((item, itemIndex) => (

            <Pressable
              key={itemIndex}
              style={({ pressed }) => [styles.categoryTile, pressed && styles.tilePressed]}
            >

              <Image
                source={item.image}
                style={styles.categoryTileImage}
                contentFit="cover"
              />

              <ThemedText
                type="defaultSemiBold"
                style={styles.categoryTileLabel}
              >
                {item.label}
              </ThemedText>

            </Pressable>

          ))}

        </View>

        <ThemedText
          type="title"
          style={{
            fontSize: 16
          }}
        >
          For You
        </ThemedText>

        <View
          style={styles.forYouView}
        >

          {FORYOU.map((item, itemIndex) => (

            <Pressable
              key={itemIndex}
              style={({ pressed }) => [styles.forYouTile, pressed && styles.tilePressed]}
            >

              <Image
                source={item.image}
                style={styles.forYouTileImage}
                contentFit="cover"
              />

              <ThemedText
                type="defaultSemiBold"
                style={styles.forYouTileLabel}
              >
                {item.label}
              </ThemedText>

            </Pressable>

          ))}

        </View>

        <ThemedText
          type="title"
          style={{
            fontSize: 16
          }}
        >
          Top Picks
        </ThemedText>

        <View
          style={styles.topPicksView}
        >

          {TOPPICKS.map((item, itemIndex) => (

            <Pressable
              key={itemIndex}
              style={({ pressed }) => [styles.topPicksTile, pressed && styles.tilePressed]}
            >

              <Image
                source={item.image}
                style={styles.topPicksTileImage}
                contentFit="cover"
              />

              <ThemedText
                type="defaultSemiBold"
                style={styles.topPicksTileLabel}
              >
                {item.label}
              </ThemedText>

            </Pressable>

          ))}

        </View>

      </View>

    </ScrollView>

  );

}



const styles = StyleSheet.create({
  categoriesView: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 20,
    rowGap: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#A30000",
    height: "auto",
    paddingTop: 20,
    paddingBottom: 40,
    borderRadius: 20
  },
  categoryTile: {
    width: 100,
    height: 100,
    gap: 10
  },
  tilePressed: {
    transform: [{ scale: 0.98 }],
    opacity: 0.9,
  },
  categoryTileImage: {
    width: "100%",
    height: "100%",
    borderRadius: 100
  },
  categoryTileLabel: {
    textAlign: "center",
    fontSize: 16
  },
  forYouView: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 20,
    rowGap: 60,
    alignItems: "center",
    justifyContent: "center",
    height: "auto",
    paddingBottom: 60,
    paddingTop: 20
  },
  forYouTile: {
    width: 50,
    height: 50,
    gap: 14
  },
  forYouTilePressed: {
    transform: [{ scale: 0.98 }],
    opacity: 0.9,
  },
  forYouTileImage: {
    width: "100%",
    height: "100%",
    borderRadius: 20
  },
  forYouTileLabel: {
    textAlign: "center",
    fontSize: 12
  },
  topPicksView: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 20,
    rowGap: 80,
    height: "auto",
    paddingBottom: 60,
    paddingTop: 20
  },
  topPicksTile: {
    width: 200,
    height: 200,
    gap: 14
  },
  topPicksTilePressed: {
    transform: [{ scale: 0.98 }],
    opacity: 0.9,
  },
  topPicksTileImage: {
    width: "100%",
    height: "100%",
    borderRadius: 20
  },
  topPicksTileLabel: {
    textAlign: "center",
    fontSize: 12
  }
});

