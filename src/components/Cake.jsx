import React from 'react';
import cakeMenu from '../images/classic-cake-menu.png';
import rightarrow from '../images/rightarrow.png';
import arrow from '../images/arrow.png';
import Menu from './Menu';
import { Link } from 'react-router-dom';

export default function Cake() {

  return (
    <>
      <Menu page="Cake" />
      <div className='mobile-menu-title'><p className='mobile-ptag'>Menu</p></div>
      <div className='small-menu'>
        <div className='left-arrow'><Link to="/Thanksgiving"><img src={arrow} alt="left arrow"></img></Link></div>
        <h1 className='mobile-title'>Cakes</h1>
        <div className='right-arrow'><Link to="/CheeseCake"><img src={rightarrow} alt="right arrow"></img></Link></div>
      </div>
      <div id="menu-div">
        <img id="cake-menu" src={cakeMenu} alt="Cake Menu"></img>
      </div>
    </>
  );
}
