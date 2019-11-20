import React from 'react';
import pieMenu from '../images/late-fall-pies-menu.png';
import Menu from './Menu';
import { Link } from 'react-router-dom';

export default function Pie() {

  return (
    <>
      <Menu page="Pie" />
      <div className='mobile-menu-title'><p className='mobile-ptag'>Menu</p></div>
      <div className='small-menu'>
        <div className='left-arrow'><Link to="/Cupcake">Cupcakes</Link></div>
        <h1 className='mobile-title'>Pies</h1>
        <div className='right-arrow-noshow'></div>
      </div>
      <div id="menu-div">
        <img id="pie-menu" src={pieMenu} alt="Pie Menu"></img>
      </div>
    </>
  );
}
