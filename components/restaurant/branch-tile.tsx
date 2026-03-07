import { Image } from "expo-image";
import { DimensionValue, Text, TouchableOpacity, useColorScheme, View } from "react-native";
import { Colors } from "@/constants/theme";
import { RestaurantBranch } from "@db-types";
import { StarIcon } from "../icons/star";
import { WatchIcon } from "../icons/watch";
import { IconSymbol } from "../ui/icon-symbol";



export const RestaurantBranchTile = ({
  restaurant,
  onPress,
  width,
  height
}: {
  restaurant: RestaurantBranch;
  onPress: () => void;
  width: DimensionValue;
  height: DimensionValue;
}) => {

  const colorScheme = useColorScheme();

  return (

    <TouchableOpacity
      style={{
        flexDirection: "column",
        width: width,
        gap: 4
      }}
      onPress={onPress}
      activeOpacity={0.8}
    >

      <Image
        source={restaurant.posterUrl}
        style={{
          width: width,
          height: height,
          borderRadius: 20
        }}
        contentFit="cover"
      />

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
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

        <TouchableOpacity
          activeOpacity={0.8}
        >

          <IconSymbol
            size={24}
            color={Colors[colorScheme ?? "light"].headerButtonForeground}
            name="heart"
          />

        </TouchableOpacity>

      </View>

      <Text
        style={{
          fontFamily: "Metropolis-Regular",
          fontSize: 10,
          color: Colors[colorScheme ?? "light"].cardSecondaryText
        }}
      >
        ${2} Delivery fee
      </Text>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10
        }}
      >

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 5
          }}
        >

          <StarIcon
            color={Colors[colorScheme ?? "light"].cardIcon}
            size={10}
          />

          <Text
            style={{
              fontFamily: "Metropolis-Regular",
              fontSize: 8,
              color: Colors[colorScheme ?? "light"].cardSecondaryText
            }}
          >
            {4.5}({2000}+)
          </Text>

        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 5
          }}
        >

          <WatchIcon
            color={Colors[colorScheme ?? "light"].cardIcon}
            size={10}
          />

          <Text
            style={{
              fontFamily: "Metropolis-Regular",
              fontSize: 8,
              color: Colors[colorScheme ?? "light"].cardSecondaryText
            }}
          >
            {"13-19 mins"}
          </Text>

        </View>

      </View>

    </TouchableOpacity>

  );

};
