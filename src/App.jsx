import React, { Suspense, lazy, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Footer, Navbar, ScrollToTop } from './components';
import Loading from './components/Loading'; // Import the Loading component

const Home = lazy(() => import('./pages/Home'));
const FilmPage = lazy(() => import('./pages/FilmPage'));
const FilmDetailPage = lazy(() => import('./pages/FilmDetailPage'));
const KeyTeam = lazy(() => import('./pages/KeyTeam'));
const ContactUs = lazy(() => import('./pages/ContactUs'));
const AboutUs = lazy(() => import('./pages/AboutUs'));


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to ensure loading screen is visible
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />; // Render the loading screen initially
  }

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/films" element={<FilmPage />} />
          <Route path="/film/:id" element={<FilmDetailPage />} />
          <Route path="/key-team" element={<KeyTeam />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
