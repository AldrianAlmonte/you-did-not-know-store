import "./admin.css"
import { useState } from "react";


const Admin = () => {

    const [product, setProduct] = useState({});
    //                            useState values are immutable (should not change)

    const saveProduct = () => {
        console.log("saving product", product);
    };

    const textChanged = (e) => {
        // console.log(e.target.name, e.target.value)
        let name = e.target.name;
        let value = e.target.value;
        let image = e.target.image;
        let price = e.target.price;

        // product[name] = value;


        let copy = { ...product }; //spread operator
        copy[name] = value;
        setProduct(copy);
    };

    return(
        <div className="admin-page">
            <h4>Store Admininstration</h4>

            <div className="content">
                <section className="products">
                    <h5>Register</h5>

                    <div className="field">
                        <label>Title</label>
                        <input name="title" onChange={textChanged} className="form-control" type="text" />
                    </div>

                    <div className="field">
                        <label>Category</label>
                        <input name="category" onChange={textChanged} className="form-control"  type="text" />
                    </div>

                    <div className="field">
                        <label>Image</label>
                        <input name="image" onChange={textChanged} className="form-control"  type="text" placeholder="image name" />
                    </div>

                    <div className="field">
                        <label>Price</label>
                        <input name="price" onChange={textChanged} className="form-control"  type="text" />
                    </div>

                    <div className="field">
                        <button onClick={saveProduct} className="btn btn-primary">Save</button>
                    </div>

                </section>

                <section className="coupons">
                    <h5>Coupon Codes</h5>
                </section>
            </div>
        </div>
    )
}

export default Admin;