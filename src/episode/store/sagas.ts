import { fork } from "redux-saga/effects";

import { getEpisodeFlow } from "#/episode/store/flows/get-episode-flow";
import { onEpisodeProgressUpdateWatcher } from "#/episode/store/flows/on-episode-progress-update-flow";

export function* episodeSagas() {
  yield fork(getEpisodeFlow);
  yield fork(onEpisodeProgressUpdateWatcher);
}
