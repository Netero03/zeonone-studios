import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Footer, Navbar, ScrollToTop } from './components';
import AnimatedCursor from 'react-animated-cursor';
import { isMobile } from 'react-device-detect';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const FilmPage = lazy(() => import('./pages/FilmPage'));
const FilmDetailPage = lazy(() => import('./pages/FilmDetailPage'));
const KeyTeam = lazy(() => import('./pages/KeyTeam'));
const ContactUs = lazy(() => import('./pages/ContactUs'));
const AboutUs = lazy(() => import('./pages/AboutUs'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div className=' items-center justify-center text-center h-screen w-screen'><div className="spinner"><div></div></div></div>}>
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
      </Suspense>
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
            boxShadow: '0 1px 8px rgba(0, 0, 0, 0.6)',
          }}
          outerStyle={{
            border: '3px solid var(--cursor-color)',
            boxShadow: '0 1px 8px rgba(0, 0, 0, 0.6)',
          }}
        />
      )}
    </Router>
  );
}

export default App;
