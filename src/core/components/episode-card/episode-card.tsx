import { Badge, Box, Text } from "@chakra-ui/react";
import moment from "moment";
import React from "react";
import { useHistory } from "react-router";

import "moment-duration-format";

import { EpisodeCardProps } from "#/core/components/episode-card/types";

export function getEpisodeDurationTimeString(durationInSeconds: number) {
  const oneHourInSeconds = 3600;
  const duration = moment.duration(durationInSeconds, "seconds");
  const hasMoreThanOneHour = durationInSeconds >= oneHourInSeconds;

  const durationAsTime = hasMoreThanOneHour
    ? duration.format("hh:mm", { trim: false })
    : duration.format("mm:ss", { trim: false });
  const durationAsTimeString = hasMoreThanOneHour ? `${durationAsTime} Hours` : `${durationAsTime} Minutes`;

  return durationAsTimeString;
}

export function EpisodeCard({ episode }: EpisodeCardProps) {
  const history = useHistory();

  const durationAsTime = getEpisodeDurationTimeString(episode.duration);

  function onGoToPageClick() {
    history.push(`/episode/${episode.id}`);
  }

  return (
    <Box
      w="100%"
      _hover={{
        cursor: "pointer",
      }}
      onClick={onGoToPageClick}
    >
      <Box
        bgImage={`url('${episode.image}')`}
        h="200px"
        bgSize="cover"
        bgPos="center"
        mb="6"
        borderRadius="md"
        boxShadow="base"
      />
      <Badge borderRadius="md" px="2" mb="3" bgColor="animestream.500" color="white">
        {durationAsTime}
      </Badge>
      <Text fontWeight="semibold" isTruncated noOfLines={1} mb="3">
        {episode.name}
      </Text>
      <Text isTruncated noOfLines={3} minH="72px">
        {episode.description}
      </Text>
    </Box>
  );
}
