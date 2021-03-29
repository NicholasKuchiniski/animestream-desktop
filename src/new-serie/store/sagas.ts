import { fork } from "redux-saga/effects";

import { newSerieFlow } from "#/new-serie/store/flows/new-serie-flow";

export function* newSerieSagas() {
  yield fork(newSerieFlow);
}
