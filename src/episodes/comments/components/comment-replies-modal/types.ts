import { CommentWithUser } from "#/core/entities/comment-with-user";

export interface CommentRepliesModalProps {
  isOpen: boolean;
  replies: CommentWithUser[];
  onClose: () => void;
}
