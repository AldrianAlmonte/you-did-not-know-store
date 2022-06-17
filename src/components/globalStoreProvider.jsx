import StoreContext from "./storeContext";
import { useState } from "react";

const GlobalStoreProvider = (props) => {
    const {cart, setCart} = useState([])
    const {user, setUser} = useState({name: Admin})
}

const addProdToCart = (prod) => {
    

    /* for loop to travel cart,
    get every item
    compare the item _id with prod _id
    if they match, increase the quantity on item
    */

    let copy = [...carty];
    for(let i=0; i<copy.length; i++) {
        let item = copy[i];

            if(item.id === prod.id) {
                //item.quantity = item.quantity + prod.quantity;
                found = true;
                item.quantity += prod.quantity;
            }
    }

    if (!found) {
        copy.push(prod);
    }

    setCart(copy);
    
    
    const removeProdFromCart = (_id) => {
    console.log("Global remove prod")
}

 return (
     <StoreContext.GlobalStoreProvider
        value ={{
            cart: cart,
            user: user,
            addProdToCart: addProdToCart,
            removeProdFromCart: removeProdFromCart,
        }}
    >
        {props.children}
    </StoreContext.GlobalStoreProvider>
 );
};



export default GlobalStoreProvider;