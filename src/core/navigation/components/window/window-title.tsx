import { Box, Flex, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";

import { Settings } from "#/core/native/settings";

export function WindowTitle() {
  const windowTitleBGColor = useColorModeValue("background.900", "background.500");

  function onClose() {
    Settings.close();
  }

  function onMaximize() {
    if (Settings.isMaximized()) {
      return Settings.unmaximize();
    }
    return Settings.maximize();
  }

  function onMinimize() {
    Settings.minimize();
  }

  return (
    <Flex
      borderTopLeftRadius="lg"
      borderTopRightRadius="lg"
      h="40px"
      bgColor={windowTitleBGColor}
      justifyContent="center"
      alignItems="center"
      pos="relative"
      css={{
        "-webkit-app-region": "drag",
      }}
    >
      <Text fontWeight="semibold">Animestream</Text>
      <Stack
        direction="row"
        spacing="3"
        pr="5"
        right="0"
        pos="absolute"
        css={{
          "-webkit-app-region": "no-drag",
        }}
      >
        <Box
          w="14px"
          h="14px"
          borderRadius="100%"
          bgColor="#31c650"
          _hover={{ cursor: "pointer", bgColor: "#187024" }}
          onClick={onMinimize}
        />
        <Box
          w="14px"
          h="14px"
          borderRadius="100%"
          bgColor="yellow.500"
          _hover={{ cursor: "pointer", bgColor: "yellow.600" }}
          onClick={onMaximize}
        />
        <Box
          w="14px"
          h="14px"
          borderRadius="100%"
          bgColor="red.500"
          _hover={{ cursor: "pointer", bgColor: "red.600" }}
          onClick={onClose}
        />
      </Stack>
    </Flex>
  );
}
