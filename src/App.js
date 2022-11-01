import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Calculator from './components/Calculator';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Quotes from './components/Quotes';
import Footer from './components/Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quotes" element={<Quotes />} />
        </Routes>
        <Footer />
      </>
    );
  }
}

export default App;
