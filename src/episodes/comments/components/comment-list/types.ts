import { CommentsCollection } from "#/core/entities/collections/comments-collection";
import { CommentWithUser } from "#/core/entities/comment-with-user";

export interface CommentListProps {
  isLoading: boolean;
  comments: CommentsCollection;
  onReply: (comment: CommentWithUser) => void;
  onSeeReplies: (replies: CommentWithUser[]) => void;
}
