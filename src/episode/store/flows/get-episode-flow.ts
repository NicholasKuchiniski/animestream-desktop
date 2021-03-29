import { take, call, put } from "redux-saga/effects";

import { setApplicationError } from "#/application/store/actions";
import { findEpisodeComments } from "#/comments/store/actions";
import { EpisodesCollection } from "#/core/collections/episodes-collection";
import { Episode } from "#/core/entities/episode";
import { Progress } from "#/core/entities/progress";
import { HttpClientError } from "#/core/http-client/http-client-error";
import { EpisodesService } from "#/core/services/episodes-service";
import { ProgressService } from "#/core/services/progress-service";
import { getEpisodeFailure, getEpisodeSuccess } from "#/episode/store/actions";
import { GetEpisodeAction, EpisodeActionTypes } from "#/episode/store/types";

export function* getEpisodeFlow() {
  while (true) {
    const action: GetEpisodeAction = yield take(EpisodeActionTypes.GET_EPISODE_REQUEST);

    try {
      yield put(setApplicationError({ error: HttpClientError.empty() }));

      const episode: Episode = yield call(EpisodesService.find, action.payload.episodeId);
      const episodes: EpisodesCollection = yield call(EpisodesService.findBySerie, episode.serieId);
      let progress: Progress = yield call(ProgressService.find, episode.id);

      if (progress.isEmpty()) {
        progress = yield call(ProgressService.create, episode.id, 0);
      }

      yield put(getEpisodeSuccess({ episode, episodes, progress }));
      yield put(findEpisodeComments());
    } catch (error) {
      yield put(getEpisodeFailure());
      yield put(setApplicationError({ error }));
    }
  }
}
