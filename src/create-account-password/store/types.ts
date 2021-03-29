import { PayloadAction, Action } from "typesafe-actions";

export enum CreateAccountPasswordActionTypes {
  CREATE_ACCOUNT_PASSWORD_REQUEST = "@createAccount/CREATE_ACCOUNT_PASSWORD_REQUEST",
  CREATE_ACCOUNT_PASSWORD_SUCCESS = "@createAccount/CREATE_ACCOUNT_PASSWORD_SUCCESS",
  CREATE_ACCOUNT_PASSWORD_FAILURE = "@createAccount/CREATE_ACCOUNT_PASSWORD_FAILURE",
}

export type CreateAccountPasswordAction = PayloadAction<
  CreateAccountPasswordActionTypes.CREATE_ACCOUNT_PASSWORD_REQUEST,
  { password: string; token: string }
>;

export type CreateAccountPasswordSuccessAction = Action<CreateAccountPasswordActionTypes.CREATE_ACCOUNT_PASSWORD_SUCCESS>;

export type CreateAccountPasswordFailureAction = Action<CreateAccountPasswordActionTypes.CREATE_ACCOUNT_PASSWORD_FAILURE>;

export type CreateAccountPasswordActions =
  | CreateAccountPasswordAction
  | CreateAccountPasswordSuccessAction
  | CreateAccountPasswordFailureAction;

export interface CreateAccountPasswordState {
  isLoading: boolean;
}
