import { all, fork } from "redux-saga/effects";

import { applicationSagas } from "#/core/application/store/sagas";
import { commentsSagas } from "#/episodes/comments/store/sagas";
import { episodeSagas } from "#/episodes/episode/store/sagas";
import { newEpisodeSagas } from "#/episodes/new-episode/store/sagas";
import { homeSagas } from "#/series/home/store/sagas";
import { newSerieSagas } from "#/series/new-serie/store/sagas";
import { searchSagas } from "#/series/search/store/sagas";
import { serieSagas } from "#/series/serie/store/sagas";
import { authorizationSagas } from "#/users/authorization/store/sagas";
import { createAccountPasswordSagas } from "#/users/create-account-password/store/sagas";

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
