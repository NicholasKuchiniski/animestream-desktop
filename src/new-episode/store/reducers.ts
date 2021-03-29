import { produce } from "immer";
import { Reducer } from "redux";

import { SeriesCollection } from "#/core/collections/series-collection";
import { Episode } from "#/core/entities/episode";
import { File } from "#/core/entities/file";
import { NewEpisodeState, NewEpisodeActions, NewEpisodeActionTypes } from "#/new-episode/store/types";

export const INITIAL_STATE: NewEpisodeState = {
  isLoading: false,
  series: SeriesCollection.empty(),
  episode: Episode.empty(),
  video: {
    isLoading: false,
    progress: 0,
    video: File.empty(),
  },
};

export const newEpisodeReducer: Reducer<NewEpisodeState, NewEpisodeActions> = (
  state = INITIAL_STATE,
  action: NewEpisodeActions,
) =>
  produce(state, (draft) => {
    switch (action.type) {
      case NewEpisodeActionTypes.SEARCH_SERIES_REQUEST: {
        draft.isLoading = true;
        draft.series = SeriesCollection.empty();
        break;
      }
      case NewEpisodeActionTypes.SEARCH_SERIES_SUCCESS: {
        draft.isLoading = false;
        draft.series = action.payload.series;
        break;
      }
      case NewEpisodeActionTypes.SEARCH_SERIES_FAILURE: {
        draft.isLoading = false;
        draft.series = SeriesCollection.empty();
        break;
      }
      case NewEpisodeActionTypes.UPLOAD_VIDEO_REQUEST: {
        draft.video = {
          isLoading: true,
          progress: 0,
          video: File.empty(),
        };
        break;
      }
      case NewEpisodeActionTypes.UPLOAD_VIDEO_PROGRESS: {
        draft.video = {
          isLoading: true,
          progress: action.payload.progress,
          video: File.empty(),
        };
        break;
      }
      case NewEpisodeActionTypes.UPLOAD_VIDEO_SUCCESS: {
        draft.video = {
          isLoading: false,
          progress: draft.video.progress,
          video: action.payload.file,
        };
        break;
      }
      case NewEpisodeActionTypes.UPLOAD_VIDEO_FAILURE: {
        draft.video = {
          isLoading: false,
          progress: 0,
          video: File.empty(),
        };
        break;
      }
      case NewEpisodeActionTypes.NEW_EPISODE_REQUEST: {
        draft.isLoading = true;
        draft.episode = Episode.empty();
        break;
      }
      case NewEpisodeActionTypes.NEW_EPISODE_SUCCESS: {
        draft.isLoading = false;
        draft.episode = action.payload.episode;
        break;
      }
      case NewEpisodeActionTypes.NEW_EPISODE_FAILURE: {
        draft.isLoading = false;
        draft.episode = Episode.empty();
        break;
      }
      default:
    }
  });
