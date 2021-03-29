import {
  Button,
  FormControl,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";

import { HelperText } from "#/core/components/helper-text/helper-text";
import { ImageUpload } from "#/core/components/image-upload/image-upload";
import { InputArray } from "#/core/components/input-array/input-array";
import { capitalize } from "#/core/utils/capitalize";
import { NewSerieModalProps } from "#/new-serie/components/new-serie-modal/types";

export function NewSerieModal({
  isOpen,
  onClose,
  values,
  errors,
  isValid,
  isLoading,
  onChange,
  onSubmit,
  setFieldValue,
}: NewSerieModalProps) {
  const isSubmitDisabled = !isValid || isLoading;

  function getGenresErrors() {
    if (Array.isArray(errors.genres)) {
      return errors.genres.join(",");
    }

    if (errors.genres) {
      return errors.genres;
    }

    return "Content genres that define the serie.";
  }

  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose} closeOnOverlayClick={!isLoading} size="2xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>New serie</ModalHeader>
        <ModalCloseButton disabled={isLoading} />
        <ModalBody pb="6">
          <Text mb="6">Fill in the information below to add a new serie.</Text>
          <Stack spacing="6">
            <FormControl isInvalid={!!errors.name}>
              <Input
                name="name"
                type="text"
                placeholder="Name"
                variant="filled"
                focusBorderColor="animestream.500"
                size="lg"
                value={values.name}
                onChange={(event) => onChange("name")(capitalize(event.target.value))}
              />
              <HelperText isError={!!errors.name}>
                {errors.name ?? "The original name of the serie, in its original language."}
              </HelperText>
            </FormControl>
            <FormControl isInvalid={!!errors.genres}>
              <InputArray placeholder="Genres" onChange={(genres) => setFieldValue("genres", genres)} />
              <HelperText isError={!!errors.genres}>{getGenresErrors()}</HelperText>
            </FormControl>
            <FormControl isInvalid={!!errors.description}>
              <Textarea
                name="description"
                type="description"
                placeholder="Description"
                variant="filled"
                focusBorderColor="animestream.500"
                size="lg"
                value={values.description}
                onChange={onChange("description")}
              />
              <HelperText isError={!!errors.description}>
                {errors.description ?? "A synopsis about the content of the serie."}
              </HelperText>
            </FormControl>
            <FormControl isInvalid={!!errors.image}>
              <ImageUpload onChange={onChange("image")} placeholder="Upload" />
              <HelperText isError={!!errors.image}>
                {errors.image ?? "A high resolution image from the serie."}
              </HelperText>
            </FormControl>
          </Stack>
        </ModalBody>
        <ModalFooter>
          <Button
            colorScheme="animestream"
            isDisabled={isSubmitDisabled}
            onClick={() => onSubmit()}
            isLoading={isLoading}
          >
            Create
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
