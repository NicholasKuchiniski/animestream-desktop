import { CommentWithReplies } from "#/core/entities/comment-with-replies";

export class CommentsCollection extends Array<CommentWithReplies> {
  public static empty(): CommentsCollection {
    return new CommentsCollection();
  }
}
