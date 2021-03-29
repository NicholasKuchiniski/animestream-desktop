import { fork } from "redux-saga/effects";

import { createAccountPasswordFlow } from "#/create-account-password/store/flows/create-account-password-flow";

export function* createAccountPasswordSagas() {
  yield fork(createAccountPasswordFlow);
}
