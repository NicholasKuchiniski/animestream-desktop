import { Type } from "class-transformer";

import { Account } from "#/core/entities/account";
import { User } from "#/core/entities/user";

export class Authorization {
  public token!: string;

  public expiresAt!: string;

  @Type(() => User)
  public user!: User;

  @Type(() => Account)
  public account!: Account;

  public static empty() {
    const authorization = new Authorization();

    authorization.account = Account.empty();
    authorization.user = User.empty();

    return authorization;
  }

  public isAdmin() {
    return this.account.scopes.includes("admin");
  }
}
