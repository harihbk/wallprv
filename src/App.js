import React from 'react';
import './App.css';
import Appbar from './component/appbar';
import ProductDetail from './pages/product/detail';
import {
  BrowserRouter,
  Routes, //replaces "Switch" used till v5
  Route,
} from "react-router-dom";
import { ProductProvider } from "./component/store/context"

function App() {
  const [ test , setTest ] = React.useState();
  return (
    <BrowserRouter>
    <ProductProvider value={[ test , setTest ]}>
      <Routes>
        <Route path="/" element={<Appbar />} />
        <Route path="/demo" element={<Appbar />} />
        <Route path="/productdetail" element={<ProductDetail />} />
      </Routes>
    </ProductProvider>
    </BrowserRouter>
  );
}

export default App;
