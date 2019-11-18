import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
      <div className='nav-home'>
        <Link to='/Home'>Home</Link>
      </div>
      <div className='nav-menu'>
        <Link to='/Menu'>Menu</Link>
      </div>
      <div className="nav-title">
        <Link to='/' className='nav-title'>Two Little Red Hens</Link>
        <p className='nav-title2'>An American Bakery</p>
        <p className='nav-title3'>est. 1992</p>
      </div>
      <div className='nav-about'>
        <Link to='/About'>About</Link>
      </div>
      <div className='nav-contact'>
        <Link to='/ContactUs'>Contact Us</Link>
      </div>
    </div>
  )
}

export default Header;