import { plainToClass } from "class-transformer";
import { produce } from "immer";
import { get } from "lodash";
import { Reducer } from "redux";
import { REHYDRATE } from "redux-persist";

import { Authorization } from "#/authorization/entities/authorization";
import { AuthorizationState, AuthorizationActions, AuthorizationActionTypes } from "#/authorization/store/types";
import { HttpClient } from "#/core/http-client/http-client";

export const INITIAL_STATE: AuthorizationState = {
  isLoading: false,
  currentAuthorization: Authorization.empty(),
};

export const authorizationReducer: Reducer<AuthorizationState, AuthorizationActions> = (
  state = INITIAL_STATE,
  action: AuthorizationActions,
) =>
  produce(state, (draft) => {
    switch (action.type) {
      case AuthorizationActionTypes.CREATE_AUTHORIZATION_REQUEST: {
        draft.isLoading = true;
        draft.currentAuthorization = Authorization.empty();

        break;
      }
      case AuthorizationActionTypes.CREATE_AUTHORIZATION_SUCCESS: {
        draft.isLoading = false;
        draft.currentAuthorization = action.payload.authorization;
        HttpClient.getInstance().setAuthorization(action.payload.authorization);
        break;
      }
      case AuthorizationActionTypes.CREATE_AUTHORIZATION_FAILURE: {
        draft.isLoading = false;
        break;
      }
      case AuthorizationActionTypes.CLEAR_AUTHORIZATION: {
        const authorization = Authorization.empty();

        HttpClient.getInstance().setAuthorization(authorization);
        draft.currentAuthorization = authorization;

        break;
      }
      case REHYDRATE: {
        const plainAuthorization = get(action.payload, "authorization.currentAuthorization");

        if (plainAuthorization) {
          const authorization = plainToClass(Authorization, plainAuthorization);
          HttpClient.getInstance().setAuthorization(authorization);

          draft.currentAuthorization = authorization;
        }
        break;
      }
      default:
    }
  });
