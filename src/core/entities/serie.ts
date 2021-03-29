import { Type } from "class-transformer";

export class Serie {
  public id!: string;

  public name!: string;

  public genres!: string[];

  public description!: string;

  public image!: string;

  public createdBy!: string;

  @Type(() => Date)
  public createdAt!: Date;

  @Type(() => Date)
  public updatedAt!: Date;

  public static empty() {
    return new Serie();
  }
}
