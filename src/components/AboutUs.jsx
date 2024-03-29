import React from 'react';

function AboutUs() {
  return (
    <div className='about'>
      <div className='about-left'>
        <img src='https://i.imgur.com/7wrI0QX.png' alt="store front" />
      </div>
      <div className='testimonial-left'>
        <h3>Testimonials</h3>
        <img src='https://i.imgur.com/qCSBwl3.png' alt="testimonial" />
        <br />
        <img id='second-testimonial' src='https://i.imgur.com/qTnHFqG.png' alt="testimonial" />
      </div>
      <div className='about-right'>
        <h3>Our Story</h3>
        <p>Established in 1652, Two Little Red Hens has been serving the Upper East Side community with savoury, sweet bakes.  Known for our perfectly triangular cheesecake and buttery textures, a local favourite amongst the dessert fans.</p>
      </div>
      <div className='testimonial-right'>
        <img src='https://i.imgur.com/OF8FKhs.png' alt="testimonial" />
        <div className='red-hen'>
          <img src='https://i.imgur.com/MvekrMR.png' alt="red hen" />
        </div>
      </div>
    </div>
  )
}
export default AboutUs;