import { SeriesCollection } from "#/core/entities/collections/series-collection";

export interface SearchProps {
  name: string;
  series: SeriesCollection;
  isLoading: boolean;
}
