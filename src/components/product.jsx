import "./product.css"
import QuantityPicker from "./quantityPicker";
import {useState, useContext} from "react";
import StoreContext from "../context/storeContex";



const Product = (props) => {
    let [quantity, setQuantity] = useState(1);
    let addProdToCart = useContext(StoreContext).addProdToCart;

    let onQuantityChange = (value) => {
        // use the value to update the quanity
        setQuantity(value);
        
    };


    //add a fn to return the total. total = price*quantity
        const calculateTotal = () => {
        let total = props.data.price * quantity;
        return total.toFixed(2);
    };

    const addProduct = () => {
        console.log("adding product", props.data.title)
        //don't modify prop object. make a copy and modify the
        let prodForCart = {...props.data, quantity: quantity};
        addProdToCart(prodForCart);

    };

    return (
        <div className="product">
            <img className="product-img" src={'/img/' + props.data.image}></img>
            <h2>{props.data.title}</h2>
            <h3>${props.data.price}</h3>
            <h3>Total: ${calculateTotal()}</h3>
            <QuantityPicker onChange={onQuantityChange}></QuantityPicker>
            <button onClick={addProduct} className="btn btn-primary btn-sm">Add to Cart</button>
        </div>
    );
};

export default Product;