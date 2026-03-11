import { useEffect, useState } from "react";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Image } from "expo-image";
import { FlatList, ScrollView, Text, TouchableOpacity, useColorScheme, View } from "react-native";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { Colors } from "@/constants/theme";
import { StarIcon } from "@/components/icons/star";
import { WatchIcon } from "@/components/icons/watch";
import { SafeAreaView } from "react-native-safe-area-context";
import { SearchBar } from "@/components/search-bar";
import { menuSections } from "@/data";



export default function MenuSectionListScreen () {

  const { restaurantId, branchId, menuId } = useLocalSearchParams<{
    restaurantId: string;
    branchId: string;
    menuId: string;
  }>();

  const colorScheme = useColorScheme();

  const router = useRouter();



  useEffect(() => {
  }, []);



  if (!menuSections) {

    if (false) {
      return null;
    }

    return (

      <ScrollView
        contentContainerStyle={{
          paddingBottom: 20
        }}
        showsVerticalScrollIndicator={false}
      >

        <Stack.Screen
          options={{ headerShown: false }}
        />

        <TouchableOpacity
          style={{
            borderRadius: 20,
            width: 40,
            height: 40,
            backgroundColor: Colors[colorScheme ?? "light"].headerButtonBackground,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 70,
            marginLeft: 24
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
            padding: 14,
            marginTop: 20
          }}
        >

          <Text
            style={{
              fontSize: 22,
              paddingLeft: 14,
              fontFamily: "Atelia"
            }}
          >
            This menu section has no items
          </Text>

          <Text
            style={{
              fontSize: 22,
              paddingLeft: 14,
              fontFamily: "Metropolis-Medium"
            }}
          >
          </Text>

        </View>

      </ScrollView>

    );

  }



  return (

    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors[colorScheme ?? "light"].background
      }}
    >

      <ScrollView
        showsVerticalScrollIndicator={false}
      >

        <Stack.Screen
          options={{ headerShown: false }}
        />

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 14,
            marginTop: 30,
            gap: 20
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

          <Text
            style={{
              fontFamily: "Atelia",
              fontSize: 20,
              color: Colors[colorScheme ?? "light"].foreground
            }}
          >
            Sections
          </Text>

        </View>

        <View
          style={{
            height: "auto",
            marginTop: 30,
            paddingHorizontal: 14
          }}
        >

          <SearchBar
          />

        </View>

        {menuSections.filter(ms => ms.menuId === parseInt(menuId)).map((menuSection) => (

          <View
            key={menuSection.id}
            style={{
              flexDirection: "column",
              gap: 30,
              marginTop: 20
            }}
          >

            <Text
              style={{
                fontSize: 20,
                fontFamily: "Atelia",
                marginLeft: 14,
                color: Colors[colorScheme ?? "light"].foreground
              }}
            >
              {menuSection.name}
            </Text>

            <FlatList
              horizontal
              pagingEnabled
              contentContainerStyle={{
                paddingHorizontal: 14,
                gap: 10
              }}
              showsHorizontalScrollIndicator={false}
              data={menuItems.filter(mi => mi.menuSectionId === menuSection.id)}
              renderItem={({ item }) => (

                <TouchableOpacity
                  key={item.id}
                  onPress={() => router.push(`/restaurants/${restaurantId}/branches/${branchId}/menus/${menuSection.menuId}/sections/${menuSection.id}/items/${item.id}`)}
                  activeOpacity={0.8}
                  style={{
                    width: 200,
                    height: "auto",
                    gap: 10
                  }}
                >

                  <Image
                    source={item.imageUrl}
                    style={{
                      width: 200,
                      height: 150,
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
                          fontFamily: "Metropolis-Medium",
                          color: Colors[colorScheme ?? "light"].cardForeground
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
                          {4.8}({313})
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
                          {"14 mins"}
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

          </View>

        ))}

      </ScrollView>

    </SafeAreaView>

  );

}
