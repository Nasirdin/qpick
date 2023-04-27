import { Route, Routes } from "react-router";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home/Index";
import Like from "./components/Like";
import Cart from "./components/Cart";
import Product from "./components/Product";
import { useEffect, useState } from "react";
import Auth from "./components/Auth";
function App() {
  const url = window.location.pathname;
  let newPathname = "";
  if (url !== "/") {
    newPathname = url[1];
  } else {
    newPathname = "";
  }

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/like" element={<Like />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<Auth />} />
        <Route
          path={`/${newPathname}`}
          element={<Product id={newPathname} />}
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
