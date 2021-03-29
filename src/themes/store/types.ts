import { PayloadAction } from "typesafe-actions";

export enum ThemeColors {
  ChocolateWeb = "chocolateWeb",
  ScreaminGreen = "screaminGreen",
  Crimson = "crimson",
  PersianBlue = "persianBlue",
  MaximumYellowRed = "maximumYellowRed",
  PurpleDark = "purpleDark",
}

export enum ThemeBackgrounds {
  Light = "light",
  Dark = "dark",
}

export enum ThemeActionTypes {
  SET_THEME_COLOR = "@theme/SET_THEME_COLOR",
  SET_THEME_BACKGROUND = "@theme/SET_THEME_BACKGROUND",
}

export type SetThemeColorAction = PayloadAction<
  ThemeActionTypes.SET_THEME_COLOR,
  {
    color: ThemeColors;
  }
>;

export type SetThemeBackgroundAction = PayloadAction<
  ThemeActionTypes.SET_THEME_BACKGROUND,
  {
    background: ThemeBackgrounds;
  }
>;

export type ThemeActions = SetThemeColorAction | SetThemeBackgroundAction;

export interface ThemeState {
  color: ThemeColors;
  background: ThemeBackgrounds;
}
