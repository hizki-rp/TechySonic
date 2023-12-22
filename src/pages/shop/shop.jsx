import React from 'react';
import {PRODUCTS} from"../../products";
import {Product} from "./product";
import "./shop.css";
import "../../components/hero.css";

export const Shop = () => {
  return (
    <div id="shop" className="shop">
      <div className="shopTitle">
        <h1>TechySonic</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product)=> (
        <Product data={product}/>
        ))}
      </div>
    </div>
  )
}
