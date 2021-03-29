import { Action, PayloadAction } from "typesafe-actions";

import { SeriesCollection } from "#/core/collections/series-collection";

export enum SearchActionTypes {
  SEARCH_REQUEST = "@search/SEARCH_REQUEST",
  SEARCH_SUCCESS = "@search/SEARCH_SUCCESS",
  SEARCH_FAILURE = "@search/SEARCH_FAILURE",
}

export type SearchAction = PayloadAction<
  SearchActionTypes.SEARCH_REQUEST,
  {
    name: string;
  }
>;

export type SearchSuccessAction = PayloadAction<
  SearchActionTypes.SEARCH_SUCCESS,
  {
    series: SeriesCollection;
  }
>;

export type SearchFailureAction = Action<SearchActionTypes.SEARCH_FAILURE>;

export type SearchActions = SearchAction | SearchSuccessAction | SearchFailureAction;

export interface SearchState {
  isLoading: boolean;
  name: string;
  series: SeriesCollection;
}
