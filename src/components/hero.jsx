import React from 'react'
import {Link} from 'react-router-dom';
import {Shop} from '../pages/shop/shop';
import './hero.css';
import img1 from '../assets/hero/img1.jpeg';
import img2 from '../assets/hero/img2.jpeg';
import img3 from '../assets/hero/img3.jpeg';

export const Hero = () => {
  return (
    <div className='hero'>
      
      <div className='sidebar'>
         <div className='PC-types'>
             <ul>
                <div className='sidebar__header'>PC Types</div>
                <li>Gaming</li>
                <li>Notebook</li>
                <li>Mac</li>
                <li>Budget</li>
             </ul>
         </div>
           <div className='price-options'>
              <ul>
              <div className='sidebar__header'>Filter with price</div>
                <li>over $1000</li>
                <li>over $500</li>
                <li>over $200</li>
             </ul>
            </div>
      </div>
         <div className='featured'>
              <div className='featured__left-one'>
                   <a className='link-rel' href='#shop-hero'>
                     <img className='img img1' src={img1} ></img>
                   </a>
             </div>
                <div className='featured__left-two'>
               
                   <a className='link-rel' href='#shophero'>
                      <img className='img img2' src={img2} ></img>
                   </a>
              
                </div>

            <div className='featured__right'>
                   <a className='link-rel' href='#shophero'>
                      <img className='img img3' src={img3} ></img>
                    </a>
            </div>
            <Shop id="shop-hero"></Shop>
        

        </div>
   </div>
  )
}

