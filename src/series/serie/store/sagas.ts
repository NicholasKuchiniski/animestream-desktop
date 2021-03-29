import { fork } from "redux-saga/effects";

import { getSerieFlow } from "#/series/serie/store/flows/get-serie-flow";

export function* serieSagas() {
  yield fork(getSerieFlow);
}
