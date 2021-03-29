import { PayloadAction, Action } from "typesafe-actions";

import { CommentsCollection } from "#/comments/collections/comments-collection";
import { CommentWithUser } from "#/comments/entities/comment-with-user";

export enum CommentsActionTypes {
  CREATE_COMMENT_REQUEST = "@comments/CREATE_COMMENT_REQUEST",
  CREATE_COMMENT_SUCCESS = "@comments/CREATE_COMMENT_SUCCESS",
  CREATE_COMMENT_FAILURE = "@comments/CREATE_COMMENT_FAILURE",
  FIND_EPISODE_COMMENTS_REQUEST = "@comments/FIND_EPISODE_COMMENTS_REQUEST",
  FIND_EPISODE_COMMENTS_SUCCESS = "@comments/FIND_EPISODE_COMMENTS_SUCCESS",
  FIND_EPISODE_COMMENTS_FAILURE = "@comments/FIND_EPISODE_COMMENTS_FAILURE",
  SET_COMMENT_REPLIES = "@comments/SET_COMMENT_REPLIES",
  OPEN_COMMENT_REPLIES_MODAL = "@comments/OPEN_COMMENT_REPLIES_MODAL",
  CLOSE_COMMENT_REPLIES_MODAL = "@comments/CLOSE_COMMENT_REPLIES_MODAL",
  SET_REPLY_COMMENT = "@comments/SET_REPLY_COMMENT",
  OPEN_REPLY_COMMENT_MODAL = "@comments/OPEN_REPLY_COMMENT_MODAL",
  CLOSE_REPLY_COMMENT_MODAL = "@comments/CLOSE_REPLY_COMMENT_MODAL",
  CREATE_REPLY_COMMENT_REQUEST = "@comments/CREATE_REPLY_COMMENT_REQUEST",
  CREATE_REPLY_COMMENT_SUCCESS = "@comments/CREATE_REPLY_COMMENT_SUCCESS",
  CREATE_REPLY_COMMENT_FAILURE = "@comments/CREATE_REPLY_COMMENT_FAILURE",
}

export type CreateCommentAction = PayloadAction<
  CommentsActionTypes.CREATE_COMMENT_REQUEST,
  {
    parentCommentId: string | null;
    content: string;
    image: string | null;
  }
>;

export type CreateCommentSuccessAction = Action<CommentsActionTypes.CREATE_COMMENT_SUCCESS>;

export type CreateCommentFailureAction = Action<CommentsActionTypes.CREATE_COMMENT_FAILURE>;

export type FindEpisodeCommentsAction = Action<CommentsActionTypes.FIND_EPISODE_COMMENTS_REQUEST>;

export type FindEpisodeCommentsSuccessAction = PayloadAction<
  CommentsActionTypes.FIND_EPISODE_COMMENTS_SUCCESS,
  {
    comments: CommentsCollection;
  }
>;

export type FindEpisodeCommentsFailureAction = Action<CommentsActionTypes.FIND_EPISODE_COMMENTS_FAILURE>;

export type SetCommentRepliesAction = PayloadAction<
  CommentsActionTypes.SET_COMMENT_REPLIES,
  {
    comments: CommentWithUser[];
  }
>;

export type OpenCommentRepliesModalAction = Action<CommentsActionTypes.OPEN_COMMENT_REPLIES_MODAL>;

export type CloseCommentRepliesModalAction = Action<CommentsActionTypes.CLOSE_COMMENT_REPLIES_MODAL>;

export type SetReplyCommentAction = PayloadAction<
  CommentsActionTypes.SET_REPLY_COMMENT,
  {
    comment: CommentWithUser;
  }
>;

export type OpenReplyCommentModalAction = Action<CommentsActionTypes.OPEN_REPLY_COMMENT_MODAL>;

export type CloseReplyCommentModalAction = Action<CommentsActionTypes.CLOSE_REPLY_COMMENT_MODAL>;

export type CreateReplyCommentAction = PayloadAction<
  CommentsActionTypes.CREATE_REPLY_COMMENT_REQUEST,
  {
    content: string;
    image: string | null;
  }
>;

export type CreateReplyCommentSuccessAction = Action<CommentsActionTypes.CREATE_REPLY_COMMENT_SUCCESS>;

export type CreateReplyCommentFailureAction = Action<CommentsActionTypes.CREATE_REPLY_COMMENT_FAILURE>;

export type CreateCommentActions =
  | CreateCommentAction
  | CreateCommentSuccessAction
  | CreateCommentFailureAction
  | FindEpisodeCommentsAction
  | FindEpisodeCommentsSuccessAction
  | FindEpisodeCommentsFailureAction
  | SetCommentRepliesAction
  | OpenCommentRepliesModalAction
  | CloseCommentRepliesModalAction
  | SetReplyCommentAction
  | OpenReplyCommentModalAction
  | CloseReplyCommentModalAction
  | CreateReplyCommentAction
  | CreateReplyCommentSuccessAction
  | CreateReplyCommentFailureAction;

export interface CommentsState {
  isLoading: boolean;
  isLoadingComments: boolean;
  isLoadingReplyComment: boolean;
  comments: CommentsCollection;
  isRepliesModalOpen: boolean;
  isReplyCommentModalOpen: boolean;
  replies: CommentWithUser[];
  replyComment: CommentWithUser;
}
