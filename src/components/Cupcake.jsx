import React from 'react';
import cupcakeMenu from '../images/cupcakes-menu.png';
import Menu from './Menu';
import { Link } from 'react-router-dom';

export default function Cupcake() {

  return (
    <>
      <Menu />
      <div className='small-menu'>
        <div className='left-arrow'><Link to="/Cheesecake">Cheesecakes</Link></div>
        <h1 className='mobile-title'>Cupcakes</h1>
        <div className='right-arrow'><Link to="/Pie">Pie</Link></div>
      </div>
      <div id="menu-div">
        <img id="cupcake-menu" src={cupcakeMenu} alt="Cupcake Menu"></img>
      </div>
    </>
  );
}
