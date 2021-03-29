import { SearchIcon } from "@chakra-ui/icons";
import { Box, Input, InputGroup, InputRightElement, Stack } from "@chakra-ui/react";
import React, { ChangeEvent, KeyboardEvent, useState } from "react";

import { NavbarAvatarContainer as NavbarAvatar } from "#/navigation/components/navbar-avatar/navbar-avatar.container";
import { NavbarProps } from "#/navigation/components/navbar/types";

export function Navbar({ onSearch }: NavbarProps) {
  const [name, setName] = useState("");

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  function handleKeyUp(event: KeyboardEvent<HTMLInputElement>) {
    switch (event.key) {
      case "Enter":
        onSearch(name);
        break;
      default:
        break;
    }
  }

  return (
    <Box w="100vw" h="80px" p="4">
      <Stack direction="row" alignItems="center">
        <Stack direction="row" alignItems="center">
          <NavbarAvatar />
        </Stack>
        <Box flex="1" mr="4">
          <InputGroup size="lg">
            <Input
              name="search"
              type="text"
              placeholder="Search..."
              variant="filled"
              focusBorderColor="animestream.500"
              value={name}
              onChange={handleChange}
              onKeyUp={handleKeyUp}
            />
            <InputRightElement>
              <SearchIcon />
            </InputRightElement>
          </InputGroup>
        </Box>
      </Stack>
    </Box>
  );
}
