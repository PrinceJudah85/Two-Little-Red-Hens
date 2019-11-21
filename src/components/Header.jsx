import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/full-logo.png';
import BurgerMenu from '../components/BurgerMenu';

function Header() {
  return (
    <div className='header'>
      <div className='small-header'>
        <div className='burger-menu'>
          <BurgerMenu />
        </div>
        <div className="nav-title">
          <Link to='/' className='nav-title'>
            <img src={logo} alt="Two Little Red Hens Logo" ></img>
          </Link>
        </div>
      </div>
      <div className='full-header'>
        <div className='nav-home'>
          <Link to='/Home'>Home</Link>
        </div>
        <div className='nav-menu'>
          <Link to='/Thanksgiving'>Menu</Link>
        </div>
        <div className="nav-title">
          <Link to='/' className='nav-title'>
            <img src={logo} alt="Two Little Red Hens Logo" ></img>
          </Link>
        </div>
        <div className='nav-about'>
          <Link to='/About'>About Us</Link>
        </div>
        <div className='nav-contact'>
          <Link to='/ContactUs'>Contact Us</Link>
        </div>
      </div>
    </div>
  );
}

export default Header