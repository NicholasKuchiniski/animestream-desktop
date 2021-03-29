import produce from "immer";
import { Reducer } from "redux";

import { Serie } from "#/core/entities/serie";
import { NewSeriesState, NewSeriesActions, NewSerieActionTypes } from "#/new-serie/store/types";

export const INITIAL_STATE: NewSeriesState = {
  isLoading: false,
  serie: Serie.empty(),
};

export const newSerieReducer: Reducer<NewSeriesState, NewSeriesActions> = (
  state = INITIAL_STATE,
  action: NewSeriesActions,
) =>
  produce(state, (draft) => {
    switch (action.type) {
      case NewSerieActionTypes.NEW_SERIE_REQUEST: {
        draft.isLoading = true;
        draft.serie = Serie.empty();
        break;
      }
      case NewSerieActionTypes.NEW_SERIE_SUCCESS: {
        draft.isLoading = false;
        draft.serie = action.payload.serie;
        break;
      }
      case NewSerieActionTypes.NEW_SERIE_FAILURE: {
        draft.isLoading = false;
        draft.serie = Serie.empty();
        break;
      }
      default:
    }
  });
