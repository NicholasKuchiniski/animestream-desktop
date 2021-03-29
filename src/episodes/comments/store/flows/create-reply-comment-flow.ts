import { call, put, select, take } from "redux-saga/effects";

import { setApplicationError } from "#/core/application/store/actions";
import { openToast } from "#/core/components/toast/toast";
import { CommentWithUser } from "#/core/entities/comment-with-user";
import { Episode } from "#/core/entities/episode";
import { File, FileExtensions, FileFolders } from "#/core/entities/file";
import { HttpClientError } from "#/core/http-client/http-client-error";
import { CommentsService } from "#/core/services/comments-service";
import { FilesService } from "#/core/services/files-service";
import { ApplicationState } from "#/core/store/store";
import {
  closeReplyCommentModal,
  createReplyCommentFailure,
  createReplyCommentSuccess,
  findEpisodeComments,
} from "#/episodes/comments/store/actions";
import { CommentsActionTypes, CreateReplyCommentAction } from "#/episodes/comments/store/types";

export function* createReplyCommentFlow() {
  while (true) {
    const action: CreateReplyCommentAction = yield take(CommentsActionTypes.CREATE_REPLY_COMMENT_REQUEST);

    try {
      yield put(setApplicationError({ error: HttpClientError.empty() }));

      let image: File = File.empty();

      if (action.payload.image) {
        image = yield call(FilesService.create, FileExtensions.PNG, FileFolders.IMAGES);
        image = yield call(FilesService.upload, image, action.payload.image);
      }

      const episode: Episode = yield select((state: ApplicationState) => state.episode.episode);
      const replyComment: CommentWithUser = yield select((state: ApplicationState) => state.comments.replyComment);

      yield call(
        CommentsService.reply,
        {
          content: action.payload.content,
          image: image.isEmpty() ? null : image.getUrl(),
        },
        replyComment.comment.id,
        episode.id,
      );

      yield call(openToast, {
        status: "success",
        description: "Reply created with success",
      });

      yield put(createReplyCommentSuccess());
      yield put(closeReplyCommentModal());
      yield put(findEpisodeComments());
    } catch (error) {
      yield put(setApplicationError({ error }));
      yield put(createReplyCommentFailure());
      yield put(closeReplyCommentModal());
    }
  }
}
