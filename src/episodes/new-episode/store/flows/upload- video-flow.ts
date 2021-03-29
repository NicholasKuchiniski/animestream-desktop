import { call, put, take, takeEvery } from "redux-saga/effects";

import { File as FileEntity, FileExtensions, FileFolders } from "#/core/entities/file";
import { FilesService } from "#/core/services/files-service";
import {
  uploadVideoFailureAction,
  uploadVideoProgressAction,
  uploadVideoSuccessAction,
} from "#/episodes/new-episode/store/actions";
import { uploadVideoChannel } from "#/episodes/new-episode/store/channels/upload-video-channel";
import { NewEpisodeActionTypes, UploadVideoAction } from "#/episodes/new-episode/store/types";

export function* uploadVideoFlow(file: File) {
  const fileEntity: FileEntity = yield call(FilesService.create, FileExtensions.MP4, FileFolders.VIDEOS);

  const channel = yield call(uploadVideoChannel, fileEntity, file);

  while (true) {
    const { progress, error, finished } = yield take(channel);

    if (progress) {
      yield put(uploadVideoProgressAction({ progress }));
    }

    if (finished) {
      yield put(uploadVideoSuccessAction({ file: fileEntity }));
    }

    if (error) {
      yield put(uploadVideoFailureAction());
    }
  }
}

export function* onUploadVideoWatch(action: UploadVideoAction) {
  yield call(uploadVideoFlow, action.payload.file);
}

export function* uploadVideoWatcher() {
  yield takeEvery(NewEpisodeActionTypes.UPLOAD_VIDEO_REQUEST, onUploadVideoWatch);
}
