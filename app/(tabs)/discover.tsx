import { IconSymbol } from "@/components/ui/icon-symbol";
import { Image } from "expo-image";
import { FlatList, Pressable, ScrollView, StyleSheet } from "react-native";
import { ThemedInput } from "@/components/themed-input";
import { ThemedView } from "@/components/themed-view";
import { useThemeColor } from "@/hooks/use-theme-color";
import { ThemedText } from "@/components/themed-text";



const TOPPERFORMERS = [
  {
    label: "Burger",
    image: require("@/assets/images/burger-1.jpg"),
    resturant: "Burger king",
    price: 5.0
  },
  {
    label: "Pizza",
    image: require("@/assets/images/pizza-1.jpg"),
    resturant: "Dominos",
    price: 7.0
  },
  {
    label: "Beyti Kebab Served with Ayran Pickles",
    image: require("@/assets/images/beyti-kebab-served-with-ayran-pickles.jpg"),
    resturant: "Wendy's",
    price: 3.99
  },
  {
    label: "Burger Black Bread Bun with Fried Egg",
    image: require("@/assets/images/burger-black-bread-bun-with-fried-egg.jpg"),
    resturant: "Burger King",
    price: 4.99
  },
  {
    label: "Fried Prawn Rice With Teriyaki Sauce",
    image: require("@/assets/images/fried-prawn-rice-with-teriyaki-sauce.jpg"),
    resturant: "Wendy's",
    price: 6.99
  }
];



const STORESNEARYOU = [
  {
    label: "Walmart",
    logo: require("@/assets/images/walmart-logo.png"),
    time: "46 min"
  },
  {
    label: "Costco",
    logo: require("@/assets/images/costco-logo.png"),
    time: "20 min"
  },
  {
    label: "Kroger",
    logo: require("@/assets/images/kroger-logo.png"),
    time: "33 min"
  },
  {
    label: "Best Buy",
    logo: require("@/assets/images/best-buy-logo.png"),
    time: "16 min"
  },
  {
    label: "ALDI",
    logo: require("@/assets/images/aldi-logo.png"),
    time: "9 min"
  }
];



export default function DiscoverScreen () {

  const backgroundColor = useThemeColor({}, "text");
  const textColor = useThemeColor({}, "text");

  return (

    <ScrollView>

      <ThemedView
        style={styles.header}
      >

        <ThemedText
          style={styles.headerTitle}
          type="title"
        >
          Discover
        </ThemedText>

        <Image
          source={require("@/assets/images/flag-stuck-world-map-closeup.jpg")}
          style={styles.headerImage}
          contentFit="cover"
        />

      </ThemedView>

      <ThemedView
        style={styles.content}
      >

        <ThemedView
          style={{
            borderColor: textColor,
            ...styles.searchContainer
          }}
        >

          <IconSymbol
            size={32}
            color={textColor}
            name="magnifyingglass.circle"
            style={styles.searchIcon}
          />

          <ThemedInput
            placeholder="Search"
            style={styles.searchInput}
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
            Top Performers
          </ThemedText>

          <FlatList
            horizontal
            pagingEnabled
            data={TOPPERFORMERS}
            renderItem={({ item }) => (
              
              <Pressable
                style={
                  ({ pressed }) => [
                    styles.topPerformersTile,
                    pressed && styles.tilePressed
                  ]
                }
              >

                <Image
                  source={item.image}
                  style={styles.topPerformersTileImage}
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
                      style={styles.topPerformersTileLabel}
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
                        type="title"
                        style={{
                          fontSize: 16
                        }}
                      >
                        USD{" "}
                        {item.price}
                      </ThemedText>

                      <ThemedText
                        type="default"
                        style={{
                          fontSize: 12
                        }}
                      >
                        {item.resturant}
                      </ThemedText>

                    </ThemedView>

                  </ThemedView>

                  <IconSymbol
                    size={24}
                    color={textColor}
                    name="heart"
                  />

                </ThemedView>

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
              fontSize: 22
            }}
          >
            Stores Near You
          </ThemedText>

          <FlatList
            horizontal
            pagingEnabled
            data={STORESNEARYOU}
            renderItem={({ item }) => (
              
              <Pressable
                style={
                  ({ pressed }) => [
                    styles.storesNearYouTile,
                    pressed && styles.tilePressed
                  ]
                }
              >

                <Image
                  source={item.logo}
                  style={styles.storesNearYouTileImage}
                  contentFit="contain"
                />

                <ThemedView
                  style={{
                    flex: 1,
                    flexDirection: "column"
                  }}
                >

                  <ThemedText
                    type="defaultSemiBold"
                    style={styles.storesNearYouTileLabel}
                  >
                    {item.label}
                  </ThemedText>

                  <ThemedText
                    type="default"
                    style={{
                      fontSize: 12,
                      textAlign: "center"
                    }}
                  >
                    {item.time}
                  </ThemedText>

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
  header: {
    position: "relative",
  },
  headerTitle: {
    position: "absolute",
    left: 14,
    bottom: 60,
    zIndex: 10,
    fontSize: 40
  },
  headerImage: {
    width: "100%",
    height: 200
  },
  content: {
    width: "100%",
    height: "100%",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginTop: -20,
    paddingTop: 40,
    padding: 14,
    gap: 40
  },
  section: {
    gap: 20
  },
  searchContainer: {
    flexDirection: "row",
    gap: 4,
    borderRadius: 20,
    borderWidth: 1,
    position: "relative"
  },
  searchIcon: {
    alignItems: "center",
    position: "absolute",
    marginVertical: "auto",
    marginTop: 7,
    marginLeft: 10
  },
  searchInput: {
    width: "100%",
    padding: 10,
    fontSize: 22,
    borderRadius: 100,
    paddingLeft: 50
  },
  tilePressed: {
    transform: [{ scale: 0.98 }],
    opacity: 0.9,
  },
  topPerformersContainer: {
    gap: 20
  },
  topPerformersTile: {
    width: 400,
    height: 250,
    gap: 14
  },
  topPerformersTileImage: {
    width: "100%",
    height: "70%",
    borderRadius: 20
  },
  topPerformersTileLabelContainer: {
    flex: 1,
    flexDirection: "row",
    gap: 20,
  },
  topPerformersTileLabel: {
    fontSize: 20,
    flex: 1
  },
  storesNearYouTileContainer: {
    gap: 20
  },
  storesNearYouTile: {
    width: 150,
    height: 200,
    gap: 14
  },
  storesNearYouTileImage: {
    width: "100%",
    height: "70%",
    borderRadius: 20
  },
  storesNearYouTileLabel: {
    textAlign: "center",
    fontSize: 12
  },
});
