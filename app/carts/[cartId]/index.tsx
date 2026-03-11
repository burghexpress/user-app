import React, { useEffect, useState } from "react";
import { ScrollView, useColorScheme, TouchableOpacity, View, Text } from "react-native";
import { Image } from "expo-image";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Stack } from "expo-router";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Colors } from "@/constants/theme";
import { Cart, CartItem, RestaurantBranch } from "@db-types";
import { cartItems as allCartItems, carts, menuItems, restaurantBranches } from "@/data";
import { SafeAreaView } from "react-native-safe-area-context";



export default function CartDetail () {

  const { cartId } = useLocalSearchParams<{ cartId: string; }>();

  const [cart, setCart] = useState<Cart>();
  const [isFetchingCart, setIsFetchingCart] = useState(false);

  const [cartItems, setCartItems] = useState<CartItem[]>();
  const [isFetchingCartItems, setIsFetchingCartItems] = useState(false);

  const [restaurantBranch, setRestaurantBranch] = useState<RestaurantBranch>();
  const [isFetchingRestaurantBranch, setIsFetchingRestaurantBranch] = useState(false);

  const colorScheme = useColorScheme();

  const router = useRouter();


  useEffect(() => {
    fetchCart();
    fetchCartItems();
  }, []);


  useEffect(() => {
    fetchRestaurantBranch();
  }, [cart]);


  const fetchCart = () => {
    const foundCart = carts.find(c => c.id === parseInt(cartId));
    if (foundCart) {
      setCart(foundCart);
    }
  };


  const fetchCartItems = () => {
    const foundCartItems = allCartItems.filter(ci => ci.cartId === parseInt(cartId));
    if (foundCartItems) {
      setCartItems(foundCartItems);
    }
  };


  const fetchRestaurantBranch = () => {
    if (cart) {
      const foundRestaurantBranch = restaurantBranches.find(rb => rb.id === cart.restaurantBranchId);
      if (foundRestaurantBranch) {
        setRestaurantBranch(foundRestaurantBranch);
      }
    }
  };


  if (!cart) {

    if (isFetchingCart) {
      return null;
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
            marginTop: 20,
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
            Cart not found
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
        contentContainerStyle={{
          paddingBottom: 20,
          flex: 1
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
            marginTop: 50,
            marginLeft: 14,
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
            alignItems: "center",
            justifyContent: "space-between",
            gap: 10,
            marginTop: 20,
            paddingHorizontal: 14,
            marginBottom: 20
          }}
        >
          <Text
            style={{
              fontSize: 24,
              fontFamily: "Atelia",
              color: Colors[colorScheme ?? "light"].foreground
            }}
          >
            {restaurantBranch?.name}
          </Text>
        </View>

        {cartItems?.map((cartItem) => {

          const menuItem = menuItems.find(mi => mi.id === cartItem.menuItemId);

          return (

            <TouchableOpacity
              key={cartItem.id}
              style={{
                flexDirection: "row",
                gap: 20,
                paddingHorizontal: 14,
                paddingVertical: 10,
                marginTop: 10
              }}
              activeOpacity={0.8}
            >

              <Image
                source={menuItem?.imageUrl}
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 20,
                }}
                contentFit="cover"
              />

              <View
                style={{
                  flexDirection: "column",
                  flex: 1,
                  gap: 4
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    fontFamily: "Metropolis-Regular",
                    color: Colors[colorScheme ?? "light"].foreground
                  }}
                >
                  {menuItem?.name}
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 10
                  }}
                >
                  <Text
                    style={{
                      fontSize: 24,
                      fontFamily: "Atelia",
                      color: Colors[colorScheme ?? "light"].foreground
                    }}
                  >
                    ${cartItem.itemTotal}
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 10
                    }}
                  >
                    <TouchableOpacity
                      style={{
                        width: 34,
                        height: 34,
                        borderRadius: 20,
                        backgroundColor: Colors[colorScheme ?? "light"].inactiveButtonBackground,
                        alignItems: "center",
                        justifyContent: "center"
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 28,
                          fontFamily: "Atelia",
                          color: Colors[colorScheme ?? "light"].inactiveButtonForeground
                        }}
                      >
                        -
                      </Text>
                    </TouchableOpacity>
                    <Text
                      style={{
                        fontSize: 20,
                        fontFamily: "Metropolis-Regular",
                        color: Colors[colorScheme ?? "light"].foreground
                      }}
                    >
                      {cartItem.quantity}
                    </Text>
                    <TouchableOpacity
                      style={{
                        width: 34,
                        height: 34,
                        borderRadius: 20,
                        backgroundColor: Colors[colorScheme ?? "light"].inactiveButtonBackground,
                        alignItems: "center",
                        justifyContent: "center"
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 28,
                          fontFamily: "Atelia",
                          color: Colors[colorScheme ?? "light"].inactiveButtonForeground
                        }}
                      >
                        +
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

            </TouchableOpacity>

          );

        })}

        <TouchableOpacity
          style={{
            borderRadius: 20,
            backgroundColor: Colors[colorScheme ?? "light"].inactiveButtonBackground,
            marginTop: 30,
            marginRight: 14,
            marginLeft: "auto",
            paddingHorizontal: 10,
            paddingVertical: 6,
          }}
          onPress={() => router.push(`/restaurants/1/branches/${cart.restaurantBranchId}`)}
        >
          <Text
            style={{
              fontSize: 18,
              fontFamily: "Metropolis-SemiBold",
              color: Colors[colorScheme ?? "light"].inactiveButtonForeground
            }}
          >
            + Add items
          </Text>
        </TouchableOpacity>

        <View
          style={{
            marginTop: "auto",
            flexDirection: "column",
            gap: 20
          }}
        >

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 20,
              paddingHorizontal: 14
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontFamily: "Metropolis-SemiBold",
                color: Colors[colorScheme ?? "light"].foreground
              }}
            >
              Subtotal
            </Text>
            <Text
              style={{
                fontSize: 28,
                fontFamily: "Atelia",
                color: Colors[colorScheme ?? "light"].foreground
              }}
            >
              ${cart.subtotal}
            </Text>
          </View>

          <TouchableOpacity
            style={{
              borderRadius: 14,
              backgroundColor: Colors[colorScheme ?? "light"].inactiveButtonBackground,
              marginRight: 14,
              marginLeft: 14,
              padding: 14,
              justifyContent: "center",
              alignItems: "center"
            }}
            onPress={() => router.push(`/restaurants/1/branches/${cart.restaurantBranchId}`)}
          >
            <Text
              style={{
                fontSize: 20,
                fontFamily: "Metropolis-SemiBold",
                color: Colors[colorScheme ?? "light"].inactiveButtonForeground
              }}
            >
              Checkout
            </Text>
          </TouchableOpacity>

        </View>

      </ScrollView>

    </SafeAreaView>

  );

}
