import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

export default function TestimonialCard({ name, text, role, rating, image }) {
  return (
    <div className="card card-hover p-6 relative">
      {/* Quote Icon */}
      <div className="absolute top-6 right-6 text-primary-500/20">
        <FontAwesomeIcon icon={faQuoteLeft} className="text-3xl" />
      </div>

      {/* Rating Stars */}
      {rating && (
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <FontAwesomeIcon
              key={i}
              icon={faStar}
              className={`text-sm ${
                i < rating ? "text-accent-400" : "text-dark-600"
              }`}
            />
          ))}
        </div>
      )}

      {/* Testimonial Text */}
      <p className="text-dark-200 leading-relaxed mb-6 relative z-10">
        "{text}"
      </p>

      {/* Author Info */}
      <div className="flex items-center gap-4">
        <div className="relative">
          <img
            src={
              image ||
              `https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=60&h=60&auto=format&fit=crop`
            }
            alt={name}
            className="w-14 h-14 rounded-full object-cover border-2 border-primary-500/20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-full"></div>
        </div>
        <div>
          <h5 className="font-semibold text-white text-lg">{name}</h5>
          <p className="text-dark-400 text-sm">{role || "Verified Traveler"}</p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-b-xl"></div>
    </div>
  );
}
