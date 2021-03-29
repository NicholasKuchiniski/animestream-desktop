import { ComponentStyleConfig } from "@chakra-ui/react";

export const Modal: ComponentStyleConfig = {
  baseStyle: () => ({
    dialog: {
      bgColor: "background.500",
    },
    overlay: {
      borderRadius: "lg",
    },
  }),
};
