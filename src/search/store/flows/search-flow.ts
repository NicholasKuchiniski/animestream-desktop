import { push } from "connected-react-router";
import { call, put, take } from "redux-saga/effects";

import { setApplicationError } from "#/application/store/actions";
import { SeriesCollection } from "#/core/collections/series-collection";
import { openToast } from "#/core/components/toast/toast";
import { HttpClientError } from "#/core/http-client/http-client-error";
import { SeriesService } from "#/core/services/series-service";
import { searchFailure, searchSuccess } from "#/search/store/actions";
import { SearchAction, SearchActionTypes } from "#/search/store/types";

export function* searchFlow() {
  while (true) {
    const action: SearchAction = yield take(SearchActionTypes.SEARCH_REQUEST);

    try {
      yield put(push("/search"));
      yield put(setApplicationError({ error: HttpClientError.empty() }));

      const series: SeriesCollection = yield call(SeriesService.search, action.payload.name);

      if (series.isEmpty()) {
        yield call(openToast, {
          description: `No results found with name "${action.payload.name}"`,
          status: "warning",
        });
      }

      yield put(searchSuccess({ series }));
    } catch (error) {
      yield put(searchFailure());
      yield put(setApplicationError({ error }));
    }
  }
}
