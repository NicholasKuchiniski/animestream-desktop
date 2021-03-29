import { Badge, Box, Text } from "@chakra-ui/react";
import React from "react";
import { useHistory } from "react-router";

import { SerieCardProps } from "#/core/components/serie-card/types";

export function SerieCard({ serie, full = false }: SerieCardProps) {
  const history = useHistory();

  function onGoToPageClick() {
    history.push(`/serie/${serie.id}`);
  }

  return (
    <Box
      w="100%"
      onClick={onGoToPageClick}
      _hover={{
        cursor: "pointer",
      }}
    >
      <Box
        bgImage={`url('${serie.image}')`}
        h="200px"
        bgSize="cover"
        bgPos="center"
        borderRadius="md"
        boxShadow="base"
        mb="6"
      />
      <Badge borderRadius="md" px="2" mb="3" bgColor="animestream.500" color="white">
        Serie
      </Badge>
      <Text fontWeight="semibold" isTruncated noOfLines={1} mb="3">
        {serie.name}
      </Text>
      <Text isTruncated={!full} noOfLines={full ? undefined : 3} fontSize={full ? "sm" : undefined}>
        {serie.description}
      </Text>
    </Box>
  );
}
