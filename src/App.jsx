import { Fragment } from "react";
import ProductDetails from "./components/ProductDetails";
import ProductList from "./components/ProductList"
import {Routes, Route} from "react-router-dom";
import CartList from "./components/CartList";
function App() {

  return (
    <Fragment>
    <Routes>
      <Route path="/product-list" element={<ProductList/>}/>
      <Route path="/product-details/:id" element={<ProductDetails/>}/>
      <Route path="/cart" element={<CartList/>}/>
    </Routes>
    </Fragment>
  )
}

export default App
