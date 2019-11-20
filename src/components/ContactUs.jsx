import React from 'react';
import phoneImg from '../images/phone.png';
import submitImg from '../images/submit.png';

export default function ContactUs() {
  return (
    <section id="contact-us-section">
      <div>
        <h2 className="contact-by-phone">Contact by Phone!</h2>
        <div id="contact-phone-div">
          <img className="phone-img" src={phoneImg} alt="phone"></img>
          <a className="phone-number" href="tel:2124520476">212-452-0476</a>
        </div>

        <h2 className="location-header">Where are we located?</h2>

        <div className="gmap_canvas">
          <iframe width="420" height="420" id="gmap_canvas" title="map"
            src="https://maps.google.com/maps?q=two%20little%20red%20hens&t=&z=17&ie=UTF8&iwloc=&output=embed"
            frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
          </iframe>
        </div>
      </div>
      <div>
        <h2 className="message-us">Message Us!</h2>

        <div className="message-box" >
          <label className="input-label">To:</label>
          <input className="input-field" type="text" name="to"></input>
          <hr></hr>
          <label className="input-label">From:</label>
          <input className="input-field" type="text" name="from"></input>
          <hr></hr>
          <textarea placeholder="Write here..."></textarea>
          <a href="javascript:void(0)" >
            <img className="submit-img" src={submitImg} alt="submit"></img>
          </a>

        </div>
      </div>


    </section>
  );

};
