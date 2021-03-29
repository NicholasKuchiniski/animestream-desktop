import { fork } from "redux-saga/effects";

import { createAuthorizationFlow } from "#/users/authorization/store/flows/create-authorization-flow";
import { logoutOnUnauthorizedFlow } from "#/users/authorization/store/flows/logout-on-unauthorized-flow";

export function* authorizationSagas() {
  yield fork(createAuthorizationFlow);
  yield fork(logoutOnUnauthorizedFlow);
}
