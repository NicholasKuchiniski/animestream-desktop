import { FormikErrors, FormikProps } from "formik";

export interface CreateAccountPasswordFormSchema {
  password: string;
}

export interface CreateAccountPasswordModalProps {
  isLoading: boolean;
  isOpen: boolean;
  isValid: boolean;
  values: CreateAccountPasswordFormSchema;
  errors: FormikErrors<CreateAccountPasswordFormSchema>;
  onChange: FormikProps<CreateAccountPasswordFormSchema>["handleChange"];
  onSubmit: FormikProps<CreateAccountPasswordFormSchema>["handleSubmit"];
  onClose: () => void;
}
