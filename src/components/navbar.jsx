import React from 'react'
import {Link} from "react-router-dom";
import {ShoppingCart} from "phosphor-react";
import "./navbar.css"
import {useState} from 'react';

export const Navbar = () => {

  const [isActive, setIsActive] = useState(false);


  const navEvent = event => {
     setIsActive(current => !current);
   };

  return (
    <div>
      <div className='navbar'>
        <div className="links">
            <Link  to="/cart">
              <ShoppingCart  size={30} color="white"/>
            </Link>
        </div>
   
    </div>
    <div className='sub-nav'>
        <div className="links">
           <div id='nav-logo' className={isActive ? 'nav-logo__click' : ''} conlick={navEvent}>
              <li>-</li>
              <li>-</li>
              <li>-</li>
           </div>
                
        </div>
   
    </div>
    </div>
  )
}
