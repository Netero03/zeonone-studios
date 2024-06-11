import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Footer, Navbar, ScrollToTop } from './components';
import { AboutUs, ContactUs, FilmDetailPage, FilmPage, Home, KeyTeam } from './pages';
import AnimatedCursor from 'react-animated-cursor';
import { isMobile } from 'react-device-detect';


function App() {
  return (
    <Router >
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
      {!isMobile && (
        <AnimatedCursor
          innerSize={8}
          outerSize={35}
          innerScale={1}
          outerScale={2}
          outerAlpha={0}
          hasBlendMode={true}
          innerStyle={{
            backgroundColor: 'var(--cursor-color)',
            boxShadow: '0 1px 8px rgba(0, 0, 0, 0.6)', // Adjust the shadow as needed
          }}
          outerStyle={{
            border: '3px solid var(--cursor-color)',
            boxShadow: '0 1px 8px rgba(0, 0, 0, 0.6)', // Adjust the shadow as needed
          }}
        />
      )}
    </Router>
  );
}

export default App;
