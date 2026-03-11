import { ThemedView } from "@/components/themed-view";
import { Dish } from "../inteface";
import { Image } from "expo-image";
import { Pressable, useColorScheme } from "react-native";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Colors } from "@/constants/theme";
import { ThemedText } from "@/components/themed-text";
import { useRouter } from "expo-router";




export const DishTileHorizontal = ({
  dish,
}: {
  dish: Dish
}) => {

  const colorScheme = useColorScheme();

  const router = useRouter();

  return (

    <ThemedView
      style={{
        gap: 14,
        flexDirection: "row"
      }}
    >

      <Image
        source={dish.image}
        style={{
          width: 100,
          height: 100,
          borderRadius: 20,
        }}
        contentFit="cover"
      />

      <ThemedView
        style={{
          flexDirection: "column",
          flex: 1,
          position: "relative"
        }}
      >

        <ThemedText
          type="defaultSemiBold"
          numberOfLines={2}
          ellipsizeMode="tail"
          style={{
            fontSize: 18,
            flexShrink: 1
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

        {dish.contents &&
          <ThemedText
            numberOfLines={2}
            ellipsizeMode="tail"
            style={{
              fontSize: 10,
              opacity: 70
            }}
          >
            {dish.contents.join(", ")}
          </ThemedText>
        }

        <ThemedView
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "auto"
          }}
        >

          <ThemedText
            type="defaultSemiBold"
            style={{
              borderRadius: 10,
              paddingHorizontal: 8,
              backgroundColor: Colors[colorScheme ?? "light"].tint,
              fontSize: 12,
              color: Colors[colorScheme ?? "light"].background
            }}
          >
            {dish.discount}% off
          </ThemedText>

        </ThemedView>

        <Pressable
          onPress={() => router.push(`/resturant/order/create`)}
          style={{
            borderRadius: 20,
            padding: 4,
            backgroundColor: Colors[colorScheme ?? "light"].buttonBackground,
            bottom: 14,
            right: 14,
            position: "absolute"
          }}
        >

          <IconSymbol
            size={28}
            color={Colors[colorScheme ?? "light"].icon}
            name="plus"
          />

        </Pressable>

      </ThemedView>

    </ThemedView>

  );

};
