import { produce } from "immer";
import { Reducer } from "redux";

import {
  CreateAccountPasswordActions,
  CreateAccountPasswordActionTypes,
  CreateAccountPasswordState,
} from "#/users/create-account-password/store/types";

export const INITIAL_STATE: CreateAccountPasswordState = {
  isLoading: false,
};

export const createAccountPasswordReducer: Reducer<CreateAccountPasswordState, CreateAccountPasswordActions> = (
  state = INITIAL_STATE,
  action: CreateAccountPasswordActions,
) =>
  produce(state, (draft) => {
    switch (action.type) {
      case CreateAccountPasswordActionTypes.CREATE_ACCOUNT_PASSWORD_REQUEST: {
        draft.isLoading = true;
        break;
      }
      case CreateAccountPasswordActionTypes.CREATE_ACCOUNT_PASSWORD_SUCCESS: {
        draft.isLoading = false;
        break;
      }
      case CreateAccountPasswordActionTypes.CREATE_ACCOUNT_PASSWORD_FAILURE: {
        draft.isLoading = false;
        break;
      }
      default:
    }
  });
