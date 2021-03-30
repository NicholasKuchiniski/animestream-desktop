import { Box, Progress, Text } from "@chakra-ui/react";
import React from "react";

import { NewEpisodeBottomSheetProps } from "#/episodes/new-episode/components/new-episode-progress-bottom-sheet/types";

export function NewEpisodeBottomSheet({ name, description, progress }: NewEpisodeBottomSheetProps) {
  return (
    <Box pos="fixed" right="6" bottom="6" w="25vw">
      <Box bgColor="background.500" h="auto" boxShadow="base" borderRadius="md" overflow="hidden">
        <Progress colorScheme="animestream" size="xs" value={progress} />
        <Box p="6">
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Text fontWeight="semibold">{name}</Text>
          </Box>
          <Text mt="3">{description}</Text>
        </Box>
      </Box>
    </Box>
  );
}
