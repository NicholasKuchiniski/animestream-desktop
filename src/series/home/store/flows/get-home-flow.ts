import { call, put, take } from "redux-saga/effects";

import { setApplicationError } from "#/core/application/store/actions";
import { EpisodesCollection } from "#/core/entities/collections/episodes-collection";
import { HttpClientError } from "#/core/http-client/http-client-error";
import { EpisodesService } from "#/core/services/episodes-service";
import { getHomeFailure, getHomeSuccess } from "#/series/home/store/actions";
import { HomeActionTypes } from "#/series/home/store/types";

export function* getHomeFlow() {
  while (true) {
    yield take(HomeActionTypes.GET_HOME_REQUEST);

    try {
      yield put(setApplicationError({ error: HttpClientError.empty() }));

      const episodes: EpisodesCollection = yield call(EpisodesService.get, { limit: 12, page: 0 });

      yield put(getHomeSuccess({ episodes }));
    } catch (error) {
      yield put(setApplicationError({ error }));
      yield put(getHomeFailure());
    }
  }
}
