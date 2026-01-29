import { ThemedView } from "@/components/themed-view";
import { Dish } from "../inteface";
import { Image } from "expo-image";
import { Pressable, useColorScheme } from "react-native";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Colors } from "@/constants/theme";
import { ThemedText } from "@/components/themed-text";




export const DishTile = ({
  dish,
}: {
  dish: Dish
}) => {

  const colorScheme = useColorScheme();

  return (

    <ThemedView
      style={{
        width: 200,
        height: 200,
        gap: 14,
        flexDirection: "column"
      }}
    >

      <ThemedView
        style={{
          flex: 1,
          flexDirection: "column"
        }}
      >

        <Image
          source={dish.image}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 20,
            objectFit: "cover"
          }}
          contentFit="cover"
        />
      
        <Pressable
          style={{
            position: "absolute",
            right: 14,
            bottom: 14
          }}
        >

          <IconSymbol
            size={28}
            color={Colors[colorScheme ?? "light"].icon}
            name="plus"
          />

        </Pressable>

      </ThemedView>

      <ThemedView
        style={{
          flexDirection: "column",
          flexShrink: 0
        }}
      >

        <ThemedText
          type="defaultSemiBold"
          numberOfLines={1}
          ellipsizeMode="tail"
          style={{
            fontSize: 18
          }}
        >
          {dish.name}
        </ThemedText>

        <ThemedView
          style={{
            flexDirection: "row",
            gap: 8,
            alignItems: "center"
          }}
        >

          <ThemedText
            style={{
              fontSize: 14
            }}
          >
            ${dish.price}
            {" "}CAD
          </ThemedText>

        </ThemedView>

        <ThemedText
          type="defaultSemiBold"
          style={{
            borderRadius: 10,
            paddingHorizontal: 8,
            backgroundColor: Colors[colorScheme ?? "light"].tint,
            marginRight: "auto",
            fontSize: 12,
            color: Colors[colorScheme ?? "light"].background,
          }}
        >
          {dish.discount}% off
        </ThemedText>

      </ThemedView>

    </ThemedView>

  );

};
