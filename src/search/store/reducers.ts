import { produce } from "immer";
import { Reducer } from "redux";

import { SeriesCollection } from "#/core/collections/series-collection";
import { SearchActions, SearchActionTypes, SearchState } from "#/search/store/types";

export const INITIAL_STATE: SearchState = {
  isLoading: false,
  name: "",
  series: SeriesCollection.empty(),
};

export const searchReducer: Reducer<SearchState, SearchActions> = (state = INITIAL_STATE, action: SearchActions) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SearchActionTypes.SEARCH_REQUEST: {
        draft.isLoading = true;
        draft.name = action.payload.name;
        draft.series = SeriesCollection.empty();
        break;
      }
      case SearchActionTypes.SEARCH_SUCCESS: {
        draft.isLoading = false;
        draft.series = action.payload.series;
        break;
      }
      case SearchActionTypes.SEARCH_FAILURE: {
        draft.isLoading = false;
        draft.series = SeriesCollection.empty();
        break;
      }
      default:
    }
  });
