import { simpleAction } from "#/core/store/action";
import { SearchAction, SearchActionTypes, SearchSuccessAction } from "#/search/store/types";

export const search = simpleAction<SearchAction["payload"]>(SearchActionTypes.SEARCH_REQUEST);
export const searchSuccess = simpleAction<SearchSuccessAction["payload"]>(SearchActionTypes.SEARCH_SUCCESS);
export const searchFailure = simpleAction(SearchActionTypes.SEARCH_FAILURE);
