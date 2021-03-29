import { push } from "connected-react-router";
import { take, call, put } from "redux-saga/effects";

import { setApplicationError } from "#/application/store/actions";
import { Authorization } from "#/authorization/entities/authorization";
import { AuthorizationService } from "#/authorization/services/authorization-service";
import { createAuthorizationFailure, createAuthorizationSuccess } from "#/authorization/store/actions";
import { AuthorizationActionTypes, CreateAuthorizationAction } from "#/authorization/store/types";
import { openToast } from "#/core/components/toast/toast";
import { HttpClientError } from "#/core/http-client/http-client-error";

export function* createAuthorizationFlow() {
  while (true) {
    const action: CreateAuthorizationAction = yield take(AuthorizationActionTypes.CREATE_AUTHORIZATION_REQUEST);

    try {
      yield put(setApplicationError({ error: HttpClientError.empty() }));

      const authorization: Authorization = yield call(AuthorizationService.create, action.payload);

      yield call(openToast, {
        description: `Welcome, ${authorization.user.firstName}`,
        status: "info",
      });

      yield put(createAuthorizationSuccess({ authorization }));
      yield put(push("/"));
    } catch (error) {
      yield put(setApplicationError({ error }));
      yield put(createAuthorizationFailure());
    }
  }
}
