import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faClock,
  faUsers,
  faMapMarkedAlt,
  faStar,
  faHeart,
  faCamera,
  faUtensils,
  faBed,
  faPlane,
  faShieldAlt,
  faAward,
  faFilter,
} from "@fortawesome/free-solid-svg-icons";

export default function Tours() {
  const [selectedDuration, setSelectedDuration] = useState("all");
  const [selectedType, setSelectedType] = useState("all");

  const tourTypes = [
    { id: "all", name: "All Tours" },
    { id: "adventure", name: "Adventure" },
    { id: "cultural", name: "Cultural" },
    { id: "luxury", name: "Luxury" },
    { id: "family", name: "Family" },
    { id: "romantic", name: "Romantic" },
  ];

  const durations = [
    { id: "all", name: "Any Duration" },
    { id: "short", name: "1-3 Days" },
    { id: "medium", name: "4-7 Days" },
    { id: "long", name: "8+ Days" },
  ];

  const tours = [
    {
      id: 1,
      title: "Romantic Maldives Escape",
      destination: "Maldives",
      duration: "7 Days / 6 Nights",
      type: "romantic",
      price: 2999,
      originalPrice: 3499,
      rating: 4.9,
      reviews: 127,
      groupSize: "2-4 people",
      img: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=800&auto=format&fit=crop",
      highlights: [
        "Overwater Bungalows",
        "Private Beach Dinners",
        "Couples Spa",
        "Sunset Cruises",
      ],
      includes: [
        "5-Star Resort",
        "All Meals",
        "Spa Treatment",
        "Airport Transfers",
      ],
      badge: "Bestseller",
    },
    {
      id: 2,
      title: "Swiss Alps Adventure",
      destination: "Switzerland",
      duration: "10 Days / 9 Nights",
      type: "adventure",
      price: 3299,
      originalPrice: 3799,
      rating: 4.8,
      reviews: 94,
      groupSize: "6-12 people",
      img: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&w=800&auto=format&fit=crop",
      highlights: [
        "Mountain Hiking",
        "Scenic Train Rides",
        "Alpine Villages",
        "Cable Car Tours",
      ],
      includes: ["3-Star Hotels", "Breakfast", "Guide", "Train Passes"],
      badge: "Adventure",
    },
    {
      id: 3,
      title: "Tokyo Cultural Immersion",
      destination: "Japan",
      duration: "8 Days / 7 Nights",
      type: "cultural",
      price: 2899,
      originalPrice: 3299,
      rating: 4.9,
      reviews: 156,
      groupSize: "8-15 people",
      img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&auto=format&fit=crop",
      highlights: [
        "Temple Visits",
        "Tea Ceremony",
        "Sushi Making",
        "Traditional Ryokan",
      ],
      includes: [
        "4-Star Hotels",
        "Some Meals",
        "Local Guide",
        "Cultural Activities",
      ],
      badge: "Cultural",
    },
    {
      id: 4,
      title: "Santorini Luxury Getaway",
      destination: "Greece",
      duration: "5 Days / 4 Nights",
      type: "luxury",
      price: 2199,
      originalPrice: 2599,
      rating: 4.7,
      reviews: 89,
      groupSize: "2-6 people",
      img: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=800&auto=format&fit=crop",
      highlights: [
        "Infinity Pool Villa",
        "Private Wine Tasting",
        "Sunset Helicopter",
        "Yacht Charter",
      ],
      includes: [
        "Luxury Resort",
        "All Meals",
        "Private Transfers",
        "Yacht Tour",
      ],
      badge: "Luxury",
    },
    {
      id: 5,
      title: "Kenya Safari Family Adventure",
      destination: "Kenya",
      duration: "9 Days / 8 Nights",
      type: "family",
      price: 3599,
      originalPrice: 4199,
      rating: 4.8,
      reviews: 73,
      groupSize: "4-8 people",
      img: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=800&auto=format&fit=crop",
      highlights: [
        "Big Five Safari",
        "Masai Village",
        "Hot Air Balloon",
        "Wildlife Photography",
      ],
      includes: [
        "Safari Lodge",
        "All Meals",
        "Game Drives",
        "Conservation Fees",
      ],
      badge: "Family",
    },
    {
      id: 6,
      title: "Iceland Northern Lights Quest",
      destination: "Iceland",
      duration: "6 Days / 5 Nights",
      type: "adventure",
      price: 2399,
      originalPrice: 2799,
      rating: 4.9,
      reviews: 112,
      groupSize: "6-10 people",
      img: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?q=80&w=800&auto=format&fit=crop",
      highlights: ["Northern Lights", "Ice Caves", "Geysers", "Blue Lagoon"],
      includes: [
        "3-Star Hotels",
        "Breakfast",
        "Northern Lights Tour",
        "Ice Cave Tour",
      ],
      badge: "Popular",
    },
  ];

  const filteredTours = tours.filter((tour) => {
    const matchesDuration =
      selectedDuration === "all" ||
      (selectedDuration === "short" && tour.duration.includes("1-3")) ||
      (selectedDuration === "medium" &&
        (tour.duration.includes("4") ||
          tour.duration.includes("5") ||
          tour.duration.includes("6") ||
          tour.duration.includes("7"))) ||
      (selectedDuration === "long" &&
        (tour.duration.includes("8") ||
          tour.duration.includes("9") ||
          tour.duration.includes("10")));

    const matchesType = selectedType === "all" || tour.type === selectedType;

    return matchesDuration && matchesType;
  });

  return (
    <div className="min-h-screen bg-dark-900 pt-8">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-dark-900 via-primary-900 to-dark-900">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-6">
              Curated <span className="text-gradient">Tour Packages</span>
            </h1>
            <p className="text-xl text-dark-200 mb-8">
              Expertly crafted itineraries with local guides, premium
              accommodations, and unforgettable experiences
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-dark-800 border-b border-dark-700">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            <div className="flex items-center gap-2 text-white">
              <FontAwesomeIcon icon={faFilter} />
              <span className="font-medium">Filter Tours:</span>
            </div>

            {/* Tour Type Filter */}
            <div className="flex flex-wrap gap-2">
              {tourTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    selectedType === type.id
                      ? "bg-primary-600 text-white"
                      : "bg-dark-700 text-dark-300 hover:bg-dark-600"
                  }`}
                >
                  {type.name}
                </button>
              ))}
            </div>

            {/* Duration Filter */}
            <div className="flex flex-wrap gap-2">
              {durations.map((duration) => (
                <button
                  key={duration.id}
                  onClick={() => setSelectedDuration(duration.id)}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    selectedDuration === duration.id
                      ? "bg-accent-600 text-dark-900"
                      : "bg-dark-700 text-dark-300 hover:bg-dark-600"
                  }`}
                >
                  {duration.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-12 bg-dark-900">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredTours.map((tour) => (
              <div key={tour.id} className="card card-hover group">
                <div className="flex flex-col lg:flex-row">
                  {/* Image */}
                  <div className="relative lg:w-1/2">
                    <img
                      src={tour.img}
                      alt={tour.title}
                      className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Badge */}
                    {tour.badge && (
                      <div className="absolute top-4 left-4 bg-accent-500 text-dark-900 px-3 py-1 rounded-full text-sm font-bold">
                        {tour.badge}
                      </div>
                    )}

                    {/* Favorite */}
                    <button className="absolute top-4 right-4 w-10 h-10 bg-dark-800/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-primary-500 transition-colors">
                      <FontAwesomeIcon icon={faHeart} />
                    </button>

                    {/* Discount */}
                    {tour.originalPrice && (
                      <div className="absolute bottom-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                        Save ${tour.originalPrice - tour.price}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="lg:w-1/2 p-6 flex flex-col">
                    <div className="flex-grow">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-heading text-xl font-bold text-white mb-1 group-hover:text-primary-400 transition-colors">
                            {tour.title}
                          </h3>
                          <div className="flex items-center text-dark-400 text-sm mb-2">
                            <FontAwesomeIcon
                              icon={faMapMarkedAlt}
                              className="mr-1"
                            />
                            {tour.destination}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-accent-400 font-bold text-2xl">
                            ${tour.price}
                          </div>
                          {tour.originalPrice && (
                            <div className="text-dark-500 text-sm line-through">
                              ${tour.originalPrice}
                            </div>
                          )}
                          <div className="text-dark-400 text-xs">
                            per person
                          </div>
                        </div>
                      </div>

                      {/* Rating */}
                      <div className="flex items-center gap-2 mb-4">
                        <div className="flex items-center gap-1">
                          <FontAwesomeIcon
                            icon={faStar}
                            className="text-accent-400 text-sm"
                          />
                          <span className="text-white font-medium">
                            {tour.rating}
                          </span>
                        </div>
                        <span className="text-dark-400 text-sm">
                          ({tour.reviews} reviews)
                        </span>
                      </div>

                      {/* Tour Details */}
                      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                        <div className="flex items-center gap-2 text-dark-300">
                          <FontAwesomeIcon
                            icon={faClock}
                            className="text-primary-400"
                          />
                          {tour.duration}
                        </div>
                        <div className="flex items-center gap-2 text-dark-300">
                          <FontAwesomeIcon
                            icon={faUsers}
                            className="text-primary-400"
                          />
                          {tour.groupSize}
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className="mb-4">
                        <h4 className="text-white font-medium mb-2">
                          Tour Highlights:
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {tour.highlights
                            .slice(0, 3)
                            .map((highlight, index) => (
                              <span
                                key={index}
                                className="bg-dark-700 text-dark-300 text-xs px-2 py-1 rounded"
                              >
                                {highlight}
                              </span>
                            ))}
                          {tour.highlights.length > 3 && (
                            <span className="text-primary-400 text-xs">
                              +{tour.highlights.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Includes */}
                      <div className="mb-6">
                        <h4 className="text-white font-medium mb-2">
                          Includes:
                        </h4>
                        <div className="grid grid-cols-2 gap-1 text-xs text-dark-300">
                          {tour.includes.map((item, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-1"
                            >
                              <FontAwesomeIcon
                                icon={faShieldAlt}
                                className="text-green-400"
                              />
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3 pt-4 border-t border-dark-700">
                      <Link
                        to={`/tours/${tour.id}`}
                        className="flex-1 btn-primary text-center py-3"
                      >
                        <FontAwesomeIcon
                          icon={faCalendarAlt}
                          className="mr-2"
                        />
                        Book Now
                      </Link>
                      <Link
                        to={`/tours/${tour.id}`}
                        className="btn-secondary px-6 py-3"
                      >
                        Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-dark-800">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-white mb-4">
              Why Choose Our Tours?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon
                  icon={faAward}
                  className="text-white text-xl"
                />
              </div>
              <h3 className="font-semibold text-white mb-2">Expert Guides</h3>
              <p className="text-dark-300 text-sm">
                Professional local guides with deep knowledge
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon
                  icon={faShieldAlt}
                  className="text-white text-xl"
                />
              </div>
              <h3 className="font-semibold text-white mb-2">100% Safe</h3>
              <p className="text-dark-300 text-sm">
                Full insurance coverage and safety protocols
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon
                  icon={faUsers}
                  className="text-white text-xl"
                />
              </div>
              <h3 className="font-semibold text-white mb-2">Small Groups</h3>
              <p className="text-dark-300 text-sm">
                Intimate experiences with max 15 people
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon
                  icon={faCalendarAlt}
                  className="text-white text-xl"
                />
              </div>
              <h3 className="font-semibold text-white mb-2">
                Flexible Booking
              </h3>
              <p className="text-dark-300 text-sm">
                Free cancellation up to 24 hours before
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-accent-600">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-white mb-4">
              Ready for Your Next Adventure?
            </h2>
            <p className="text-white/90 mb-6">
              Can't find the perfect tour? Let our travel experts create a
              custom itinerary just for you.
            </p>
            <Link
              to="/contact"
              className="btn-secondary bg-white text-primary-600 hover:bg-gray-100 px-8 py-3"
            >
              <FontAwesomeIcon icon={faPlane} className="mr-2" />
              Plan Custom Trip
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
