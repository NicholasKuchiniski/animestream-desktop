import { MenuGroup, MenuItem } from "@chakra-ui/react";
import React from "react";

import { NavbarDefaultOptionsProps } from "#/navigation/components/navbar-avatar/types";

export function NavbarDefaultOptions({ onAppearance, onHome, onExit }: NavbarDefaultOptionsProps) {
  return (
    <MenuGroup title="Options">
      <MenuItem onClick={onAppearance}>Appearance</MenuItem>
      <MenuItem onClick={onHome}>Home</MenuItem>
      <MenuItem onClick={onExit}>Exit</MenuItem>
    </MenuGroup>
  );
}
