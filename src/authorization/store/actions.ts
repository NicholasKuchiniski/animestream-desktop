import {
  AuthorizationActionTypes,
  CreateAuthorizationAction,
  CreateAuthorizationSuccessAction,
} from "#/authorization/store/types";
import { simpleAction } from "#/core/store/action";

export const createAuthorization = simpleAction<CreateAuthorizationAction["payload"]>(
  AuthorizationActionTypes.CREATE_AUTHORIZATION_REQUEST,
);
export const createAuthorizationSuccess = simpleAction<CreateAuthorizationSuccessAction["payload"]>(
  AuthorizationActionTypes.CREATE_AUTHORIZATION_SUCCESS,
);
export const createAuthorizationFailure = simpleAction(AuthorizationActionTypes.CREATE_AUTHORIZATION_FAILURE);
export const clearAuthorization = simpleAction(AuthorizationActionTypes.CLEAR_AUTHORIZATION);
