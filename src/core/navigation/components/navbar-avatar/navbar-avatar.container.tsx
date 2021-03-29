import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import { openModal } from "#/core/application/store/actions";
import { Authorization } from "#/core/entities/authorization";
import { User } from "#/core/entities/user";
import { NavbarAvatar } from "#/core/navigation/components/navbar-avatar/navbar-avatar";
import { ApplicationState } from "#/core/store/store";
import { clearAuthorization } from "#/users/authorization/store/actions";

export function NavbarAvatarContainer() {
  const user = useSelector<ApplicationState, User>((state) => state.authorization.currentAuthorization.user);
  const authorization = useSelector<ApplicationState, Authorization>(
    (state) => state.authorization.currentAuthorization,
  );

  const dispatch = useDispatch();
  const history = useHistory();

  function onHome() {
    history.push("/");
  }

  function onExit() {
    dispatch(clearAuthorization());
    history.push("/authorization");
  }

  function onNewSerie() {
    dispatch(openModal({ modal: "new-serie" }));
  }

  function onNewEpisode() {
    dispatch(openModal({ modal: "new-episode" }));
  }

  function onAppearance() {
    dispatch(openModal({ modal: "appearance" }));
  }
  return (
    <NavbarAvatar
      user={user}
      authorization={authorization}
      onHome={onHome}
      onExit={onExit}
      onNewSerie={onNewSerie}
      onNewEpisode={onNewEpisode}
      onAppearance={onAppearance}
    />
  );
}
