import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { ApplicationState } from "#/core/store/store";
import { CreateCommentFormSchema } from "#/episodes/comments/components/comment-input/types";
import { CommentReplyModal } from "#/episodes/comments/components/comment-reply-modal/comment-reply-modal";
import { createReplyCommentFormSchema } from "#/episodes/comments/components/comment-reply-modal/schema";
import { closeReplyCommentModal, createReplyComment } from "#/episodes/comments/store/actions";
import { CommentsState } from "#/episodes/comments/store/types";

export function CommentReplyModalContainer() {
  const dispatch = useDispatch();
  const { replyComment, isReplyCommentModalOpen, isLoadingReplyComment } = useSelector<ApplicationState, CommentsState>(
    (state) => state.comments,
  );

  function onSubmit(values: CreateCommentFormSchema) {
    dispatch(
      createReplyComment({
        image: values.image ?? null,
        content: values.content,
      }),
    );
    form.resetForm();
  }

  function onClose() {
    dispatch(closeReplyCommentModal());
  }

  const form = useFormik<CreateCommentFormSchema>({
    isInitialValid: false,
    initialValues: {
      content: "",
      image: undefined,
    },
    validationSchema: createReplyCommentFormSchema,
    onSubmit,
  });

  return (
    <CommentReplyModal
      comment={replyComment}
      isOpen={isReplyCommentModalOpen}
      isLoading={isLoadingReplyComment}
      isValid={form.isValid}
      values={form.values}
      errors={form.errors}
      onChange={form.handleChange}
      onSubmit={form.handleSubmit}
      onClose={onClose}
    />
  );
}
