import { fork } from "redux-saga/effects";

import { newEpisodeFlow } from "#/new-episode/store/flows/new-episode-flow";
import { searchSerieFlow } from "#/new-episode/store/flows/search-serie-flow";
import { uploadVideoWatcher } from "#/new-episode/store/flows/upload- video-flow";

export function* newEpisodeSagas() {
  yield fork(searchSerieFlow);
  yield fork(uploadVideoWatcher);
  yield fork(newEpisodeFlow);
}
