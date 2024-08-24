import React from 'react';
import { PRODUCTS } from '../../Products';
import Product from './Product';
import './Shop.css';
  
const Shop = () => {
  return (
    <div className="shopContainer">
        <div className='title'>
            <h2>Online කඩේ</h2>
        </div>


        <div className="products">
            {PRODUCTS.map((product) =>(
            <Product data={product}/>
            ))}
        </div>


    </div>
  )
}

export default Shop
