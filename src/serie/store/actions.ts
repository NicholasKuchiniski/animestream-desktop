import { simpleAction } from "#/core/store/action";
import { GetSerieAction, GetSerieSuccessAction, SerieActionTypes } from "#/serie/store/types";

export const getSerie = simpleAction<GetSerieAction["payload"]>(SerieActionTypes.GET_SERIE_REQUEST);
export const getSerieSuccess = simpleAction<GetSerieSuccessAction["payload"]>(SerieActionTypes.GET_SERIE_SUCCESS);
export const getSerieFailure = simpleAction(SerieActionTypes.GET_SERIE_FAILURE);
