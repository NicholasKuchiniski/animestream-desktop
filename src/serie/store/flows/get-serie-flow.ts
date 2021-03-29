import { call, put, take } from "redux-saga/effects";

import { setApplicationError } from "#/application/store/actions";
import { EpisodesCollection } from "#/core/collections/episodes-collection";
import { Serie } from "#/core/entities/serie";
import { HttpClientError } from "#/core/http-client/http-client-error";
import { EpisodesService } from "#/core/services/episodes-service";
import { SeriesService } from "#/core/services/series-service";
import { getSerieFailure, getSerieSuccess } from "#/serie/store/actions";
import { GetSerieAction, SerieActionTypes } from "#/serie/store/types";

export function* getSerieFlow() {
  while (true) {
    const action: GetSerieAction = yield take(SerieActionTypes.GET_SERIE_REQUEST);

    try {
      yield put(setApplicationError({ error: HttpClientError.empty() }));

      const serie: Serie = yield call(SeriesService.find, action.payload.serieId);
      const episodes: EpisodesCollection = yield call(EpisodesService.findBySerie, action.payload.serieId);

      yield put(getSerieSuccess({ serie, episodes }));
    } catch (error) {
      yield put(setApplicationError({ error }));
      yield put(getSerieFailure());
    }
  }
}
