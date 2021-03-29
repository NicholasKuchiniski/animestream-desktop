export class Account {
  public id!: string;

  public userId!: string;

  public password!: string | null;

  public token!: string;

  public scopes!: string[];

  public createdAt!: Date;

  public updatedAt!: Date;

  public static empty() {
    return new Account();
  }
}
