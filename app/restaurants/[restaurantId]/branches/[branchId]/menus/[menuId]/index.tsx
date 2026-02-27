import { useEffect, useState } from "react";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Image } from "expo-image";
import { FlatList, ScrollView, Text, TouchableOpacity, useColorScheme, View } from "react-native";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { Colors } from "@/constants/theme";
import { Menu } from "@db-types";
import { menuItems, menus, menuSections } from "@/data";
import { StarIcon } from "@/components/icons/star";
import { WatchIcon } from "@/components/icons/watch";
import { SafeAreaView } from "react-native-safe-area-context";
import { SearchBar } from "@/components/search-bar";



export default function MenuDetailScreen () {

  const { restaurantId, branchId, menuId } = useLocalSearchParams<{
    restaurantId: string;
    branchId: string;
    menuId: string;
  }>();

  const [restaurantMenu, setResaurantMenu] = useState<Menu>();
  const [isFetchingRestaurantMenu, setIsFetchingRestaurantMenu] = useState(false);

  const colorScheme = useColorScheme();

  const router = useRouter();



  useEffect(() => {
    fetchRestaurantMenu();
  }, []);



  const fetchRestaurantMenu = () => {
    setIsFetchingRestaurantMenu(true);

    const foundResturantMenu = menus.find(m => m.id === parseInt(menuId));
    setResaurantMenu(foundResturantMenu);

    setIsFetchingRestaurantMenu(false);
  };



  if (!restaurantMenu) {

    if (isFetchingRestaurantMenu) {
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
            Menu not found
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
            {restaurantMenu.name}
          </Text>

        </View>

        <Text
          style={{
            fontFamily: "Metropolis-Regular",
            fontSize: 16,
            marginTop: 30,
            paddingHorizontal: 14,
            color: Colors[colorScheme ?? "light"].foreground
          }}
        >
          {restaurantMenu.description}
        </Text>

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

            <View
              style={{
                marginTop: 20,
                paddingHorizontal: 14,
                flexDirection: "row",
                gap: 10,
                justifyContent: "space-between",
                alignItems: "center"
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
                onPress={() => router.push(`/restaurants/${restaurantId}/branches/${branchId}/menus/${menuId}/sections/${menuSection.id}`)}
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
