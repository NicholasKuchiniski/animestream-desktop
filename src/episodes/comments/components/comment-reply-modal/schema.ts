import * as Yup from "yup";

export const createReplyCommentFormSchema = Yup.object().shape({
  content: Yup.string().max(255).required("Content is required."),
  image: Yup.string(),
});
