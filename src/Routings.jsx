import React from "react";
import Home from "./Components/Home";
import Individuals from "./Components/Individuals";
import Teams from "./Components/Teams";
import Enterprise from "./Components/Enterprise";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import NVbar from "./Components/NVbar";

function Routings() {
  return (
    <BrowserRouter>
    <NVbar />
      <Routes>
        <Route path='/'element={<Home />} />
        <Route path='/Individuals' element={<Individuals />} />
        <Route path='/Teams' element={<Teams />} />
        <Route path='/Enterprise' element={<Enterprise />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routings;
