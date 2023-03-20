import React from 'react';
// importing CSS file as a dependency
import '../styles/Style.css';
import Navigation from './Navigation';

function Header() {
  return (
    <div>
      <header className="header">
        <h1>Vasily Likhovaydo</h1>
      </header>
      <Navigation />
    </div>
  );
}

export default Header;
