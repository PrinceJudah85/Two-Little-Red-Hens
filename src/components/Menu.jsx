import React from 'react';
import { Link } from 'react-router-dom';
import thanksgivingLogo from '../images/Thanksgiving.png';
import pieLogo from '../images/Pie.png';
import cakeLogo from '../images/Cake.png';
import cupcakeLogo from '../images/Cupcake.png';
import cheesecakeLogo from '../images/Cheesecake.png';
import rectangleImage from '../images/rectangle.png';

export default function Menu(props) {
  return (
    <section id='menu'>
      
      <div className='menu-section'>
        <div className="menu-category-div" id="sub-header">
          <Link to='/Thanksgiving'>
            <div className="menu-category" id="thanksgiving-category">
              <img className="menu-category-img" src={thanksgivingLogo} alt="thanksgiving"></img>
              <p>Thanksgiving</p>
              <img className="menu-category-underline" src={rectangleImage} alt="underline"
                style={{ display: props.page === "Thanksgiving" ? 'inline' : 'none' }}></img>
            </div>
          </Link>
          <Link to='/Cake'>
            <div className="menu-category" id="cake-category">
              <img className="menu-category-img" src={cakeLogo} alt="cakes"></img>
              <p>Cakes</p>
              <img className="menu-category-underline" src={rectangleImage} alt="underline"
                style={{ display: props.page === "Cake" ? 'inline' : 'none' }}></img>
            </div>
          </Link>
          <Link to='/Cheesecake'>
            <div className="menu-category" id="cheesecake-category">
              <img className="menu-category-img" src={cheesecakeLogo} alt="cheesecakes"></img>
              <p>Cheesecakes</p>
              <img className="menu-category-underline" src={rectangleImage} alt="underline"
                style={{ display: props.page === "Cheesecake" ? 'inline' : 'none' }}></img>
            </div>
          </Link>
          <Link to='/Cupcake'>
            <div className="menu-category" id="cupcake-category">
              <img className="menu-category-img" src={cupcakeLogo} alt="cupcakes"></img>
              <p>Cupcakes</p>
              <img className="menu-category-underline" src={rectangleImage} alt="underline"
                style={{ display: props.page === "Cupcake" ? 'inline' : 'none' }}></img>
            </div>
          </Link>
          <Link to='/Pie'>
            <div className="menu-category" id="pie-category">
              <img className="menu-category-img" src={pieLogo} alt="pies"></img>
              <p>Pies</p>
              <img className="menu-category-underline" src={rectangleImage} alt="underline"
                style={{ display: props.page === "Pie" ? 'inline' : 'none' }}></img>
            </div>
          </Link>
        </div>
      </div>

    </section>
  );
}
