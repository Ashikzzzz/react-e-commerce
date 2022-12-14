import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Products.css'

const Products = (props) => {
    // destructuring product and evenhandler
    const {handleAddToCart,product}=props;
    
    const {id,category,name,img,seller ,price,stock,ratings,ratingsCount,shipping,quantity}=product;


    return (
            // display all data particularlly using ternary operator

        <div className='product' >
            <img className='images' src={img ?  img : "no image found" } alt="" />
           <h2>Name : {name ? name : "No name found"}</h2>
           <h3>category : {category?category:"no data"}</h3>
            <h6>Seller : {seller? seller:"no data"}</h6>
                {/* produtc info  */}

          <div className='product-info'>
          <p>Price : {price ? price : "no data found"}</p>
           <p>Stock : {stock ? stock : "no data found"}</p>
           <p>Ratings : {ratings ? ratings : "no data found"}</p>
           <p>RatingsCount : {ratingsCount ? ratingsCount : "no data found"}</p>
           <p>Shipping : {shipping ? shipping : "no data found"}</p>
           <p>Quantity : {quantity ? quantity : "no data found"}</p>
          </div>

            {/* cart button and icon  */}

        <button onClick={()=>handleAddToCart(product)} className='btn-cart'>
            <p className='text'>Add to cart</p>
            <FontAwesomeIcon icon={faShoppingCart} ></FontAwesomeIcon>
        </button>
        </div>
    );
};

export default Products;