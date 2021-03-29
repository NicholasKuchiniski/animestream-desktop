import { UndefinableProps } from "tsdef";

export type ListenerEventHandler = (instance: Plyr) => void;

export type Listeners = UndefinableProps<
  {
    [key in keyof Plyr.PlyrEventMap]: ListenerEventHandler;
  }
>;

export interface VideoProps {
  poster: string;
  source: string;
  listeners?: Listeners;
}
