import React from 'react';
import thanksgivingMenu from '../images/thanksgiving-menu.png';
import rightarrow from '../images/rightarrow.png';
import Menu from './Menu';
import { Link } from 'react-router-dom';

export default function Thanksgiving() {

  return (
    <>
      <Menu page="Thanksgiving" />
      <div className='mobile-menu-title'><p className='mobile-ptag'>Menu</p></div>
      <div className='small-menu'>
        <div className='left-arrow-noshow'>hide</div>
        <h1 className='mobile-title'>Thanksgiving</h1>
        <div className='right-arrow'><Link to="/Cake"><img src={rightarrow}></img></Link> </div>
      </div>
      <div id="menu-div">
        <img id="thanksgiving-menu" src={thanksgivingMenu} alt="Thanksgiving Menu"></img>
      </div>
    </>
  );
}
