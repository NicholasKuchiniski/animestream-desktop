import { Serie } from "#/core/entities/serie";

export class SeriesCollection extends Array<Serie> {
  public static empty() {
    return new SeriesCollection();
  }

  public isEmpty(): boolean {
    return this.length === 0;
  }

  public findById(id: string): Serie {
    return this.find((serie) => serie.id === id) ?? Serie.empty();
  }
}
