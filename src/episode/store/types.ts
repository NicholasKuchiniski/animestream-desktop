import { Action, PayloadAction } from "typesafe-actions";

import { EpisodesCollection } from "#/core/collections/episodes-collection";
import { Episode } from "#/core/entities/episode";
import { Progress } from "#/core/entities/progress";

export enum EpisodeActionTypes {
  GET_EPISODE_REQUEST = "@episode/GET_EPISODE_REQUEST",
  GET_EPISODE_SUCCESS = "@episode/GET_EPISODE_SUCCESS",
  GET_EPISODE_FAILURE = "@episode/GET_EPISODE_FAILURE",
  ON_EPISODE_PLAY = "@episode/ON_EPISODE_PLAY",
  ON_EPISODE_PAUSE = "@episode/ON_EPISODE_PAUSE",
  ON_EPISODE_END = "@episode/ON_EPISODE_END",
  ON_EPISODE_TIME_UPDATE = "@episode/ON_EPISODE_TIME_UPDATE",
}

export type GetEpisodeAction = PayloadAction<
  EpisodeActionTypes.GET_EPISODE_REQUEST,
  {
    episodeId: string;
  }
>;

export type GetEpisodeSuccessAction = PayloadAction<
  EpisodeActionTypes.GET_EPISODE_SUCCESS,
  {
    episode: Episode;
    episodes: EpisodesCollection;
    progress: Progress;
  }
>;

export type GetEpisodeFailureAction = Action<EpisodeActionTypes.GET_EPISODE_FAILURE>;

export type OnEpisodePlayAction = Action<EpisodeActionTypes.ON_EPISODE_PLAY>;

export type OnEpisodePauseAction = Action<EpisodeActionTypes.ON_EPISODE_PAUSE>;

export type OnEpisodeEndAction = Action<EpisodeActionTypes.ON_EPISODE_END>;

export type OnEpisodeTimeUpdateAction = PayloadAction<
  EpisodeActionTypes.ON_EPISODE_TIME_UPDATE,
  {
    duration: number;
  }
>;

export type EpisodeActions =
  | GetEpisodeAction
  | GetEpisodeSuccessAction
  | GetEpisodeFailureAction
  | OnEpisodePlayAction
  | OnEpisodeTimeUpdateAction
  | OnEpisodePauseAction
  | OnEpisodeEndAction;

export interface EpisodeState {
  isLoading: boolean;
  episode: Episode;
  episodes: EpisodesCollection;
  progress: Progress;
}
