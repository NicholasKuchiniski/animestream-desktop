import { Type } from "class-transformer";

export class Episode {
  public id!: string;

  public name!: string;

  public description!: string;

  public number!: number;

  public duration!: number;

  public image!: string;

  public quality!: number;

  public serieId!: string;

  public link!: string;

  public createdBy!: string;

  @Type(() => Date)
  public createdAt!: Date;

  @Type(() => Date)
  public updatedAt!: Date;

  public static empty(): Episode {
    return new Episode();
  }

  public isEmpty(): boolean {
    return this.id === undefined;
  }
}
