import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

import { ApplicationState } from "#/core/store/store";
import { Serie } from "#/series/serie/routes/serie/serie";
import { SerieParams } from "#/series/serie/routes/serie/types";
import { getSerie } from "#/series/serie/store/actions";
import { SerieState } from "#/series/serie/store/types";

export function SerieRoute() {
  const dispatch = useDispatch();
  const { serieId } = useParams<SerieParams>();

  const { isLoading, serie, episodes } = useSelector<ApplicationState, SerieState>((state) => state.serie);

  useEffect(() => {
    dispatch(getSerie({ serieId }));
  }, []);

  return <Serie isLoading={isLoading} serie={serie} episodes={episodes} />;
}
