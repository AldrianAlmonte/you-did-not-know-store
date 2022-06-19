import "./App.css";
import Navbar from "./components/navbar"; // always import
import Catalog from "./components/catalog";
import Footer from "./components/footer";
import Home from "./components/home";
import About from "./components/about";
import Cart from "./components/cart";
import Admin from "./components/admin";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStoreProvider from "./context/globalStoreProvider";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    <div className="App">
      <GlobalStoreProvider>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>

          <Footer />
        </BrowserRouter>
      </GlobalStoreProvider>
    </div>
  );
}

export default App;
