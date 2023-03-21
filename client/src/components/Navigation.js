import React, { useState } from 'react';
import '../styles/Style.css';
import Tabs from './Tabs';
import About from './tabs/About';
import Portfolio from './tabs/Portfolio';
import Contact from './tabs/Contact';
import Resume from './tabs/Resume';

function Navigation() {
  const [currentPage, setCurrentPage] = useState('About');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className='menu' >
      {/* We are passing the currentPage from state and the function to update it */}
      <Tabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}

export default Navigation;
