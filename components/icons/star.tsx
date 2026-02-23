import * as React from "react"
import { ColorValue } from "react-native";
import Svg, { Path } from "react-native-svg"



export const StarIcon = ({
  color,
  size = 10
}: {
  color?: ColorValue;
  size?: number;
}) => (

  <Svg
    width={size}
    height={size}
    fill="none"
  >

    <Path
      fill={color ?? "inherit"}
      d="M9.167 4.208c.041-.208-.125-.458-.334-.458l-2.375-.333L5.375 1.25a.325.325 0 0 0-.167-.167C5 .958 4.75 1.042 4.625 1.25L3.583 3.417l-2.375.333c-.125 0-.208.042-.25.125a.403.403 0 0 0 0 .583l1.709 1.667L2.25 8.5c0 .083 0 .167.042.25.125.208.375.292.583.167L5 7.792l2.125 1.125c.042.041.125.041.208.041h.084a.432.432 0 0 0 .333-.5l-.417-2.375 1.709-1.666a.23.23 0 0 0 .125-.209Z"
    />

  </Svg>

);
