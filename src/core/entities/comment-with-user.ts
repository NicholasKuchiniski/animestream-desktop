import { Type } from "class-transformer";

import { User } from "#/core/entities/user";
import { Comment } from "#/core/entities/comment";

export class CommentWithUser {
  @Type(() => Comment)
  public comment!: Comment;

  @Type(() => User)
  public user!: User;

  public static empty() {
    const comment = new CommentWithUser();

    comment.comment = Comment.empty();
    comment.user = User.empty();

    return comment;
  }

  public isEmpty(): boolean {
    return this.comment === undefined;
  }
}
