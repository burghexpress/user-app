import React from "react";
import { StyleSheet, Pressable, Dimensions, ScrollView, FlatList, useColorScheme } from "react-native";
import { Image } from "expo-image";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Colors } from "@/constants/theme";
import { useRouter } from "expo-router";


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

  const colorScheme = useColorScheme();

  const router = useRouter();

  return (

    <ScrollView>

      <ThemedView
        style={styles.headerContainer}
      >

        <ThemedView
          style={[
            styles.locationContainer
          ]}
        >

          <IconSymbol
            size={20}
            color={Colors[colorScheme ?? "light"].icon}
            name="location"
          />

          <ThemedText
            type="defaultSemiBold"
            style={{
              fontSize: 12,
              color: Colors[colorScheme ?? "light"].text
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
          style={styles.categoriesContainer}
        >

          {CATEGORIES.map((item, itemIndex) => (

            <Pressable
              key={itemIndex}
              style={({ pressed }) => [styles.categoryTile, pressed && styles.tilePressed]}
            >

              <IconSymbol
                size={34}
                color={Colors[colorScheme ?? "light"].icon}
                name="table"
              />

              <ThemedText
                type="default"
                style={[
                  styles.categoryTileLabel,
                  {
                    color: Colors[colorScheme ?? "light"].text,
                    fontSize: 14
                  }
                ]}
              >
                {item.label}
              </ThemedText>

            </Pressable>

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
            data={FORYOU}
            style={{
              paddingLeft: 14
            }}
            renderItem={({ item }) => (

              <Pressable
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
                style={styles.topPicksTile}
              >

                <Pressable
                  onPress={() => router.navigate("/resturant")}
                >

                  <Image
                    source={item.poster}
                    style={styles.topPicksTileImage}
                    contentFit="cover"
                  />

                </Pressable>

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

                    <Pressable
                      onPress={() => router.navigate("/resturant")}
                    >

                      <ThemedText
                        type="defaultSemiBold"
                        style={{
                          flex: 1,
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

                    </Pressable>

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
  headerContainer: {
    gap: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF6347",
    height: "auto",
    paddingTop: 40,
    padding: 14,
  },
  locationContainer: {
    flexDirection: "row",
    padding: 4,
    paddingHorizontal: 14,
    alignItems: "center",
    backgroundColor: "#F08080",
    borderRadius: 20,
    gap: 4
  },
  categoriesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    rowGap: 40,
    alignItems: "center",
    justifyContent: "space-evenly",
    height: "auto",
    backgroundColor: "transparent"
  },
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
  categoryTileLabel: {
    textAlign: "center",
    fontSize: 16
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
  forYouTile: {
    width: 100,
    height: 100,
    gap: 14,
    alignContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#E8E8E8",
    borderRadius: 10
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
  },
  topPicksTile: {
    width: 200,
    height: 200,
    gap: 4
  },
  topPicksTilePressed: {
    transform: [{ scale: 0.98 }],
    opacity: 0.9,
  },
  topPicksTileImage: {
    width: "100%",
    height: "70%",
    borderRadius: 20
  }
});

