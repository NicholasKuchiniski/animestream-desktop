import { fork } from "redux-saga/effects";

import { getEpisodeFlow } from "#/episodes/episode/store/flows/get-episode-flow";
import { onEpisodeProgressUpdateWatcher } from "#/episodes/episode/store/flows/on-episode-progress-update-flow";

export function* episodeSagas() {
  yield fork(getEpisodeFlow);
  yield fork(onEpisodeProgressUpdateWatcher);
}
