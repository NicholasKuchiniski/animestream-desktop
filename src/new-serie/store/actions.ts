import { simpleAction } from "#/core/store/action";
import { NewSerieAction, NewSerieActionTypes, NewSerieSuccessAction } from "#/new-serie/store/types";

export const newSerie = simpleAction<NewSerieAction["payload"]>(NewSerieActionTypes.NEW_SERIE_REQUEST);
export const newSerieSuccess = simpleAction<NewSerieSuccessAction["payload"]>(NewSerieActionTypes.NEW_SERIE_SUCCESS);
export const newSerieFailure = simpleAction(NewSerieActionTypes.NEW_SERIE_FAILURE);
