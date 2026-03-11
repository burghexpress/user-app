import { useEffect, useState } from "react";
import { Colors } from "@/constants/theme";
import { cartItems, carts, restaurantBranches } from "@/data";
import { Cart } from "@db-types";
import { Image } from "expo-image";
import { ScrollView, Text, TouchableOpacity, useColorScheme, View } from "react-native";
import { router } from "expo-router";



export default function OrdersScreen () {

  const colorScheme = useColorScheme();

  const [userCarts, setUserCarts] = useState<Cart[]>();


  useEffect(() => {
    fetchCarts();
  }, []);


  const fetchCarts = () => {
    const foundCarts = carts;
    if (foundCarts) {
      setUserCarts(foundCarts);
    }
  };
  

  return (

    <ScrollView
      style={{
        backgroundColor: Colors[colorScheme ?? "light"].background
      }}
      contentContainerStyle={{
        paddingBottom: 20
      }}
    >

      <Text
        style={{
          marginTop: 70,
          paddingHorizontal: 14,
          fontFamily: "Atelia",
          fontSize: 28,
          color: Colors[colorScheme ?? "light"].foreground
        }}
      >
        Carts
      </Text>

      {userCarts?.map((userCart) => {

        const restaurantBranch = restaurantBranches.find(rb => rb.id === userCart.restaurantBranchId);

        return (

          <TouchableOpacity
            key={userCart.id}
            style={{
              flexDirection: "row",
              gap: 20,
              paddingHorizontal: 14,
              paddingVertical: 10,
              marginTop: 10
            }}
            activeOpacity={0.8}
            onPress={() => router.push(`/carts/${userCart.id}`)}
          >

            <Image
              source={restaurantBranch?.posterUrl}
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
                {restaurantBranch?.name}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 10
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: "Atelia",
                    color: Colors[colorScheme ?? "light"].foreground
                  }}
                >
                  ${userCart.totalAmount}
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: "Metropolis-Light",
                    color: Colors[colorScheme ?? "light"].foreground
                  }}
                >
                  {cartItems.filter(ci => ci.cartId === userCart.id).length} {"Items"}
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Metropolis-Light",
                  color: Colors[colorScheme ?? "light"].foreground
                }}
              >
                Pickup at Four Greenway, Westlands
              </Text>
            </View>

          </TouchableOpacity>

        );

      })}

      <Text
        style={{
          marginTop: 70,
          paddingHorizontal: 14,
          fontFamily: "Atelia",
          fontSize: 28,
          color: Colors[colorScheme ?? "light"].foreground
        }}
      >
        History
      </Text>

      {userCarts?.map((userCart) => {

        const restaurantBranch = restaurantBranches.find(rb => rb.id === userCart.restaurantBranchId);

        return (

          <TouchableOpacity
            key={userCart.id}
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
              source={restaurantBranch?.posterUrl}
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
                {restaurantBranch?.name}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 10
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: "Atelia",
                    color: Colors[colorScheme ?? "light"].foreground
                  }}
                >
                  ${userCart.totalAmount}
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: "Metropolis-Regular",
                    color: Colors[colorScheme ?? "light"].foreground
                  }}
                >
                  {cartItems.filter(ci => ci.cartId === userCart.id).length} {"Items"}
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Metropolis-Regular",
                  color: Colors[colorScheme ?? "light"].foreground
                }}
              >
                Pickup at Four Greenway, Westlands
              </Text>
              <TouchableOpacity
                style={{
                  borderRadius: 20,
                  backgroundColor: Colors[colorScheme ?? "light"].inactiveButtonBackground,
                  marginRight: "auto",
                  paddingHorizontal: 10,
                  paddingVertical: 6
                }}
              >
                <Text
                  style={{
                    fontSize: 18,
                    fontFamily: "Metropolis-SemiBold",
                    color: Colors[colorScheme ?? "light"].inactiveButtonForeground
                  }}
                >
                  Rate
                </Text>
              </TouchableOpacity>
            </View>

          </TouchableOpacity>

        );

      })}

    </ScrollView>

  );

}
