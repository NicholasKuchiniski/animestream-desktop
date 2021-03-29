import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

import { HttpClientMiddleware } from "#/core/http-client/http-client-middleware";
import { reactotron } from "#/reactotron-config";

export class HttpClientLogger extends HttpClientMiddleware {
  protected onRequest(request: AxiosRequestConfig): AxiosRequestConfig {
    return request;
  }

  protected onResponse(response: AxiosResponse): AxiosResponse {
    const { config, data, status, headers } = response;

    const isRealBodyParseable = typeof data === "string" || typeof data === "object";

    if (reactotron.apiResponse) {
      reactotron.apiResponse(
        {
          url: config.url,
          method: config.method,
          data: config.data,
          headers: config.headers,
          params: config.params,
        },
        {
          body: isRealBodyParseable ? data : `~~~ skipped ~~~`,
          status,
          headers,
        },
        0,
      );
    }

    return response;
  }

  protected onError(error: AxiosError): Promise<void> {
    if (error.response) {
      this.onResponse(error.response);
    }

    return Promise.reject(error);
  }
}
