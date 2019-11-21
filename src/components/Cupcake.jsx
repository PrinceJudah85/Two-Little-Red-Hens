import React from 'react';
import cupcakeMenu from '../images/cupcakes-menu.png';
import rightarrow from '../images/rightarrow.png';
import arrow from '../images/arrow.png';
import Menu from './Menu';
import { Link } from 'react-router-dom';

export default function Cupcake() {

  return (
    <>
      <Menu page="Cupcake" />
      <div className='mobile-menu-title'><p className='mobile-ptag'>Menu</p></div>
      <div className='small-menu'>
        <div className='left-arrow'><Link to="/Cheesecake"><img src={arrow} alt="left arrow"></img></Link></div>
        <h1 className='mobile-title'>Cupcakes</h1>
        <div className='right-arrow'><Link to="/Pie"><img src={rightarrow} alt="right arrow"></img></Link></div>
      </div>
      <div id="menu-div">
        <img id="cupcake-menu" src={cupcakeMenu} alt="Cupcake Menu"></img>
      </div>
    </>
  );
}
