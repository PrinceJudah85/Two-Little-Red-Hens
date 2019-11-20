import React from 'react';
import cheesecakeMenu from '../images/cheesecake-menu.png';
import Menu from './Menu';
import { Link } from 'react-router-dom';
export default function Cheesecake() {

  return (
    <>
      <Menu page="Cheesecake" />
      <div className='small-menu'>
        <div className='left-arrow'><Link to="/Cake">Cakes</Link></div>
        <h1 className='mobile-title'>Cheesecakes</h1>
        <div className='right-arrow'><Link to="/Cupcake">Cupcakes</Link></div>
      </div>
      <div id="menu-div">
        <img id="cheesecake-menu" src={cheesecakeMenu} alt="Cheesecake Menu"></img>
      </div>
    </>
  );
}
