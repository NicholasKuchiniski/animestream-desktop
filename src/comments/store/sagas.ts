import { fork } from "redux-saga/effects";

import { createCommentFlow } from "#/comments/store/flows/create-comment-flow";
import { createReplyCommentFlow } from "#/comments/store/flows/create-reply-comment-flow";
import { findEpisodeCommentsFlow } from "#/comments/store/flows/find-episode-comments-flow";

export function* commentsSagas() {
  yield fork(createCommentFlow);
  yield fork(findEpisodeCommentsFlow);
  yield fork(createReplyCommentFlow);
}
