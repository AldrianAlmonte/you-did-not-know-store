import "./cart.css"
import { useContext } from "react";
import StoreContext from "../context/storeContext";
import ProductInCart from "./ProductInCart";


const Cart = () => {
    let cart = useContext(StoreContext).cart;

    const getNumItem = () => {
        
    }



    return(
        <div className="cart">
            <h6>These are the Products on your cart</h6>
            <h3>Order</h3>
            <hr />

            <ul>
                {cart.map((prod) => (
                    <li key={prod.id}>
                        {/* {prod.title} - ${prod.price} - {prod.quantity} */}
                        {/* <ProductInCart key={prod._id} data={prod}></ProductInCart> */}
                    </li>
                ))}
    
            </ul>
        </div>
    )
}

export default Cart;