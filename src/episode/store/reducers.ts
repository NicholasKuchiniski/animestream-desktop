import { produce } from "immer";
import { Reducer } from "redux";

import { EpisodesCollection } from "#/core/collections/episodes-collection";
import { Episode } from "#/core/entities/episode";
import { Progress } from "#/core/entities/progress";
import { EpisodeState, EpisodeActions, EpisodeActionTypes } from "#/episode/store/types";

const INITIAL_STATE: EpisodeState = {
  isLoading: false,
  episode: Episode.empty(),
  episodes: EpisodesCollection.empty(),
  progress: Progress.empty(),
};

export const episodeReducer: Reducer<EpisodeState, EpisodeActions> = (state = INITIAL_STATE, action: EpisodeActions) =>
  produce(state, (draft) => {
    switch (action.type) {
      case EpisodeActionTypes.GET_EPISODE_REQUEST: {
        draft.isLoading = true;
        draft.episode = Episode.empty();
        draft.episodes = EpisodesCollection.empty();
        draft.progress = Progress.empty();
        break;
      }
      case EpisodeActionTypes.GET_EPISODE_SUCCESS: {
        draft.isLoading = false;
        draft.episode = action.payload.episode;
        draft.episodes = action.payload.episodes;
        draft.progress = action.payload.progress;
        break;
      }
      case EpisodeActionTypes.GET_EPISODE_FAILURE: {
        draft.isLoading = false;
        draft.episode = Episode.empty();
        draft.episodes = EpisodesCollection.empty();
        draft.progress = Progress.empty();
        break;
      }
      case EpisodeActionTypes.ON_EPISODE_TIME_UPDATE: {
        state.progress.setDuration(action.payload.duration);
        draft.progress = state.progress;
        break;
      }
      default:
    }
  });
