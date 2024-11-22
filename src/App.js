import React from 'react';
import './AppStyles.css';
import Header from './components/Header';
import SectionGrid from './components/SectionGrid';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <SectionGrid />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
