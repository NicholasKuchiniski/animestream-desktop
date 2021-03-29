import { LinkIcon } from "@chakra-ui/icons";
import {
  Stack,
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  Badge,
  Box,
  Spinner,
} from "@chakra-ui/react";
import React, { KeyboardEvent } from "react";

import { HelperText } from "#/core/components/helper-text/helper-text";
import { ImageUpload } from "#/core/components/image-upload/image-upload";
import { CommentInputProps } from "#/episodes/comments/components/comment-input/types";

export function CommentInput({ onChange, values, errors, onSubmit, isLoading, disabled = false }: CommentInputProps) {
  function onKeyPress(event: KeyboardEvent<HTMLInputElement>, clearInput: () => void) {
    if (event.key === "Enter" && !isLoading) {
      onSubmit();
      clearInput();
    }
  }

  return (
    <Stack spacing="6" pb="0">
      <FormControl isInvalid={!!errors.content}>
        <ImageUpload onChange={onChange("image")}>
          {({ onUploadClick, fileObjectURL, fileName, clear }) => {
            return (
              <>
                {fileObjectURL && (
                  <Box display="flex" alignItems="center" mb="3">
                    <Box
                      bgColor="whiteAlpha.50"
                      bgImage={`url('${fileObjectURL}')`}
                      h="6"
                      w="6"
                      bgSize="cover"
                      bgPos="center"
                      borderRadius="md"
                      boxShadow="base"
                      mr="3"
                    />
                    <Badge borderRadius="md" px="2" mr="3" display="flex" overflow="hidden">
                      {fileName}
                    </Badge>
                  </Box>
                )}
                <InputGroup size="lg">
                  <Input
                    name="content"
                    type="text"
                    placeholder="Comment"
                    variant="filled"
                    focusBorderColor="animestream.500"
                    size="lg"
                    rows={1}
                    value={values.content}
                    onChange={onChange("content")}
                    onKeyPress={(event) => onKeyPress(event, clear)}
                    disabled={disabled || isLoading}
                  />
                  <InputRightElement>
                    {isLoading ? (
                      <Spinner color="animestream.500" size="sm" />
                    ) : (
                      <IconButton variant="ghost" aria-label="upload-image" onClick={onUploadClick} disabled={disabled}>
                        <LinkIcon />
                      </IconButton>
                    )}
                  </InputRightElement>
                </InputGroup>
              </>
            );
          }}
        </ImageUpload>
        <HelperText isError={!!errors.content}>{errors.content ?? "Leave a comment about the episode."}</HelperText>
      </FormControl>
    </Stack>
  );
}
