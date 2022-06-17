import { createContext } from "react";

/** Context: describe global data
 * will describe the data structure
 * promise
 * WILL NOT HOLD IMPLEMENTATIION
 */

let StoreContext = createContext({
    cart: [],
    user: {},

    addProdToCart: () => {},
    removeProdFromCart: () => {},
});

export default StoreContext;