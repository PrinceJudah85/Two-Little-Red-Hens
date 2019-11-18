import React from 'react';
import phoneImg from '../images/phone.png';

export default function ContactUs() {
  return (
    <section id="contact-us-section">
      <h2 className="contact-by-phone">Contact by Phone!</h2>
      <div id="contact-phone-div">
        <img className="phone-img" src={phoneImg} alt="phone image"></img>
        <p className="phone-number">516-699-9001</p>
      </div>

      <h2 className="location-header">Where are we located?</h2>

      <div className="gmap_canvas">
        <iframe width="420" height="420" id="gmap_canvas"
          src="https://maps.google.com/maps?q=two%20little%20red%20hens&t=&z=17&ie=UTF8&iwloc=&output=embed"
          frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
        </iframe>
      </div>


    </section>
  );

};
