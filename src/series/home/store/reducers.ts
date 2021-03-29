import { produce } from "immer";
import { Reducer } from "redux";

import { EpisodesCollection } from "#/core/entities/collections/episodes-collection";
import { HomeActions, HomeActionTypes, HomeState } from "#/series/home/store/types";

export const INITIAL_STATE: HomeState = {
  isLoading: false,
  episodes: EpisodesCollection.empty(),
};

export const homeReducer: Reducer<HomeState, HomeActions> = (state = INITIAL_STATE, action: HomeActions) =>
  produce(state, (draft) => {
    switch (action.type) {
      case HomeActionTypes.GET_HOME_REQUEST: {
        draft.isLoading = true;
        draft.episodes = EpisodesCollection.empty();
        break;
      }
      case HomeActionTypes.GET_HOME_SUCCESS: {
        draft.isLoading = false;
        draft.episodes = action.payload.episodes;
        break;
      }
      case HomeActionTypes.GET_HOME_FAILURE: {
        draft.isLoading = false;
        draft.episodes = EpisodesCollection.empty();
        break;
      }
      default:
    }
  });
