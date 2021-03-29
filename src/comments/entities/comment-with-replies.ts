import { Type } from "class-transformer";

import { CommentWithUser } from "#/comments/entities/comment-with-user";

export class CommentWithReplies extends CommentWithUser {
  @Type(() => CommentWithUser)
  public replies!: CommentWithUser[];
}
