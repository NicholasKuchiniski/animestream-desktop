import { connectRouter, routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { persistStore, persistReducer, PersistConfig } from "redux-persist";
import { PersistPartial } from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";

import { applicationReducer } from "#/application/store/reducers";
import { authorizationReducer } from "#/authorization/store/reducers";
import { commentsReducer } from "#/comments/store/reducers";
import { rootSaga } from "#/core/store/root-saga";
import { createAccountPasswordReducer } from "#/create-account-password/store/reducers";
import { episodeReducer } from "#/episode/store/reducers";
import { homeReducer } from "#/home/store/reducers";
import { newEpisodeReducer } from "#/new-episode/store/reducers";
import { newSerieReducer } from "#/new-serie/store/reducers";
import { reactotron } from "#/reactotron-config";
import { searchReducer } from "#/search/store/reducers";
import { serieReducer } from "#/serie/store/reducers";
import { themeReducer } from "#/themes/store/reducers";

const persistConfig: PersistConfig<any> = {
  key: "animestream-v1",
  storage,
  whitelist: ["authorization", "theme"],
  version: 1,
};

const createRootReducer = (history: any) =>
  combineReducers({
    router: connectRouter(history),
    application: applicationReducer,
    authorization: authorizationReducer,
    home: homeReducer,
    episode: episodeReducer,
    search: searchReducer,
    serie: serieReducer,
    newSerie: newSerieReducer,
    newEpisode: newEpisodeReducer,
    theme: themeReducer,
    createAccountPassword: createAccountPasswordReducer,
    comments: commentsReducer,
  });

export const history = createBrowserHistory();

const persistedReducer = persistReducer(persistConfig, createRootReducer(history));
const sagaMiddleware = createSagaMiddleware();

export const store = createStore<ApplicationState & PersistPartial, any, any, any>(
  persistedReducer,
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  compose(applyMiddleware(sagaMiddleware, routerMiddleware(history)), reactotron.createEnhancer!()),
);
sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);

export type ApplicationState = ReturnType<ReturnType<typeof createRootReducer>>;
