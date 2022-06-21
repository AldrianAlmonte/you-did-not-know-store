import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import StoreContext from "../context/storeContex";


// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';



function Navbar() {
  let cart = useContext(StoreContext).cart;

  const getNumItems = () => {
       let total = 0;
       for (let i=0; i < cart.length; i++) {
          total += cart[i].quantity;
       }
       return total;
  };

  // custom components will start with a capital letter and returm something
  return (
    //in JSX you will use className for CSS

    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          CrazyStore
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toogle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/catalog">
                Catalog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin">
                Admin
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <Link className="btn btn-outline-light" to="/cart">
              {getNumItems()} Cart
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; // need to export a component so it can be imported into another JS fileimport Navbar from './navbar';
