import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/reset.css';
import './styles/Style.css';

// In the main App component, only single instances of Header, Navigtion and Footer
//  are rendered and several instances of Project
function App() {
  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
}

export default App;