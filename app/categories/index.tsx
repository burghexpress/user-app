import React from "react";
import { ScrollView, useColorScheme, TouchableOpacity, Text, View } from "react-native";
import { Stack, useRouter } from "expo-router";
import { Colors } from "@/constants/theme";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { SafeAreaView } from "react-native-safe-area-context";
import { categories } from "@/data";



export default function CategoryList () {

  const colorScheme = useColorScheme();

  const router = useRouter();


  return (

    <SafeAreaView
      style={{
        backgroundColor: Colors[colorScheme ?? "light"].background,
        flex: 1
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
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            paddingHorizontal: 14,
            marginTop: 30
          }}
        >

          <TouchableOpacity
            style={{
              borderRadius: 20,
              width: 40,
              height: 40,
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
              fontSize: 24,
              fontFamily: "Atelia",
              color: Colors[colorScheme ?? "light"].foreground
            }}
          >
            Categories
          </Text>

        </View>

        <View
          style={{
            flexDirection: "column",
            gap: 4,
            marginTop: 30
          }}
        >

          {categories.map(category => 

            <TouchableOpacity
              key={category.id}
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 10,
                paddingHorizontal: 14,
                marginBottom: 20
              }}
              activeOpacity={0.8}
              onPress={() => router.push(`/categories/${category.id}`)}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: "Metropolis-Regular",
                  color: Colors[colorScheme ?? "light"].foreground
                }}
              >
                {category.name}
              </Text>
            </TouchableOpacity>

          )}

        </View>

      </ScrollView>

    </SafeAreaView>

  );

}
