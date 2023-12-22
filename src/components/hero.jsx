import React from 'react'
import './hero.css';
import img1 from '../assets/hero/img1.jpeg';
import img2 from '../assets/hero/img2.jpeg';

export const Hero = () => {
  return (
    <div className='app'>
      
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

        <div className='featured__img1'>
           <a className='link-rel' href='#'>
             <img className='img1' src={img1} height={400} width={1140}></img>
             <button className='btn btn1'>Shop now</button>
           </a>
        </div>
        <div className='featured__img2'>
          <a className='link-rel' href='#'>
            <img className='img2' src={img2} height={250} width={1140}></img>  
            <button className='btn btn2'>Shop now</button>
          </a>
        </div>
           
       </div>
    </div>
  )
}

