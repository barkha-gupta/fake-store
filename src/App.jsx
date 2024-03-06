import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./containers/Header.jsx";
import ProductList from "./containers/ProductList.jsx";
import ProductDetails from "./containers/ProductDetails.jsx";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<ProductList />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default App;
