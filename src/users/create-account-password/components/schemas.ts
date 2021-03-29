import * as Yup from "yup";

export const createAccountPasswordFormSchema = Yup.object().shape({
  password: Yup.string().min(8, "Password must be at least 8 characters").max(8).required("Password is required"),
});
