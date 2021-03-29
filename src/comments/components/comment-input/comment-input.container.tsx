import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { CommentInput } from "#/comments/components/comment-input/comment-input";
import { createCommentFormSchema } from "#/comments/components/comment-input/schemas";
import { CreateCommentFormSchema } from "#/comments/components/comment-input/types";
import { createComment } from "#/comments/store/actions";
import { CommentsState } from "#/comments/store/types";
import { ApplicationState } from "#/core/store/store";

export function CommentInputContainer() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector<ApplicationState, CommentsState>((state) => state.comments);

  function onSubmit(values: CreateCommentFormSchema) {
    dispatch(
      createComment({
        ...values,
        image: values.image ?? null,
        parentCommentId: null,
      }),
    );
    form.resetForm();
  }

  const form = useFormik<CreateCommentFormSchema>({
    isInitialValid: false,
    initialValues: {
      content: "",
      image: undefined,
    },
    validationSchema: createCommentFormSchema,
    onSubmit,
  });

  return (
    <CommentInput
      isLoading={isLoading}
      isValid={form.isValid}
      values={form.values}
      errors={form.errors}
      onChange={form.handleChange}
      onSubmit={form.handleSubmit}
    />
  );
}
