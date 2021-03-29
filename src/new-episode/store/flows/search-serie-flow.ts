import { call, put, take } from "redux-saga/effects";

import { setApplicationError } from "#/application/store/actions";
import { SeriesCollection } from "#/core/collections/series-collection";
import { openToast } from "#/core/components/toast/toast";
import { HttpClientError } from "#/core/http-client/http-client-error";
import { SeriesService } from "#/core/services/series-service";
import { searchSeriesSuccessAction, searchSeriesFailureAction } from "#/new-episode/store/actions";
import { SearchSeriesAction, NewEpisodeActionTypes } from "#/new-episode/store/types";

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
