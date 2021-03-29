import {
  CommentsActionTypes,
  CreateCommentAction,
  CreateReplyCommentAction,
  FindEpisodeCommentsSuccessAction,
  SetCommentRepliesAction,
  SetReplyCommentAction,
} from "#/comments/store/types";
import { simpleAction } from "#/core/store/action";

export const createComment = simpleAction<CreateCommentAction["payload"]>(CommentsActionTypes.CREATE_COMMENT_REQUEST);
export const createCommentSuccess = simpleAction(CommentsActionTypes.CREATE_COMMENT_SUCCESS);
export const createCommentFailure = simpleAction(CommentsActionTypes.CREATE_COMMENT_FAILURE);

export const findEpisodeComments = simpleAction(CommentsActionTypes.FIND_EPISODE_COMMENTS_REQUEST);
export const findEpisodeCommentsSuccess = simpleAction<FindEpisodeCommentsSuccessAction["payload"]>(
  CommentsActionTypes.FIND_EPISODE_COMMENTS_SUCCESS,
);
export const findEpisodeCommentsFailure = simpleAction(CommentsActionTypes.FIND_EPISODE_COMMENTS_FAILURE);

export const setCommentReplies = simpleAction<SetCommentRepliesAction["payload"]>(
  CommentsActionTypes.SET_COMMENT_REPLIES,
);
export const openCommentRepliesModal = simpleAction(CommentsActionTypes.OPEN_COMMENT_REPLIES_MODAL);
export const closeCommentRepliesModal = simpleAction(CommentsActionTypes.CLOSE_COMMENT_REPLIES_MODAL);

export const setReplyComment = simpleAction<SetReplyCommentAction["payload"]>(CommentsActionTypes.SET_REPLY_COMMENT);
export const openReplyCommentModal = simpleAction(CommentsActionTypes.OPEN_REPLY_COMMENT_MODAL);
export const closeReplyCommentModal = simpleAction(CommentsActionTypes.CLOSE_REPLY_COMMENT_MODAL);

export const createReplyComment = simpleAction<CreateReplyCommentAction["payload"]>(
  CommentsActionTypes.CREATE_REPLY_COMMENT_REQUEST,
);
export const createReplyCommentSuccess = simpleAction(CommentsActionTypes.CREATE_REPLY_COMMENT_SUCCESS);
export const createReplyCommentFailure = simpleAction(CommentsActionTypes.CREATE_REPLY_COMMENT_FAILURE);
