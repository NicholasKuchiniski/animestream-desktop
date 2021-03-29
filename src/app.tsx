import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import "#/reactotron-config";
import { history, persistor, store } from "#/core/store/store";
import { Window } from "#/navigation/components/window/window";
import { Router } from "#/navigation/router/router";
import { ThemeProvider } from "#/themes/components/theme-provider/theme-provider";

function AppWithTheme() {
  return (
    <ThemeProvider>
      <Window>
        <Router history={history} />
      </Window>
    </ThemeProvider>
  );
}

export function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppWithTheme />
      </PersistGate>
    </Provider>
  );
}
