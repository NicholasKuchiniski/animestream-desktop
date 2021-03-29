import { electron } from "#/native/electron";

const window = electron.remote.getCurrentWindow();

class SetttingsClass {
  public close() {
    return window.close();
  }

  public minimize() {
    return window.minimize();
  }

  public maximize() {
    return window.maximize();
  }

  public unmaximize() {
    return window.unmaximize();
  }

  public isMaximized() {
    return window.isMaximized();
  }
}

export const Settings = new SetttingsClass();
