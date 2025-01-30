import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TiTabsOutline, TiThMenu } from "react-icons/ti";

// import { FaUserCircle } from "react-icons/fa";
const Header= () => {
  const [isOpen, setIsOpen] = useState(false);
 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

 
  return (
    <header className="fixed bg-black/50 text-white top-0 left-0 right-0 z-50 shadow-md">
      <div className="flex text-white justify-between items-center p-4 max-w-screen-2xl mx-auto">
        {/* Logo */}
        <div className="text-sm md:text-xl font-bold text-green-600">
          <Link to="/">RAY'S <span className="text-orange-600">FRUITOPIA</span></Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-2 items-center gap-5">
          <Link
            to="/"
            className="py-2 text-white uppercase text-xl"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="py-2 text-white uppercase text-xl"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            to="/mission"
            className="py-2 text-white font-serif text-xl"
            onClick={toggleMenu}
          >
           MISSION
          </Link>
          <Link
            to="/achievement"
            className="py-2 text-white font-serif text-xl"
            onClick={toggleMenu}
          >
           ACHIEVEMENT
          </Link>
          <Link
            to="/contact"
            className="py-2 text-white font-serif text-xl"
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </nav>
        {/* Dropdown Button for Desktop */}
       

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          <TiThMenu size={28} />
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          className="fixed inset-0 bg-black/80 opacity-30 text-white shadow-lg md:hidden z-50"
        >
          <div className="flex justify-end p-4">
            <button className="text-white" onClick={toggleMenu}>
              <TiTabsOutline size={28} />
            </button>
          </div>
          <div className="flex flex-col items-center p-4">
            <Link
              to="/"
              className="py-2 text-white text-lg"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="py-2 text-white text-lg"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/service"
              className="py-2 text-white text-lg"
              onClick={toggleMenu}
            >
              Service
            </Link>
            <Link
              to="/project"
              className="py-2 text-white text-lg"
              onClick={toggleMenu}
            >
              Project
            </Link>
            <Link
              to="/contact"
              className="py-2 text-white text-lg"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
        </motion.nav>
      )}
    </header>
  );
};

export default Header;
