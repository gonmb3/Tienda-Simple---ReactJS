import data from "./components/back/data/data"
import Header from "./components/front/header/Header";
import Routing from "./components/front/Routes/Routing";
import { useState } from 'react';


const App = () => {

  const { products } = data;
  const [cartItems, setCartItems] = useState([])


// ---------------- AGREGAR PRODUCTO AL CARRITO
  const handleAddProduct = (product) => {
    const exist = cartItems.find(item => item.id === product.id)
    if (exist) {
      setCartItems(cartItems.map(item => item.id === product.id ?
        { ...exist, quantity: exist.quantity + 1 } : item))
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }])
    }
  }


  //---------------------ELIMINAR -- UN -- PRODUCTO DEL CARRITO

  const handleRemoveProduct = product => {
    const exist = cartItems.find(item => item.id === product.id)
    if(exist.quantity === 1){
      setCartItems(cartItems.filter(item => item.id !== product.id))
    }else{
       setCartItems(cartItems.map(item => item.id === product.id ? { ...exist, quantity: exist.quantity - 1 } : item))
    }
  }


  const handleCartClear = () => {
    setCartItems([])
  }

  return (

    <>
      <Header  cartItems={cartItems} />

      <Routing products={products} cartItems={cartItems} handleAddProduct={handleAddProduct}  handleRemoveProduct = {handleRemoveProduct}  handleCartClear = {handleCartClear} />

    </>
  )
}

export default App