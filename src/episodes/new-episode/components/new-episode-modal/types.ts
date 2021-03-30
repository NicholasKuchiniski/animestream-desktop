import { FormikErrors, FormikProps } from "formik";

import { SeriesCollection } from "#/core/entities/collections/series-collection";

export interface NewEpisodeFormSchema {
  searchName: string;
  serieId: string;
  name: string;
  description: string;
  duration: number;
  number: number;
  image: string;
  quality: number;
  video: File;
}

export interface NewEpisodeModalProps {
  isValid: boolean;
  isOpen: boolean;
  isLoading: boolean;
  series: SeriesCollection;
  values: NewEpisodeFormSchema;
  errors: FormikErrors<NewEpisodeFormSchema>;
  onChange: FormikProps<NewEpisodeFormSchema>["handleChange"];
  onSubmit: FormikProps<NewEpisodeFormSchema>["handleSubmit"];
  onSearch: (searchName: string) => void;
  onClose: () => void;
  onUpload: (event: any) => void;
}
