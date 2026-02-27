import { useEffect, useState } from "react";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Image } from "expo-image";
import { FlatList, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, useColorScheme, View } from "react-native";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { Colors } from "@/constants/theme";
import { Menu, MenuItem, RestaurantBranch } from "@db-types";
import { menuItems, menus, menuSections, restaurantBranches, restaurants } from "@/data";
import { MagnifierIcon } from "@/components/icons/magnifier";
import { StarIcon } from "@/components/icons/star";
import { WatchIcon } from "@/components/icons/watch";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";



export default function RestaurantBranchScreen () {

  const { restaurantId, branchId } = useLocalSearchParams<{
    restaurantId: string;
    branchId: string;
  }>();

  const [resturantBranch, setResturantBranch] = useState<RestaurantBranch>();
  const [isFetchingRestaurantBranch, setIsFetchingRestaurantBranch] = useState(false);

  const [newItems, setNewItems] = useState<MenuItem[]>();
  const [isFetchingNewItems, setIsFetchingNewItems] = useState(false);

  const [featuredItems, setFeaturedItems] = useState<MenuItem[]>();
  const [isFetchingFeaturedItems, setIsFetchingFeaturedItems] = useState(false);

  const [restaurantMenus, setResaurantMenus] = useState<Menu[]>();
  const [isFetchingRestaurantMenus, setIsFetchingRestaurantMenus] = useState(false);

  const [selectedMenu, setSelectedMenu] = useState<number>();

  const colorScheme = useColorScheme();

  const router = useRouter();



  useEffect(() => {
    fetchRestaurantBranch();
    fetchRestaurantMenus();
    fetchFeaturedItems();
    fetchNewItems();
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



  const fetchFeaturedItems = () => {
    setIsFetchingFeaturedItems(true);

    const foundFeaturedItems = menus.flatMap(menu => 
      menuSections
        .filter(ms => ms.menuId === menu.id)
        .flatMap(ms => 
          menuItems.filter(mi => mi.menuSectionId === ms.id)
        )
    );
    setFeaturedItems(foundFeaturedItems);

    setIsFetchingFeaturedItems(false);
  };



  const fetchNewItems = () => {
    setIsFetchingNewItems(true);

    const foundNewItems = menus.flatMap(menu => 
      menuSections
        .filter(ms => ms.menuId === menu.id)
        .flatMap(ms => 
          menuItems.filter(mi => mi.menuSectionId === ms.id && mi.isNew)
        )
    );
    setNewItems(foundNewItems);

    setIsFetchingNewItems(false);
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

      <ScrollView
        contentContainerStyle={{
          paddingBottom: 20
        }}
        style={{
          backgroundColor: Colors[colorScheme ?? "light"].background
        }}
        showsVerticalScrollIndicator={false}
      >

        <StatusBar style="auto" />

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
            position: "absolute",
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

            <TouchableOpacity
              style={{
                borderRadius: 20,
                width: 40,
                height: 40,
                backgroundColor: Colors[colorScheme ?? "light"].headerButtonBackground,
                justifyContent: "center",
                alignItems: "center"
              }}
              activeOpacity={0.8}
            >

              <MagnifierIcon
                size={24}
                color={Colors[colorScheme ?? "light"].headerButtonForeground}
              />

            </TouchableOpacity>

            <TouchableOpacity
              style={{
                borderRadius: 20,
                width: 40,
                height: 40,
                backgroundColor: Colors[colorScheme ?? "light"].headerButtonBackground,
                justifyContent: "center",
                alignItems: "center"
              }}
              activeOpacity={0.8}
            >

              <IconSymbol
                size={24}
                color={Colors[colorScheme ?? "light"].headerButtonForeground}
                name="heart"
              />

            </TouchableOpacity>

            <TouchableOpacity
              style={{
                borderRadius: 20,
                width: 40,
                height: 40,
                backgroundColor: Colors[colorScheme ?? "light"].headerButtonBackground,
                justifyContent: "center",
                alignItems: "center"
              }}
              activeOpacity={0.8}
            >

              <IconSymbol
                size={30}
                color={Colors[colorScheme ?? "light"].headerButtonForeground}
                name="line.horizontal.3"
              />

            </TouchableOpacity>

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

        <Text
          style={{
            fontFamily: "Atelia",
            fontSize: 22,
            marginLeft: 14,
            marginTop: 30,
            textAlign: "center",
            color: Colors[colorScheme ?? "light"].foreground
          }}
        >
          {resturantBranch.name}
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            gap: 10,
            padding: 14
          }}
        >

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 4
            }}
          >

            <StarIcon
              size={14}
              color={Colors[colorScheme ?? "light"].icon}
            />

            <Text
              style={{
                fontFamily: "Metropolis-Light",
                fontSize: 12,
                color: Colors[colorScheme ?? "light"].foreground
              }}
            >
              {4.9}({1.3}k+)
            </Text>

          </View>

          <View
            style={{
              flexDirection: "row",
              alignContent: "center",
              gap: 10
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
              ${2.1}{" "}
              {"Delivery fee"}
            </Text>

          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: 4
            }}
          >

            <WatchIcon
              size={14}
              color={Colors[colorScheme ?? "light"].icon}
            />

            <Text
              style={{
                fontFamily: "Metropolis-Light",
                textAlign: "center",
                fontSize: 12,
                color: Colors[colorScheme ?? "light"].foreground
              }}
            >
              {"18 min"}
            </Text>

          </View>

        </View>

        <Text
          style={{
            fontSize: 24,
            fontFamily: "Atelia",
            marginLeft: 14,
            marginTop: 30,
            color: Colors[colorScheme ?? "light"].foreground
          }}
        >
          Featured items
        </Text>

        <FlatList
          horizontal
          pagingEnabled
          contentContainerStyle={{
            paddingHorizontal: 14,
            gap: 10,
            marginTop: 20
          }}
          showsHorizontalScrollIndicator={false}
          data={featuredItems}
          renderItem={({ item }) => (

            <TouchableOpacity
              key={item.id}
              onPress={() => router.push(`/restaurants/${restaurantId}/branches/${branchId}/menus/sections/${item.menuSectionId}/items/${item.id}`)}
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
                  ${item.price}
                </Text>

              </View>

            </TouchableOpacity>

          )}
        />

        <Text
          style={{
            fontSize: 24,
            fontFamily: "Atelia",
            marginLeft: 14,
            marginTop: 30,
            color: Colors[colorScheme ?? "light"].foreground
          }}
        >
          New
        </Text>

        <FlatList
          horizontal
          pagingEnabled
          contentContainerStyle={{
            paddingHorizontal: 14,
            gap: 10
          }}
          showsHorizontalScrollIndicator={false}
          data={newItems}
          renderItem={({ item }) => (

            <TouchableOpacity
              key={item.id}
              onPress={() => router.push(`/restaurants/${restaurantId}/branches/${branchId}/menus/sections/${item.menuSectionId}/items/${item.id}`)}
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
                  ${item.price}
                </Text>

              </View>

            </TouchableOpacity>

          )}
        />

        {menuSections.filter(ms => ms.menuId === selectedMenu).map((menuSection) => (

          <View
            key={menuSection.id}
            style={{
              flexDirection: "column",
              gap: 30,
              marginTop: 30
            }}
          >

            <Text
              style={{
                fontSize: 26,
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
                      ${item.price}
                    </Text>

                  </View>

                </TouchableOpacity>

              )}
            />

          </View>

        ))}

      </ScrollView>


  );

}
