import { simpleAction } from "#/core/store/action";
import { GetHomeSuccessAction, HomeActionTypes } from "#/home/store/types";

export const getHome = simpleAction(HomeActionTypes.GET_HOME_REQUEST);
export const getHomeSuccess = simpleAction<GetHomeSuccessAction["payload"]>(HomeActionTypes.GET_HOME_SUCCESS);
export const getHomeFailure = simpleAction(HomeActionTypes.GET_HOME_FAILURE);
