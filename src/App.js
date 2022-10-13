import logo from './logo.svg';
import './App.css';
import Appbar from './component/appbar';
import ProductDetail from './pages/product/detail';
import {
  BrowserRouter,
  Routes, //replaces "Switch" used till v5
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Appbar />} />
        <Route path="/demo" element={<Appbar />} />
        <Route path="/productdetail" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
