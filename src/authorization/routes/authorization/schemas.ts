import * as Yup from "yup";

export const authorizationFormSchema = Yup.object().shape({
  email: Yup.string().email("E-mail is invalid.").required("E-mail is required."),
  password: Yup.string().min(8, "Password at least 8 characters.").required("Password is required."),
});
