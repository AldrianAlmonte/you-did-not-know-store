import "/productInCart.css"

const ProductInCart = () => {
    return(
        <div className="product-cart">
            <img className="productImg" src={"/img/" + props.data.image} alt="product" />

            <div className="description">
                <h4>{props.data.title}</h4>
                <p>{props.data.category}</p>
            </div>

            <label>${props.data.price}</label>
            <label>{props.data.quantity}</label>
            <label>{props.data.price * props.data.quantity}</label>

            <button className="btn btn-sm btn-danger">Remove</button>
        </div>
    );
}

export default ProductInCart;