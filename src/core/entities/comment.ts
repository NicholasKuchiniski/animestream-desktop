// eslint-disable-next-line max-classes-per-file
import { Type } from "class-transformer";

export class Comment {
  public id!: string;

  public parentCommentId!: string | null;

  public episodeId!: string;

  public createdBy!: string;

  public content!: string;

  public image!: string | null;

  @Type(() => Date)
  public createdAt!: Date;

  @Type(() => Date)
  public updatedAt!: Date;

  public static empty(): Comment {
    return new Comment();
  }
}
