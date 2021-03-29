import { SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

import { Loading } from "#/core/components/loading/loading";
import { SerieCard } from "#/core/components/serie-card/serie-card";
import { Serie } from "#/core/entities/serie";
import { SearchProps } from "#/series/search/routes/search/types";

export function Search({ name, series, isLoading }: SearchProps) {
  function renderSerieCard(serie: Serie) {
    return <SerieCard serie={serie} />;
  }

  return (
    <Loading isLoading={isLoading}>
      <Text fontSize="2xl" fontWeight="semibold">
        Search results for{" "}
        <Text color="animestream.500" fontSize="2xl" fontWeight="semibold" as="span">{`"${name}"`}</Text>
      </Text>
      <SimpleGrid columns={4} spacing="6">
        {series.map(renderSerieCard)}
      </SimpleGrid>
    </Loading>
  );
}
