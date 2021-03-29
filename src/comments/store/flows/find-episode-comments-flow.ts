import { call, put, select, take } from "redux-saga/effects";

import { setApplicationError } from "#/application/store/actions";
import { CommentsCollection } from "#/comments/collections/comments-collection";
import { CommentsService } from "#/comments/services/comments-service";
import { findEpisodeCommentsFailure, findEpisodeCommentsSuccess } from "#/comments/store/actions";
import { CommentsActionTypes } from "#/comments/store/types";
import { Episode } from "#/core/entities/episode";
import { HttpClientError } from "#/core/http-client/http-client-error";
import { ApplicationState } from "#/core/store/store";

export function* findEpisodeCommentsFlow() {
  while (true) {
    yield take(CommentsActionTypes.FIND_EPISODE_COMMENTS_REQUEST);

    try {
      yield put(setApplicationError({ error: HttpClientError.empty() }));

      const episode: Episode = yield select((state: ApplicationState) => state.episode.episode);

      const comments: CommentsCollection = yield call(CommentsService.findByEpisodeId, episode.id);

      yield put(findEpisodeCommentsSuccess({ comments }));
    } catch (error) {
      yield put(setApplicationError({ error }));
      yield put(findEpisodeCommentsFailure());
    }
  }
}
