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
  Text,
} from "@chakra-ui/react";
import React from "react";

import { HelperText } from "#/core/components/helper-text/helper-text";
import { CreateAccountPasswordModalProps } from "#/create-account-password/components/types";

export function CreateAccountPasswordModal({
  isOpen,
  onClose,
  isValid,
  isLoading,
  onSubmit,
  errors,
  values,
  onChange,
}: CreateAccountPasswordModalProps) {
  const isSubmitDisabled = !isValid || isLoading;

  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose} closeOnOverlayClick={!isLoading} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create password</ModalHeader>
        <ModalCloseButton disabled={isLoading} />
        <ModalBody pb="6">
          <Text mb="6">Welcome, to use the app you first need to create a password.</Text>
          <FormControl isInvalid={!!errors.password}>
            <Input
              name="name"
              type="password"
              placeholder="Password"
              variant="filled"
              focusBorderColor="animestream.500"
              size="lg"
              maxLength={8}
              value={values.password}
              onChange={onChange("password")}
            />
            <HelperText isError={!!errors.password}>
              {errors.password ?? "A password that is easy to remember and that is not so easy to discover."}
            </HelperText>
          </FormControl>
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
