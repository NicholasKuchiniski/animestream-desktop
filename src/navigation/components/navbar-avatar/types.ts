import { Authorization } from "#/authorization/entities/authorization";
import { User } from "#/core/entities/user";

export interface NavbarAvatarProps extends NavbarDefaultOptionsProps, NavbarAdminOptionsProps {
  user: User;
  authorization: Authorization;
}

export interface NavbarDefaultOptionsProps {
  onAppearance: () => void;
  onHome: () => void;
  onExit: () => void;
}

export interface NavbarAdminOptionsProps {
  authorization: Authorization;
  onNewSerie: () => void;
  onNewEpisode: () => void;
}
