import { useEffect, useState } from "react";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Image } from "expo-image";
import { FlatList, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, useColorScheme, View } from "react-native";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { Colors } from "@/constants/theme";
import { Menu, RestaurantBranch } from "@db-types";
import { menuItems, menus, menuSections, restaurantBranches, restaurants } from "@/data";
import { MagnifierIcon } from "@/components/icons/magnifier";
import { StarIcon } from "@/components/icons/star";
import { WatchIcon } from "@/components/icons/watch";
import { SafeAreaView } from "react-native-safe-area-context";



export default function RestaurantBranchScreen () {

  const { restaurantId, branchId } = useLocalSearchParams<{
    restaurantId: string;
    branchId: string;
  }>();

  const [resturantBranch, setResturantBranch] = useState<RestaurantBranch>();
  const [isFetchingRestaurantBranch, setIsFetchingRestaurantBranch] = useState(false);

  const [restaurantMenus, setResaurantMenus] = useState<Menu[]>();
  const [isFetchingRestaurantMenus, setIsFetchingRestaurantMenus] = useState(false);

  const [selectedMenu, setSelectedMenu] = useState<number>();

  const colorScheme = useColorScheme();

  const router = useRouter();



  useEffect(() => {
    fetchRestaurantBranch();
    fetchRestaurantMenus();
  }, []);



  const fetchRestaurantBranch = () => {
    setIsFetchingRestaurantBranch(true);

    const foundResturantBranch = restaurantBranches.find(r => r.id === parseInt(branchId));
    if (foundResturantBranch) {
      setResturantBranch(foundResturantBranch);
    }

    setIsFetchingRestaurantBranch(false);
  };



  const fetchRestaurantMenus = () => {
    setIsFetchingRestaurantMenus(true);

    const foundResturantMenus = menus.filter(r => r.restaurantBranchId === parseInt(branchId));
    setResaurantMenus(foundResturantMenus);
    if (!selectedMenu) {
      setSelectedMenu(foundResturantMenus[0].id);
    }

    setIsFetchingRestaurantMenus(false);
  };



  if (!resturantBranch) {

    if (isFetchingRestaurantBranch) {
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
            Resturant not found
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
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 10,
            position: "absolute",
            zIndex: 10,
            padding: 14,
            marginTop: 20,
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

              <MagnifierIcon
                size={24}
                color={Colors[colorScheme ?? "light"].headerButtonForeground}
              />

            </Pressable>

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
                size={24}
                color={Colors[colorScheme ?? "light"].headerButtonForeground}
                name="heart"
              />

            </Pressable>

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

        <Image
          source={resturantBranch.posterUrl}
          style={{
            width: "100%",
            height: 200
          }}
          contentFit="cover"
        />

        <View
          style={{
            flexDirection: "column",
            gap: 10
          }}
        >

          <Image
            source={resturantBranch.posterUrl}
            style={{
              width: 100,
              height: 100,
              borderRadius: 10,
              padding: 10,
              backgroundColor: Colors[colorScheme ?? "light"].logoBackground,
              marginTop: -80,
              marginLeft: 14
            }}
            contentFit="cover"
          />

          <Text
            style={{
              fontFamily: "Atelia",
              fontSize: 22,
              marginLeft: 14,
              color: Colors[colorScheme ?? "light"].foreground
            }}
          >
            {resturantBranch.name}
          </Text>

          <View
            style={{
              flexDirection: "row",
              gap: 10,
              justifyContent: "space-evenly",
              padding: 14
            }}
          >

            <View
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

              <Text
                style={{
                  fontFamily: "Metropolis-Light",
                  fontSize: 12,
                  alignSelf: "center",
                  color: Colors[colorScheme ?? "light"].foreground
                }}
              >
                {"rating"}{" "}
                ( {"like count"} )
              </Text>

              <Text
                style={{
                  fontFamily: "Metropolis-Light",
                  textAlign: "center",
                  fontSize: 12,
                  color: Colors[colorScheme ?? "light"].foreground
                }}
              >
                {"review count"}{" "}
                reviews
              </Text>

            </View>

            <View
              style={{
                alignContent: "center",
                justifyContent: "center"
              }}
            >

              <Text
                style={{
                  fontFamily: "Metropolis-Light",
                  fontSize: 12,
                  alignSelf: "center",
                  color: Colors[colorScheme ?? "light"].foreground
                }}
              >
                {"Delivery fee"}$
              </Text>

              <Text
                style={{
                  fontSize: 12,
                  alignSelf: "center",
                  color: Colors[colorScheme ?? "light"].foreground
                }}
              >
                Delivery fee
              </Text>

            </View>

            <View
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

              <Text
                style={{
                  textAlign: "center",
                  fontSize: 12,
                  color: Colors[colorScheme ?? "light"].foreground
                }}
              >
                {"estimated time"}
              </Text>

            </View>

          </View>

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
                fontFamily: "Atelia",
                fontSize: 28,
                  color: Colors[colorScheme ?? "light"].cardForeground
              }}
            >
              Menus
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
              onPress={() => router.push(`/restaurants/${restaurantId}/branches/${branchId}/menus`)}
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
              gap: 10,
              marginTop: 10
            }}
            showsHorizontalScrollIndicator={false}
            data={restaurantMenus}
            renderItem={({ item }) => (

              <TouchableOpacity
                key={item.id}
                activeOpacity={0.8}
                onPress={() => setSelectedMenu(item.id)}
                style={{
                  paddingHorizontal: 10,
                  paddingVertical: 4,
                  backgroundColor: selectedMenu === item.id ? Colors[colorScheme ?? "light"].buttonBackground : undefined,
                  minHeight: 30,
                  minWidth: 63,
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "row"
                }}
              >
            
                <Text
                  style={{
                    fontSize: 18,
                    fontFamily: "Metropolis-SemiBold",
                    color: selectedMenu === item.id ? Colors[colorScheme ?? "light"].buttonForeground : Colors[colorScheme ?? "light"].foreground
                  }}
                >
                  {item.name}
                </Text>

              </TouchableOpacity>

            )}
          />

          {menuSections.filter(ms => ms.menuId === selectedMenu).map((menuSection) => (

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
                  fontFamily: "Metropolis-SemiBold",
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

        </View>

      </ScrollView>

    </SafeAreaView>

  );

}
