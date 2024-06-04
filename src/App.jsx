import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Footer, MaskedCursor, Navbar, ScrollToTop } from './components';
import { AboutUs, ContactUs, FilmDetailPage, FilmPage, Home, KeyTeam } from './pages';
import AnimatedCursor from 'react-animated-cursor';

function App() {
  return (
    <Router >
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/films" element={<FilmPage />} />
        <Route path="/film/:id" element={<FilmDetailPage />} />
        <Route path="/key-team" element={<KeyTeam />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
      <Footer />
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: 'var(--cursor-color)'
        }}
        outerStyle={{
          border: '3px solid var(--cursor-color)'
        }}
      />
    </Router>
  );
}

export default App;
