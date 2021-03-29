import { fork } from "redux-saga/effects";

import { createAccountPasswordFlow } from "#/users/create-account-password/store/flows/create-account-password-flow";

export function* createAccountPasswordSagas() {
  yield fork(createAccountPasswordFlow);
}
