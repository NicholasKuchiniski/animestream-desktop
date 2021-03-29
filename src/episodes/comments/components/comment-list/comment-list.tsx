import { Center, Spinner, Stack } from "@chakra-ui/react";
import React from "react";

import { CommentCard } from "#/episodes/comments/components/comment-card/comment-card";
import { CommentListProps } from "#/episodes/comments/components/comment-list/types";
import { CommentWithReplies } from "#/core/entities/comment-with-replies";
import { CommentWithUser } from "#/core/entities/comment-with-user";

export function CommentList({ isLoading, comments, onReply, onSeeReplies }: CommentListProps) {
  function renderComment({ comment, user, replies }: CommentWithReplies) {
    const commentWithUser = new CommentWithUser();
    commentWithUser.comment = comment;
    commentWithUser.user = user;

    return <CommentCard comment={commentWithUser} replies={replies} onReply={onReply} onSeeReplies={onSeeReplies} />;
  }

  if (isLoading) {
    return (
      <Center mt="6">
        <Spinner color="animestream.500" size="sm" />
      </Center>
    );
  }
  return (
    <Stack spacing="6" mt="6" maxHeight="410px" overflowX="auto" pr="1" pb="1">
      {comments.map(renderComment)}
    </Stack>
  );
}
