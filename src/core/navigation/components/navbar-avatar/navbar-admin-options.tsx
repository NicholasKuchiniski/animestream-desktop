import { MenuGroup, MenuItem } from "@chakra-ui/react";
import React from "react";

import { NavbarAdminOptionsProps } from "#/core/navigation/components/navbar-avatar/types";

export function NavbarAdminOptions({ authorization, onNewSerie, onNewEpisode }: NavbarAdminOptionsProps) {
  if (!authorization.isAdmin()) {
    return null;
  }

  return (
    <MenuGroup title="Admin">
      <MenuItem onClick={onNewSerie}>Create serie</MenuItem>
      <MenuItem onClick={onNewEpisode}>Create episode</MenuItem>
    </MenuGroup>
  );
}
