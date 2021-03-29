import { ReactElement } from "react";
import { MaybeArray } from "tsdef";

export interface WindowProps {
  children: MaybeArray<ReactElement>;
}
