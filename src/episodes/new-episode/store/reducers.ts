import { produce } from "immer";
import { Reducer } from "redux";

import { SeriesCollection } from "#/core/entities/collections/series-collection";
import { Episode } from "#/core/entities/episode";
import { File } from "#/core/entities/file";
import { NewEpisodeState, NewEpisodeActions, NewEpisodeActionTypes } from "#/episodes/new-episode/store/types";

export const INITIAL_STATE: NewEpisodeState = {
  isLoading: false,
  isLoadingSeries: false,
  series: SeriesCollection.empty(),
  episode: Episode.empty(),
  newEpisode: {
    name: "",
    description: "",
    duration: 0,
    number: 0,
    image: "",
    quality: 0,
    serieId: "",
  },
  video: {
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
        draft.isLoadingSeries = true;
        draft.series = SeriesCollection.empty();
        break;
      }
      case NewEpisodeActionTypes.SEARCH_SERIES_SUCCESS: {
        draft.isLoadingSeries = false;
        draft.series = action.payload.series;
        break;
      }
      case NewEpisodeActionTypes.SEARCH_SERIES_FAILURE: {
        draft.isLoadingSeries = false;
        draft.series = SeriesCollection.empty();
        break;
      }
      case NewEpisodeActionTypes.UPLOAD_VIDEO_REQUEST: {
        draft.isLoading = true;
        draft.newEpisode = action.payload.newEpisode;
        draft.video = {
          progress: 0,
          video: File.empty(),
        };
        break;
      }
      case NewEpisodeActionTypes.UPLOAD_VIDEO_PROGRESS: {
        draft.video = {
          progress: action.payload.progress,
          video: File.empty(),
        };
        break;
      }
      case NewEpisodeActionTypes.UPLOAD_VIDEO_SUCCESS: {
        draft.video = {
          progress: draft.video.progress,
          video: action.payload.file,
        };
        break;
      }
      case NewEpisodeActionTypes.UPLOAD_VIDEO_FAILURE: {
        draft.isLoading = false;
        draft.video = {
          progress: 0,
          video: File.empty(),
        };
        break;
      }
      case NewEpisodeActionTypes.NEW_EPISODE_REQUEST: {
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
