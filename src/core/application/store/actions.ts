import { ApplicationActionTypes, OpenModalAction, SetApplicationErrorAction } from "#/core/application/store/types";
import { simpleAction } from "#/core/store/action";

export const setApplicationError = simpleAction<SetApplicationErrorAction["payload"]>(
  ApplicationActionTypes.SET_APPLICATION_ERROR,
);
export const openModal = simpleAction<OpenModalAction["payload"]>(ApplicationActionTypes.OPEN_MODAL);
export const closeModal = simpleAction(ApplicationActionTypes.CLOSE_MODAL);
