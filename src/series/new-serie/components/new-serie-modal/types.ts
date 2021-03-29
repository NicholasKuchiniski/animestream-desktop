import { FormikErrors, FormikProps } from "formik";

export interface NewSerieFormSchema {
  name: string;
  description: string;
  genres: string[];
  image: string;
}

export interface NewSerieModalProps {
  isLoading: boolean;
  isOpen: boolean;
  isValid: boolean;
  values: NewSerieFormSchema;
  errors: FormikErrors<NewSerieFormSchema>;
  onChange: FormikProps<NewSerieFormSchema>["handleChange"];
  onSubmit: FormikProps<NewSerieFormSchema>["handleSubmit"];
  setFieldValue: FormikProps<NewSerieFormSchema>["setFieldValue"];
  onClose: () => void;
}
