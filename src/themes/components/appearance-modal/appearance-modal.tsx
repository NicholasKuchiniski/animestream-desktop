import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Text,
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Flex,
  Stack,
  Portal,
} from "@chakra-ui/react";
import React from "react";

import { AppearanceModalProps } from "#/themes/components/appearance-modal/types";
import { ThemeBackgrounds, ThemeColors } from "#/themes/store/types";

const colorsMapper = new Map<ThemeColors, string>([
  [ThemeColors.ChocolateWeb, "Chocolate Web"],
  [ThemeColors.ScreaminGreen, "Screamin Green"],
  [ThemeColors.Crimson, "Crimson"],
  [ThemeColors.PersianBlue, "Persian Blue"],
  [ThemeColors.MaximumYellowRed, "Maximum Yellow Red"],
  [ThemeColors.PurpleDark, "Purple"],
]);

const backgroundMapper = new Map<ThemeBackgrounds, string>([
  [ThemeBackgrounds.Light, "Light"],
  [ThemeBackgrounds.Dark, "Dark"],
]);

export function AppearanceModal({
  isOpen,
  color,
  background,
  onColorSelect,
  onBackgroundSelect,
  onClose,
}: AppearanceModalProps) {
  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose} size="lg">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Appearance</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb="6">
          <Text mb="6">You can customize your experience by selecting one of the colors below</Text>
          <Stack spacing="6">
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />} w="100%">
                <Flex alignItems="center">
                  <Box w="14px" h="14px" borderRadius="100%" bgColor={`${color}.500`} mr="3" />
                  {colorsMapper.get(color)}
                </Flex>
              </MenuButton>
              <Portal>
                <MenuList w="225%" zIndex="9999">
                  <MenuItem onClick={() => onColorSelect(ThemeColors.ChocolateWeb)}>
                    <Box w="14px" h="14px" borderRadius="100%" bgColor="ChocolateWeb.500" mr="3" />
                    {colorsMapper.get(ThemeColors.ChocolateWeb)}
                  </MenuItem>
                  <MenuItem onClick={() => onColorSelect(ThemeColors.ScreaminGreen)}>
                    <Box w="14px" h="14px" borderRadius="100%" bgColor="ScreaminGreen.500" mr="3" />
                    {colorsMapper.get(ThemeColors.ScreaminGreen)}
                  </MenuItem>
                  <MenuItem onClick={() => onColorSelect(ThemeColors.Crimson)}>
                    <Box w="14px" h="14px" borderRadius="100%" bgColor="Crimson.500" mr="3" />
                    {colorsMapper.get(ThemeColors.Crimson)}
                  </MenuItem>
                  <MenuItem onClick={() => onColorSelect(ThemeColors.PersianBlue)}>
                    <Box w="14px" h="14px" borderRadius="100%" bgColor="PersianBlue.500" mr="3" />
                    {colorsMapper.get(ThemeColors.PersianBlue)}
                  </MenuItem>
                  <MenuItem onClick={() => onColorSelect(ThemeColors.MaximumYellowRed)}>
                    <Box w="14px" h="14px" borderRadius="100%" bgColor="MaximumYellowRed.500" mr="3" />
                    {colorsMapper.get(ThemeColors.MaximumYellowRed)}
                  </MenuItem>
                  <MenuItem onClick={() => onColorSelect(ThemeColors.PurpleDark)}>
                    <Box w="14px" h="14px" borderRadius="100%" bgColor="PurpleDark.500" mr="3" />
                    {colorsMapper.get(ThemeColors.PurpleDark)}
                  </MenuItem>
                </MenuList>
              </Portal>
            </Menu>
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />} w="100%">
                <Flex alignItems="center">
                  <Box w="14px" h="14px" borderRadius="100%" bgColor="background.500" mr="3" />
                  {backgroundMapper.get(background)}
                </Flex>
              </MenuButton>
              <Portal>
                <MenuList w="225%" zIndex="9999">
                  <MenuItem onClick={() => onBackgroundSelect(ThemeBackgrounds.Dark)}>
                    <Box w="14px" h="14px" borderRadius="100%" bgColor="backgroundDark.500" mr="3" />
                    {backgroundMapper.get(ThemeBackgrounds.Dark)}
                  </MenuItem>
                  <MenuItem onClick={() => onBackgroundSelect(ThemeBackgrounds.Light)}>
                    <Box w="14px" h="14px" borderRadius="100%" bgColor="backgroundLight.500" mr="3" />
                    {backgroundMapper.get(ThemeBackgrounds.Light)}
                  </MenuItem>
                </MenuList>
              </Portal>
            </Menu>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
