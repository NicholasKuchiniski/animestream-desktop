import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Stack } from "@chakra-ui/react";
import React from "react";

import { CommentCard } from "#/episodes/comments/components/comment-card/comment-card";
import { CommentRepliesModalProps } from "#/episodes/comments/components/comment-replies-modal/types";
import { CommentWithUser } from "#/core/entities/comment-with-user";

export function CommentRepliesModal({ isOpen, replies, onClose }: CommentRepliesModalProps) {
  function renderComment({ comment, user }: CommentWithUser) {
    const commentWithUser = new CommentWithUser();
    commentWithUser.comment = comment;
    commentWithUser.user = user;

    return <CommentCard comment={commentWithUser} noReply />;
  }

  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose} size="xl" scrollBehavior="inside">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Replies</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb="6">
          <Stack spacing="6">{replies.map(renderComment)}</Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
