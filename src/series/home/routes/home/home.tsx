import { SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

import { EpisodeCard } from "#/core/components/episode-card/episode-card";
import { Loading } from "#/core/components/loading/loading";
import { Episode } from "#/core/entities/episode";
import { HomeProps } from "#/series/home/routes/home/types";

export function Home({ isLoading, episodes }: HomeProps) {
  function renderEpisodeCard(episode: Episode) {
    return <EpisodeCard episode={episode} key={episode.id} />;
  }
  return (
    <Loading isLoading={isLoading}>
      <Text fontSize="2xl" fontWeight="semibold">
        Episodes
      </Text>
      <SimpleGrid columns={4} spacing="6">
        {episodes.map(renderEpisodeCard)}
      </SimpleGrid>
    </Loading>
  );
}
