import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
} from "@chakra-ui/react";
import React from "react";

import { CommentCard } from "#/comments/components/comment-card/comment-card";
import { CommentInput } from "#/comments/components/comment-input/comment-input";
import { CommentReplyModalProps } from "#/comments/components/comment-reply-modal/types";

export function CommentReplyModal({
  comment,
  isOpen,
  isLoading,
  isValid,
  values,
  errors,
  onChange,
  onSubmit,
  onClose,
}: CommentReplyModalProps) {
  const isSubmitDisabled = !isValid || isLoading;

  return (
    <Modal
      isCentered
      isOpen={isOpen}
      onClose={onClose}
      closeOnOverlayClick={!isLoading}
      size="xl"
      scrollBehavior="inside"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Replying to</ModalHeader>
        <ModalCloseButton disabled={isLoading} />
        <ModalBody pb="6">
          <Stack spacing="6">
            <CommentCard comment={comment} noReply />
            <CommentInput
              isLoading={false}
              isValid={isValid}
              values={values}
              errors={errors}
              onChange={onChange}
              onSubmit={onSubmit}
              disabled={isLoading}
            />
          </Stack>
        </ModalBody>
        <ModalFooter>
          <Button
            colorScheme="animestream"
            isLoading={isLoading}
            disabled={isSubmitDisabled}
            onClick={() => onSubmit()}
          >
            Reply
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
