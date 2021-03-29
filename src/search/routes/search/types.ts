import { SeriesCollection } from "#/core/collections/series-collection";

export interface SearchProps {
  name: string;
  series: SeriesCollection;
  isLoading: boolean;
}
