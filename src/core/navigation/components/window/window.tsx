import { Box } from "@chakra-ui/react";
import React from "react";

import { WindowProps } from "#/core/navigation/components/window/types";
import { WindowTitle } from "#/core/navigation/components/window/window-title";

export function Window({ children }: WindowProps) {
  return (
    <Box borderRadius="lg" bgColor="background.700" h="100vh">
      <WindowTitle />
      <Box
        overflowX="hidden"
        overflowY="auto"
        h="calc(100vh - 40px)"
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
