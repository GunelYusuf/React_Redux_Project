import React from 'react';
import Navbar from "../navbar/Navbar";
import { Route,Routes } from 'react-router-dom';
import Dashboard from "./Dashboard";
import BasketDetail from '../basket/BasketDetail';
import AddOrUpdateProduct from '../products/AddOrUpdateProduct';
import NotFound from "../common/NotFound";


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Dashboard />} />
        <Route path="/product" exact element={<Dashboard />} />
        <Route path="/basket" element={<BasketDetail />} />
        <Route path="/saveproduct/:productId" element={AddOrUpdateProduct} />
        <Route path="/saveproduct" element={AddOrUpdateProduct} />
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}


export default App;
