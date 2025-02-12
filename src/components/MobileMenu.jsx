import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const MobileNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false); // For handling exit animation

  const closeMenu = () => {
    setIsAnimating(true); // Start exit animation
    setTimeout(() => {
      setIsMenuOpen(false); // Close the menu after animation
      setIsAnimating(false);
    }, 500); // Match the duration of the animation (500ms)
  };

  return (
    <>
      {/* Mobile Navbar */}
      <nav className="bg-[#814d1b] h-16 flex items-center justify-between px-6 lg:hidden">
        <div className="text-white font-bold text-xl">DEEP VIHAR</div>

        {/* Hamburger Icon for Mobile */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="text-white text-2xl focus:outline-none"
        >
          <FaBars />
        </button>
      </nav>

      {/* Mobile Menu with Overlay */}
      {(isMenuOpen || isAnimating) && (
        <div
          className={`fixed inset-0 z-40 transition-opacity duration-300 ease-in-out ${
            isMenuOpen && !isAnimating ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          {/* Background Overlay */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={closeMenu} // Close menu when overlay is clicked
          ></div>

          {/* Mobile Menu */}
          <div
            className={`fixed top-0 right-0 h-full w-[250px] bg-[#814d1b] text-white z-50 transform ${
              isMenuOpen && !isAnimating ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-500 ease-in-out`}
          >
            <div className="flex items-center justify-between p-4">
              <span className="text-xl font-bold">Menu</span>
              <button
                onClick={closeMenu}
                className="text-white text-2xl focus:outline-none"
              >
                <FaTimes />
              </button>
            </div>
            <div className="flex flex-col space-y-4 p-4">
              <NavItem to="/" label="Home" />
              <NavItem to="/about-deep-vihar" label="About Deep Vihar" />
              <NavItem to="/about-us" label="About Us" />
              <NavItem to="/properties" label="Properties" />
              <NavItem to="/helping-hands" label="Helping Hands" />
              <NavItem to="/home-decor" label="Home Decor" />
              <NavItem to="/contact-us" label="Contact Us" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// Reusable Nav Item Component
// eslint-disable-next-line react/prop-types
const NavItem = ({ to, label }) => {
  return (
    <Link
      to={to}
      className="block text-white text-lg font-medium hover:text-[#814d1b] hover:bg-white p-2 rounded-md"
    >
      {label}
    </Link>
  );
};

export default MobileNavbar;
