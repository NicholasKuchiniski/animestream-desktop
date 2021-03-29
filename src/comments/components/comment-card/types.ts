import { CommentWithUser } from "#/comments/entities/comment-with-user";

export interface CommentCardProps {
  comment: CommentWithUser;
  replies?: CommentWithUser[];
  onReply?: (comment: CommentWithUser) => void;
  onSeeReplies?: (replies: CommentWithUser[]) => void;
  noReply?: boolean;
}
