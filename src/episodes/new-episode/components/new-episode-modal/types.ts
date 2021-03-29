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
}

export interface NewEpisodeModalProps {
  isValid: boolean;
  isOpen: boolean;
  isLoading: boolean;
  isVideoLoading: boolean;
  series: SeriesCollection;
  videoProgress: number;
  values: NewEpisodeFormSchema;
  errors: FormikErrors<NewEpisodeFormSchema>;
  onChange: FormikProps<NewEpisodeFormSchema>["handleChange"];
  onSubmit: FormikProps<NewEpisodeFormSchema>["handleSubmit"];
  onSearch: (searchName: string) => void;
  onClose: () => void;
  onUpload: (event: any) => void;
}
