import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Navbar.css';
import logo1 from '../images/logo1.jpeg';

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
          <Link className="Navbar__brand" to="/">
            <img className="Navbar__brand-logo" src={logo1} alt="Logo" />
            <span className="font-weight-light">Eureka</span>
            <span className="font-weight-bold">Technology</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
