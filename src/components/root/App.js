import React from 'react';
import Navbar from "../navbar/Navbar";
import { Route,Routes } from 'react-router-dom';
import Dashboard from "./Dashboard";
import BasketDetail from '../basket/BasketDetail';


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Dashboard/>} />
        <Route path="/product" exact element={<Dashboard/>} />
        <Route path="/basket" element={<BasketDetail/>} />
      </Routes>
    </div>
  );
}

export default App;
