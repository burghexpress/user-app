import { Platform } from 'react-native';


const tintColorLight = "#f08080";
const tintColorDark = "#f08080";


export const Colors = {
  light: {
    text: "#11181C",
    background: "#FFF9E5",
    tint: tintColorLight,

    searchBarBackground: "#1E1E1E",
    searchBarForeground: "#687076",

    buttonBackground: "#EA0000",
    buttonForeground: "#FFF9E5",

    cardForeground: "#000000",
    cardSecondaryText: "#1E1E1E",
    cardIcon: "#000000",
    cardPrice: "#EA0000",

    surfaceMuted: "#F6F7F9",

    surface: "#F2F3F5",
    surfaceBorder: "#E1E4E8",

    placeholder: "#8A9197",

    icon: "#687076",
    iconMuted: "#A1A6AB",

    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#ECEDEE",
    background: "#151718",
    tint: tintColorDark,

    searchBarBackground: "#1E1E1E",
    searchBarForeground: "#687076",

    buttonBackground: "#EA0000",
    buttonForeground: "#FFF9E5",

    cardSecondaryText: "#1E1E1E",
    cardIcon: "#ffffff",
    cardPrice: "#EA0000",

    surfaceMuted: "#1C1F22",

    surface: "#1F2225",
    surfaceBorder: "#2A2E32",

    placeholder: "#9BA1A6",

    icon: '#fff9e5',
    iconMuted: "#8E959B",

    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};


export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
