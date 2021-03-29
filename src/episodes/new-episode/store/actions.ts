import { simpleAction } from "#/core/store/action";
import {
  NewEpisodeAction,
  NewEpisodeActionTypes,
  NewEpisodeSuccessAction,
  SearchSeriesAction,
  SearchSeriesSuccessAction,
  UploadVideoAction,
  UploadVideoProgressAction,
  UploadVideoSuccessAction,
} from "#/episodes/new-episode/store/types";

export const searchSeriesAction = simpleAction<SearchSeriesAction["payload"]>(
  NewEpisodeActionTypes.SEARCH_SERIES_REQUEST,
);

export const searchSeriesSuccessAction = simpleAction<SearchSeriesSuccessAction["payload"]>(
  NewEpisodeActionTypes.SEARCH_SERIES_SUCCESS,
);

export const searchSeriesFailureAction = simpleAction(NewEpisodeActionTypes.SEARCH_SERIES_FAILURE);

export const uploadVideoAction = simpleAction<UploadVideoAction["payload"]>(NewEpisodeActionTypes.UPLOAD_VIDEO_REQUEST);

export const uploadVideoProgressAction = simpleAction<UploadVideoProgressAction["payload"]>(
  NewEpisodeActionTypes.UPLOAD_VIDEO_PROGRESS,
);
export const uploadVideoSuccessAction = simpleAction<UploadVideoSuccessAction["payload"]>(
  NewEpisodeActionTypes.UPLOAD_VIDEO_SUCCESS,
);
export const uploadVideoFailureAction = simpleAction(NewEpisodeActionTypes.UPLOAD_VIDEO_FAILURE);
export const newEpisodeAction = simpleAction<NewEpisodeAction["payload"]>(NewEpisodeActionTypes.NEW_EPISODE_REQUEST);
export const newEpisodeSuccessAction = simpleAction<NewEpisodeSuccessAction["payload"]>(
  NewEpisodeActionTypes.NEW_EPISODE_SUCCESS,
);
export const newEpisodeFailureAction = simpleAction(NewEpisodeActionTypes.NEW_EPISODE_FAILURE);
