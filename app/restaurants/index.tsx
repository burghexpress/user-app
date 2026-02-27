import { IconSymbol } from "@/components/ui/icon-symbol";
import { Image } from "expo-image";
import { Pressable, ScrollView, Text, TouchableOpacity, useColorScheme, View } from "react-native";
import { Stack, useRouter } from "expo-router";
import { Colors } from "@/constants/theme";
import { restaurants } from "@/data";
import { SearchBar } from "@/components/search-bar";
import { SafeAreaView } from "react-native-safe-area-context";




export default function RestaurantListScreen () {

  const colorScheme = useColorScheme();

  const router = useRouter();


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
            padding: 14,
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

        <View
          style={{
            height: "auto",
            marginTop: 14,
            paddingHorizontal: 14
          }}
        >

          <SearchBar
          />

        </View>

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
                fontSize: 20,
                color: Colors[colorScheme ?? "light"].foreground
              }}
            >
              Resturants
            </Text>

          </View>

          {restaurants?.map((restaurant, restaurantIndex) => (

            <TouchableOpacity
              key={restaurantIndex}
              style={{
                flexDirection: "column",
                gap: 10
              }}
              activeOpacity={0.8}
              onPress={() => router.push(`/restaurants/${restaurant.id}`)}
            >

              <Image
                source={restaurant.posterUrl}
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
                  fontFamily: "Metropolis-SemiBold",
                  color: Colors[colorScheme ?? "light"].cardForeground
                }}
              >
                {restaurant.name}
              </Text>

            </TouchableOpacity>

          ))}

        </View>

      </ScrollView>

    </SafeAreaView>

  );

}
