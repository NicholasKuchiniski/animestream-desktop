import { FormikErrors, FormikProps } from "formik";

import { CreateCommentFormSchema } from "#/episodes/comments/components/comment-input/types";
import { CommentWithUser } from "#/core/entities/comment-with-user";

export interface CommentReplyModalProps {
  comment: CommentWithUser;
  isOpen: boolean;
  isLoading: boolean;
  isValid: boolean;
  values: CreateCommentFormSchema;
  errors: FormikErrors<CreateCommentFormSchema>;
  onChange: FormikProps<CreateCommentFormSchema>["handleChange"];
  onSubmit: FormikProps<CreateCommentFormSchema>["handleSubmit"];
  onClose: () => void;
}
