import { Stack } from "@chakra-ui/react";
import React from "react";

import { NavbarContainer as Navbar } from "#/core/navigation/components/navbar/navbar.container";
import { PageProps } from "#/core/navigation/components/page/types";

export function Page({ children }: PageProps) {
  return (
    <Stack spacing="6" flex="1">
      <Navbar />
      <Stack spacing="6" p="6" pt="0" w="100%" flex="1">
        {children}
      </Stack>
    </Stack>
  );
}
