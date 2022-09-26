import React from 'react';
import './Products.css'

const Products = (props) => {
    // destructuring 
    const {id,category,name,img,seller ,price,stock,ratings,ratingsCount,shipping,quantity}=props.product;
// console.log(props.product)

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

            {/* cart button  */}

        <button className='btn-cart'>
            <p>Add to cart</p>
        </button>
        </div>
    );
};

export default Products;