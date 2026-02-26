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
import { MenuSection } from "@db-types";
import { menuItems, menuSections } from "@/data";



export default function MenuSectionDetailScreen () {

  const { restaurantId, branchId, menuId, sectionId } = useLocalSearchParams<{
    restaurantId: string;
    branchId: string;
    menuId: string;
    sectionId: string;
  }>();

  const [menuSection, setMenuSection] = useState<MenuSection>();
  const [isFetchingMenuSection, setIsFetchingMenuSection] = useState(false);

  const colorScheme = useColorScheme();

  const router = useRouter();



  useEffect(() => {
    fetchMenuSection();
  }, []);



  const fetchMenuSection = () => {
    setIsFetchingMenuSection(true);

    const foundMenuSection = menuSections.find(m => m.id === parseInt(sectionId));
    setMenuSection(foundMenuSection);

    setIsFetchingMenuSection(false);
  };



  if (!menuSection) {

    if (isFetchingMenuSection) {
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
            Menu section not found
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
            {menuSection.name}
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
          {menuSection.description}
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

        <View
          style={{
            marginTop: 10,
            padding: 14,
            gap: 10
          }}
        >

          {menuItems.filter(mi => mi.menuSectionId === parseInt(sectionId)).map((item) => (

            <TouchableOpacity
              key={item.id}
              style={{
                flexDirection: "row",
                gap: 10,
                width: "100%"
              }}
              activeOpacity={0.8}
              onPress={() => router.push(`/restaurants/${restaurantId}/branches/${branchId}/menus/${menuId}/sections/${sectionId}/items/${item.id}`)}
            >

              <Image
                source={item.imageUrl}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 20,
                  backgroundColor: Colors[colorScheme ?? "light"].logoBackground
                }}
                contentFit="cover"
              />

              <View
                style={{
                  flexDirection: "column",
                  paddingVertical: 10,
                  gap: 5,
                  flex: 1
                }}
              >

                <Text
                  style={{
                    fontFamily: "Atelia",
                    fontSize: 18,
                    color: Colors[colorScheme ?? "light"].cardForeground
                  }}
                >
                  {item.name}
                </Text>

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

              <TouchableOpacity
                style={{
                  gap: 10,
                  backgroundColor: Colors[colorScheme ?? "light"].buttonBackground,
                  minHeight: 40,
                  minWidth: 40,
                  borderRadius: 40,
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "row",
                  marginVertical: "auto"
                }}
                activeOpacity={0.8}
              >
                <Text
                  style={{
                    fontFamily: "Atelia",
                    fontSize: 32,
                    color: Colors[colorScheme ?? "light"].buttonForeground
                  }}
                >
                  +
                </Text>
              </TouchableOpacity>

            </TouchableOpacity>

          ))}

        </View>

      </ScrollView>

    </SafeAreaView>

  );

}
