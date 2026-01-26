import { SymbolWeight, SymbolViewProps } from "expo-symbols";
import { ComponentProps } from "react";
import { OpaqueColorValue, type StyleProp, type TextStyle } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';



type IconMapping = Record<SymbolViewProps["name"], ComponentProps<typeof MaterialIcons>["name"]>
type IconSymbolName = keyof typeof MAPPING;



const MAPPING = {
  "house.fill": "home",
  "chevron.right": "chevron-right",
  "chevron.left": "chevron-left",
  "chevron.down": "arrow-drop-down",
  "person": "person",
  "magnifyingglass.circle": "search",
  "cart": "shopping-bag",
  "heart": "favorite-outline",
  "star.fill": "star",
  "hand.thumbsup": "thumb-up",
  "clock": "timer",
  "location": "location-on"
  
} as IconMapping;



export function IconSymbol({
  name,
  size = 24,
  color,
  style,
}: {
  name: IconSymbolName;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<TextStyle>;
  weight?: SymbolWeight;
}) {

  return <MaterialIcons
    color={color}
    size={size}
    name={MAPPING[name]}
    style={style}
  />;

}
