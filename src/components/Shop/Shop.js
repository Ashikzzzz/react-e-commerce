import React, { useEffect, useState } from 'react';
import Products from '../products/Products';
import './Shop.css'

const Shop = () => {
//    states defined
    const [products,setProducts]=useState([])
    const [cart,setCart]=useState([])
   
    // load data here

    useEffect(()=>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data =>setProducts(data))
    } ,[])

    // even handler 

    const handleAddToCart=(product)=>{
        const newCart= [...cart,product]
        setCart(newCart)
    }

    return (

    // this is for the place of  display products         

        <div className='shop-container'>
            <div className='products-container'>

                {/* loop start from here for data  */}
             
             {
                products.map(product=><Products
                     key={product.id}
                    product={product}
                    handleAddToCart={handleAddToCart}
                ></Products>)
             }             
            </div>
            <div className='cart-container'>
           <h1>Order Summery</h1>
           <h3>Selected items: {cart.length}</h3>
            </div>
        </div>
    );
};

export default Shop;