import {
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  Button,
} from "@chakra-ui/react";
import React, { useRef } from "react";

import { ConfirmationAlertProps } from "#/core/components/confirmation-alert/types";

export function ConfirmationAlert({
  title,
  message,
  cancel,
  confirm,
  isOpen,
  onCancel,
  onConfirm,
}: ConfirmationAlertProps) {
  const confirmRef = useRef<any>();

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={confirmRef}
      onClose={onCancel}
      closeOnOverlayClick={false}
      isCentered
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            {title}
          </AlertDialogHeader>
          <AlertDialogBody>{message}</AlertDialogBody>
          <AlertDialogFooter>
            <Button onClick={onCancel}>{cancel}</Button>
            <Button colorScheme="animestream" onClick={onConfirm} ml={3} ref={confirmRef}>
              {confirm}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}
