import {Routes, Route} from "react-router-dom"
import Products from "../Products/Products"
import Signup from "../signUp/Signup"
import Cart from "../cart/Cart"

const Routing = ({products, cartItems, handleAddProduct, handleRemoveProduct,handleCartClear}) => {

  
  return (
    <div>
      <Routes>
          <Route path="/" element = {<Products products={products} handleAddProduct = {handleAddProduct}  />}/>
          <Route path="/signup" element= {<Signup/>}/>
          <Route path ="/cart" element={<Cart cartItems = {cartItems} handleAddProduct = {handleAddProduct} handleRemoveProduct = {handleRemoveProduct} handleCartClear = {handleCartClear} />}/>
      </Routes>
    </div>
  )
}

export default Routing