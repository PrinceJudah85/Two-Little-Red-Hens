import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/full-logo.png';
import rectangleImage from '../images/rectangle.png';

function Header() {
  return (
    <div className='header'>
      <div className='nav-home'>
        <Link to='/Home'>Home</Link>
        <div className='header-underline'></div>
      </div>
      <div className='nav-menu'>
        <Link to='/Menu'>Menu</Link>
        {/* <img className="menu-category-underline" src={rectangleImage} alt="underline"></img> */}
        <div className='header-underline'></div>
      </div>
      <div className="nav-title">
        <Link to='/' className='nav-title'>
          <img src={logo} alt="Two Little Red Hens Logo" ></img>
        </Link>
      </div>
      <div className='nav-about'>
        <Link to='/About'>About</Link>
        <div className='header-underline'></div>
        {/* <img className="menu-category-underline" src={rectangleImage} alt="underline"></img> */}
      </div>
      <div className='nav-contact'>
        <Link to='/ContactUs'>Contact Us</Link>
        <div className='header-underline'></div>
        {/* <img className="menu-category-underline" src={rectangleImage} alt="underline"></img> */}
      </div>
    </div>
  )
}

export default Header;