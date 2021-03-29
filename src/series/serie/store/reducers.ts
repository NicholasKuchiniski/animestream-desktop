import { produce } from "immer";
import { Reducer } from "redux";

import { EpisodesCollection } from "#/core/entities/collections/episodes-collection";
import { Serie } from "#/core/entities/serie";
import { SerieState, SerieActions, SerieActionTypes } from "#/series/serie/store/types";

const INITIAL_STATE: SerieState = {
  isLoading: false,
  serie: Serie.empty(),
  episodes: EpisodesCollection.empty(),
};

export const serieReducer: Reducer<SerieState, SerieActions> = (state = INITIAL_STATE, action: SerieActions) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SerieActionTypes.GET_SERIE_REQUEST: {
        draft.isLoading = true;
        draft.serie = Serie.empty();
        draft.episodes = EpisodesCollection.empty();
        break;
      }
      case SerieActionTypes.GET_SERIE_SUCCESS: {
        draft.isLoading = false;
        draft.serie = action.payload.serie;
        draft.episodes = action.payload.episodes;
        break;
      }
      case SerieActionTypes.GET_SERIE_FAILURE: {
        draft.isLoading = false;
        draft.serie = Serie.empty();
        draft.episodes = EpisodesCollection.empty();
        break;
      }
      default:
    }
  });
