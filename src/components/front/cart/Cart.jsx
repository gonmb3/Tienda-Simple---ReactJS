import "./Cart.css"

const Cart = ({cartItems,handleAddProduct, handleRemoveProduct, handleCartClear}) => {

    const totalPrice = cartItems.reduce((price,item) => price + item.quantity * item.price, 0)



  return (
    <div className='cart-items'>
        <h2 className='cart-items-header'>Cart Items </h2>
        <div className="clear-cart">
            {cartItems.length >= 1 && (
                <button className="clear-cart-button" onClick={handleCartClear}> Clear Cart</button>
            )}
        </div>

        {cartItems.length === 0 && <div className="cart-items-empty">Cart Empty </div>}

        <div>
            {cartItems.map(item =>(
                <div key={item.id} className="cart-items-list">
                     <img className='cart-items-image' src={item.img} alt={item.name}/>
               
                     <div className='cart-items-name'>{item.name}</div>
                     <div className='cart-items-functions'>

                        <button onClick={() => handleAddProduct(item) } className='cart-items-add'>+</button>
                        <button onClick={() => handleRemoveProduct(item)  } className='cart-items-remove'>-</button>

                     </div>
                    <div className='cart-items-price'>
                       {item.quantity} - ${item.price}
                    </div>
                </div>  
            ))}
            
        </div>
        <div className='cart-items-total-price-name'>
                
            <div className='cart-items-total-price'>Total: ${totalPrice} </div>
        </div>
        
    </div>
  )
}

export default Cart