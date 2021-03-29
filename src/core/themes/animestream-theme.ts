import { Colors, extendTheme } from "@chakra-ui/react";

import { Menu } from "#/core/themes/components/menu";
import { Modal } from "#/core/themes/components/modal";
import { ThemeBackgrounds, ThemeColors } from "#/core/themes/store/types";

const pickByColor = (color: ThemeColors) => <T = any>(
  values: {
    [key in ThemeColors]: T;
  },
): T => values[color];

const pickByBackground = (background: ThemeBackgrounds) => <T = any>(
  values: {
    [key in ThemeBackgrounds]: T;
  },
): T => values[background];

export const animestreamTheme = (color: ThemeColors, background: ThemeBackgrounds) => {
  const selectColor = pickByColor(color);
  const selectBackground = pickByBackground(background);

  const chocolateWeb = {
    50: "#FFBE85",
    100: "#FFB370",
    200: "#FFA85C",
    300: "#FF9D47",
    400: "#FF9233",
    500: "#FF7F11",
    600: "#C05621",
    700: "#FF7C0A",
    800: "#F57200",
    900: "#E06900",
  };
  const screaminGreen = {
    50: "#99FFB3",
    100: "#85FFA3",
    200: "#70FF94",
    300: "#5CFF85",
    400: "#47FF75",
    500: "#35FF69",
    600: "#1FFF57",
    700: "#0AFF47",
    800: "#00F53D",
    900: "#00E038",
  };
  const crimson = {
    50: "#E98690",
    100: "#E67580",
    200: "#E36471",
    300: "#DF5361",
    400: "#DC4151",
    500: "#d62839",
    600: "#cf2637",
    700: "#BE2332",
    800: "#AC202E",
    900: "#9B1C29",
  };

  const persianBlue = {
    50: "#938FE0",
    100: "#746FD8",
    200: "#746FD8",
    300: "#655FD3",
    400: "#554FCF",
    500: "#3F37C9",
    600: "#3C35C0",
    700: "#3730B0",
    800: "#322CA0",
    900: "#2D2790",
  };

  const maximumYellowRed = {
    50: "#F9E4B3",
    100: "#F8DEA0",
    200: "#F7D78D",
    300: "#F6D079",
    400: "#F4C967",
    500: "#F2C14E",
    600: "#F1BC41",
    700: "#EFB52E",
    800: "#EEAF1B",
    900: "#E4A511",
  };

  const purpleDark = {
    50: "#AC3CF6",
    100: "#A329F5",
    200: "#9B15F4",
    300: "#910BEA",
    400: "#850AD6",
    500: "#7209B7",
    600: "#6D08AF",
    700: "#60079C",
    800: "#540688",
    900: "#480576",
  };

  const animestream: Colors = selectColor({
    chocolateWeb,
    screaminGreen,
    crimson,
    persianBlue,
    maximumYellowRed,
    purpleDark,
  });

  const backgroundLight: Colors = {
    50: "#FFFFFF",
    100: "#FFFFFF",
    200: "#FFFFFF",
    300: "#FFFFFF",
    400: "#FFFFFF",
    500: "#FFFFFF",
    600: "#FFFFFF",
    700: "#FFFFFF",
    800: "#FFFFFF",
    900: "#f4f5f7",
  };

  const backgroundDark = {
    50: "#666666",
    100: "#5C5C5C",
    200: "#525252",
    300: "#474747",
    400: "#3D3D3D",
    500: "#333333",
    600: "#292929",
    700: "#1F1F1F",
    800: "#111111",
    900: "#000000",
  };

  const selectedBackground = selectBackground({
    light: backgroundLight,
    dark: backgroundDark,
  });

  const scrollbarTrackColor = selectBackground({
    light: "blackAlpha.200",
    dark: "whiteAlpha.200",
  });

  const scrollbarTrackBackgroundColor = selectBackground({
    light: "blackAlpha.200",
    dark: "whiteAlpha.200",
  });

  const outline = `0 0 0 3px ${animestream[500]}`;

  return extendTheme({
    components: {
      Modal,
      Menu,
    },
    styles: {
      global: {
        body: {
          background: "transparent",
          overflow: "hidden",
          userSelect: "none",
          height: "100vh",
          width: "100vw",
        },
        "*::-webkit-scrollbar": {
          height: "7px",
          width: "7px",
        },
        "*::-webkit-scrollbar-track": {
          backgroundColor: scrollbarTrackColor,
          borderRadius: "0.375rem",
        },
        "*::-webkit-scrollbar-thumb": {
          backgroundColor: scrollbarTrackBackgroundColor,
          borderRadius: "0.375rem",
        },
      },
    },
    shadows: {
      outline,
    },
    config: {
      initialColorMode: "light",
      useSystemColorMode: false,
    },
    colors: {
      animestream,
      background: selectedBackground,
      chocolateWeb,
      screaminGreen,
      crimson,
      persianBlue,
      maximumYellowRed,
      purpleDark,
      backgroundLight,
      backgroundDark,
    },
  });
};
