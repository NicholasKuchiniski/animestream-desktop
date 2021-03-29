import { Box, Center, Flex, Spinner, Text } from "@chakra-ui/react";
import React from "react";

import { LoadingProps } from "#/core/components/loading/types";

export function Loading({ isLoading, children }: LoadingProps) {
  if (isLoading) {
    return (
      <Center h="100%" w="100" flex="1">
        <Box h="auto">
          <Flex alignItems="center" mb="3">
            <Spinner size="sm" mr="3" color="animestream.500" />
            <Text fontWeight="semibold">Please, wait...</Text>
          </Flex>
          <Text fontSize="sm" mb="6">
            We need to load some data before you can enter this screen.
          </Text>
        </Box>
      </Center>
    );
  }

  return <>{children}</>;
}
