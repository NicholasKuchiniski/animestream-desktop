import { SeriesCollection } from "#/core/collections/series-collection";
import { Serie } from "#/core/entities/serie";
import { HttpClient } from "#/core/http-client/http-client";

export class SeriesService {
  public static async search(name: string) {
    const response = await HttpClient.getInstance().request({
      path: "/v1/series/actions/search",
      method: "get",
      params: {
        name,
      },
    });

    return response.getCollection(Serie, SeriesCollection);
  }

  public static async find(serieId: string) {
    const response = await HttpClient.getInstance().request({
      path: `/v1/series/${serieId}`,
      method: "get",
    });

    return response.getData(Serie);
  }

  public static async create(data: { name: string; description: string; genres: string[]; image: string }) {
    const response = await HttpClient.getInstance().request({
      path: "/v1/series",
      method: "post",
      data,
    });

    return response.getData(Serie);
  }
}
