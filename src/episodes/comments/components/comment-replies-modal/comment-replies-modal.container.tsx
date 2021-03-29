import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { ApplicationState } from "#/core/store/store";
import { CommentRepliesModal } from "#/episodes/comments/components/comment-replies-modal/comment-replies-modal";
import { closeCommentRepliesModal, setCommentReplies } from "#/episodes/comments/store/actions";
import { CommentsState } from "#/episodes/comments/store/types";

export function CommentRepliesModalContainer() {
  const dispatch = useDispatch();
  const { isRepliesModalOpen, replies } = useSelector<ApplicationState, CommentsState>((state) => state.comments);

  function onClose() {
    dispatch(closeCommentRepliesModal());
    dispatch(setCommentReplies({ comments: [] }));
  }
  return <CommentRepliesModal isOpen={isRepliesModalOpen} replies={replies} onClose={onClose} />;
}
