import { take, fork, cancel, delay, select, call, put } from "redux-saga/effects";

import { setApplicationError } from "#/application/store/actions";
import { Progress } from "#/core/entities/progress";
import { HttpClientError } from "#/core/http-client/http-client-error";
import { ProgressService } from "#/core/services/progress-service";
import { ApplicationState } from "#/core/store/store";
import { EpisodeActionTypes } from "#/episode/store/types";

function* onEpisodeProgressUpdateFlow() {
  try {
    while (true) {
      yield put(setApplicationError({ error: HttpClientError.empty() }));

      const progress: Progress = yield select((state: ApplicationState) => state.episode.progress);

      yield call(ProgressService.update, progress.episodeId, progress.duration);

      yield delay(15000);
    }
  } catch (error) {
    yield put(setApplicationError({ error }));
  }
}

export function* onEpisodeProgressUpdateWatcher() {
  while (yield take(EpisodeActionTypes.ON_EPISODE_PLAY)) {
    const task = yield fork(onEpisodeProgressUpdateFlow);

    yield take([EpisodeActionTypes.ON_EPISODE_PAUSE, EpisodeActionTypes.ON_EPISODE_END]);

    yield cancel(task);
  }
}
