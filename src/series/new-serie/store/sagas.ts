import { fork } from "redux-saga/effects";

import { newSerieFlow } from "#/series/new-serie/store/flows/new-serie-flow";

export function* newSerieSagas() {
  yield fork(newSerieFlow);
}
