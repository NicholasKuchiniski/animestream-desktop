import { useFormik } from "formik";
import { get, isEmpty } from "lodash";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { closeModal, openModal } from "#/application/store/actions";
import { ApplicationState } from "#/core/store/store";
import { CreateAccountPasswordModal } from "#/create-account-password/components/create-account-password-modal";
import { createAccountPasswordFormSchema } from "#/create-account-password/components/schemas";
import { CreateAccountPasswordFormSchema } from "#/create-account-password/components/types";
import { createAccountPassword } from "#/create-account-password/store/actions";
import { CreateAccountPasswordState } from "#/create-account-password/store/types";
import { electron } from "#/native/electron";

export function CreateAccountPasswordModalContainer() {
  const [token, setToken] = useState("");
  const dispatch = useDispatch();

  const isOpen = useSelector<ApplicationState, boolean>((state) => state.application.modals["create-account-password"]);
  const { isLoading } = useSelector<ApplicationState, CreateAccountPasswordState>(
    (state) => state.createAccountPassword,
  );

  useEffect(() => {
    const argument = get(electron.remote.process.argv, 1, "");
    const tokenFromArgument = argument.replace("animestream://token=", "");

    if (tokenFromArgument !== "." && !isEmpty(tokenFromArgument)) {
      dispatch(openModal({ modal: "create-account-password" }));
      setToken(tokenFromArgument);
    }
  }, []);

  function onClose() {
    dispatch(closeModal());
  }
  function onSubmit(values: CreateAccountPasswordFormSchema) {
    dispatch(createAccountPassword({ password: values.password, token }));
  }

  const form = useFormik<CreateAccountPasswordFormSchema>({
    isInitialValid: false,
    initialValues: {
      password: "",
    },
    validationSchema: createAccountPasswordFormSchema,
    onSubmit,
  });

  return (
    <CreateAccountPasswordModal
      isLoading={isLoading}
      isOpen={isOpen}
      isValid={form.isValid}
      values={form.values}
      errors={form.errors}
      onChange={form.handleChange}
      onSubmit={form.handleSubmit}
      onClose={onClose}
    />
  );
}
