import React from 'react';
import cakeMenu from '../images/classic-cake-menu.png';
import Menu from './Menu';

export default function Cake() {

  return (
    <>
      <Menu />
      <div id="menu-div">
        <img id="cake-menu" src={cakeMenu} alt="Cake Menu"></img>
      </div>
    </>
  );
}
