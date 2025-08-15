import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompass,
  faHome,
  faSearch,
  faMapMarkedAlt,
  faPlane,
} from "@fortawesome/free-solid-svg-icons";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          {/* 404 Number */}
          <div className="relative mb-8">
            <h1 className="font-heading text-9xl font-bold text-transparent bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <FontAwesomeIcon
                icon={faCompass}
                className="text-6xl text-primary-500/20 animate-spin"
                style={{ animationDuration: "8s" }}
              />
            </div>
          </div>

          {/* Error Message */}
          <h2 className="font-heading text-4xl font-bold text-white mb-4">
            Oops! You're Off the Map
          </h2>
          <p className="text-xl text-dark-300 mb-8">
            Looks like you've wandered off the beaten path. The page you're
            looking for doesn't exist, but don't worry - we'll help you find
            your way back to amazing destinations!
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/" className="btn-primary px-8 py-4 text-lg">
              <FontAwesomeIcon icon={faHome} className="mr-2" />
              Go Home
            </Link>
            <Link
              to="/destinations"
              className="btn-secondary px-8 py-4 text-lg"
            >
              <FontAwesomeIcon icon={faMapMarkedAlt} className="mr-2" />
              Explore Destinations
            </Link>
          </div>

          {/* Search Suggestion */}
          <div className="card p-6 mb-8">
            <h3 className="font-heading text-xl font-semibold text-white mb-4">
              Try searching for what you need:
            </h3>
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Search destinations, tours, or pages..."
                className="flex-1 px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-dark-400 focus:border-primary-500 focus:outline-none"
              />
              <button className="btn-accent px-6 py-3">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link to="/" className="card card-hover p-4 text-center group">
              <FontAwesomeIcon
                icon={faHome}
                className="text-2xl text-primary-500 mb-2 group-hover:scale-110 transition-transform"
              />
              <div className="text-white font-medium">Home</div>
            </Link>
            <Link
              to="/destinations"
              className="card card-hover p-4 text-center group"
            >
              <FontAwesomeIcon
                icon={faMapMarkedAlt}
                className="text-2xl text-primary-500 mb-2 group-hover:scale-110 transition-transform"
              />
              <div className="text-white font-medium">Destinations</div>
            </Link>
            <Link to="/tours" className="card card-hover p-4 text-center group">
              <FontAwesomeIcon
                icon={faPlane}
                className="text-2xl text-primary-500 mb-2 group-hover:scale-110 transition-transform"
              />
              <div className="text-white font-medium">Tours</div>
            </Link>
            <Link
              to="/contact"
              className="card card-hover p-4 text-center group"
            >
              <FontAwesomeIcon
                icon={faCompass}
                className="text-2xl text-primary-500 mb-2 group-hover:scale-110 transition-transform"
              />
              <div className="text-white font-medium">Contact</div>
            </Link>
          </div>

          {/* Fun Message */}
          <div className="mt-12 text-dark-400">
            <p className="text-sm">
              "Not all those who wander are lost, but this page definitely is."
              🧭
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
