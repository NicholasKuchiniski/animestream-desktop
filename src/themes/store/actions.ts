import { simpleAction } from "#/core/store/action";
import { SetThemeBackgroundAction, SetThemeColorAction, ThemeActionTypes } from "#/themes/store/types";

export const setThemeColor = simpleAction<SetThemeColorAction["payload"]>(ThemeActionTypes.SET_THEME_COLOR);
export const setThemeBackgrounhd = simpleAction<SetThemeBackgroundAction["payload"]>(
  ThemeActionTypes.SET_THEME_BACKGROUND,
);
