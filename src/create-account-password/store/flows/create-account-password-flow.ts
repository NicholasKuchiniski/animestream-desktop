import { push } from "connected-react-router";
import { call, put, take } from "redux-saga/effects";

import { closeModal, setApplicationError } from "#/application/store/actions";
import { openToast } from "#/core/components/toast/toast";
import { HttpClientError } from "#/core/http-client/http-client-error";
import { CreateAccountPasswordService } from "#/create-account-password/services/create-account-password-service";
import { createAccountPasswordFailure, createAccountPasswordSuccess } from "#/create-account-password/store/actions";
import { CreateAccountPasswordAction, CreateAccountPasswordActionTypes } from "#/create-account-password/store/types";

export function* createAccountPasswordFlow() {
  while (true) {
    const action: CreateAccountPasswordAction = yield take(
      CreateAccountPasswordActionTypes.CREATE_ACCOUNT_PASSWORD_REQUEST,
    );

    try {
      yield put(setApplicationError({ error: HttpClientError.empty() }));

      yield call(CreateAccountPasswordService.create, action.payload.password, action.payload.token);
      yield call(openToast, {
        description: "Your password has been created successfully, you can now login.",
        status: "success",
      });

      yield put(closeModal());
      yield put(push("/authorization"));
      yield put(createAccountPasswordSuccess());
    } catch (error) {
      yield put(setApplicationError({ error }));
      yield put(createAccountPasswordFailure());
    }
  }
}
