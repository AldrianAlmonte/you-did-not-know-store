import "./cart.css"
import { useContext } from "react";
import StoreContext from "../context/storeContex";
import ProductInCart from './productInCart';


const Cart = () => {
    let cart = useContext(StoreContext).cart;

    const getNumItem = () => {
        
    }



    return(
        <div className="cart">
            <h6>You have {cart.length} product!</h6>
            <h3>Ready to Order?</h3>
            <hr />

            <ul>
                {cart.map((prod) => (
                    <li key={prod.id}>
                        {prod.title} - ${prod.price} - {prod.quantity}
                        {/* <ProductInCart key={prod._id} data={prod}></ProductInCart> */}
                    </li>
                ))}
    
            </ul>
        </div>
    )
}

export default Cart;