import { HttpClient } from "#/core/http-client/http-client";

export class AccountsService {
  public static async createPassword(password: string, token: string): Promise<void> {
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
