import React from 'react';
import heroImg from '../images/main.png';
import scrollInd from '../images/scroll-indicator.png';
import Menu from './Menu';
import { Link } from 'react-router-dom';
import thanksgivingLogo from '../images/Thanksgiving.png';
import pieLogo from '../images/Pie.png';
import cakeLogo from '../images/Cake.png';
import cupcakeLogo from '../images/Cupcake.png';
import cheesecakeLogo from '../images/Cheesecake.png';
import rectangleImage from '../images/rectangle.png';


export default function Home(props) {
  return (
    <section id="home-section">
      <div>
        <img className="main-img" src={heroImg} alt="main"></img>
        <a id="home-scroll" href="#home-lower-section" >
          <img id= "bounce" className="fixed-img bounce" src={scrollInd} alt="chevron" />
        </a>
      </div>
      <section id='hidden-menu'>
      
      <div className='hmenu-section'>
        <div className="hmenu-category-div" id="sub-header">
          <Link to='/Thanksgiving'>
            <div className="hmenu-category" id="thanksgiving-category">
              <img className="hmenu-category-img" src={thanksgivingLogo} alt="thanksgiving"></img>
              <p>Thanksgiving</p>
              <img className="hmenu-category-underline" src={rectangleImage} alt="underline"
                style={{ display: props.page === "Thanksgiving" ? 'inline' : 'none' }}></img>
            </div>
          </Link>
          <Link to='/Cake'>
            <div className="hmenu-category" id="cake-category">
              <img className="hmenu-category-img" src={cakeLogo} alt="cakes"></img>
              <p>Cakes</p>
              <img className="hmenu-category-underline" src={rectangleImage} alt="underline"
                style={{ display: props.page === "Cake" ? 'inline' : 'none' }}></img>
            </div>
          </Link>
          <Link to='/Cheesecake'>
            <div className="hmenu-category" id="cheesecake-category">
              <img className="hmenu-category-img" src={cheesecakeLogo} alt="cheesecakes"></img>
              <p>Cheesecakes</p>
              <img className="hmenu-category-underline" src={rectangleImage} alt="underline"
                style={{ display: props.page === "Cheesecake" ? 'inline' : 'none' }}></img>
            </div>
          </Link>
          <Link to='/Cupcake'>
            <div className="hmenu-category" id="cupcake-category">
              <img className="hmenu-category-img" src={cupcakeLogo} alt="cupcakes"></img>
              <p>Cupcakes</p>
              <img className="hmenu-category-underline" src={rectangleImage} alt="underline"
                style={{ display: props.page === "Cupcake" ? 'inline' : 'none' }}></img>
            </div>
          </Link>
          <Link to='/Pie'>
            <div className="hmenu-category" id="pie-category">
              <img className="hmenu-category-img" src={pieLogo} alt="pies"></img>
              <p>Pies</p>
              <img className="hmenu-category-underline" src={rectangleImage} alt="underline"
                style={{ display: props.page === "Pie" ? 'inline' : 'none' }}></img>
            </div>
          </Link>
        </div>
      </div>

    </section>
      <Menu />
      <div id="home-lower-section">
        <div id="home-lower-left">
          <h2 id="hours-of-operations">Hours of Operations</h2>
          <div id="lower-left-line-1">
            <div id="mon-thurs">
              <p>Monday - Thursday</p>
              <p>7:30am-9pm</p>
            </div>
          </div>
          <div id="lower-left-line-2">
            <div id="fri">
              <p>Friday</p>
              <p>7:30am-9pm</p>
            </div>
            <div id="sat">
              <p>Saturday</p>
              <p>7:30am-9pm</p>
            </div>
            <div id="sun">
              <p>Sunday</p>
              <p>8am-8pm</p>
            </div>
          </div>
        </div>
        <div id="home-lower-right">
          <div className="home_map">
            <iframe width="325" height="282" id="gmap_home" title="map"
              src="https://maps.google.com/maps?q=two%20little%20red%20hens&t=&z=16&ie=UTF8&iwloc=&output=embed"
              frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
            </iframe>
          </div>
          <div>
            <h2 id="where-are-we">Where Are We?</h2>
            <p id="address-1">1652 2nd Ave</p>
            <p id="address-2">New York, NY 10028</p>

          </div>

        </div>
      </div>

    </section>
  );

};
