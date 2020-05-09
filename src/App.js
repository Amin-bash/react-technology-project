import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';
import { Navbar } from './components/Navbar/Navbar';
import { Header } from './components/Header/Header';
import { KnowAbout } from './components/KnowAbout/KnowAbout';
import { WhoWeAre } from './components/WhoWeAre/WhoWeAre';
import { Cards } from './components/Cards/Cards';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <KnowAbout />
      <WhoWeAre />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
