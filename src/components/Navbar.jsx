import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faHome,
  faMapMarkerAlt,
  faRoute,
  faImages,
  faBlog,
  faInfoCircle,
  faEnvelope,
  faFileContract,
  faPhone,
  faMountain,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";

const NavItem = ({ to, children, icon, onClick, className = "" }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      `flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all duration-300 whitespace-nowrap text-sm font-medium ${
        isActive
          ? "bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-lg shadow-primary-500/25 transform scale-105"
          : "text-dark-200 hover:text-white hover:bg-dark-700/80 hover:shadow-md hover:transform hover:scale-105"
      } ${className}`
    }
  >
    <FontAwesomeIcon icon={icon} className="text-sm flex-shrink-0" />
    <span>{children}</span>
  </NavLink>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  // Navigation items array for easier management
  const navItems = [
    { to: "/", icon: faHome, label: "Home" },
    { to: "/destinations", icon: faMapMarkerAlt, label: "Destinations" },
    { to: "/tours", icon: faRoute, label: "Tours" },
    { to: "/gallery", icon: faImages, label: "Gallery" },
    { to: "/blog", icon: faBlog, label: "Blog" },
    { to: "/about", icon: faInfoCircle, label: "About" },
    { to: "/contact", icon: faEnvelope, label: "Contact" },
    { to: "/policies", icon: faFileContract, label: "Policies" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-dark-900/96 backdrop-blur-lg shadow-2xl border-b border-dark-700/50"
          : "bg-dark-900/85 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-3 lg:px-2 xl:px-8">
        {/* Desktop Layout */}
        <div className="hidden gap-5 w-full lg:flex lg:items-center lg:justify-between h-20">
          {/* Logo Section - Left aligned with gap */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-3 group ml-1">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl blur-sm opacity-70 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="relative bg-gradient-to-r from-primary-600 to-primary-500 p-3 rounded-xl shadow-lg">
                  <FontAwesomeIcon
                    icon={faMountain}
                    className="text-white text-lg"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-xl font-bold text-gradient leading-tight">
                  WanderLux
                </span>
                <span className="text-xs text-dark-400 font-medium">
                  Luxury Travel
                </span>
              </div>
            </Link>
          </div>

          {/* Navigation - Centered */}
          <div className="flex-1 flex justify-center">
            <nav className="flex items-center gap-1 px-3 py-2 bg-dark-800/80 rounded-2xl border border-dark-700/50 shadow-lg backdrop-blur-sm">
              {navItems.map((item) => (
                <NavItem
                  key={item.to}
                  to={item.to}
                  icon={item.icon}
                  className="px-3 py-2"
                >
                  {item.label}
                </NavItem>
              ))}
            </nav>
          </div>

          {/* CTA Section - Right aligned with gap */}
          <div className="flex items-center justify-end gap-3 mr-1">
            <a
              href="tel:+923320436737"
              className="group flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-accent-600 to-accent-500 hover:from-accent-500 hover:to-accent-400 text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110"
              title="Call us: +92 332 043 6737"
            >
              <FontAwesomeIcon 
                icon={faPhone} 
                className="text-lg group-hover:animate-pulse" 
              />
            </a>
            <Link
              to="/contact"
              className="btn-primary px-6 py-3 text-sm font-semibold whitespace-nowrap flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <FontAwesomeIcon icon={faCalendarAlt} className="text-sm" />
              Book Now
            </Link>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          <div className="flex items-center justify-between h-16">
            {/* Mobile Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg blur-sm opacity-70 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="relative bg-gradient-to-r from-primary-600 to-primary-500 p-2 rounded-lg">
                  <FontAwesomeIcon
                    icon={faMountain}
                    className="text-white text-base"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-lg font-bold text-gradient leading-tight">
                  WanderLux
                </span>
                <span className="text-xs text-dark-400 font-medium">
                  Luxury Travel
                </span>
              </div>
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="relative p-3 rounded-xl bg-dark-800/80 border border-dark-700/50 text-dark-200 hover:text-white hover:bg-dark-700 transition-all duration-300 shadow-lg"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              <FontAwesomeIcon 
                icon={open ? faTimes : faBars} 
                className={`text-lg transition-transform duration-300 ${open ? 'rotate-180' : 'rotate-0'}`}
              />
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              open 
                ? "max-h-[600px] opacity-100 transform translate-y-0" 
                : "max-h-0 opacity-0 transform -translate-y-4"
            }`}
          >
            <div className="py-4 border-t border-dark-700/50 bg-dark-900/95 backdrop-blur-lg rounded-b-2xl shadow-xl">
              {/* Navigation Grid */}
              <div className="grid grid-cols-2 gap-2 px-2 mb-4">
                {navItems.map((item) => (
                  <NavItem
                    key={item.to}
                    to={item.to}
                    icon={item.icon}
                    onClick={closeMenu}
                    className="w-full justify-center text-center py-3"
                  >
                    {item.label}
                  </NavItem>
                ))}
              </div>

              {/* Mobile CTA Section */}
              <div className="px-4 pt-4 border-t border-dark-700/50">
                <div className="flex items-center gap-3">
                  <a
                    href="tel:+923320436737"
                    className="group flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r from-accent-600 to-accent-500 hover:from-accent-500 hover:to-accent-400 text-white transition-all duration-300 shadow-lg flex-shrink-0"
                    title="Call us: +92 332 043 6737"
                  >
                    <FontAwesomeIcon 
                      icon={faPhone} 
                      className="text-lg group-hover:animate-pulse" 
                    />
                  </a>
                  <Link
                    to="/contact"
                    className="btn-primary flex-1 text-center py-4 flex items-center justify-center gap-2 font-semibold shadow-lg"
                    onClick={closeMenu}
                  >
                    <FontAwesomeIcon icon={faCalendarAlt} className="text-sm" />
                    Book Your Adventure
                  </Link>
                </div>
                
                {/* Contact Info */}
                <div className="mt-3 text-center">
                  <p className="text-dark-400 text-xs">
                    Call us: <span className="text-accent-400 font-medium">+92 332 043 6737</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {open && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-[-1] transition-opacity duration-300"
          onClick={closeMenu}
        />
      )}
    </header>
  );
}