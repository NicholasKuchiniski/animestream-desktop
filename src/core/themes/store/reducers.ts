import { produce } from "immer";
import { Reducer } from "redux";

import { ThemeActions, ThemeActionTypes, ThemeBackgrounds, ThemeColors, ThemeState } from "#/core/themes/store/types";

export const INITIAL_STATE: ThemeState = {
  color: ThemeColors.Crimson,
  background: ThemeBackgrounds.Light,
};

export const themeReducer: Reducer<ThemeState, ThemeActions> = (state = INITIAL_STATE, action: ThemeActions) =>
  produce(state, (draft) => {
    switch (action.type) {
      case ThemeActionTypes.SET_THEME_COLOR: {
        draft.color = action.payload.color;
        break;
      }
      case ThemeActionTypes.SET_THEME_BACKGROUND: {
        draft.background = action.payload.background;
        break;
      }
      default:
    }
  });
