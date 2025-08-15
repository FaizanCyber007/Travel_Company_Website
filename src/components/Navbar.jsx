import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faHome,
  faMapMarkedAlt,
  faRoute,
  faImages,
  faBlog,
  faInfoCircle,
  faEnvelope,
  faFileContract,
  faPlane,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const NavItem = ({ to, children, icon, onClick }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      `flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
        isActive
          ? "bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-glow"
          : "text-dark-200 hover:text-white hover:bg-dark-700 hover:shadow-lg"
      }`
    }
  >
    <FontAwesomeIcon icon={icon} className="text-sm" />
    {children}
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

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-dark-900/95 backdrop-blur-md shadow-dark border-b border-dark-700"
          : "bg-dark-900/80 backdrop-blur-sm"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full blur-sm opacity-70 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-gradient-to-r from-primary-600 to-primary-500 p-2 rounded-full">
                <FontAwesomeIcon
                  icon={faPlane}
                  className="text-white text-xl"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-xl font-bold text-gradient">
                WanderLux
              </span>
              <span className="text-xs text-dark-400 font-medium">
                Luxury Travel
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <NavItem to="/" icon={faHome}>
              Home
            </NavItem>
            <NavItem to="/destinations" icon={faMapMarkedAlt}>
              Destinations
            </NavItem>
            <NavItem to="/tours" icon={faRoute}>
              Tours
            </NavItem>
            <NavItem to="/gallery" icon={faImages}>
              Gallery
            </NavItem>
            <NavItem to="/blog" icon={faBlog}>
              Blog
            </NavItem>
            <NavItem to="/about" icon={faInfoCircle}>
              About
            </NavItem>
            <NavItem to="/contact" icon={faEnvelope}>
              Contact
            </NavItem>
            <NavItem to="/policies" icon={faFileContract}>
              Policies
            </NavItem>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+1234567890"
              className="flex items-center gap-2 text-dark-300 hover:text-accent-400 transition-colors"
            >
              <FontAwesomeIcon icon={faPhone} />
              <span className="text-sm">+1 (234) 567-890</span>
            </a>
            <Link to="/contact" className="btn-primary">
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg bg-dark-800 text-dark-200 hover:text-white hover:bg-dark-700 transition-all duration-300"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <FontAwesomeIcon icon={open ? faTimes : faBars} size="lg" />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 border-t border-dark-700">
            <div className="flex flex-col gap-2">
              <NavItem to="/" icon={faHome} onClick={closeMenu}>
                Home
              </NavItem>
              <NavItem
                to="/destinations"
                icon={faMapMarkedAlt}
                onClick={closeMenu}
              >
                Destinations
              </NavItem>
              <NavItem to="/tours" icon={faRoute} onClick={closeMenu}>
                Tours
              </NavItem>
              <NavItem to="/gallery" icon={faImages} onClick={closeMenu}>
                Gallery
              </NavItem>
              <NavItem to="/blog" icon={faBlog} onClick={closeMenu}>
                Blog
              </NavItem>
              <NavItem to="/about" icon={faInfoCircle} onClick={closeMenu}>
                About
              </NavItem>
              <NavItem to="/contact" icon={faEnvelope} onClick={closeMenu}>
                Contact
              </NavItem>
              <NavItem to="/policies" icon={faFileContract} onClick={closeMenu}>
                Policies
              </NavItem>
            </div>

            <div className="mt-4 pt-4 border-t border-dark-700 flex flex-col gap-3">
              <a
                href="tel:+1234567890"
                className="flex items-center gap-2 text-dark-300 hover:text-accent-400 transition-colors px-4"
              >
                <FontAwesomeIcon icon={faPhone} />
                <span>+1 (234) 567-890</span>
              </a>
              <Link
                to="/contact"
                className="btn-primary mx-4"
                onClick={closeMenu}
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
