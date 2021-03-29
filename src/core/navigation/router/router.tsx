import { ConnectedRouter } from "connected-react-router";
import React from "react";
import { Switch, Redirect, RouterProps, Route } from "react-router-dom";

import { ProtectedRoute } from "#/core/navigation/router/protected-route";
import { AppearanceModalContainer as AppearanceModal } from "#/core/themes/components/appearance-modal/appearance-modal.container";
import { EpisodeRoute } from "#/episodes/episode/routes/episode/episode.container";
import { NewEpisodeModalContainer as NewEpisodeModal } from "#/episodes/new-episode/components/new-episode-modal/new-episode-modal.container";
import { HomeRoute } from "#/series/home/routes/home/home.container";
import { NewSerieModalContainer as NewSerieModal } from "#/series/new-serie/components/new-serie-modal/new-serie-modal.container";
import { SearchRoute } from "#/series/search/routes/search/search.container";
import { SerieRoute } from "#/series/serie/routes/serie/serie.container";
import { AuthorizationRoute } from "#/users/authorization/routes/authorization/authorization.container";
import { CreateAccountPasswordModalContainer as CreateAccountPasswordModal } from "#/users/create-account-password/components/create-account-password-modal.container";

export function Router({ history }: RouterProps) {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/authorization" component={AuthorizationRoute} />
        <ProtectedRoute exact path="/" component={HomeRoute} />
        <ProtectedRoute exact path="/episode/:episodeId" component={EpisodeRoute} />
        <ProtectedRoute exact path="/search" component={SearchRoute} />
        <ProtectedRoute exact path="/serie/:serieId" component={SerieRoute} />
        <Redirect to="/" />
      </Switch>
      <NewSerieModal />
      <NewEpisodeModal />
      <AppearanceModal />
      <CreateAccountPasswordModal />
    </ConnectedRouter>
  );
}
