import { call, put, select, take } from "redux-saga/effects";

import { closeModal, setApplicationError } from "#/application/store/actions";
import { openToast } from "#/core/components/toast/toast";
import { Episode } from "#/core/entities/episode";
import { File, FileExtensions, FileFolders } from "#/core/entities/file";
import { HttpClientError } from "#/core/http-client/http-client-error";
import { EpisodesService } from "#/core/services/episodes-service";
import { FilesService } from "#/core/services/files-service";
import { ApplicationState } from "#/core/store/store";
import { newEpisodeSuccessAction, newEpisodeFailureAction } from "#/new-episode/store/actions";
import { NewEpisodeAction, NewEpisodeActionTypes } from "#/new-episode/store/types";

export function* newEpisodeFlow() {
  while (true) {
    const action: NewEpisodeAction = yield take(NewEpisodeActionTypes.NEW_EPISODE_REQUEST);

    try {
      yield put(setApplicationError({ error: HttpClientError.empty() }));

      let image: File = yield call(FilesService.create, FileExtensions.PNG, FileFolders.IMAGES);

      image = yield call(FilesService.upload, image, action.payload.image);

      const video: File = yield select((state: ApplicationState) => state.newEpisode.video.video);

      const episode: Episode = yield call(EpisodesService.create, {
        ...action.payload,
        duration: Math.ceil(action.payload.duration),
        image: image.getUrl(),
        link: video.getUrl(),
      });

      yield call(openToast, {
        description: `You added a new episode with the name of ${episode.name}`,
        status: "success",
      });

      yield put(newEpisodeSuccessAction({ episode }));
      yield put(closeModal());
    } catch (error) {
      yield put(setApplicationError({ error }));
      yield put(newEpisodeFailureAction());
    }
  }
}
