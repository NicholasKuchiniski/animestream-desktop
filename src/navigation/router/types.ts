import { History } from "history";
import { ComponentClass, FunctionComponent } from "react";

export interface RouterProps {
  history: History<any>;
}

export interface ProtectedRouteProps {
  exact?: boolean;
  path: string;
  component: FunctionComponent | ComponentClass;
}
