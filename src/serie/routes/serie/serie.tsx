import { Badge, Box, Divider, Grid, GridItem, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

import { EpisodeCard } from "#/core/components/episode-card/episode-card";
import { Loading } from "#/core/components/loading/loading";
import { Episode } from "#/core/entities/episode";
import { SerieProps } from "#/serie/routes/serie/types";

export function Serie({ isLoading, serie, episodes }: SerieProps) {
  function renderEpisodeCard(episode: Episode) {
    return <EpisodeCard episode={episode} key={episode.id} />;
  }

  return (
    <Loading isLoading={isLoading}>
      <Grid templateRows="repeat(1, 1fr)" templateColumns="repeat(12, 1fr)" gap="6">
        <GridItem rowSpan={1} colSpan={3}>
          <Text fontWeight="semibold" mb="3">
            Description
          </Text>
          <Divider mb="6" />
          <Box
            bgImage={`url('${serie.image}')`}
            h="200px"
            bgSize="cover"
            bgPos="center"
            borderRadius="md"
            boxShadow="base"
            mb="6"
          />
          <Badge borderRadius="md" px="2" bgColor="animestream.500" color="white" mb="3">
            Serie
          </Badge>
          <Text fontWeight="semibold" mb="3" isTruncated noOfLines={1}>
            {serie.name}
          </Text>
          <Text fontSize="sm">{serie.description}</Text>
        </GridItem>
        <GridItem rowSpan={1} colSpan={9}>
          <Text fontWeight="semibold" mb="3">
            Episodes
          </Text>
          <Divider mb="6" />
          <SimpleGrid columns={3} spacing="6">
            {episodes.map(renderEpisodeCard)}
          </SimpleGrid>
        </GridItem>
      </Grid>
    </Loading>
  );
}
