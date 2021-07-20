import { Box } from "@chakra-ui/react";
import React from "react";

import { WindowProps } from "#/core/navigation/components/window/types";

export function Window({ children }: WindowProps) {
  return (
    <Box borderRadius="lg" bgColor="background.700" h="100vh">
      <Box
        overflowX="hidden"
        overflowY="auto"
        h="100vh"
        display="flex"
        flexDirection="column"
        bgColor="background.800"
        borderBottomRadius="lg"
      >
        {children}
      </Box>
    </Box>
  );
}
