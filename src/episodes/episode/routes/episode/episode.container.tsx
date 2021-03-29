import { useDisclosure } from "@chakra-ui/react";
import Plyr from "plyr";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

import { ConfirmationAlert } from "#/core/components/confirmation-alert/confirmation-alert";
import { ApplicationState } from "#/core/store/store";
import { Episode } from "#/episodes/episode/routes/episode/episode";
import { EpisodeParams } from "#/episodes/episode/routes/episode/types";
import {
  getEpisode,
  onEpisodeEnd,
  onEpisodePause,
  onEpisodePlay,
  onEpisodeTimeUpdate,
} from "#/episodes/episode/store/actions";
import { EpisodeState } from "#/episodes/episode/store/types";

export function EpisodeRoute() {
  const plyrRef = useRef<Plyr>();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const { episodeId } = useParams<EpisodeParams>();

  const dispatch = useDispatch();

  const { isLoading, episode, episodes, progress } = useSelector<ApplicationState, EpisodeState>(
    (state) => state.episode,
  );

  useEffect(() => {
    dispatch(getEpisode({ episodeId }));

    return () => {
      dispatch(onEpisodeEnd());
    };
  }, [episodeId]);

  function onReady(instance: Plyr) {
    plyrRef.current = instance;

    if (progress.duration >= 1) {
      onOpen();
    }
  }

  function onPause() {
    dispatch(onEpisodePause());
  }

  function onPlay() {
    dispatch(onEpisodePlay());
  }

  function onTimeUpdate(instance: Plyr) {
    if (instance.currentTime > progress.duration) {
      dispatch(onEpisodeTimeUpdate({ duration: Math.ceil(instance.currentTime) }));
    }
  }

  function onConfirm() {
    if (plyrRef.current) {
      plyrRef.current.currentTime = progress.duration;
    }

    onClose();
  }

  return (
    <>
      <Episode
        isLoading={isLoading}
        episode={episode}
        episodes={episodes}
        progress={progress}
        onReady={onReady}
        onPlay={onPlay}
        onPause={onPause}
        onTimeUpdate={onTimeUpdate}
      />
      <ConfirmationAlert
        title="We identified that you have watched a part of this episode before"
        message={`Do you want to start playback from ${progress.getDurationAsTimeString()}?`}
        cancel="No"
        confirm="Yes"
        isOpen={isOpen}
        onCancel={onClose}
        onConfirm={onConfirm}
      />
    </>
  );
}
