import { Image } from "expo-image";
import { DimensionValue, Text, TouchableOpacity, useColorScheme, View } from "react-native";
import { Colors } from "@/constants/theme";
import { Restaurant } from "@db-types";


export const RestaurantTile = ({
  restaurant,
  onPress,
  width,
  height
}: {
  restaurant: Restaurant;
  onPress: () => void;
  width: DimensionValue;
  height: DimensionValue;
}) => {

  const colorScheme = useColorScheme();

  return (

    <TouchableOpacity
      style={{
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        shadowColor: "#AEAEC0",
        shadowOffset: {
          width: 10,
          height: 10
        },
        shadowOpacity: 0.5,
        shadowRadius: 30,
        elevation: 5
      }}
      onPress={onPress}
      activeOpacity={0.8}
    >

      <Image
        source={restaurant.posterUrl}
        style={{
          width: width,
          height: height,
          borderRadius: 10
        }}
        contentFit="cover"
      />

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 4
        }}
      >

        <Text
          style={{
            fontSize: 18,
            fontFamily: "Atelia",
            color: Colors[colorScheme ?? "light"].cardForeground,
            flexShrink: 1
          }}
          numberOfLines={2}
          ellipsizeMode="tail"
        >
          {restaurant.name}
        </Text>

      </View>

    </TouchableOpacity>

  );

};
