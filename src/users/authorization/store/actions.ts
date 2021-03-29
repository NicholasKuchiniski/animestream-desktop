import { simpleAction } from "#/core/store/action";
import {
  AuthorizationActionTypes,
  CreateAuthorizationAction,
  CreateAuthorizationSuccessAction,
} from "#/users/authorization/store/types";

export const createAuthorization = simpleAction<CreateAuthorizationAction["payload"]>(
  AuthorizationActionTypes.CREATE_AUTHORIZATION_REQUEST,
);
export const createAuthorizationSuccess = simpleAction<CreateAuthorizationSuccessAction["payload"]>(
  AuthorizationActionTypes.CREATE_AUTHORIZATION_SUCCESS,
);
export const createAuthorizationFailure = simpleAction(AuthorizationActionTypes.CREATE_AUTHORIZATION_FAILURE);
export const clearAuthorization = simpleAction(AuthorizationActionTypes.CLEAR_AUTHORIZATION);
