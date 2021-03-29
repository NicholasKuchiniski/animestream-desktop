import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { CommentWithUser } from "#/core/entities/comment-with-user";
import { ApplicationState } from "#/core/store/store";
import { CommentList } from "#/episodes/comments/components/comment-list/comment-list";
import {
  openCommentRepliesModal,
  openReplyCommentModal,
  setCommentReplies,
  setReplyComment,
} from "#/episodes/comments/store/actions";
import { CommentsState } from "#/episodes/comments/store/types";

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
