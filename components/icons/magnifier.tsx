import * as React from "react";
import { ColorValue } from "react-native";
import Svg, { Path } from "react-native-svg";



export const MagnifierIcon = ({
  color,
  size
}: {
  color: ColorValue;
  size: number;
}) => (

  <Svg
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 24 24"
  >

    <Path
      fill={color}
      d="M21.71 20.29 18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1.002 1.002 0 0 0 1.42 0 1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z"
    />

  </Svg>

);
