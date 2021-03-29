import { Progress } from "#/core/entities/progress";
import { HttpClient } from "#/core/http-client/http-client";
import { HttpClientError } from "#/core/http-client/http-client-error";

export class ProgressService {
  public static async create(episodeId: string, duration: number): Promise<Progress> {
    const response = await HttpClient.getInstance().request({
      path: `/v1/episodes/${episodeId}/progress/${duration}`,
      method: "post",
    });

    return response.getData(Progress);
  }

  public static async find(episodeId: string): Promise<Progress> {
    try {
      const response = await HttpClient.getInstance().request({
        path: `/v1/episodes/${episodeId}/progress`,
        method: "get",
      });

      return response.getData(Progress);
    } catch (error) {
      if (error instanceof HttpClientError) {
        if (error.isNotFound()) {
          return Progress.empty();
        }
      }

      throw error;
    }
  }

  public static async update(episodeId: string, duration: number): Promise<Progress> {
    const response = await HttpClient.getInstance().request({
      path: `/v1/episodes/${episodeId}/progress/${duration}`,
      method: "put",
    });

    return response.getData(Progress);
  }
}
