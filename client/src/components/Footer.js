import React from 'react';
// importing CSS file as a dependency
import '../styles/Style.css';

function Footer({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="https://github.com/vasilyl1"
          onBlur={() => handlePageChange('GitHub')}
          // if the current page is "GitHub"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'GitHub' ? 'nav-link active' : 'nav-link'}
        >
          GitHub
        </a>
      </li>
      <li className="nav-item">
        <a
          href="https://www.linkedin.com/in/vlikhovaido/"
          onBlur={() => handlePageChange('LinkedIn')}
          className={currentPage === 'GitHub' ? 'nav-link active' : 'nav-link'}
        >
          LinkedIn
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#e-mail"
          onBlur={() => handlePageChange('Email')}
          // if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'Email' ? 'nav-link active' : 'nav-link'}
        >
          likhovaido@gmail.com
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#phone"
          onBlur={() => handlePageChange('Phone')}
          // if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'Phone' ? 'nav-link active' : 'nav-link'}
        >
          705.300.0993
        </a>
      </li>
      </ul>
  );
}

export default Footer;