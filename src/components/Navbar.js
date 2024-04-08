
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import '../style.css'


import {ReactComponent as MoonIcon} from './assets/moon.svg';
import {ReactComponent as SunIcon} from './assets/sun.svg';

function Navbar() {
    const [isDarkMode, setIsDarkMode] = React.useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        //const element = document.getElementById("theme");
        const theme_switch = document.getElementById('the_theme');

        theme_switch.classList.toggle('ctp-macchiato')
        
        //element.classList.toggle('ctp-macchiato')

    };
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10; // Adjust the 50px to the desired scroll threshold
            setScrolled(isScrolled);
        };

        // Listen for scroll events
        window.addEventListener('scroll', handleScroll);

        // Clean up function to remove the event listener
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
       <nav className={` z-10 fixed top-0 w-full flex justify-between items-center p-4 transition duration-600 ${scrolled ? 'backdrop-blur-md' : 'bg-transparent'}`}>
          {/* List container modified to center items and take up available space */}
          <ul className="flex flex-grow justify-center items-center space-x-4 ">
            <li className="nav-hover btn btn-left text-transparent bg-gradient-to-r bg-clip-text from-ctp-lavender to-ctp-maroon  font-bold">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-hover btn btn-left text-transparent bg-gradient-to-r bg-clip-text from-ctp-lavender to-ctp-maroon font-bold">
              <Link to="/about">About</Link>
            </li>
            <li className="nav-hover btn btn-left text-transparent bg-gradient-to-r bg-clip-text from-ctp-lavender to-ctp-maroon font-bold">
              <Link to="/projects">Projects</Link>
            </li>
            <li className="nav-hover btn btn-left text-transparent bg-gradient-to-r bg-clip-text from-ctp-lavender to-ctp-maroon font-bold">
              <Link to="/contact">Contact Me</Link>
            </li>
          </ul>

          {/* SVG Button, adjust the width and height directly in the SVG component or use Tailwind classes */}
          <button id="switcher" onClick={toggleDarkMode} className="btn btn-left flex-shrink-0">
            {isDarkMode ? <SunIcon alt="Light Mode" className=" w-8 h-8 "/> : <MoonIcon alt="Dark Mode" className=" w-8 h-8 "/>}
          </button>

          

          
        </nav>
      );
}

export default Navbar;
