import { Fade } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

import { ApplicationState } from "#/core/store/store";
import { NewEpisodeBottomSheet } from "#/episodes/new-episode/components/new-episode-progress-bottom-sheet/new-episode-progress-bottom-sheet";
import { NewEpisodeState } from "#/episodes/new-episode/store/types";

export function NewEpisodeBottomSheetContainer() {
  const { newEpisode, video, isLoading } = useSelector<ApplicationState, NewEpisodeState>((state) => state.newEpisode);

  return (
    <Fade in={isLoading}>
      <NewEpisodeBottomSheet name={newEpisode.name} description={newEpisode.description} progress={video.progress} />
    </Fade>
  );
}
