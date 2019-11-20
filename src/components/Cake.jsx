import React from 'react';
import cakeMenu from '../images/classic-cake-menu.png';
import Menu from './Menu';
import { Link } from 'react-router-dom';

export default function Cake() {

  return (
    <>
      <Menu />

      <div className='small-menu'>
        <div className='left-arrow'><Link to="/Thanksgiving">Thanks</Link></div>
        <h1 className='mobile-title'>Cakes</h1>
        <div className='right-arrow'><Link to="/CheeseCake">CheeseCake</Link></div>
      </div>
    <div id="menu-div">
      <img id="cake-menu" src={cakeMenu} alt="Cake Menu"></img>
    </div>
    </>
  );
}
