import React, { useEffect, useState } from 'react';
import Products from '../products/Products';
import './Shop.css'

const Shop = () => {

    const [products,setProducts]=useState([])
   
    // load data here

    useEffect(()=>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data =>setProducts(data))
    } ,[])

    // even handler 

    const handleAddToCart=(product)=>{
console.log(product)
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
            </div>
        </div>
    );
};

export default Shop;