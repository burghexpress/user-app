import { Platform } from 'react-native';


const tintColorLight = "#f08080";
const tintColorDark = "#f08080";


export const Colors = {
  light: {
    text: "#11181C",
    background: "#fff",
    tint: tintColorLight,

    buttonBackground: "#11181C",
    buttonText: "#fff",

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

    buttonBackground: "#ECEDEE",
    buttonText: "#151718",

    surfaceMuted: "#1C1F22",

    surface: "#1F2225",
    surfaceBorder: "#2A2E32",

    placeholder: "#9BA1A6",

    icon: '#9BA1A6',
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
