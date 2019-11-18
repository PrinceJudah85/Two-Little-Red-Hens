import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer'>
      <div className='sm-links'>
        <Link className='ig-icon' to='https://www.instagram.com/twolittleredhens/?hl=en'>
          <img src='https://i.imgur.com/hnU4vQn.png' />
        </Link>
        <Link className='fb-icon' to='https://www.facebook.com/Two-Little-Red-Hens-Bakery-46107756057/'>
          <img src='https://i.imgur.com/doI0n8s.png' />
        </Link>
      </div>
    </div >
  )
}

export default Footer;