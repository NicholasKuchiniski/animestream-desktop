import { fork } from "redux-saga/effects";

import { searchFlow } from "#/series/search/store/flows/search-flow";

export function* searchSagas() {
  yield fork(searchFlow);
}
