import { call, put, take } from "redux-saga/effects";

import { setApplicationError } from "#/core/application/store/actions";
import { ApplicationActionTypes, SetApplicationErrorAction } from "#/core/application/store/types";
import { openToast } from "#/core/components/toast/toast";
import { HttpClientError } from "#/core/http-client/http-client-error";

export function* showToasForErrorsFlow() {
  while (true) {
    const action: SetApplicationErrorAction = yield take(ApplicationActionTypes.SET_APPLICATION_ERROR);
    const { error } = action.payload;

    if (!error.isEmpty()) {
      yield call(openToast, {
        description: error.description,
        status: error.type,
      });
      yield put(setApplicationError({ error: HttpClientError.empty() }));
    }
  }
}
