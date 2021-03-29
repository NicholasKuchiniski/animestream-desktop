import { simpleAction } from "#/core/store/action";
import { CreateAccountPasswordAction, CreateAccountPasswordActionTypes } from "#/create-account-password/store/types";

export const createAccountPassword = simpleAction<CreateAccountPasswordAction["payload"]>(
  CreateAccountPasswordActionTypes.CREATE_ACCOUNT_PASSWORD_REQUEST,
);
export const createAccountPasswordSuccess = simpleAction(
  CreateAccountPasswordActionTypes.CREATE_ACCOUNT_PASSWORD_SUCCESS,
);
export const createAccountPasswordFailure = simpleAction(
  CreateAccountPasswordActionTypes.CREATE_ACCOUNT_PASSWORD_FAILURE,
);
