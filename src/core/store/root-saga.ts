import { all, fork } from "redux-saga/effects";

import { applicationSagas } from "#/application/store/sagas";
import { authorizationSagas } from "#/authorization/store/sagas";
import { commentsSagas } from "#/comments/store/sagas";
import { createAccountPasswordSagas } from "#/create-account-password/store/sagas";
import { episodeSagas } from "#/episode/store/sagas";
import { homeSagas } from "#/home/store/sagas";
import { newEpisodeSagas } from "#/new-episode/store/sagas";
import { newSerieSagas } from "#/new-serie/store/sagas";
import { searchSagas } from "#/search/store/sagas";
import { serieSagas } from "#/serie/store/sagas";

export function* rootSaga() {
  yield all([
    fork(applicationSagas),
    fork(authorizationSagas),
    fork(homeSagas),
    fork(episodeSagas),
    fork(searchSagas),
    fork(serieSagas),
    fork(newSerieSagas),
    fork(newEpisodeSagas),
    fork(createAccountPasswordSagas),
    fork(commentsSagas),
  ]);
}
