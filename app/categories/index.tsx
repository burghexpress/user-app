import React, { useState } from "react";
import { StyleSheet, Pressable, ScrollView, useColorScheme } from "react-native";
import { Image } from "expo-image";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useRouter } from "expo-router";
import { Category } from "@db-types";



export default function CategoryList () {

  const [categories, setCategories] = useState<Category[]>();

  const colorScheme = useColorScheme();

  const router = useRouter();

  return (

    <ScrollView>

      <ThemedText
        type="title"
        style={{
          fontSize: 22,
          paddingLeft: 14
        }}
      >
        Categories
      </ThemedText>

      <ThemedView
        style={{
          gap: 10
        }}
      >

        {categories?.map((category, categoryIndex) => (

          <ThemedView
            key={categoryIndex}
            style={{
              gap: 10,
              width: 200,
              height: 200,
              alignContent: "center",
              justifyContent: "center"
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

            <ThemedText
              style={{
                fontSize: 22,
                paddingLeft: 14
              }}
            >
              {category.name}
            </ThemedText>

          </ThemedView>

        ))}

      </ThemedView>

    </ScrollView>

  );

}
