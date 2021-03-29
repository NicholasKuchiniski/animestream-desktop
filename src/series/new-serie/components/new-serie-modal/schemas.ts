import * as Yup from "yup";

export const newSerieFormSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  description: Yup.string().required("Description is required."),
  genres: Yup.array().min(1, "Genres is required.").required("Genres is required."),
  image: Yup.string().required("Image is required"),
});
