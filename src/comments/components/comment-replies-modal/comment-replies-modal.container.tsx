import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { CommentRepliesModal } from "#/comments/components/comment-replies-modal/comment-replies-modal";
import { closeCommentRepliesModal, setCommentReplies } from "#/comments/store/actions";
import { CommentsState } from "#/comments/store/types";
import { ApplicationState } from "#/core/store/store";

export function CommentRepliesModalContainer() {
  const dispatch = useDispatch();
  const { isRepliesModalOpen, replies } = useSelector<ApplicationState, CommentsState>((state) => state.comments);

  function onClose() {
    dispatch(closeCommentRepliesModal());
    dispatch(setCommentReplies({ comments: [] }));
  }
  return <CommentRepliesModal isOpen={isRepliesModalOpen} replies={replies} onClose={onClose} />;
}
