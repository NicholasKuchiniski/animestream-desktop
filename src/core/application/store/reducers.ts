import { produce } from "immer";
import { Reducer } from "redux";

import { ApplicationState, ApplicationActions, ApplicationActionTypes } from "#/core/application/store/types";
import { HttpClientError } from "#/core/http-client/http-client-error";

export const INITIAL_STATE: ApplicationState = {
  isLoading: false,
  error: HttpClientError.empty(),
  modals: {},
};

export const applicationReducer: Reducer<ApplicationState, ApplicationActions> = (
  state = INITIAL_STATE,
  action: ApplicationActions,
) =>
  produce(state, (draft) => {
    switch (action.type) {
      case ApplicationActionTypes.SET_APPLICATION_ERROR: {
        draft.error = action.payload.error;
        break;
      }

      case ApplicationActionTypes.OPEN_MODAL: {
        draft.modals = {
          [action.payload.modal]: true,
        };
        break;
      }
      case ApplicationActionTypes.CLOSE_MODAL: {
        draft.modals = {};
        break;
      }
      default:
    }
  });
