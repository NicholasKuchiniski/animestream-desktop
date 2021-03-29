import { Action, PayloadAction } from "typesafe-actions";

import { HttpClientError } from "#/core/http-client/http-client-error";

export enum ApplicationActionTypes {
  SET_APPLICATION_ERROR = "@application/SET_APPLICATION_ERROR",
  OPEN_MODAL = "@application/OPEN_MODAL",
  CLOSE_MODAL = "@application/CLOSE_MODAL",
}

export type SetApplicationErrorAction = PayloadAction<
  ApplicationActionTypes.SET_APPLICATION_ERROR,
  {
    error: HttpClientError;
  }
>;

export type OpenModalAction = PayloadAction<
  ApplicationActionTypes.OPEN_MODAL,
  {
    modal: string;
  }
>;

export type CloseModalAction = Action<ApplicationActionTypes.CLOSE_MODAL>;

export type ApplicationActions = SetApplicationErrorAction | OpenModalAction | CloseModalAction;

export interface ApplicationState {
  isLoading: boolean;
  error: HttpClientError;
  modals: Record<string, boolean>;
}
