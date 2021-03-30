import { LinkIcon } from "@chakra-ui/icons";
import { Badge, Box, Button, Text } from "@chakra-ui/react";
import { get } from "lodash";
import React, { ChangeEvent, useRef, useState } from "react";

import { VideoUploadProps } from "#/core/components/video-upload/types";
import { videoToFile } from "#/core/utils/video-to-file";

export function VideoUpload({ placeholder, isLoading = false, progress = 0, onChange }: VideoUploadProps) {
  const [fileObjectURL, setFileObjectURL] = useState<string>("");
  const [fileName, setFileName] = useState<string>("");

  const fileRef = useRef<HTMLInputElement>(null);

  function onUploadClick() {
    fileRef.current?.click();
  }

  async function onUpload(event: ChangeEvent<HTMLInputElement>) {
    const file: File = get(event, "target.files[0]");

    if (file) {
      setFileName(file.name);

      try {
        const { file: thumbnail, quality, duration, base64 } = await videoToFile(file);
        const thumbnailObjectUrl = URL.createObjectURL(thumbnail);

        setFileObjectURL(thumbnailObjectUrl);
        onChange({
          file,
          preview: base64,
          quality,
          duration,
        });
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    }
  }

  return (
    <>
      <Button
        rightIcon={<LinkIcon />}
        onClick={onUploadClick}
        isLoading={isLoading}
        loadingText={`Upload ${progress}%`}
      >
        {placeholder}
      </Button>
      {fileObjectURL && (
        <Box display="flex" alignItems="center" mt="3">
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
            <Text isTruncated>{fileName}</Text>
          </Badge>
        </Box>
      )}
      <input ref={fileRef} onChange={onUpload} name="video" type="file" accept="video/*" required hidden />
    </>
  );
}
