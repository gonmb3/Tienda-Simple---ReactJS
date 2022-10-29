import "./Products.css"

const Products = ({ products,handleAddProduct }) => {



    return (
        <div className="products">
            {products.map(product => (
                <div key={product.id} className="card">
                    <div>
                        <img className="product-img" src={product.img} alt={product.name} />
                    </div>
                    <div className="product-name">
                        <h3>{product.name} </h3>
                    </div>
                    <div className="product-price">$ {product.price}</div>

                    <div ><button onClick={() => handleAddProduct(product)} className="product-add-button"> Add to cart</button> </div>
                </div>
            ))}
        </div>
    )
}

export default Products