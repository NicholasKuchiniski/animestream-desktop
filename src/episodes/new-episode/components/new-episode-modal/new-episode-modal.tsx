import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Stack,
  FormControl,
  Input,
  ModalFooter,
  Button,
  Text,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal,
} from "@chakra-ui/react";
import React, { ChangeEvent } from "react";

import { HelperText } from "#/core/components/helper-text/helper-text";
import { VideoUpload } from "#/core/components/video-upload/video-upload";
import { Serie } from "#/core/entities/serie";
import { capitalize } from "#/core/utils/capitalize";
import { NewEpisodeModalProps } from "#/episodes/new-episode/components/new-episode-modal/types";

export function NewEpisodeModal({
  isValid,
  isOpen,
  isLoading,
  onClose,
  values,
  errors,
  series,
  onChange,
  onSearch,
  onUpload,
  onSubmit,
}: NewEpisodeModalProps) {
  const isCloseDisabled = isLoading;
  const isSubmitDisabled = !isValid || isLoading;

  function internalOnSearch(event: ChangeEvent<HTMLInputElement>) {
    event.target.value = capitalize(event.target.value);

    onChange("searchName")(event);
    onSearch(event.target.value);
  }

  function renderSerie(serie: Serie) {
    return <MenuItem onClick={() => onChange("serieId")(serie.id)}>{serie.name}</MenuItem>;
  }

  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose} size="2xl" closeOnOverlayClick={!isCloseDisabled}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>New episode</ModalHeader>
        <ModalCloseButton disabled={isCloseDisabled} />
        <ModalBody pb="6">
          <Text mb="6">Fill in the information below to add a new episode.</Text>
          <Stack spacing="6">
            <FormControl isInvalid={!!errors.searchName}>
              <Input
                name="searchName"
                type="text"
                placeholder="Name"
                variant="filled"
                focusBorderColor="animestream.500"
                size="lg"
                value={values.searchName}
                onChange={internalOnSearch}
              />
              <HelperText isError={!!errors.searchName}>
                {errors.searchName ?? "Search for the serie in which you want to add the episode."}
              </HelperText>
            </FormControl>
            <FormControl>
              <Menu>
                <MenuButton
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                  w="100%"
                  disabled={isLoading || series.isEmpty()}
                >
                  <Flex alignItems="center">{series.findById(values.serieId).name ?? "Select a serie"}</Flex>
                </MenuButton>
                <Portal>
                  <MenuList w="200%" zIndex="9999">
                    {series.map(renderSerie)}
                  </MenuList>
                </Portal>
              </Menu>
              <HelperText isError={!!errors.serieId}>
                {errors.serieId ?? "Select the serie in which you want to add the episode."}
              </HelperText>
            </FormControl>
            <FormControl>
              <Input
                name="name"
                type="text"
                placeholder="Name"
                variant="filled"
                focusBorderColor="animestream.400"
                size="lg"
                isDisabled={isLoading}
                value={values.name}
                onChange={(event) => onChange("name")(capitalize(event.target.value))}
                disabled={isLoading}
              />
              <HelperText isError={!!errors.name}>{errors.name ?? "The original name of the episode."}</HelperText>
            </FormControl>
            <FormControl>
              <Input
                name="description"
                type="text"
                placeholder="Description"
                variant="filled"
                focusBorderColor="animestream.400"
                size="lg"
                isDisabled={isLoading}
                value={values.description}
                onChange={(event) => onChange("description")(capitalize(event.target.value, true))}
                disabled={isLoading}
              />
              <HelperText isError={!!errors.description}>
                {errors.description ?? "A description of the content of the episode."}
              </HelperText>
            </FormControl>
            <FormControl>
              <Input
                name="number"
                type="number"
                placeholder="Number"
                variant="filled"
                focusBorderColor="animestream.400"
                size="lg"
                isDisabled={isLoading}
                value={values.number}
                onChange={onChange("number")}
                disabled={isLoading}
              />
              <HelperText isError={!!errors.number}>{errors.number ?? "The number of the episode."}</HelperText>
            </FormControl>
            <FormControl>
              <VideoUpload placeholder="Upload" onChange={onUpload} />
              <HelperText>A description of the content of the episode.</HelperText>
            </FormControl>
          </Stack>
        </ModalBody>
        <ModalFooter>
          <Button
            bgColor="white"
            color="black"
            isDisabled={isSubmitDisabled}
            isLoading={isLoading}
            onClick={() => onSubmit()}
          >
            Create
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
