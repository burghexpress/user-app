import { Pressable, ScrollView, FlatList, useColorScheme, TouchableOpacity, Text, View } from "react-native";
import { Image } from "expo-image";
import { Colors } from "@/constants/theme";
import { useRouter } from "expo-router";
import { SearchBar } from "@/components/search-bar";
import { restaurantBranches, restaurants } from "@/data";
import { SafeAreaView } from "react-native-safe-area-context";
import { RestaurantBranchTile } from "@/components/restaurant/branch-tile";



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
            paddingHorizontal: 14
          }}
        >

          <SearchBar
          />

        </View>

        <View
          style={{
            marginTop: 30,
            paddingHorizontal: 14,
            flexDirection: "row",
            gap: 10,
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >

          <Text
            style={{
              fontSize: 28,
              fontFamily: "Atelia",
              color: Colors[colorScheme ?? "light"].foreground
            }}
          >
            FEATURED
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
          data={restaurantBranches.slice(0, 5)}
          style={{
            marginTop: 20
          }}
          contentContainerStyle={{
            paddingHorizontal: 14,
            gap: 10
          }}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (

            <RestaurantBranchTile
              restaurant={item}
              onPress={() => router.push(`/restaurants/${item.restaurantId}/branches/${item.id}`)}
              width={200}
              height={150}
            />

          )}
        />

        <View
          style={{
            marginTop: 40,
            paddingHorizontal: 14,
            flexDirection: "row",
            gap: 10,
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >

          <Text
            style={{
              fontSize: 28,
              fontFamily: "Atelia",
              color: Colors[colorScheme ?? "light"].foreground
            }}
          >
            QUICK DELIVERY
          </Text>

          <TouchableOpacity
            style={{
              paddingHorizontal: 5,
              paddingVertical: 4,
              backgroundColor: Colors[colorScheme ?? "light"].buttonBackground,
              minHeight: 30,
              minWidth: 63,
              borderRadius: 30,
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row"
            }}
            activeOpacity={0.8}
            onPress={() => router.push(`/restaurants`)}
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
          data={restaurantBranches.slice(1, 6)}
          style={{
            marginTop: 20
          }}
          contentContainerStyle={{
            paddingHorizontal: 14,
            gap: 10
          }}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (

            <RestaurantBranchTile
              restaurant={item}
              height={150}
              width={200}
              onPress={() => router.push(`/restaurants/${item.restaurantId}/branches/${item.id}`)}
            />

          )}
        />

        <View
          style={{
            marginTop: 30,
            flexDirection: "row",
            gap: 10,
            justifyContent: "space-between",
            paddingHorizontal: 14,
            alignItems: "center"
          }}
        >

          <Text
            style={{
              fontFamily: "Atelia",
              fontSize: 28,
              color: Colors[colorScheme ?? "light"].foreground
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
                  textAlign: "center",
                  color: Colors[colorScheme ?? "light"].cardForeground
                }}
              >
                {item.name}
              </Text>

            </TouchableOpacity>

          )}

        />

      </ScrollView>

    </SafeAreaView>

  );

}
