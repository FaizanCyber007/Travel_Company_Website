import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faMapMarkerAlt,
  faStar,
  faCalendarAlt,
  faUsers,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

export default function DestinationDetailsModal({
  isOpen,
  onClose,
  destination,
  onBook,
}) {
  if (!isOpen || !destination) return null;

  const features = [
    "Professional Tour Guide",
    "Luxury Accommodation",
    "All Meals Included",
    "Transportation",
    "Travel Insurance",
    "24/7 Support",
  ];

  return (
    <div className="fixed inset-0 bg-black/75 z-50 flex items-center justify-center p-4">
      <div className="bg-dark-800 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        {/* Header Image */}
        <div className="relative h-64 md:h-80">
          <img
            src={destination.img}
            alt={destination.title}
            className="w-full h-full object-cover rounded-t-2xl"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 bg-dark-800/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-dark-700 transition-colors"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>

          {/* Overlay Info */}
          <div className="absolute bottom-4 left-4 right-4">
            <div className="bg-dark-800/90 backdrop-blur-sm rounded-lg p-4">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {destination.title}
              </h2>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-dark-300">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                  {destination.location}
                </div>
                <div className="text-right">
                  <div className="text-accent-400 font-bold text-xl">
                    {destination.price}
                  </div>
                  <div className="text-dark-400 text-sm">per person</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="md:col-span-2">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  About This Destination
                </h3>
                <p className="text-dark-300 leading-relaxed">
                  {destination.description ||
                    "Experience the magic of this incredible destination with our expertly crafted tours and personalized service. Our professional guides will take you on an unforgettable journey through breathtaking landscapes, rich cultural heritage, and authentic local experiences that will create memories to last a lifetime."}
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  What's Included
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center text-dark-300"
                    >
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="text-primary-400 mr-3 flex-shrink-0"
                      />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              <div className="card p-4">
                <h4 className="font-bold text-white mb-3">Trip Details</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-dark-300">
                      <FontAwesomeIcon
                        icon={faStar}
                        className="mr-2 text-accent-400"
                      />
                      Rating
                    </div>
                    <div className="text-white font-medium">
                      {destination.rating || "4.8"} / 5
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-dark-300">
                      <FontAwesomeIcon
                        icon={faCalendarAlt}
                        className="mr-2 text-primary-400"
                      />
                      Duration
                    </div>
                    <div className="text-white font-medium">
                      {destination.duration || "7 Days"}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-dark-300">
                      <FontAwesomeIcon
                        icon={faUsers}
                        className="mr-2 text-primary-400"
                      />
                      Group Size
                    </div>
                    <div className="text-white font-medium">2-15 people</div>
                  </div>
                </div>
              </div>

              <div className="card p-4">
                <h4 className="font-bold text-white mb-3">
                  Best Time to Visit
                </h4>
                <p className="text-dark-300 text-sm">
                  {destination.bestTime ||
                    "Year-round destination with mild climate and beautiful weather."}
                </p>
              </div>

              {/* Book Now Button */}
              <button
                onClick={() => {
                  onClose();
                  onBook();
                }}
                className="w-full btn-primary py-4 text-lg font-semibold flex items-center justify-center gap-2"
              >
                <FontAwesomeIcon icon={faCalendarAlt} />
                Book This Trip
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
