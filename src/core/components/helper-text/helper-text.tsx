import { FormHelperText } from "@chakra-ui/react";
import React from "react";

import { HelperTextProps } from "#/core/components/helper-text/types";

export function HelperText({ children, isError = false }: HelperTextProps) {
  if (isError) {
    return <FormHelperText color="red.300">{children}</FormHelperText>;
  }

  return <FormHelperText>{children}</FormHelperText>;
}
