import * as Yup from "yup";

export const newEpisodeFormSchema = Yup.object().shape({
  searchName: Yup.string().required("Search name is required."),
  serieId: Yup.string().required("Serie is required."),
  name: Yup.string().required("Name is required."),
  description: Yup.string().required("Description is required."),
  number: Yup.number().required("Number is required."),
  duration: Yup.number().required("Duration is required."),
  image: Yup.string().required("Image is required."),
});
