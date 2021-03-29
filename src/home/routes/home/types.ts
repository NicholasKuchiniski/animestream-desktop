import { EpisodesCollection } from "#/core/collections/episodes-collection";

export interface HomeProps {
  isLoading: boolean;
  episodes: EpisodesCollection;
}
