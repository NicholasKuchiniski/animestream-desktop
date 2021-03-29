import { ConnectedRouter } from "connected-react-router";
import React from "react";
import { Switch, Redirect, RouterProps, Route } from "react-router-dom";

import { AuthorizationRoute } from "#/authorization/routes/authorization/authorization.container";
import { CreateAccountPasswordModalContainer as CreateAccountPasswordModal } from "#/create-account-password/components/create-account-password-modal.container";
import { EpisodeRoute } from "#/episode/routes/episode/episode.container";
import { HomeRoute } from "#/home/routes/home/home.container";
import { ProtectedRoute } from "#/navigation/router/protected-route";
import { NewEpisodeModalContainer as NewEpisodeModal } from "#/new-episode/components/new-episode-modal/new-episode-modal.container";
import { NewSerieModalContainer as NewSerieModal } from "#/new-serie/components/new-serie-modal/new-serie-modal.container";
import { SearchRoute } from "#/search/routes/search/search.container";
import { SerieRoute } from "#/serie/routes/serie/serie.container";
import { AppearanceModalContainer as AppearanceModal } from "#/themes/components/appearance-modal/appearance-modal.container";

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
