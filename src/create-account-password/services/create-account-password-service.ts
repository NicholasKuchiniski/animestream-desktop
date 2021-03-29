import { HttpClient } from "#/core/http-client/http-client";

export class CreateAccountPasswordService {
  public static async create(password: string, token: string): Promise<void> {
    await HttpClient.getInstance().request({
      path: "/v1/accounts/create-password",
      method: "post",
      data: {
        token,
        password,
      },
    });
  }
}
