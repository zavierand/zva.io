import React, { useState, useEffect } from 'react';
import NavBar from './components/Navbar.jsx';
import Sidebar from './components/Sidebar.jsx';
import Homepage from './pages/Homepage.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';
import Personal from './pages/Personal.jsx';

function App() {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      if (!aboutSection) return;

      const aboutSectionTop = aboutSection.offsetTop;
      const scrollY = window.scrollY;
      const windowInnerHeight = window.innerHeight;

      if (scrollY > aboutSectionTop - windowInnerHeight / 2) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div className="App">
      <Homepage />
      <Sidebar className="z-50" />
      <NavBar slideOut={!showNavbar} />
      <About />
      <Projects />
      <Contact />
      <Personal />
    </div>
  );
}

export default App;

