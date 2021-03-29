import { Listeners } from "#/core/components/video/types";

export function applyListenerClosure(listeners: Listeners, plyr: Plyr) {
  return (listener: string) => {
    const listenerCallback = listeners[listener as keyof Plyr.PlyrEventMap];

    if (listenerCallback) {
      plyr.on(listener as keyof Plyr.PlyrEventMap, () => {
        listenerCallback(plyr);
      });
    }
  };
}
