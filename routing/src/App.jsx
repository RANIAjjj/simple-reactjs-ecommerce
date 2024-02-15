import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Products from "./components/Products";
import ProductsDet from "./components/ProductsDet";
import Auth from "./components/Auth";
import Fav from "./components/Fav";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route element={<Auth />}>
        <Route path="/Products" element={<Products />} />
        <Route path="/Fav" element={<Fav/>} />
        <Route path="/ProductsDet/:id" element={<ProductsDet />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
