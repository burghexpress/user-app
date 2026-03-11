import React, { useState } from "react";
import { StyleSheet, Pressable, ScrollView, useColorScheme, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Stack } from "expo-router";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Colors } from "@/constants/theme";



export default function CategoryDetail () {

  const { categoryId } = useLocalSearchParams<{ categoryId: string; }>(); 

  const [category, setCategory] = useState<Category | undefined>(SAMPLE_CATEGORIES.find(c => c.id === parseInt(categoryId)));

  const colorScheme = useColorScheme();

  const router = useRouter();


  if (!category) {

    return (

      <ThemedView
        style={{
          gap: 10
        }}
      >

        <ThemedText
          type="title"
          style={{
            fontSize: 22,
            paddingLeft: 14
          }}
        >
          Not Found
        </ThemedText>

      </ThemedView>

    );

  }


  return (

    <ScrollView>

      <Stack.Screen
        options={{
          headerShown: false
        }}
      />

      <ThemedView
        style={{
          flexDirection: "row",
          padding: 14,
          paddingTop: 38,
          gap: 10,
          alignItems: "center"
        }}
      >

        <TouchableOpacity
          style={{
            borderRadius: 20,
            width: 40,
            height: 40,
            backgroundColor: "white",
            justifyContent: "center",
            alignItems: "center"
          }}
          onPress={() => router.back()}
          activeOpacity={0.7}
        >

          <IconSymbol
            size={30}
            color={Colors[colorScheme ?? "light"].icon}
            name="chevron.left"
            style={{
              marginRight: 3
            }}
          />

        </TouchableOpacity>

        <ThemedText
          type="title"
          style={{
            fontSize: 22
          }}
        >
          {category.name}
        </ThemedText>

      </ThemedView>

      <ThemedView
        style={{
          gap: 10,
          alignContent: "center",
          justifyContent: "center",
          padding: 14
        }}
      >

        <Image
          source={category.icon}
          style={{
            width: 70,
            height: 70
          }}
          contentFit="cover"
        />

      </ThemedView>

    </ScrollView>

  );

}
