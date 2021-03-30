import { Action, PayloadAction } from "typesafe-actions";

import { SeriesCollection } from "#/core/entities/collections/series-collection";
import { Episode } from "#/core/entities/episode";
import { File as FileEntity } from "#/core/entities/file";

export enum NewEpisodeActionTypes {
  SEARCH_SERIES_REQUEST = "@new-episode/SEARCH_SERIES_REQUEST",
  SEARCH_SERIES_SUCCESS = "@new-episode/SEARCH_SERIES_SUCCESS",
  SEARCH_SERIES_FAILURE = "@new-episode/SEARCH_SERIES_FAILURE",
  UPLOAD_VIDEO_REQUEST = "@videos/UPLOAD_VIDEO_REQUEST",
  UPLOAD_VIDEO_PROGRESS = "@videos/UPLOAD_VIDEO_PROGRESS",
  UPLOAD_VIDEO_SUCCESS = "@videos/UPLOAD_VIDEO_SUCCESS",
  UPLOAD_VIDEO_FAILURE = "@videos/UPLOAD_VIDEO_FAILURE",
  NEW_EPISODE_REQUEST = "@episodes/NEW_EPISODE_REQUEST",
  NEW_EPISODE_SUCCESS = "@episodes/NEW_EPISODE_SUCCESS",
  NEW_EPISODE_FAILURE = "@episodes/NEW_EPISODE_FAILURE",
}

export type NewEpisode = {
  name: string;
  description: string;
  duration: number;
  number: number;
  image: string;
  quality: number;
  serieId: string;
};

export type SearchSeriesAction = PayloadAction<
  NewEpisodeActionTypes.SEARCH_SERIES_REQUEST,
  {
    name: string;
  }
>;

export type SearchSeriesSuccessAction = PayloadAction<
  NewEpisodeActionTypes.SEARCH_SERIES_SUCCESS,
  {
    series: SeriesCollection;
  }
>;

export type SearchSeriesFailureAction = Action<NewEpisodeActionTypes.SEARCH_SERIES_FAILURE>;

export type UploadVideoAction = PayloadAction<
  NewEpisodeActionTypes.UPLOAD_VIDEO_REQUEST,
  {
    file: File;
    newEpisode: NewEpisode;
  }
>;

export type UploadVideoProgressAction = PayloadAction<
  NewEpisodeActionTypes.UPLOAD_VIDEO_PROGRESS,
  {
    progress: number;
  }
>;

export type UploadVideoSuccessAction = PayloadAction<
  NewEpisodeActionTypes.UPLOAD_VIDEO_SUCCESS,
  {
    file: FileEntity;
  }
>;

export type UploadVideoFailureAction = Action<NewEpisodeActionTypes.UPLOAD_VIDEO_FAILURE>;

export type NewEpisodeAction = Action<NewEpisodeActionTypes.NEW_EPISODE_REQUEST>;

export type NewEpisodeSuccessAction = PayloadAction<
  NewEpisodeActionTypes.NEW_EPISODE_SUCCESS,
  {
    episode: Episode;
  }
>;

export type NewEpisodeFailureAction = Action<NewEpisodeActionTypes.NEW_EPISODE_FAILURE>;

export type NewEpisodeActions =
  | SearchSeriesAction
  | SearchSeriesSuccessAction
  | SearchSeriesFailureAction
  | UploadVideoAction
  | UploadVideoProgressAction
  | UploadVideoSuccessAction
  | UploadVideoFailureAction
  | NewEpisodeAction
  | NewEpisodeSuccessAction
  | NewEpisodeFailureAction;

export interface NewEpisodeState {
  isLoading: boolean;
  isLoadingSeries: boolean;
  series: SeriesCollection;
  episode: Episode;
  newEpisode: NewEpisode;
  video: {
    progress: number;
    video: FileEntity;
  };
}
