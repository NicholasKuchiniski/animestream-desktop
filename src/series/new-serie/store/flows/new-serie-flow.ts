import { call, put, take } from "redux-saga/effects";

import { closeModal, setApplicationError } from "#/core/application/store/actions";
import { openToast } from "#/core/components/toast/toast";
import { File, FileExtensions, FileFolders } from "#/core/entities/file";
import { Serie } from "#/core/entities/serie";
import { HttpClientError } from "#/core/http-client/http-client-error";
import { FilesService } from "#/core/services/files-service";
import { SeriesService } from "#/core/services/series-service";
import { newSerieFailure, newSerieSuccess } from "#/series/new-serie/store/actions";
import { NewSerieAction, NewSerieActionTypes } from "#/series/new-serie/store/types";

export function* newSerieFlow() {
  while (true) {
    const action: NewSerieAction = yield take(NewSerieActionTypes.NEW_SERIE_REQUEST);

    try {
      yield put(setApplicationError({ error: HttpClientError.empty() }));

      let image: File = yield call(FilesService.create, FileExtensions.PNG, FileFolders.IMAGES);

      image = yield call(FilesService.upload, image, action.payload.image);

      const serie: Serie = yield call(SeriesService.create, {
        ...action.payload,
        image: image.getUrl(),
      });

      yield call(openToast, {
        description: `You added a new serie with the name of ${serie.name}`,
        status: "success",
      });

      yield put(newSerieSuccess({ serie }));
      yield put(closeModal("new-serie"));
    } catch (error) {
      yield put(setApplicationError({ error }));
      yield put(newSerieFailure());
    }
  }
}
