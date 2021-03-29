import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

import { Authorization } from "#/core/entities/authorization";
import { HttpClientError } from "#/core/http-client/http-client-error";
import { HttpClientLogger } from "#/core/http-client/http-client-logger-middleware";
import { HttpClientMiddleware } from "#/core/http-client/http-client-middleware";
import { HttpClientRequest } from "#/core/http-client/http-client-request";
import { HttpClientResponse } from "#/core/http-client/http-client-response";

export class HttpClient {
  private static instance: HttpClient;

  private middlewares: HttpClientMiddleware[];

  protected readonly axios: AxiosInstance;

  public constructor(baseURL = process.env.BASE_URL) {
    const axiosInstance = axios.create({
      baseURL,
    });

    this.axios = axiosInstance;
    this.middlewares = [new HttpClientLogger(axiosInstance)];

    this.useMiddlewares();
  }

  public static getInstance() {
    if (!HttpClient.instance) {
      HttpClient.instance = new HttpClient();
    }

    return HttpClient.instance;
  }

  private useMiddlewares() {
    this.middlewares.map((middleware) => middleware.use());
  }

  public setAuthorization(authorization: Authorization) {
    this.axios.defaults.headers.Authorization = authorization.token;
  }

  public async request(request: HttpClientRequest) {
    try {
      const axiosRequest: AxiosRequestConfig = {
        url: request.path,
        data: request.data,
        params: request.params,
        method: request.method,
        headers: request.headers,
      };

      const response = await this.axios.request(axiosRequest);

      return new HttpClientResponse(response.data);
    } catch (error) {
      const { code, status, message } = HttpClientError.getResponse(error);

      throw new HttpClientError(code, message, status);
    }
  }
}
