import { Action, PayloadAction } from "typesafe-actions";

import { EpisodesCollection } from "#/core/entities/collections/episodes-collection";

export enum HomeActionTypes {
  GET_HOME_REQUEST = "@home/GET_HOME_REQUEST",
  GET_HOME_SUCCESS = "@home/GET_HOME_SUCCESS",
  GET_HOME_FAILURE = "@home/GET_HOME_FAILURE",
}

export type GetHomeAction = Action<HomeActionTypes.GET_HOME_REQUEST>;
export type GetHomeSuccessAction = PayloadAction<
  HomeActionTypes.GET_HOME_SUCCESS,
  {
    episodes: EpisodesCollection;
  }
>;
export type GetHomeFailureAction = Action<HomeActionTypes.GET_HOME_FAILURE>;

export type HomeActions = GetHomeAction | GetHomeSuccessAction | GetHomeFailureAction;

export interface HomeState {
  isLoading: boolean;
  episodes: EpisodesCollection;
}
