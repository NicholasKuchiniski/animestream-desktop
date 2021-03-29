import { call, put, select, take } from "redux-saga/effects";

import { setApplicationError } from "#/core/application/store/actions";
import { CommentsCollection } from "#/core/entities/collections/comments-collection";
import { Episode } from "#/core/entities/episode";
import { HttpClientError } from "#/core/http-client/http-client-error";
import { CommentsService } from "#/core/services/comments-service";
import { ApplicationState } from "#/core/store/store";
import { findEpisodeCommentsSuccess, findEpisodeCommentsFailure } from "#/episodes/comments/store/actions";
import { CommentsActionTypes } from "#/episodes/comments/store/types";

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
