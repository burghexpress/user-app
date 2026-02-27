import * as React from "react"
import { ColorValue } from "react-native";
import Svg, { Path } from "react-native-svg"



export const StarIcon = ({
  color = "#000000",
  size = 10
}: {
  color?: ColorValue;
  size?: number;
}) => (

  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
  >

    <Path
      fill={color}
      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
    />

  </Svg>

);
