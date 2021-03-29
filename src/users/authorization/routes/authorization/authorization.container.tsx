import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { ApplicationState } from "#/core/store/store";
import { Authorization } from "#/users/authorization/routes/authorization/authorization";
import { authorizationFormSchema } from "#/users/authorization/routes/authorization/schemas";
import { AuthorizationFormSchema } from "#/users/authorization/routes/authorization/types";
import { createAuthorization } from "#/users/authorization/store/actions";

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
