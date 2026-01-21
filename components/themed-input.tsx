import { StyleSheet, TextInput, type TextInputProps } from "react-native";
import { useThemeColor } from "@/hooks/use-theme-color";



export type ThemedTextInputProps = TextInputProps & {
  lightColor?: string;
  darkColor?: string;
};



export function ThemedInput ({
  style,
  lightColor,
  darkColor,
  ...rest
}: ThemedTextInputProps) {

  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return (

    <TextInput
      style={[
        { color },
        {
          borderColor: color
        },
        styles.input,
        style,
      ]}
      {...rest}
    />

  );

}



const styles = StyleSheet.create({
  input: {
    padding: 10
  },
});
