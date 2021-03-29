import { LinkIcon } from "@chakra-ui/icons";
import { Badge, Box, Button } from "@chakra-ui/react";
import { get } from "lodash";
import React, { ChangeEvent, useRef, useState } from "react";

import { ImageUploadProps } from "#/core/components/image-upload/types";
import { fileToBase64 } from "#/core/utils/file-to-base-64";

export function ImageUpload({ onChange, placeholder = "", children }: ImageUploadProps) {
  const [fileObjectURL, setFileObjectURL] = useState<string>("");
  const [fileName, setFileName] = useState<string>("");

  const fileRef = useRef<HTMLInputElement>(null);

  function onUploadClick() {
    fileRef.current?.click();
  }

  async function onUpload(event: ChangeEvent<HTMLInputElement>) {
    const file: File = get(event, "target.files[0]");
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      const base64 = await fileToBase64(file);

      if (base64) {
        setFileName(file.name);
        setFileObjectURL(objectUrl);
        onChange(base64);
      }
    }
  }

  function clear() {
    setFileObjectURL("");
    setFileName("");
  }

  const element = <input ref={fileRef} onChange={onUpload} name="image" type="file" accept="image/*" required hidden />;

  if (children) {
    return (
      <>
        {children({ onUploadClick, fileObjectURL, fileName, clear })}
        {element}
      </>
    );
  }

  return (
    <>
      <Button rightIcon={<LinkIcon />} onClick={onUploadClick}>
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
            {fileName}
          </Badge>
        </Box>
      )}
      {element}
    </>
  );
}
