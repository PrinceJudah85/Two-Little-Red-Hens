import React from 'react';
import cheesecakeMenu from '../images/cheesecake-menu.png';
import Menu from './Menu';

export default function Cheesecake() {

  return (
    <>
      <Menu page="Cheesecake" />
      <div id="menu-div">
        <img id="cheesecake-menu" src={cheesecakeMenu} alt="Cheesecake Menu"></img>
      </div>
    </>
  );
}
