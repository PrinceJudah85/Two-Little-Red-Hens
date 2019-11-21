import React from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

class BurgerMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen })
  }

  closeMenu() {
    this.setState({ menuOpen: false })
  }

  toggleMenu() {
    this.setState(state => ({ menuOpen: !state.menuOpen }))
  }

  render() {
    return (
      <div id='burger-menu'>
        <Menu disableAutoFocus isOpen={this.state.menuOpen}
          onStateChange={(state) => this.handleStateChange(state)}>
          <Link id="home" className="menu-item" to="/" onClick={() => this.closeMenu()}>Home</Link>
          <Link id="menu" className="menu-item" to="/Thanksgiving" onClick={() => this.closeMenu()}>Menu</Link>
          <Link id="about-us" className="menu-item" to="/AboutUs" onClick={() => this.closeMenu()}>About Us</Link>
          <Link id="contact-us" className="menu-item" to="/ContactUs" onClick={() => this.closeMenu()}>Contact Us</Link>
        </Menu>
      </div>
    )
  }
}

export default BurgerMenu;