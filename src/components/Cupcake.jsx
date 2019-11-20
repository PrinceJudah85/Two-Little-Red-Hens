import React from 'react';
import cupcakeMenu from '../images/cupcakes-menu.png';
import Menu from './Menu';

export default function Cupcake() {

  return (
    <>
      <Menu  page="Cupcake"/>
      <div id="menu-div">
        <img id="cupcake-menu" src={cupcakeMenu} alt="Cupcake Menu"></img>
      </div>
    </>
  );
}
