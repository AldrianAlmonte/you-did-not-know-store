import StoreContext from "./storeContex";
import { useState } from 'react';

const GlobalStoreProvider = (props) => {
    const[cart, setCart] = useState([]);
    const[user, setUser] = useState({name: "admin", id: 45});

    const addProductToCart = (prod) => {
        console.log("add prod", prod);

        let copy = [...cart];
        copy.push(prod);
        setCart(copy);
    };

    const removeProductFromCart  = (prod) => {
        console.log("remove prod", prod);
    };

    return(
        <StoreContext.Provider value={{
            cart: cart,
            user: user
        }}>
            {props.children}
        </StoreContext.Provider>
    )
};

export default GlobalStoreProvider;