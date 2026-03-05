import { Platform } from 'react-native';



export const Colors = {
  light: {
    text: "#11181C",
    foreground: "#11181C",
    background: "#FFF9E5",
    tint: "#f08080",

    logoBackground: "#1E1E1E",

    headerButtonBackground: "#1E1E1E",
    headerButtonForeground: "#687076",

    searchBarBackground: "#1E1E1E",
    searchBarIcon: "#687076",
    searchBarText: "#FFF9E5",
    searchBarPlaceholder: "#687076",

    buttonBackground: "#EA0000",
    buttonForeground: "#FFF9E5",
    inactiveButtonBackground: "#1E1E1E",
    inactiveBUttonForeground: "#FFF9E5",

    cardBackground: "#FFF9E5",
    cardForeground: "#1E1E1E",
    cardSecondaryText: "#1E1E1E",
    cardIcon: "#000000",
    cardPrice: "#EA0000",

    filterBackground: "#8A9197",
    filterForeground: "#FFF9E5",
    activeFilterBackground: "#1E1E1E",
    activeFilterForeground: "#FFF9E5",

    surfaceMuted: "#F6F7F9",

    surface: "#F2F3F5",
    surfaceBorder: "#E1E4E8",

    placeholder: "#8A9197",

    icon: "#687076",
    iconMuted: "#A1A6AB",

    tabIconDefault: "#687076",
    tabIconSelected: "#f08080",
  },
  dark: {
    text: "#FFF9E5",
    foreground: "#FFF9E5",
    background: "#151718",
    tint: "#f08080",

    logoBackground: "#1E1E1E",

    headerButtonBackground: "#1E1E1E",
    headerButtonForeground: "#687076",

    searchBarBackground: "#1E1E1E",
    searchBarIcon: "#687076",
    searchBarText: "#FFF9E5",
    searchBarPlaceholder: "#687076",

    buttonBackground: "#EA0000",
    buttonForeground: "#FFF9E5",
    inactiveButtonBackground: "#FFFFFF",
    inactiveBUttonForeground: "#1E1E1E",

    cardBackground: "#1E1E1E",
    cardForeground: "#FFF9E5",
    cardSecondaryText: "#FFF9E5",
    cardIcon: "#FFF9E5",
    cardPrice: "#EA0000",

    filterBackground: "#1C1F22",
    filterForeground: "#FFF9E5",
    activeFilterBackground: "#EA0000",
    activeFilterForeground: "#FFF9E5",

    surfaceMuted: "#1C1F22",

    surface: "#1F2225",
    surfaceBorder: "#2A2E32",

    placeholder: "#9BA1A6",

    icon: "#fff9e5",
    iconMuted: "#8E959B",

    tabIconDefault: "#9BA1A6",
    tabIconSelected: "#f08080",
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
