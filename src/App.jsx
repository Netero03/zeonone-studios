import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Footer, Navbar, ScrollToTop } from './components';
import { AboutUs, ContactUs, FilmDetailPage, FilmPage, Home, KeyTeam } from './pages';
import { isMobile } from 'react-device-detect';
import Loading from './components/Loading';


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay (e.g., fetching data)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);


  if (isLoading) {
    return <Loading />; // Render the loading screen while loading
  }
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

    </Router>
  );
}

export default App;
