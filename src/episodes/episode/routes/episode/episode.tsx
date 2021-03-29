import { Badge, Box, Divider, Grid, GridItem, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import React from "react";

import { EpisodeCard, getEpisodeDurationTimeString } from "#/core/components/episode-card/episode-card";
import { Loading } from "#/core/components/loading/loading";
import { Video } from "#/core/components/video/video";
import { Episode as EpisodeEntity } from "#/core/entities/episode";
import { CommentBoxContainer as CommentBox } from "#/episodes/comments/components/comment-box/comment-box.container";
import { EpisodeProps } from "#/episodes/episode/routes/episode/types";

export function Episode({ isLoading, episode, episodes, onReady, onPlay, onPause, onTimeUpdate }: EpisodeProps) {
  function renderEpisodeCard(episodeInLIst: EpisodeEntity) {
    return <EpisodeCard episode={episodeInLIst} key={episodeInLIst.id} />;
  }

  return (
    <Loading isLoading={isLoading}>
      <Grid h="auto" templateRows="repeat(1, 1fr)" templateColumns="repeat(12, 1fr)" gap="6">
        <GridItem rowSpan={1} colSpan={9}>
          <Text fontWeight="semibold" mb="3">
            Episode
          </Text>
          <Divider mb="6" />
          <Stack spacing="6">
            <Video
              poster={episode.image}
              source={episode.link}
              listeners={{
                ready: onReady,
                play: onPlay,
                pause: onPause,
                timeupdate: onTimeUpdate,
              }}
            />
            <Text fontWeight="semibold">Episodes</Text>
            <SimpleGrid columns={3} spacing="6">
              {episodes.map(renderEpisodeCard)}
            </SimpleGrid>
          </Stack>
        </GridItem>
        <GridItem
          rowSpan={1}
          colSpan={3}
          w="100%"
          h="calc(100vh - 40px)"
          overflow="auto"
          position="sticky"
          top="1.5rem"
        >
          <Text fontWeight="semibold" mb="3">
            Description
          </Text>
          <Divider mb="6" />
          <Stack spacing="6">
            <Box>
              <Badge borderRadius="md" px="2" mb="3" bgColor="animestream.500" color="white">
                {getEpisodeDurationTimeString(episode.duration)}
              </Badge>
              <Text fontWeight="semibold" mb="3">
                {episode.name}
              </Text>
              <Text size="sm">{episode.description}</Text>
            </Box>
          </Stack>
          <Text fontWeight="semibold" mt="3" mb="3">
            Comments
          </Text>
          <Divider mb="6" />
          <CommentBox />
        </GridItem>
      </Grid>
    </Loading>
  );
}
