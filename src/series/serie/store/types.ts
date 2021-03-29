import { Action } from "typesafe-actions";

import { EpisodesCollection } from "#/core/entities/collections/episodes-collection";
import { Serie } from "#/core/entities/serie";

export enum SerieActionTypes {
  GET_SERIE_REQUEST = "@serie/GET_SERIE_REQUEST",
  GET_SERIE_SUCCESS = "@serie/GET_SERIE_SUCCESS",
  GET_SERIE_FAILURE = "@serie/GET_SERIE_FAILURE",
}

export interface GetSerieAction extends Action {
  type: SerieActionTypes.GET_SERIE_REQUEST;
  payload: {
    serieId: string;
  };
}

export interface GetSerieSuccessAction extends Action {
  type: SerieActionTypes.GET_SERIE_SUCCESS;
  payload: {
    serie: Serie;
    episodes: EpisodesCollection;
  };
}
export interface GetSerieFailureAction extends Action {
  type: SerieActionTypes.GET_SERIE_FAILURE;
}

export type SerieActions = GetSerieAction | GetSerieSuccessAction | GetSerieFailureAction;

export interface SerieState {
  isLoading: boolean;
  serie: Serie;
  episodes: EpisodesCollection;
}
