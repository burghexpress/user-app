import { Colors } from "@/constants/theme";
import { TextInput, TouchableOpacity, useColorScheme, View } from "react-native";
import { MagnifierIcon } from "./icons/magnifier";


export const SearchBar = (
  {
    onPress,
    onSearch,
    placeholder,
    value,
    onChangeText,
  }: {
    onPress?: () => void;
    onSearch?: () => void;
    placeholder?: string;
    value?: string;
    onChangeText?: (text: string) => void;
  }
) => {

  const colorScheme = useColorScheme();

  return (

    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.9}
    >

      <View
        style={{
          borderRadius: 60,
          backgroundColor: "#E0E0E0",
          shadowColor: "#AEAEC0",
          shadowOffset: { width: 10, height: 10 },
          shadowOpacity: 0.5,
          shadowRadius: 30,
          elevation: 5
        }}
      >

        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 20,
            paddingVertical: 4,
            alignItems: "center",
            justifyContent: "flex-start",
            backgroundColor: Colors[colorScheme ?? "light"].searchBarBackground,
            borderRadius: 60,
            gap: 10,
            padding: 12,
            shadowColor: "#FFFFFF",
            shadowOffset: { width: -10, height: -10 },
            shadowRadius: 30
          }}
        >
        
          <TouchableOpacity
            onPress={(e) => {
              if (onSearch) {
                e.preventDefault();
                onSearch();
              }
            }}
            activeOpacity={0.8}
          >

            <MagnifierIcon
              size={24}
              color={Colors[colorScheme === "light" ? "dark" : "light"].searchBarIcon}
            />

          </TouchableOpacity>

          <TextInput
            placeholder={placeholder ?? "Search"}
            placeholderTextColor={Colors["light"].searchBarPlaceholder}
            style={{
              flex: 1,
              fontSize: 18,
              color: Colors["light"].searchBarText,
              fontFamily: "Metropolis-Regular"
            }}
            value={value}
            onChangeText={onChangeText}
            returnKeyType="search"
            onSubmitEditing={() => onSearch?.()}
          />

        </View>

      </View>

    </TouchableOpacity>

  );

};
