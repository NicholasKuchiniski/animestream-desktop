import { action } from "typesafe-actions";

export function simpleAction<P>(type: string) {
  return (payload?: P) => action<string, P | undefined>(type, payload);
}
