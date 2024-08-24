import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; 

// Import page components
import Home from './pages/Home';
import NewBestsellers from './pages/NewBestsellers';
import Makeup from './pages/Makeup';
import Skincare from './pages/Skincare';
import Haircare from './pages/Haircare';
import Hair from './pages/Hair';
import Fragrances from './pages/Fragrances';
import Brands from './pages/Brands';
import Newsletter from './pages/Newsletter';
import Accessories from './pages/Accessories';
import ClearanceSale from './pages/ClearanceSale';

function App() {
  return (
    <Router>
      <div>
        <Navbar />{/*The navigation bar to appear at the top */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-bestsellers" element={<NewBestsellers />} />
          <Route path="/makeup" element={<Makeup />} />
          <Route path="/skincare" element={<Skincare />} />
          <Route path="/haircare" element={<Haircare />} />
          <Route path="/hair" element={<Hair />} />
          <Route path="/fragrances" element={<Fragrances />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/clearance-sale" element={<ClearanceSale />} />
        </Routes>
        <Footer /> {/* The footer to  appear at the bottom*/}
      </div>
    </Router>
  );
}

export default App;

