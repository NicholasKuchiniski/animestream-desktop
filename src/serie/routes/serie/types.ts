import { EpisodesCollection } from "#/core/collections/episodes-collection";
import { Serie } from "#/core/entities/serie";

export interface SerieParams {
  serieId: string;
}

export interface SerieProps {
  isLoading: boolean;
  serie: Serie;
  episodes: EpisodesCollection;
}
