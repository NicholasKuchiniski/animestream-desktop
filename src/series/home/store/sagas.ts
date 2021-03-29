import { fork } from "redux-saga/effects";

import { getHomeFlow } from "#/series/home/store/flows/get-home-flow";

export function* homeSagas() {
  yield fork(getHomeFlow);
}
