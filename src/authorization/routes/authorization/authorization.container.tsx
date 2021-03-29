import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Authorization } from "#/authorization/routes/authorization/authorization";
import { authorizationFormSchema } from "#/authorization/routes/authorization/schemas";
import { AuthorizationFormSchema } from "#/authorization/routes/authorization/types";
import { createAuthorization } from "#/authorization/store/actions";
import { ApplicationState } from "#/core/store/store";

export function AuthorizationRoute() {
  const dispatch = useDispatch();

  const isLoading = useSelector<ApplicationState, boolean>((state) => state.authorization.isLoading);

  function onSubmit(values: AuthorizationFormSchema) {
    dispatch(createAuthorization(values));
  }

  const form = useFormik<AuthorizationFormSchema>({
    isInitialValid: false,
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: authorizationFormSchema,
    onSubmit,
  });

  return (
    <Authorization
      values={form.values}
      errors={form.errors}
      isLoading={isLoading}
      isValid={form.isValid}
      onChange={form.handleChange}
      onSubmit={form.handleSubmit}
    />
  );
}
