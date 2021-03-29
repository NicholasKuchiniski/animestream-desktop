export class User {
  public id!: string;

  public name!: string;

  public email!: string;

  public avatar!: string;

  public createdAt!: string;

  public updatedAt!: string;

  public isAdmin!: boolean;

  public static empty() {
    return new User();
  }

  public get firstName() {
    if (this.isEmpty()) {
      return "";
    }

    return this.name.split(" ")[0];
  }

  public isEmpty() {
    return this.id === undefined;
  }
}
