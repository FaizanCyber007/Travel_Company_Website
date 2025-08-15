import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faFilter,
  faMapMarkedAlt,
  faGlobe,
  faMountain,
  faUmbrellaBeach,
  faCity,
  faTree,
  faStar,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import DestinationCard from "../components/DestinationCard";

export default function Destinations() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("popular");

  const categories = [
    { id: "all", name: "All Destinations", icon: faGlobe },
    { id: "beach", name: "Beach & Islands", icon: faUmbrellaBeach },
    { id: "mountain", name: "Mountains", icon: faMountain },
    { id: "city", name: "City Breaks", icon: faCity },
    { id: "nature", name: "Nature & Wildlife", icon: faTree },
  ];

  const destinations = [
    {
      id: 1,
      title: "Maldives Paradise",
      location: "Indian Ocean",
      category: "beach",
      price: "From $2,999",
      rating: "4.9",
      img: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=800&auto=format&fit=crop",
      description:
        "Crystal clear waters, overwater bungalows, and pristine white sand beaches make this the ultimate tropical paradise.",
    },
    {
      id: 2,
      title: "Swiss Alps Adventure",
      location: "Switzerland",
      category: "mountain",
      price: "From $1,899",
      rating: "4.8",
      img: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&w=800&auto=format&fit=crop",
      description:
        "Breathtaking mountain vistas, charming alpine villages, and world-class skiing in the heart of Europe.",
    },
    {
      id: 3,
      title: "Tokyo Culture Tour",
      location: "Japan",
      category: "city",
      price: "From $2,499",
      rating: "4.9",
      img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&auto=format&fit=crop",
      description:
        "Immerse yourself in ancient traditions and modern innovation in Japan's bustling capital city.",
    },
    {
      id: 4,
      title: "Santorini Sunset",
      location: "Greece",
      category: "beach",
      price: "From $1,699",
      rating: "4.7",
      img: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=800&auto=format&fit=crop",
      description:
        "Iconic blue-domed churches, dramatic cliffs, and the world's most spectacular sunsets.",
    },
    {
      id: 5,
      title: "Safari Experience",
      location: "Kenya",
      category: "nature",
      price: "From $3,299",
      rating: "4.8",
      img: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=800&auto=format&fit=crop",
      description:
        "Witness the Great Migration and encounter Africa's Big Five in their natural habitat.",
    },
    {
      id: 6,
      title: "Northern Lights",
      location: "Iceland",
      category: "nature",
      price: "From $2,199",
      rating: "4.9",
      img: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?q=80&w=800&auto=format&fit=crop",
      description:
        "Chase the Aurora Borealis across Iceland's otherworldly landscapes and geothermal wonders.",
    },
    {
      id: 7,
      title: "Bali Spiritual Journey",
      location: "Indonesia",
      category: "nature",
      price: "From $1,599",
      rating: "4.6",
      img: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?q=80&w=800&auto=format&fit=crop",
      description:
        "Find inner peace among ancient temples, lush rice terraces, and healing hot springs.",
    },
    {
      id: 8,
      title: "Patagonia Expedition",
      location: "Chile & Argentina",
      category: "mountain",
      price: "From $3,899",
      rating: "4.7",
      img: "https://images.unsplash.com/photo-1531804055935-76f44d7c3621?q=80&w=800&auto=format&fit=crop",
      description:
        "Explore the world's most remote wilderness, from glacial fields to towering peaks.",
    },
    {
      id: 9,
      title: "New York City Break",
      location: "USA",
      category: "city",
      price: "From $1,299",
      rating: "4.5",
      img: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=800&auto=format&fit=crop",
      description:
        "The city that never sleeps offers world-class dining, Broadway shows, and iconic landmarks.",
    },
  ];

  const filteredDestinations = destinations.filter((dest) => {
    const matchesSearch =
      dest.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dest.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || dest.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-dark-900 pt-8">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-dark-900 via-primary-900 to-dark-900">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-6">
              Explore Amazing{" "}
              <span className="text-gradient">Destinations</span>
            </h1>
            <p className="text-xl text-dark-200 mb-8">
              Discover breathtaking locations around the world, handpicked by
              our travel experts for unforgettable experiences
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-dark-800 border-b border-dark-700">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Search Bar */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <FontAwesomeIcon
                  icon={faSearch}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-dark-400"
                />
                <input
                  type="text"
                  placeholder="Search destinations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-dark-400 focus:border-primary-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                    selectedCategory === category.id
                      ? "bg-primary-600 text-white"
                      : "bg-dark-700 text-dark-300 hover:bg-dark-600"
                  }`}
                >
                  <FontAwesomeIcon icon={category.icon} className="text-sm" />
                  {category.name}
                </button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white focus:border-primary-500 focus:outline-none"
            >
              <option value="popular">Most Popular</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>
      </section>

      {/* Results Summary */}
      <section className="py-8 bg-dark-900">
        <div className="container">
          <div className="flex items-center justify-between">
            <p className="text-dark-300">
              Showing {filteredDestinations.length} destinations
              {selectedCategory !== "all" &&
                ` in ${
                  categories.find((c) => c.id === selectedCategory)?.name
                }`}
            </p>
            <div className="flex items-center gap-2 text-dark-400">
              <FontAwesomeIcon icon={faMapMarkedAlt} />
              <span className="text-sm">Interactive map view coming soon</span>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-12 bg-dark-900">
        <div className="container">
          {filteredDestinations.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDestinations.map((destination) => (
                <DestinationCard
                  key={destination.id}
                  title={destination.title}
                  location={destination.location}
                  price={destination.price}
                  rating={destination.rating}
                  img={destination.img}
                  description={destination.description}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <FontAwesomeIcon
                icon={faSearch}
                className="text-6xl text-dark-600 mb-4"
              />
              <h3 className="text-2xl font-semibold text-white mb-2">
                No destinations found
              </h3>
              <p className="text-dark-400">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-accent-600">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-white mb-4">
              Never Miss a Deal
            </h2>
            <p className="text-white/90 mb-6">
              Subscribe to our newsletter and be the first to know about
              exclusive offers and new destinations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-white text-dark-900 placeholder-dark-500 focus:outline-none"
              />
              <button className="btn-accent px-6 py-3 bg-white text-primary-600 hover:bg-gray-100">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
