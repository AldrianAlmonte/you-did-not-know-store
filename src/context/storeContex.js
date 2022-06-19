import { createContext } from "react";

/** Context: describe global data
 * will describe the data structure
 * PROMISE that you will be able to store data
 * WILL NOT HOLD IMPLEMENTATIION
 */

let StoreContext = createContext({
  cart: [],
  user: {},

  addProdToCart: () => {},
  removeProdFromCart: () => {},
});

export default StoreContext;
