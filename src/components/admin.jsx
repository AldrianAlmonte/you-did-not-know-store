import "./admin.css";
import { useState } from "react";


const Admin = () => {
  const [product, setProduct] = useState({});
  const [coupon, setCoupon] = useState({});
  const [allCoupons, setAllCoupons] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  //                            useState values are immutable (should not change)

  const saveProduct = () => {
    console.log("saving product", product);

    let copy = [...allProducts];
    copy.push(product);
    setAllProducts(copy);
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

  const saveCoupon = () => {
    console.log("Saving coupon", coupon);



    /**
     * 1. service create a method that receives an object
     * it will send the object on an axios post re
     * 
     * 2. create a instance of the service
     * 3. call the new method and paa coupon obj
     */


    // add the coupon to allCoupons array
    let copy = [...allCoupons];
    copy.push(allCoupons);
    setAllCoupons(copy);

  };


  const couponChanged = (c) => {
    let code = c.target.name;
    let discount = c.target.value;

    let copy = { ...coupon };
    copy[code] = discount;
    setCoupon(copy);
  };


  

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


          <hr />

            <ul>
               {allProducts.map((p, index) => <li key={index}>{p.title} - {p.price}</li>)}
            </ul>

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
            {/* li is not parsing text value */}
      
            <ul>
                {allCoupons.map((c, index) => <li key={index}>{c.code} - {c.discount}</li>)}
            </ul>


        </section>
      </div>
    </div>
  );
};

export default Admin;
