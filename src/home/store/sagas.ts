import { fork } from "redux-saga/effects";

import { getHomeFlow } from "#/home/store/flows/get-home-flow";

export function* homeSagas() {
  yield fork(getHomeFlow);
}
