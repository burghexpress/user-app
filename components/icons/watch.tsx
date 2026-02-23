import * as React from "react"
import { ColorValue } from "react-native";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";



export const WatchIcon = ({
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

    <G clipPath="url(#a)">

      <Path
        fill={color ?? "inherit"}
        d="m6.29 5.264-.873-.504V2.917a.417.417 0 1 0-.834 0V5a.417.417 0 0 0 .209.36l1.082.626a.417.417 0 1 0 .417-.722ZM5 .834a4.167 4.167 0 1 0 0 8.333A4.167 4.167 0 0 0 5 .833Zm0 7.5a3.333 3.333 0 1 1 0-6.667 3.333 3.333 0 0 1 0 6.666Z"
      />

    </G>

  </Svg>

);
