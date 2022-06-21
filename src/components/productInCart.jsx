import "./productInCart.css"
import { useContext } from "react";
import StoreContext from "../context/storeContex";


const ProductInCart = (props) => {

    const removeProdFromCart = useContext(StoreContext).removeProdFromCart;


    const calculateTotal = () => {
        let total = props.data.price * props.data.quantity;
        return total.toFixed(2);
      };


      const deleteProd = () => {
        removeProdFromCart(props.data._id);
      };

    return(
        <div className="product-cart">
            <img className="product-img" src={"/img/" + props.data.image} alt="product" />

            <div className="description">
                <h4>{props.data.title}</h4>
                <p>{props.data.category}</p>
            </div>


               <label>${props.data.price.toFixed(2)}</label>
                <label>{props.data.quantity}</label>
                <label>${calculateTotal()}</label>

            
            <button onClick={deleteProd} className="btn btn-sm btn-danger">Remove</button>
        </div>
    );
}

export default ProductInCart;