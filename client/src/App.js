import React from 'react';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Project from './components/Card';
import Footer from './components/Footer';

// In the main App component, only single instances of Header, Navigtion and Footer
//  are rendered and several instances of Project
function App() {
  return (
    <div>
      <Header />
      <Navigation />
      <Project />
      <Project />
      <Project />
      <Footer />
    </div>
  );
}

export default App;