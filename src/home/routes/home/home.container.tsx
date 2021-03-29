import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ApplicationState } from "#/core/store/store";
import { Home } from "#/home/routes/home/home";
import { getHome } from "#/home/store/actions";
import { HomeState } from "#/home/store/types";

export function HomeRoute() {
  const dispatch = useDispatch();
  const { isLoading, episodes } = useSelector<ApplicationState, HomeState>((state) => state.home);

  useEffect(() => {
    dispatch(getHome());
  }, []);

  return <Home isLoading={isLoading} episodes={episodes} />;
}
