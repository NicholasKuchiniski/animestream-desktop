import { Flex, Avatar, Box, Text, Badge, Button, Stack, Image } from "@chakra-ui/react";
import { noop } from "lodash";
import moment from "moment";
import React from "react";

import { CommentCardProps } from "#/comments/components/comment-card/types";

export function CommentCard({
  comment,
  replies = [],
  onReply = noop,
  onSeeReplies = noop,
  noReply = false,
}: CommentCardProps) {
  function renderReplies() {
    if (noReply) {
      return null;
    }

    return (
      <Stack direction="row" spacing="1" mt="2" alignItems="center">
        <Button size="xs" onClick={() => onReply(comment)}>
          Reply
        </Button>
        {replies.length === 0 ? null : (
          <Button size="xs" onClick={() => onSeeReplies(replies)}>{`See replies (${replies.length})`}</Button>
        )}
      </Stack>
    );
  }

  function renderImage() {
    if (!comment.comment.image) {
      return null;
    }

    return <Image src={comment.comment.image} borderRadius="md" boxShadow="base" mt="2" objectFit="cover" />;
  }

  return (
    <Flex>
      <Avatar src={comment.user.avatar} size="sm" />
      <Box ml="3" flex="1">
        <Flex alignItems="center">
          <Text fontWeight="bold" mr="1">
            {comment.user.firstName}
          </Text>
          <Badge borderRadius="md" px="2" display="flex" overflow="hidden">
            {moment(comment.comment.createdAt).fromNow()}
          </Badge>
        </Flex>
        <Text fontSize="md">{comment.comment.content}</Text>
        {renderImage()}
        {renderReplies()}
      </Box>
    </Flex>
  );
}
