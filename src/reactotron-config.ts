/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable import/no-extraneous-dependencies */
import Reactotron from "reactotron-react-js";
import { reactotronRedux } from "reactotron-redux";

export const reactotron = Reactotron.configure().use(reactotronRedux()).connect(); // let's connect!

console.log = reactotron.log!;
console.warn = reactotron.warn!;
console.error = reactotron.error!;
console.debug = reactotron.debug!;
