import { FormikErrors, FormikProps } from "formik";

export interface CreateCommentFormSchema {
  content: string;
  image?: string;
}

export interface CommentInputProps {
  isLoading: boolean;
  isValid: boolean;
  values: CreateCommentFormSchema;
  errors: FormikErrors<CreateCommentFormSchema>;
  onChange: FormikProps<CreateCommentFormSchema>["handleChange"];
  onSubmit: FormikProps<CreateCommentFormSchema>["handleSubmit"];
  disabled?: boolean;
}
