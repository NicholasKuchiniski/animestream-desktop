import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { closeModal } from "#/application/store/actions";
import { ApplicationState } from "#/core/store/store";
import { NewSerieModal } from "#/new-serie/components/new-serie-modal/new-serie-modal";
import { newSerieFormSchema } from "#/new-serie/components/new-serie-modal/schemas";
import { NewSerieFormSchema } from "#/new-serie/components/new-serie-modal/types";
import { newSerie } from "#/new-serie/store/actions";

export function NewSerieModalContainer() {
  const dispatch = useDispatch();
  const isOpen = useSelector<ApplicationState, boolean>((state) => !!state.application.modals["new-serie"]);
  const isLoading = false;

  function onClose() {
    dispatch(closeModal());
  }

  function onSubmit(values: NewSerieFormSchema) {
    dispatch(newSerie(values));
  }

  const form = useFormik<NewSerieFormSchema>({
    isInitialValid: false,
    initialValues: {
      name: "",
      description: "",
      genres: [],
      image: "",
    },
    validationSchema: newSerieFormSchema,
    onSubmit,
  });

  return (
    <NewSerieModal
      isLoading={isLoading}
      isOpen={isOpen}
      isValid={form.isValid}
      values={form.values}
      errors={form.errors}
      onChange={form.handleChange}
      onSubmit={form.handleSubmit}
      setFieldValue={form.setFieldValue}
      onClose={onClose}
    />
  );
}
