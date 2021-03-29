import { call, put, take } from "redux-saga/effects";

import { setApplicationError } from "#/core/application/store/actions";
import { openToast } from "#/core/components/toast/toast";
import { SeriesCollection } from "#/core/entities/collections/series-collection";
import { HttpClientError } from "#/core/http-client/http-client-error";
import { SeriesService } from "#/core/services/series-service";
import { searchSeriesSuccessAction, searchSeriesFailureAction } from "#/episodes/new-episode/store/actions";
import { SearchSeriesAction, NewEpisodeActionTypes } from "#/episodes/new-episode/store/types";

export function* searchSerieFlow() {
  while (true) {
    const action: SearchSeriesAction = yield take(NewEpisodeActionTypes.SEARCH_SERIES_REQUEST);

    try {
      yield put(setApplicationError({ error: HttpClientError.empty() }));

      const series: SeriesCollection = yield call(SeriesService.search, action.payload.name);

      if (series.isEmpty()) {
        yield call(openToast, {
          description: `No series found with name "${action.payload.name}"`,
          status: "warning",
        });
      }

      yield put(searchSeriesSuccessAction({ series }));
    } catch (error) {
      yield put(setApplicationError({ error }));
      yield put(searchSeriesFailureAction());
    }
  }
}
