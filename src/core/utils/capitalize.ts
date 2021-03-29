import { capitalize as capitalizeWord } from "lodash";

export function capitalize(value: string, onlyFirstLetter = false) {
  if (onlyFirstLetter) {
    return capitalizeWord(value);
  }

  return value.split(" ").map(capitalizeWord).join(" ");
}
