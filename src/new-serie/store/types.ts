import { Action, PayloadAction } from "typesafe-actions";

import { Serie } from "#/core/entities/serie";

export enum NewSerieActionTypes {
  NEW_SERIE_REQUEST = "@new-serie/NEW_SERIE_REQUEST",
  NEW_SERIE_SUCCESS = "@new-serie/NEW_SERIE_SUCCESS",
  NEW_SERIE_FAILURE = "@new-serie/NEW_SERIE_FAILURE",
}

export type NewSerieAction = PayloadAction<
  NewSerieActionTypes.NEW_SERIE_REQUEST,
  {
    name: string;
    description: string;
    genres: string[];
    image: string;
  }
>;

export type NewSerieSuccessAction = PayloadAction<
  NewSerieActionTypes.NEW_SERIE_SUCCESS,
  {
    serie: Serie;
  }
>;

export type NewSerieFailureAction = Action<NewSerieActionTypes.NEW_SERIE_FAILURE>;

export type NewSeriesActions = NewSerieAction | NewSerieSuccessAction | NewSerieFailureAction;

export interface NewSeriesState {
  isLoading: boolean;
  serie: Serie;
}
