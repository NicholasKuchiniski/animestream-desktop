import { Authorization } from "#/authorization/entities/authorization";
import { HttpClient } from "#/core/http-client/http-client";

export class AuthorizationService {
  public static async create({ email, password }: { email: string; password: string }): Promise<Authorization> {
    const response = await HttpClient.getInstance().request({
      path: "/v1/authorization",
      method: "post",
      data: {
        email,
        password,
      },
    });

    return response.getData(Authorization);
  }
}
