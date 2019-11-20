import React from 'react';
import pieMenu from '../images/late-fall-pies-menu.png';
import Menu from './Menu';

export default function Pie() {

  return (
    <>
      <Menu page="Pie" />
      <div id="menu-div">
        <img id="pie-menu" src={pieMenu} alt="Pie Menu"></img>
      </div>
    </>
  );
}
