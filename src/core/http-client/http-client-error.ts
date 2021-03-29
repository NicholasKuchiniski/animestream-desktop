import { AlertStatus } from "@chakra-ui/react";
import { AxiosError } from "axios";
import { StatusCodes } from "http-status-codes";
import get from "lodash/get";

import { types, titles, descriptions } from "#/core/http-client/http-errors";

export class HttpClientError {
  public static defaultTitle = "An error ocurred!";

  public static defaultDescription = "An error occurred during the request, please try again or contact support.";

  public static defaultType: AlertStatus = "error";

  public static empty() {
    return new HttpClientError("", "");
  }

  public constructor(public readonly code: string, public readonly message: string, public readonly status?: number) {}

  public static getResponse(error: any) {
    const axiosError = error as AxiosError;
    const code = get(axiosError.response?.data, "code", "unknown");
    const status = get(axiosError.response, "status");
    const message = get(axiosError.response?.data, "message");

    return { code, status, message };
  }

  public get type(): AlertStatus {
    return types.get(this.code) || HttpClientError.defaultType;
  }

  public get title(): string {
    return titles.get(this.code) || HttpClientError.defaultTitle;
  }

  public get description(): string {
    return descriptions.get(this.code) || `${this.message}.` || HttpClientError.defaultDescription;
  }

  public isUnauthorized(): boolean {
    return this.status ? [StatusCodes.UNAUTHORIZED].includes(this.status) : false;
  }

  public isNotFound(): boolean {
    return this.status ? [StatusCodes.NOT_FOUND].includes(this.status) : false;
  }

  public isEmpty(): boolean {
    return this.code === "";
  }
}
