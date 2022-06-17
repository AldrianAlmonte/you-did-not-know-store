import "./admin.css";
import { useState } from "react";

const Admin = () => {
  const [product, setProduct] = useState({});
  const [coupon, setCoupon] = useState({});
  const [allCoupons, setAllCoupons] = useState([]);
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

    //Create Jira Issue
    //TODO: send the product to service -> to backend
  };

  const couponChanged = (e) => {
    let name = e.target.name;
    let val = e.target.value;

    let copy = { ...coupon };
    copy[name] = val;
    setCoupon(copy);
  };

  const saveCoupon = () => {
    console.log("Saving coupon", coupon);
  };

  // add the coupon to allCoupons array
  let copy = [...allCoupons];
  copy.push(coupon);
  setAllCoupons(copy);

  //todo: send the coupon to service -> backend

  return (
    <div className="admin-page">
      <h4>Store Admininstration</h4>

      <div className="content">
        <section className="products">
          <h5>Register</h5>

          <div className="field">
            <label>Title</label>
            <input
              name="title"
              onChange={textChanged}
              className="form-control"
              type="text"
            />
          </div>

          <div className="field">
            <label>Category</label>
            <input
              name="category"
              onChange={textChanged}
              className="form-control"
              type="text"
            />
          </div>

          <div className="field">
            <label>Image</label>
            <input
              name="image"
              onChange={textChanged}
              className="form-control"
              type="text"
              placeholder="image name"
            />
          </div>

          <div className="field">
            <label>Price</label>
            <input
              name="price"
              onChange={textChanged}
              className="form-control"
              type="text"
            />
          </div>

          <div className="field">
            <button onClick={saveProduct} className="btn btn-primary">
              Save
            </button>
          </div>
        </section>

        <section className="coupons">
          <h5>Coupon Codes</h5>

          <div className="field">
            <label>Code</label>
            <input
              name="code"
              onChange={couponChanged}
              className="form-control"
              type="text"
            />
          </div>

          <div className="field">
            <label>Discount</label>
            <input
              name="discount"
              onChange={couponChanged}
              className="form-control"
              type="number"
            />
          </div>

          <div className="field">
            <button onClick={saveCoupon} className="btn btn-primary">
              Register Coupon
            </button>
          </div>

            <hr />
            <ul>
                <li>
                    
                </li>
            </ul>


        </section>
      </div>
    </div>
  );
};

export default Admin;
