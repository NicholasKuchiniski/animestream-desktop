import { createStandaloneToast } from "@chakra-ui/react";

import { ToastProps } from "#/core/components/toast/types";

export function openToast({ status, description }: ToastProps) {
  const toast = createStandaloneToast();

  toast({
    duration: 3000,
    isClosable: false,
    status,
    description,
  });
}
