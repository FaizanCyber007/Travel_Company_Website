import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faStar,
  faHeart,
  faEye,
  faCalendarAlt,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

export default function DestinationCard({
  title,
  img,
  location,
  price,
  rating,
  description,
  duration,
  onBook,
  onViewDetails,
}) {
  return (
    <article className="card card-hover group relative overflow-hidden">
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Overlay Icons */}
        <div className="absolute top-4 right-4 flex gap-2">
          <button className="w-10 h-10 bg-dark-800/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-primary-500 transition-colors">
            <FontAwesomeIcon icon={faHeart} className="text-sm" />
          </button>
          <button
            onClick={onViewDetails}
            className="w-10 h-10 bg-dark-800/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-primary-500 transition-colors"
          >
            <FontAwesomeIcon icon={faEye} className="text-sm" />
          </button>
        </div>

        {/* Rating Badge */}
        {rating && (
          <div className="absolute top-4 left-4 bg-accent-500 text-dark-900 px-3 py-1 rounded-full flex items-center gap-1 text-sm font-semibold">
            <FontAwesomeIcon icon={faStar} className="text-xs" />
            {rating}
          </div>
        )}

        {/* Quick Actions */}
        <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={(e) => {
              e.preventDefault();
              onBook?.();
            }}
            className="flex-1 btn-primary text-center text-sm py-2"
          >
            <FontAwesomeIcon icon={faCalendarAlt} className="mr-1" />
            Book Now
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              onViewDetails?.();
            }}
            className="btn-secondary px-4 py-2"
          >
            <FontAwesomeIcon icon={faEye} />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h4 className="font-heading text-xl font-semibold text-white mb-1 group-hover:text-primary-400 transition-colors">
              {title}
            </h4>
            {location && (
              <div className="flex items-center text-dark-400 text-sm">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-1" />
                {location}
              </div>
            )}
          </div>
          {price && (
            <div className="text-right">
              <div className="text-accent-400 font-bold text-lg">{price}</div>
              <div className="text-dark-500 text-xs">per person</div>
            </div>
          )}
        </div>

        <p className="text-dark-300 text-sm leading-relaxed mb-4">
          {description ||
            "Experience the magic of this incredible destination with our expertly crafted tours and personalized service."}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-dark-600">
          <div className="flex items-center gap-4 text-sm text-dark-400">
            <div className="flex items-center gap-1">
              <FontAwesomeIcon icon={faUsers} />
              <span>Small Groups</span>
            </div>
            <div className="flex items-center gap-1">
              <FontAwesomeIcon icon={faCalendarAlt} />
              <span>{duration || "7 Days"}</span>
            </div>
          </div>

          <button
            onClick={onViewDetails}
            className="text-primary-400 hover:text-primary-300 font-medium text-sm transition-colors"
          >
            Learn More →
          </button>
        </div>
      </div>
    </article>
  );
}
