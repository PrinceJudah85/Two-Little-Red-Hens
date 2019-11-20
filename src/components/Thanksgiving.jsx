import React from 'react';
import thanksgivingMenu from '../images/thanksgiving-menu.png';
import Menu from './Menu';

export default function Thanksgiving() {

  return (
    <>
      <Menu page="Thanksgiving"/>
      <div id="menu-div">
        <img id="thanksgiving-menu" src={thanksgivingMenu} alt="Thanksgiving Menu"></img>
      </div>
    </>
  );
}
