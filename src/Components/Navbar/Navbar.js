import React, { useState, useEffect } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import logo from '../Assets/logo.png';
import { IoMdMenu } from "react-icons/io";
import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';


const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const location = useLocation(); // Use useLocation

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 10) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Close mobile menu when location changes
    setMobileMenu(false);
    // Scroll to the top of the page when navigating to a new location
    window.scrollTo(0, 0);
  }, [location]);

  const navItems = [
    { id: 'home', label: 'Home', link: '/' },
    { id: 'login', label: 'Login', link: '/login' },
  ];

  const triggerMobileNavItem = (target) => {
    setMobileMenu(false);
    const targetElement = document.querySelector(target);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenu(false);
  };




  return (
    <>
     <nav className={`fixed top-0 w-full border-b border-b-[#9B1F53] z-50 transition duration-300 ${hasScrolled ? 'bg-[#13072E]' : ''} ${hasScrolled && window.scrollY > 10 ? 'top-0 shadow-xl' : ''}`}>
      <div className="relative max-w-[1240px] mx-auto sm:ps-9 sm:pe-9 ps-5 pe-5 xl:ps-0 xl:pe-0">
        <div className="md:py-4 py-6 mx-auto flex items-center justify-between xl:justify-start">

          <div className="flex flex-wrap items-center cursor-pointer">
          <img src={logo} alt="Logo" className='w-12 h-12' />
          <span className="flex-grow text-4xl font-bold text-white ml-2">Bizail</span>
        </div>

          <div className="hidden md:flex items-center space-x-24 ml-auto">
            <ul className="flex items-center space-x-3 mx-auto">
              {navItems.map((item) => (
                <li key={item.id} className="p-5 mx-1 border-transparent relative group cursor-pointer">
                  <NavLink
                    to={item.link}
                    onClick={() => setMobileMenu(false)} // Close mobile menu when navigating
                    className={`text-white hover:text-[#9DCD5A]`}
                    activeclassname="text-[#9DCD5A] underline" // Apply green text color and underline when link is active
                    style={{ color: location.pathname === item.link ? '#9DCD5A' : '' }} // Apply green text color when link is active
                  >
                    {item.label}
                    <span
                      className={`absolute bottom-0 left-0 w-full h-[3px] bg-[#9DCD5A] ${
                        location.pathname === item.link ? 'scale-x-100' : 'scale-x-0'
                      } transition-transform origin-bottom-left`}
                    ></span>
                  </NavLink>
                </li>
              ))}
            </ul>
          
          </div>

          <div className="block md:hidden">
              <button onClick={() => setMobileMenu(!mobileMenu)}>
                {mobileMenu ? (
                  <IoMdMenu className="text-4xl text-[#9DCD5A]" />
                ) : (
                  <IoMdMenu className="text-4xl text-[#9DCD5A]" />
                )}
              </button>
            </div>
        </div>
      </div>
      </nav>

      

      {/* Mobile Menu */}
      {mobileMenu && (
          <div className="fixed inset-0 z-50 min-h-screen bg-black bg-opacity-70">
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 60, duration: 1 }}
            className="absolute right-0 min-h-screen sm:w-3/5 w-full py-4 px-8 shadow md:w-1/3 bg-[#13072E] z-50">
             <button className="absolute top-0 right-0 mt-4 mr-4" onClick={() => setMobileMenu(false)}>
               <AiOutlineClose className="text-4xl text-white hover:text-gray-300" />
             </button>
            <ul className="mt-8 flex flex-col space-y-7">
              {navItems.map((item) => (
                <li key={item.id} className="py-2">
                  <NavLink
                    to={item.link}
                    className="cursor-pointer pt-0.5  uppercase text-white"
                    activeclassname="font-semibold"
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            
          </motion.div>
        </div>
        )}
    </>
  );
};

const MobileNavItem = ({ children, onClick }) => {
  return (
    <li className="py-2">
      <span onClick={onClick} className="cursor-pointer pt-0.5  uppercase text-white">
        {children}
      </span>
    </li>
  );
};

export default Navbar;