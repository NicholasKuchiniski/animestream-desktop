import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { CommentList } from "#/comments/components/comment-list/comment-list";
import { CommentWithUser } from "#/comments/entities/comment-with-user";
import {
  openCommentRepliesModal,
  openReplyCommentModal,
  setCommentReplies,
  setReplyComment,
} from "#/comments/store/actions";
import { CommentsState } from "#/comments/store/types";
import { ApplicationState } from "#/core/store/store";

export function CommentListContainer() {
  const dispatch = useDispatch();
  const { isLoadingComments, comments } = useSelector<ApplicationState, CommentsState>((state) => state.comments);

  function onReply(comment: CommentWithUser) {
    dispatch(setReplyComment({ comment }));
    dispatch(openReplyCommentModal());
  }

  function onSeeReplies(replies: CommentWithUser[]) {
    dispatch(setCommentReplies({ comments: replies }));
    dispatch(openCommentRepliesModal());
  }

  return (
    <CommentList isLoading={isLoadingComments} comments={comments} onReply={onReply} onSeeReplies={onSeeReplies} />
  );
}
