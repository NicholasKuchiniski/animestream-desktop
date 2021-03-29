import { EpisodesCollection } from "#/core/collections/episodes-collection";
import { Episode } from "#/core/entities/episode";
import { HttpClient } from "#/core/http-client/http-client";

export class EpisodesService {
  public static async get({ page, limit }: { page: number; limit: number }): Promise<EpisodesCollection> {
    const response = await HttpClient.getInstance().request({
      path: "/v1/episodes",
      method: "get",
      params: {
        page,
        limit,
      },
    });

    return response.getCollection(Episode, EpisodesCollection);
  }

  public static async find(episodeId: string): Promise<Episode> {
    const response = await HttpClient.getInstance().request({
      path: `/v1/episodes/${episodeId}`,
      method: "get",
    });

    return response.getData(Episode);
  }

  public static async findBySerie(serieId: string): Promise<EpisodesCollection> {
    const response = await HttpClient.getInstance().request({
      path: `/v1/series/${serieId}/episodes`,
      method: "get",
    });

    return response.getCollection(Episode, EpisodesCollection);
  }

  public static async create(data: {
    name: string;
    description: string;
    duration: number;
    number: number;
    image: string;
    quality: number;
    serieId: string;
    link: string;
  }): Promise<Episode> {
    const response = await HttpClient.getInstance().request({
      path: "/v1/episodes",
      method: "post",
      data,
    });

    return response.getData(Episode);
  }
}
