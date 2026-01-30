import { IconSymbol } from "@/components/ui/icon-symbol";
import { Image } from "expo-image";
import { FlatList, Pressable, ScrollView, StyleSheet, useColorScheme } from "react-native";
import { ThemedView } from "@/components/themed-view";
import { ThemedText } from "@/components/themed-text";
import { Stack, useRouter } from "expo-router";
import { Colors } from "@/constants/theme";
import { dishes, menu_sections, resturant } from "./_inteface";
import { DishTileHorizontal } from "@/components/resturant/dish-tile-horizontal";
import { DishTile } from "@/components/resturant/dish-tile";




export default function ResturantScreen () {

  const colorScheme = useColorScheme();

  const router = useRouter();

  return (

    <ScrollView>

      <Stack.Screen options={{ headerShown: false }} />

      <ThemedView
        style={styles.navigationContainer}
      >

        <Pressable
          style={styles.headerIconButton}
          onPress={() => router.back()}
        >

          <IconSymbol
            size={30}
            color={Colors[colorScheme ?? "light"].icon}
            name="chevron.left"
            style={{
              marginRight: 3
            }}
          />

        </Pressable>

        <ThemedView
          style={{
            flexDirection: "row",
            backgroundColor: "transparent",
            gap: 10
          }}
        >

          <Pressable
            style={styles.headerIconButton}
          >

            <IconSymbol
              size={30}
              color={Colors[colorScheme ?? "light"].icon}
              name="magnifyingglass.circle"
              style={{
              }}
            />

          </Pressable>

          <Pressable
            style={styles.headerIconButton}
          >

            <IconSymbol
              size={30}
              color={Colors[colorScheme ?? "light"].icon}
              name="heart"
            />

          </Pressable>

          <Pressable
            style={styles.headerIconButton}
          >

            <IconSymbol
              size={30}
              color={Colors[colorScheme ?? "light"].icon}
              name="line.horizontal.3"
            />

          </Pressable>

        </ThemedView>

      </ThemedView>

      <Image
        source={resturant.poster}
        style={styles.headerImage}
        contentFit="cover"
      />

      <ThemedView
        style={styles.content}
      >

        <Image
          source={resturant.logo}
          style={styles.resturantLogo}
          contentFit="cover"
        />

        <ThemedText
          style={styles.title}
          type="title"
        >
          {resturant.name}
        </ThemedText>

        <ThemedView
          style={{
            flexDirection: "row",
            gap: 10,
            justifyContent: "space-evenly",
            padding: 14
          }}
        >

          <ThemedView
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

            <ThemedText
              type="defaultSemiBold"
              style={{
                fontSize: 12,
                alignSelf: "center"
              }}
            >
              {resturant.rating}{" "}
              ( {resturant.like_count} )
            </ThemedText>

            <ThemedText
              type="defaultSemiBold"
              style={{
                textAlign: "center",
                fontSize: 12
              }}
            >
              {resturant.review_count}{" "}
              reviews
            </ThemedText>

          </ThemedView>

          <ThemedView
            style={{
              alignContent: "center",
              justifyContent: "center"
            }}
          >

            <ThemedText
              type="defaultSemiBold"
              style={{
                fontSize: 12,
                alignSelf: "center"
              }}
            >
              ${resturant.delivery_fee}
              {" "}
              CAD
            </ThemedText>

            <ThemedText
              type="defaultSemiBold"
              style={{
                fontSize: 12,
                alignSelf: "center"
              }}
            >
              Delivery fee
            </ThemedText>

          </ThemedView>

          <ThemedView
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

            <ThemedText
              type="defaultSemiBold"
              style={{
                textAlign: "center",
                fontSize: 12
              }}
            >
              {resturant.estimated_time}
            </ThemedText>

          </ThemedView>

        </ThemedView>

        <ThemedView
          style={[
            styles.section,
          ]}
        >

          <FlatList
            horizontal
            pagingEnabled
            contentContainerStyle={{
              paddingHorizontal: 14
            }}
            data={menu_sections}
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
              fontSize: 22,
              paddingLeft: 14
            }}
          >
            Offers
          </ThemedText>

          <FlatList
            horizontal
            pagingEnabled
            contentContainerStyle={{
              paddingHorizontal: 14
            }}
            data={dishes.filter(item => item.discount)}
            renderItem={({ item }) => (

              <DishTile
                dish={item}
              />

            )}
            ItemSeparatorComponent={() => <ThemedView style={{ width: 12 }} />}
            showsHorizontalScrollIndicator={false}
          />

        </ThemedView>

        <ThemedView
          style={[
            styles.section,
            {
              paddingHorizontal: 14
            }
          ]}
        >

          <ThemedText
            type="title"
            style={{
              fontSize: 22
            }}
          >
            Picked for you
          </ThemedText>

          {dishes.filter(item => item.discount).map((item, index) => (

            <DishTileHorizontal
              key={index}
              dish={item}
            />

          ))}

        </ThemedView>

      </ThemedView>

    </ScrollView>

  );

}



const styles = StyleSheet.create({
  navigationContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    position: "absolute",
    zIndex: 10,
    padding: 14,
    paddingTop: 34,
    width: "100%",
    backgroundColor: "transparent"
  },
  headerIconButton: {
    borderRadius: 20,
    width: 40,
    height: 40,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    marginLeft: 14,
    fontSize: 24
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
    marginTop: -80,
    marginLeft: 14
  },
  content: {
    width: "100%",
    height: "100%",
    gap: 20
  },
  section: {
    gap: 20
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
