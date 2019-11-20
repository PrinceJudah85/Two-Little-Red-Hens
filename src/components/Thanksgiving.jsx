import React from 'react';
import thanksgivingMenu from '../images/thanksgiving-menu.png';
import Menu from './Menu';
import { Link } from 'react-router-dom';

export default function Thanksgiving() {

  return (
    <>
      <Menu />
      <div className='small-menu'>
        <div className='left-arrow'></div>
        <h1 className='mobile-title'>Thanksgiving</h1>
        <div className='right-arrow'><Link to="/Cake">Cake</Link> </div>
      </div>


      <div id="menu-div">
        <img id="thanksgiving-menu" src={thanksgivingMenu} alt="Thanksgiving Menu"></img>
      </div>
    </>
  );
}
