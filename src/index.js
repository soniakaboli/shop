import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router";
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import Home from "./Home";
import Cloth from "./Cloth";
import Shoses from "./Shoses";
import About from "./About";
import Cosmetic from "./Cosmetic";
import Login from "./Login";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home/>}/>
          <Route path="cloth" element={<Cloth/>}/>
          <Route path="cosmetics" element={<Cosmetic/>}/>
          <Route path="shoses" element={<Shoses/>}/>
          <Route path="about" element={<About/>}/>
        <Route path="login" element={<Login/>}/>
        </Route>
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
