import { ListenerEventHandler } from "#/core/components/video/types";
import { EpisodesCollection } from "#/core/entities/collections/episodes-collection";
import { Episode } from "#/core/entities/episode";
import { Progress } from "#/core/entities/progress";

export interface EpisodeParams {
  episodeId: string;
}

export interface EpisodeProps {
  isLoading: boolean;
  episode: Episode;
  episodes: EpisodesCollection;
  progress: Progress;
  onReady: ListenerEventHandler;
  onPlay: ListenerEventHandler;
  onPause: ListenerEventHandler;
  onTimeUpdate: ListenerEventHandler;
}
