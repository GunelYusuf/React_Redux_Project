import React from 'react';
import Navbar from "../navbar/Navbar";
import { Route,Routes } from 'react-router-dom';
import Dashboard from "./Dashboard";
import BasketDetail from '../basket/BasketDetail';
import ProductDetail from '../products/ProductDetail';
import AddOrUpdateProduct from '../products/AddOrUpdateProduct';


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Dashboard/>} />
        <Route path="/product" exact element={<Dashboard/>} />
        <Route path="/basket" element={<BasketDetail/>} />
        <Route path ="/saveproduct/:productId" element={<AddOrUpdateProduct/>}/>
      </Routes>
    </div>
  );
}

export default App;
