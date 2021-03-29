import { REHYDRATE } from "redux-persist";
import { Action, PayloadAction } from "typesafe-actions";

import { Authorization } from "#/authorization/entities/authorization";
import { ApplicationState } from "#/core/store/store";

export enum AuthorizationActionTypes {
  CREATE_AUTHORIZATION_REQUEST = "@authorization/CREATE_AUTHORIZATION_REQUEST",
  CREATE_AUTHORIZATION_SUCCESS = "@authorization/CREATE_AUTHORIZATION_SUCCESS",
  CREATE_AUTHORIZATION_FAILURE = "@authorization/CREATE_AUTHORIZATION_FAILURE",
  CLEAR_AUTHORIZATION = "@authorization/CLEAR_AUTHORIZATION",
}

export type CreateAuthorizationAction = PayloadAction<
  AuthorizationActionTypes.CREATE_AUTHORIZATION_REQUEST,
  {
    email: string;
    password: string;
  }
>;

export type CreateAuthorizationSuccessAction = PayloadAction<
  AuthorizationActionTypes.CREATE_AUTHORIZATION_SUCCESS,
  { authorization: Authorization }
>;

export type CreateAuthorizationFailureAction = Action<AuthorizationActionTypes.CREATE_AUTHORIZATION_FAILURE>;

export type ClearAuthorizationFailureAction = Action<AuthorizationActionTypes.CLEAR_AUTHORIZATION>;

export type CreateAuthorizationRehydrateAction = PayloadAction<
  typeof REHYDRATE,
  {
    application: ApplicationState;
  }
>;

export type AuthorizationActions =
  | CreateAuthorizationAction
  | CreateAuthorizationSuccessAction
  | CreateAuthorizationFailureAction
  | CreateAuthorizationRehydrateAction
  | ClearAuthorizationFailureAction;

export interface AuthorizationState {
  isLoading: boolean;
  currentAuthorization: Authorization;
}
