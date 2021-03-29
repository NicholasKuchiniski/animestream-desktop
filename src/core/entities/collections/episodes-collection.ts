import { Episode } from "#/core/entities/episode";

export class EpisodesCollection extends Array<Episode> {
  public static empty(): EpisodesCollection {
    return new EpisodesCollection();
  }

  public isEmpty(): boolean {
    return this.length === 0;
  }
}
