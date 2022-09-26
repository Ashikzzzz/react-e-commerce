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

    return (

    // this is for the place of  display products         

        <div className='shop-container'>
            <div className='products-container'>

                {/* loop start from here for data  */}
             
             {
                products.map(product=><Products
                     key={product.id}
                    product={product}
                ></Products>)
             }             
            </div>
            <div className='cart-container'>
           <h1>This is csrt</h1>
            </div>
        </div>
    );
};

export default Shop;