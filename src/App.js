import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
// Import other components



function App() {
  return (
<html id="the_theme" className='ctp-macchiato'>
  
    <Router>

{/* Include this in your component */}

        <Navbar />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} exact />
        <Route path="/contact" element={<Contact />} />
        
        {/* Define other routes */}
      </Routes>
    </Router>

</html>
  );
}

export default App;
