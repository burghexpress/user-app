import { useEffect, useState } from "react";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Image } from "expo-image";
import { Pressable, ScrollView, Text, TouchableOpacity, useColorScheme, View } from "react-native";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { Colors } from "@/constants/theme";
import { SafeAreaView } from "react-native-safe-area-context";
import { MenuItem } from "@db-types";
import { menuItems } from "@/data";
import { MagnifierIcon } from "@/components/icons/magnifier";



export default function MenuItemDetailScreen () {

  const { restaurantId, branchId, menuId, sectionId, itemId } = useLocalSearchParams<{
    restaurantId: string;
    branchId: string;
    menuId: string;
    sectionId: string;
    itemId: string;
  }>();

  const [menuItem, setMenuItem] = useState<MenuItem>();
  const [isFetchingMenuItem, setIsFetchingMenuItem] = useState(false);

  const colorScheme = useColorScheme();

  const router = useRouter();



  useEffect(() => {
    fetchMenuItem();
  }, []);



  const fetchMenuItem = () => {
    setIsFetchingMenuItem(true);

    const foundMenuItem = menuItems.find(m => m.id === parseInt(itemId));
    setMenuItem(foundMenuItem);

    setIsFetchingMenuItem(false);
  };



  if (!menuItem) {

    if (isFetchingMenuItem) {
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
            Menu item not found
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
        backgroundColor: Colors[colorScheme ?? "light"].background,
        flex: 1
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
          source={menuItem.imageUrl}
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
            marginTop: 20,
            color: Colors[colorScheme ?? "light"].foreground
          }}
        >
          {menuItem.name}
        </Text>

        <Text
          style={{
            fontFamily: "Metropolis-Regular",
            fontSize: 16,
            marginTop: 10,
            paddingHorizontal: 14,
            color: Colors[colorScheme ?? "light"].foreground
          }}
        >
          {menuItem.description}
        </Text>

      </ScrollView>

      <TouchableOpacity
        style={{
          paddingHorizontal: 10,
          paddingVertical: 10,
          gap: 10,
          backgroundColor: Colors[colorScheme ?? "light"].buttonBackground,
          minHeight: 50,
          minWidth: 63,
          borderRadius: 30,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          marginBottom: 14,
          marginHorizontal: 14
        }}
        activeOpacity={0.8}
        onPress={() => router.push(`/restaurants/${restaurantId}/branches/${branchId}/menus`)}
      >
        <Text
          style={{
            fontFamily: "Metropolis-Bold",
            fontSize: 16,
            color: Colors[colorScheme ?? "light"].buttonForeground
          }}
        >
          Order ({menuItem.price}$)
        </Text>
      </TouchableOpacity>

    </SafeAreaView>

  );

}
