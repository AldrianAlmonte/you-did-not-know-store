import StoreContext from "./storeContex";
import { useState } from 'react';


const GlobalStoreProvider = (props) => {
    const[cart, setCart] = useState([]);
    const[user, setUser] = useState({name: "admin", id: 45});


    const addProductToCart = (prod) => {
        console.log("add prod", prod);

        /* for loop to travel cart,
        get every item
        compare the item _id with prod _id
        if they match, increase the quantity on item
    */

    let copy = [...cart];
    let found = false;
    for (let i = 0; i < copy.length; i++) {
        let item = copy[i];
        
        if(item._id === prod._id) 
        {
            found = true;
            //item.quantity = item.quantity + prod.quantity;
            item.quantity += prod.quantity;
        }
    }

        if (!found) 
        {
        copy.push(prod);
        }

        setCart(copy);
    };

    const removeProdFromCart  = (_id) => {
        console.log("product removed",_id);



        let copy = [...cart];
        for ( let i=0; i < copy.length; i++) {
            if (copy[i]._id === _id){
                copy.splice(i,1)
                console.log("removed")
            };
        };
        setCart(copy);
    };

    return(
        <StoreContext.Provider value={{
            cart: cart,
            user: user,
            addProdToCart: addProductToCart,
            removeProdFromCart: removeProdFromCart,
        }}>
            {props.children}
        </StoreContext.Provider>
    )
};

export default GlobalStoreProvider;

