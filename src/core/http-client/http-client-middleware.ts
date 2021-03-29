import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export abstract class HttpClientMiddleware {
  public constructor(private readonly axios: AxiosInstance) {}

  public use() {
    this.axios.interceptors.request.use(this.onRequest.bind(this));
    this.axios.interceptors.response.use(this.onResponse.bind(this), this.onError.bind(this));
  }

  protected abstract onRequest(request: AxiosRequestConfig): AxiosRequestConfig;

  protected abstract onResponse(response: AxiosResponse): AxiosResponse;

  protected abstract onError(error: AxiosError): Promise<void>;
}
