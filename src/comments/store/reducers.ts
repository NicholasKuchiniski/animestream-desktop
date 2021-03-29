import { produce } from "immer";
import { Reducer } from "redux";

import { CommentsCollection } from "#/comments/collections/comments-collection";
import { CommentWithUser } from "#/comments/entities/comment-with-user";
import { CommentsActionTypes, CommentsState, CreateCommentActions } from "#/comments/store/types";

export const INITIAL_STATE: CommentsState = {
  isLoading: false,
  isLoadingComments: false,
  isLoadingReplyComment: false,
  isRepliesModalOpen: false,
  isReplyCommentModalOpen: false,
  comments: CommentsCollection.empty(),
  replies: [],
  replyComment: CommentWithUser.empty(),
};

export const commentsReducer: Reducer<CommentsState, CreateCommentActions> = (
  state = INITIAL_STATE,
  action: CreateCommentActions,
) =>
  produce(state, (draft) => {
    switch (action.type) {
      case CommentsActionTypes.CREATE_COMMENT_REQUEST: {
        draft.isLoading = true;
        break;
      }
      case CommentsActionTypes.CREATE_COMMENT_SUCCESS: {
        draft.isLoading = false;
        break;
      }
      case CommentsActionTypes.CREATE_COMMENT_FAILURE: {
        draft.isLoading = false;
        break;
      }
      case CommentsActionTypes.FIND_EPISODE_COMMENTS_REQUEST: {
        draft.isLoadingComments = true;
        draft.comments = CommentsCollection.empty();
        draft.replies = [];
        break;
      }
      case CommentsActionTypes.FIND_EPISODE_COMMENTS_SUCCESS: {
        draft.isLoadingComments = false;
        draft.comments = action.payload.comments;
        break;
      }
      case CommentsActionTypes.FIND_EPISODE_COMMENTS_FAILURE: {
        draft.isLoadingComments = false;
        break;
      }
      case CommentsActionTypes.OPEN_COMMENT_REPLIES_MODAL: {
        draft.isRepliesModalOpen = true;
        break;
      }
      case CommentsActionTypes.CLOSE_COMMENT_REPLIES_MODAL: {
        draft.isRepliesModalOpen = false;
        break;
      }
      case CommentsActionTypes.SET_COMMENT_REPLIES: {
        draft.replies = action.payload.comments;
        break;
      }
      case CommentsActionTypes.SET_REPLY_COMMENT: {
        draft.replyComment = action.payload.comment;
        break;
      }
      case CommentsActionTypes.OPEN_REPLY_COMMENT_MODAL: {
        draft.isReplyCommentModalOpen = true;
        break;
      }
      case CommentsActionTypes.CLOSE_REPLY_COMMENT_MODAL: {
        draft.isReplyCommentModalOpen = false;
        break;
      }
      case CommentsActionTypes.CREATE_REPLY_COMMENT_REQUEST: {
        draft.isLoadingReplyComment = true;
        break;
      }
      case CommentsActionTypes.CREATE_REPLY_COMMENT_SUCCESS: {
        draft.isLoadingReplyComment = false;
        break;
      }
      case CommentsActionTypes.CREATE_REPLY_COMMENT_FAILURE: {
        draft.isLoadingReplyComment = false;
        break;
      }
      default:
    }
  });
