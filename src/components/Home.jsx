import React from 'react';
import heroImg from '../images/main.png';
import scrollInd from '../images/scroll-indicator.png';
import Menu from './Menu';

export default function Home() {
  return (
    <section id="home-section">
      <div>
        <img className="main-img" src={heroImg} alt="main"></img>
        <img className="fixed-img bounce" src={scrollInd} alt="chevron" />
      </div>
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
