import React from 'react';
import { ReactComponent as Logo } from '../../assets/MYart.svg';
import './Navbar.styles.css';

function Navbar() {
  return (
    <div className="header">
      <Logo className="logo" />
    </div>
  );
}

export default Navbar;
