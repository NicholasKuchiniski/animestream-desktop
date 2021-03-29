import { Avatar, Menu, MenuButton, MenuList } from "@chakra-ui/react";
import React from "react";

import { NavbarAdminOptions } from "#/core/navigation/components/navbar-avatar/navbar-admin-options";
import { NavbarDefaultOptions } from "#/core/navigation/components/navbar-avatar/navbar-default-options";
import { NavbarAvatarProps } from "#/core/navigation/components/navbar-avatar/types";

export function NavbarAvatar({
  user,
  authorization,
  onHome,
  onExit,
  onNewSerie,
  onNewEpisode,
  onAppearance,
}: NavbarAvatarProps) {
  return (
    <Menu size="lg">
      <MenuButton
        as={Avatar}
        name={user.name}
        src={user.avatar}
        size="md"
        mr="3"
        _hover={{
          cursor: "pointer",
        }}
      />
      <MenuList>
        <NavbarAdminOptions authorization={authorization} onNewSerie={onNewSerie} onNewEpisode={onNewEpisode} />
        <NavbarDefaultOptions onHome={onHome} onExit={onExit} onAppearance={onAppearance} />
      </MenuList>
    </Menu>
  );
}
