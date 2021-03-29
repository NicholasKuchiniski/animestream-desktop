import { call, put, select, take } from "redux-saga/effects";

import { setApplicationError } from "#/core/application/store/actions";
import { openToast } from "#/core/components/toast/toast";
import { Episode } from "#/core/entities/episode";
import { File, FileExtensions, FileFolders } from "#/core/entities/file";
import { HttpClientError } from "#/core/http-client/http-client-error";
import { CommentsService } from "#/core/services/comments-service";
import { FilesService } from "#/core/services/files-service";
import { ApplicationState } from "#/core/store/store";
import { createCommentFailure, createCommentSuccess, findEpisodeComments } from "#/episodes/comments/store/actions";
import { CommentsActionTypes, CreateCommentAction } from "#/episodes/comments/store/types";

export function* createCommentFlow() {
  while (true) {
    const action: CreateCommentAction = yield take(CommentsActionTypes.CREATE_COMMENT_REQUEST);

    try {
      yield put(setApplicationError({ error: HttpClientError.empty() }));

      let image: File = File.empty();

      if (action.payload.image) {
        image = yield call(FilesService.create, FileExtensions.PNG, FileFolders.IMAGES);
        image = yield call(FilesService.upload, image, action.payload.image);
      }

      const episode: Episode = yield select((state: ApplicationState) => state.episode.episode);

      yield call(
        CommentsService.create,
        {
          content: action.payload.content,
          image: image.isEmpty() ? null : image.getUrl(),
          parentCommentId: action.payload.parentCommentId,
        },
        episode.id,
      );

      yield call(openToast, {
        status: "success",
        description: "Comment created with success",
      });

      yield put(createCommentSuccess());
      yield put(findEpisodeComments());
    } catch (error) {
      yield put(setApplicationError({ error }));
      yield put(createCommentFailure());
    }
  }
}
