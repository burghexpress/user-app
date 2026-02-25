import { Colors } from "@/constants/theme";
import { Pressable, TextInput, TextInputChangeEvent, useColorScheme } from "react-native";
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

    <Pressable
      style={{
        flexDirection: "row",
        paddingHorizontal: 20,
        paddingVertical: 4,
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: Colors[colorScheme ?? "light"].searchBarBackground,
        borderRadius: 60,
        gap: 10
      }}
      onPress={onPress}
    >

      <Pressable
        onPress={(e) => {
          if (onSearch) {
            e.preventDefault();
            onSearch();
          }
        }}
      >

        <MagnifierIcon
          size={24}
          color={Colors[colorScheme === "light" ? "dark" : "light"].searchBarIcon}
        />

      </Pressable>

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
      />

    </Pressable>

  );

};
