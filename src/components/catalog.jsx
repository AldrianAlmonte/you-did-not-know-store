import "./catalog.css"
import Product from "./product";
import DataService from "../services/dataService";
import {useState, useEffect} from "react";

const Catalog=()=>{
    let [products, setProducts] = useState([]);



    const loadCatalog = () => {
        let service = new DataService(); // instance
        let data = service.getCatalog();
        setProducts(data);
    };

    useEffect(() => {
        loadCatalog();
    });


    return(
        <div className="catalog">
            
            {/* <Product title="TestA" price="14.99"></Product>
            <Product title="TestB" price="37.99"></Product>
            <Product title="TestC" price="11.99"></Product>
            <Product title="TestD" price="12.99"></Product>
            <Product title="TestE" price="14.99"></Product>
            <Product title="TestF" price="14.99"></Product> */}
            {
                products.map( (prod) => (<Product key={prod._id} data={prod}></Product>) )
            }

        </div>
    );
}
export default Catalog;