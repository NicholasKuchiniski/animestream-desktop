import { ReactElement } from "react";
import { MaybeArray } from "tsdef";

export interface LoadingProps {
  isLoading: boolean;
  children: MaybeArray<ReactElement>;
}
