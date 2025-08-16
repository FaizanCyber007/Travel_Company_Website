import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlane,
  faMapMarkedAlt,
  faRoute,
  faImages,
  faBlog,
  faInfoCircle,
  faEnvelope,
  faFileContract,
  faPhone,
  faMapMarkerAlt,
  faClock,
  faHeart,
  faArrowUp,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faYoutube,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { to: "/", label: "Home", icon: faMapMarkedAlt },
    { to: "/destinations", label: "Destinations", icon: faMapMarkedAlt },
    { to: "/tours", label: "Tours", icon: faRoute },
    { to: "/gallery", label: "Gallery", icon: faImages },
    { to: "/blog", label: "Blog", icon: faBlog },
  ];

  const company = [
    { to: "/about", label: "About Us", icon: faInfoCircle },
    { to: "/contact", label: "Contact", icon: faEnvelope },
    { to: "/policies", label: "Policies", icon: faFileContract },
    { to: "/careers", label: "Careers" },
    { to: "/press", label: "Press" },
  ];

  const support = [
    { to: "/help", label: "Help Center" },
    { to: "/faq", label: "FAQ" },
    { to: "/booking-help", label: "Booking Help" },
    { to: "/travel-insurance", label: "Travel Insurance" },
    { to: "/cancellation", label: "Cancellation Policy" },
  ];

  const socialLinks = [
    {
      href: "https://www.facebook.com/faizan.javed.7758235",
      icon: faFacebook,
      label: "Facebook",
      color: "hover:text-blue-500",
    },
    {
      href: "https://x.com/FaizanJaved246",
      icon: faTwitter,
      label: "Twitter",
      color: "hover:text-blue-400",
    },
    {
      href: "https://www.instagram.com/faizanjaved246/",
      icon: faInstagram,
      label: "Instagram",
      color: "hover:text-pink-500",
    },
    {
      href: "https://www.linkedin.com/in/faizan-javed-b0267426a/",
      icon: faLinkedin,
      label: "LinkedIn",
      color: "hover:text-blue-600",
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-dark-800 to-dark-900 border-t border-dark-700">
      {/* Newsletter Section */}
      <div className="border-b border-dark-700 py-12">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="font-heading text-2xl font-bold text-white mb-4">
              Stay Updated on Travel Deals
            </h3>
            <p className="text-dark-300 mb-6">
              Subscribe to our newsletter and be the first to know about
              exclusive offers, travel tips, and new destinations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-dark-400 focus:border-primary-500 focus:outline-none"
              />
              <button className="btn-primary px-6 py-3 whitespace-nowrap">
                <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full blur-sm opacity-70"></div>
                  <div className="relative bg-gradient-to-r from-primary-600 to-primary-500 p-3 rounded-full">
                    <FontAwesomeIcon
                      icon={faPlane}
                      className="text-white text-xl"
                    />
                  </div>
                </div>
                <div>
                  <h4 className="font-heading text-2xl font-bold text-gradient">
                    WanderLux
                  </h4>
                  <p className="text-dark-400 text-sm">
                    Luxury Travel Experiences
                  </p>
                </div>
              </div>

              <p className="text-dark-300 mb-6 leading-relaxed">
                Creating extraordinary travel experiences since 2010. We
                specialize in curated luxury tours, cultural immersions, and
                once-in-a-lifetime adventures across the globe.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3 text-dark-300">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="text-primary-400"
                  />
                  <span>+92 332 043 6737</span>
                </div>
                <div className="flex items-center gap-3 text-dark-300">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-primary-400"
                  />
                  <span>faizanjaved246@gmail.com</span>
                </div>
                <div className="flex items-start gap-3 text-dark-300">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className="text-primary-400 mt-1"
                  />
                  <span>
                    123 Travel Avenue, Suite 456
                    <br />
                    New York, NY 10001
                  </span>
                </div>
                <div className="flex items-center gap-3 text-dark-300">
                  <FontAwesomeIcon
                    icon={faClock}
                    className="text-primary-400"
                  />
                  <span>Mon-Fri: 9AM-6PM EST</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h5 className="font-heading text-lg font-semibold text-white mb-6">
                Quick Links
              </h5>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.to}
                      className="flex items-center gap-2 text-dark-300 hover:text-primary-400 transition-colors text-sm"
                    >
                      <FontAwesomeIcon icon={link.icon} className="text-xs" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h5 className="font-heading text-lg font-semibold text-white mb-6">
                Company
              </h5>
              <ul className="space-y-3">
                {company.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.to}
                      className="flex items-center gap-2 text-dark-300 hover:text-primary-400 transition-colors text-sm"
                    >
                      {link.icon && (
                        <FontAwesomeIcon icon={link.icon} className="text-xs" />
                      )}
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h5 className="font-heading text-lg font-semibold text-white mb-6">
                Support
              </h5>
              <ul className="space-y-3">
                {support.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.to}
                      className="text-dark-300 hover:text-primary-400 transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Social & Copyright */}
      <div className="border-t border-dark-700 py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-dark-400 text-sm mr-2">Follow us:</span>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-dark-700 rounded-full flex items-center justify-center text-dark-300 ${social.color} transition-all duration-300 hover:scale-110 hover:bg-dark-600`}
                  aria-label={social.label}
                >
                  <FontAwesomeIcon icon={social.icon} />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="flex items-center gap-4 text-dark-400 text-sm">
              <span>
                © {new Date().getFullYear()} WanderLux. All rights reserved.
              </span>
              <span className="hidden md:inline">|</span>
              <span className="flex items-center gap-1">
                Made with{" "}
                <FontAwesomeIcon icon={faHeart} className="text-red-500" /> for
                travelers
              </span>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white hover:bg-primary-700 transition-all duration-300 hover:scale-110"
              aria-label="Back to top"
            >
              <FontAwesomeIcon icon={faArrowUp} />
            </button>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="border-t border-dark-700 py-6 bg-dark-900">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-8 text-dark-500 text-xs">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faHeart} className="text-red-500" />
              <span>Trusted by 50,000+ travelers</span>
            </div>
            <div>•</div>
            <span>IATA Certified</span>
            <div>•</div>
            <span>24/7 Customer Support</span>
            <div>•</div>
            <span>Secure Payment</span>
            <div>•</div>
            <span>Best Price Guarantee</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
