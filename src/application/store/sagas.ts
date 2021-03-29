import { fork } from "redux-saga/effects";

import { showToasForErrorsFlow } from "#/application/store/flows/show-toast-for-error-flow";

export function* applicationSagas() {
  yield fork(showToasForErrorsFlow);
}
