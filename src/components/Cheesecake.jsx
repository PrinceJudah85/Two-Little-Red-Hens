import React from 'react';
import cheesecakeMenu from '../images/cheesecake-menu.png';
import rightarrow from '../images/rightarrow.png';
import arrow from '../images/arrow.png';
import Menu from './Menu';
import { Link } from 'react-router-dom';
export default function Cheesecake() {

  return (
    <>
      <Menu page="Cheesecake" />
      <div className='mobile-menu-title'><p className='mobile-ptag'>Menu</p></div>
      <div className='small-menu'>
        <div className='left-arrow'><Link to="/Cake"><img src={arrow} alt="left arrow"></img></Link></div>
        <h1 className='mobile-title'>Cheesecakes</h1>
        <div className='right-arrow'><Link to="/Cupcake"><img src={rightarrow} alt="right arrow"></img></Link></div>
      </div>
      <div id="menu-div">
        <img id="cheesecake-menu" src={cheesecakeMenu} alt="Cheesecake Menu"></img>
      </div>
    </>
  );
}
