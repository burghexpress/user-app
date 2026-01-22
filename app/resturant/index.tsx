import { IconSymbol } from "@/components/ui/icon-symbol";
import { Image } from "expo-image";
import { FlatList, Pressable, ScrollView, StyleSheet } from "react-native";
import { ThemedInput } from "@/components/themed-input";
import { ThemedView } from "@/components/themed-view";
import { useThemeColor } from "@/hooks/use-theme-color";
import { ThemedText } from "@/components/themed-text";
import { Stack } from "expo-router";



const RESTURANT = {
  name: "Burger King",
  poster: require("@/assets/images/burger-1.jpg"),
  logo: require("@/assets/images/burger-king-logo.png"),
  like_percentage: 99,
  like_count: 497,
  review_count: 19,
  estimated_time: "15-35'",
  sections: [
    "Promotions",
    "Reviews",
    "Top Salers",
    "Cocktails",
    "Fish Menu",
    "Extras",
    "Drinks"
  ],
  promotions: [
    {
      label: "Burger",
      image: require("@/assets/images/burger-1.jpg"),
      price: 5.0
    },
    {
      label: "Pizza",
      image: require("@/assets/images/pizza-1.jpg"),
      price: 7.0
    },
    {
      label: "Beyti Kebab Served with Ayran Pickles",
      image: require("@/assets/images/beyti-kebab-served-with-ayran-pickles.jpg"),
      price: 3.99
    },
    {
      label: "Burger Black Bread Bun with Fried Egg",
      image: require("@/assets/images/burger-black-bread-bun-with-fried-egg.jpg"),
      price: 4.99
    },
    {
      label: "Fried Prawn Rice With Teriyaki Sauce",
      image: require("@/assets/images/fried-prawn-rice-with-teriyaki-sauce.jpg"),
      price: 6.99
    }
  ]
};



export default function ResturantScreen () {

  const backgroundColor = useThemeColor({}, "text");
  const textColor = useThemeColor({}, "text");

  return (

    <ScrollView>

      <Stack.Screen options={{ headerShown: false }} />

      <ThemedView
        style={styles.navigationContainer}
      >

        <Pressable
          style={{
            borderRadius: 20,
            backgroundColor: "white"
          }}
        >

          <IconSymbol
            size={40}
            color="black"
            name="chevron.left"
            style={{

            }}
          />

        </Pressable>

        <ThemedView
          style={{
            flexDirection: "row"
          }}
        >

          <Pressable
            style={{
              borderRadius: 20,
              backgroundColor: "white"
            }}
          >

          </Pressable>

        </ThemedView>

      </ThemedView>

      <Image
        source={RESTURANT.poster}
        style={styles.headerImage}
        contentFit="cover"
      />

      <ThemedView
        style={styles.content}
      >

        <Image
          source={RESTURANT.logo}
          style={styles.resturantLogo}
          contentFit="cover"
        />

        <ThemedText
          style={styles.title}
          type="title"
        >
          {RESTURANT.name}
        </ThemedText>

        <ThemedView
          style={{
            flexDirection: "row",
            gap: 10,
            justifyContent: "space-evenly"
          }}
        >

          <ThemedView
            style={{
              alignItems: "center"
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
                color={textColor}
                name="hand.thumbsup"
                style={{

                }}
              />

            </Pressable>

            <ThemedText
              type="defaultSemiBold"
              style={{
                textAlign: "center",
                fontSize: 12
              }}
            >
              {RESTURANT.like_percentage}{"% "}
              ( {RESTURANT.like_count} )
            </ThemedText>

            <ThemedText
              type="defaultSemiBold"
              style={{
                textAlign: "center",
                fontSize: 12
              }}
            >
              {RESTURANT.review_count}{" "}
              reviews
            </ThemedText>

          </ThemedView>

          <ThemedView
            style={{
              alignItems: "center"
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
                color={textColor}
                name="clock"
                style={{

                }}
              />

            </Pressable>

            <ThemedText
              type="defaultSemiBold"
              style={{
                textAlign: "center",
                fontSize: 12
              }}
            >
              {RESTURANT.estimated_time}
            </ThemedText>

          </ThemedView>

        </ThemedView>

        <ThemedView
          style={styles.section}
        >

          <FlatList
            horizontal
            pagingEnabled
            data={RESTURANT.sections}
            renderItem={({ item }) => (
              
              <Pressable
                style={
                  ({ pressed }) => [
                    styles.tabButton
                  ]
                }
              >

                <ThemedText
                  type="defaultSemiBold"
                  style={{
                    textAlign: "center",
                    fontSize: 20
                  }}
                >
                  {item}
                </ThemedText>

              </Pressable>

            )}
            ItemSeparatorComponent={() => <ThemedView style={{ width: 20 }} />}
            showsHorizontalScrollIndicator={false}
          />

        </ThemedView>

        <ThemedView
          style={styles.section}
        >

          <ThemedText
            type="title"
            style={{
              fontSize: 22
            }}
          >
            Promotions
          </ThemedText>

          <FlatList
            horizontal
            pagingEnabled
            data={RESTURANT.promotions}
            renderItem={({ item }) => (
              
              <Pressable
                style={
                  ({ pressed }) => [
                    styles.promotionsTile
                  ]
                }
              >

                <Image
                  source={item.image}
                  style={styles.promotionsTileImage}
                  contentFit="cover"
                />

                <ThemedView
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    gap: 8,
                  }}
                >

                  <ThemedView
                    style={{
                      flex: 1,
                      flexDirection: "column",
                    }}
                  >

                    <ThemedText
                      type="defaultSemiBold"
                      style={styles.promotionsTileLabel}
                    >
                      {item.label}
                    </ThemedText>

                    <ThemedView
                      style={{
                        flex: 1,
                        flexDirection: "row",
                        gap: 8,
                        alignItems: "center"
                      }}
                    >

                      <ThemedText
                        style={{
                          fontSize: 14
                        }}
                      >
                        USD{" "}
                        {item.price}
                      </ThemedText>

                    </ThemedView>

                  </ThemedView>

                </ThemedView>

              </Pressable>

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
  navigationContainer: {
    flex: 1,
    flexDirection: "row",
    position: "absolute",
    zIndex: 10,
    padding: 14,
    width: "100%",
    backgroundColor: "transparent"
  },
  title: {
    fontSize: 30
  },
  headerImage: {
    width: "100%",
    height: 200
  },
  resturantLogo: {
    width: 100,
    height: 100,
    borderRadius: 10,
    backgroundColor: "white",
    marginTop: -80
  },
  content: {
    width: "100%",
    height: "100%",
    padding: 14,
    gap: 20
  },
  section: {
    gap: 20
  },
  tabButton: {
  },
  promotionsContainer: {
    gap: 20
  },
  promotionsTile: {
    width: 200,
    height: 200,
    gap: 14
  },
  promotionsTileImage: {
    width: "100%",
    height: "70%",
    borderRadius: 20
  },
  promotionsTileLabelContainer: {
    flex: 1,
    flexDirection: "row",
    gap: 20,
  },
  promotionsTileLabel: {
    fontSize: 20,
    flex: 1
  },
});
