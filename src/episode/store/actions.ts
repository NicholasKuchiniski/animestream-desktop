import { simpleAction } from "#/core/store/action";
import {
  EpisodeActionTypes,
  GetEpisodeAction,
  GetEpisodeSuccessAction,
  OnEpisodeTimeUpdateAction,
} from "#/episode/store/types";

export const getEpisode = simpleAction<GetEpisodeAction["payload"]>(EpisodeActionTypes.GET_EPISODE_REQUEST);
export const getEpisodeSuccess = simpleAction<GetEpisodeSuccessAction["payload"]>(
  EpisodeActionTypes.GET_EPISODE_SUCCESS,
);
export const getEpisodeFailure = simpleAction(EpisodeActionTypes.GET_EPISODE_FAILURE);
export const onEpisodePlay = simpleAction(EpisodeActionTypes.ON_EPISODE_PLAY);
export const onEpisodeTimeUpdate = simpleAction<OnEpisodeTimeUpdateAction["payload"]>(
  EpisodeActionTypes.ON_EPISODE_TIME_UPDATE,
);
export const onEpisodePause = simpleAction(EpisodeActionTypes.ON_EPISODE_PAUSE);
export const onEpisodeEnd = simpleAction(EpisodeActionTypes.ON_EPISODE_END);
