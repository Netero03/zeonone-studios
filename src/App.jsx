import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Footer, Navbar, ScrollToTop } from './components';
import { AboutUs, ContactUs, FilmDetailPage, FilmPage, Home, KeyTeam } from './pages';

function App() {

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/films" element={<FilmPage />} />
        <Route path="/film/:id" element={<FilmDetailPage />} />
        <Route path="/key-team" element={<KeyTeam />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}


export default App;
