import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

import { User } from "#/core/entities/user";
import { ApplicationState } from "#/core/store/store";
import { Page } from "#/navigation/components/page/page";
import { ProtectedRouteProps } from "#/navigation/router/types";

export function ProtectedRoute(props: ProtectedRouteProps) {
  const { exact, path, component } = props;

  const user = useSelector<ApplicationState, User>((state) => state.authorization.currentAuthorization.user);

  if (user.isEmpty()) {
    return <Redirect to="/authorization" />;
  }

  return (
    <Page>
      <Route exact={exact} path={path} component={component} />
    </Page>
  );
}
