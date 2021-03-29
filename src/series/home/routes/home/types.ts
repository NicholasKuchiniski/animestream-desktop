import { EpisodesCollection } from "#/core/entities/collections/episodes-collection";

export interface HomeProps {
  isLoading: boolean;
  episodes: EpisodesCollection;
}
