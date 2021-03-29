import { FormikErrors, FormikProps } from "formik";

export interface AuthorizationFormSchema {
  email: string;
  password: string;
}

export interface AuthorizationProps {
  values: AuthorizationFormSchema;
  errors: FormikErrors<AuthorizationFormSchema>;
  isLoading: boolean;
  isValid: boolean;
  onChange: FormikProps<AuthorizationFormSchema>["handleChange"];
  onSubmit: FormikProps<AuthorizationFormSchema>["handleSubmit"];
}
