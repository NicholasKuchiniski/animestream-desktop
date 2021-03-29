import { CommentsCollection } from "#/comments/collections/comments-collection";
import { CommentWithUser } from "#/comments/entities/comment-with-user";

export interface CommentListProps {
  isLoading: boolean;
  comments: CommentsCollection;
  onReply: (comment: CommentWithUser) => void;
  onSeeReplies: (replies: CommentWithUser[]) => void;
}
