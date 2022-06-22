import "./cart.css"
import { useContext } from "react";
import StoreContext from "../context/storeContex";
import ProductInCart from "./productInCart";




const Cart = () => {
    let total = 0;
    
    let cart = useContext(StoreContext).cart;

    const getSubTotal = () => {
        let total = 0;
        for (let i=0;i<cart.length;i++){
            let prod = cart[i];
            total += prod.price * prod.quantity;
        }

    return total.toFixed(2);
    }

    const getNumItems = () => {
        let total = 0;
        for (let i=0; i < cart.length; i++) {
           total += cart[i].quantity;
        }
        return total;
   };

//    const getTax = () => {
//     let tax = 0.07 * total;
    

//     return tax;

//    };
 


    return(
        <div className="cart">
            <h6>You have {getNumItems()} products</h6>
            <h3>Ready to Order?</h3>
            <hr />


                <div className="parent">
                    <div className="products">
                        {cart.map(prod => 
                            <ProductInCart key={prod._id} data={prod} ></ProductInCart>
                        )}   
                    </div>
                    
                    <div className="total-panel">
                        <br></br>
                        <br></br>
                        <h3>Your Total</h3>
                        <h2>${getSubTotal()}</h2>
                        {/* <h5>Tax ${getTax()}</h5>  */}
                        
                    </div>
                </div>
        </div>
    )
}

export default Cart;