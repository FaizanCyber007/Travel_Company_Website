import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlane,
  faMapMarkedAlt,
  faHeart,
  faUsers,
  faStar,
  faArrowRight,
  faPlay,
  faQuoteLeft,
  faCalendarAlt,
  faCompass,
  faShield,
  faClock,
  faGlobe,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import DestinationCard from "../components/DestinationCard";
import TestimonialCard from "../components/TestimonialCard";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  const heroImages = [
    "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[id]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: faShield,
      title: "Trusted & Safe",
      desc: "100% secure bookings with 24/7 support",
    },
    {
      icon: faGlobe,
      title: "Global Destinations",
      desc: "Over 1000+ destinations worldwide",
    },
    {
      icon: faClock,
      title: "Instant Booking",
      desc: "Book your dream trip in just a few clicks",
    },
    {
      icon: faUsers,
      title: "Expert Guides",
      desc: "Professional local guides for authentic experiences",
    },
  ];

  const stats = [
    { number: "50K+", label: "Happy Travelers", icon: faUsers },
    { number: "1000+", label: "Destinations", icon: faMapMarkedAlt },
    { number: "15+", label: "Years Experience", icon: faStar },
    { number: "24/7", label: "Support", icon: faPhoneAlt },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Background Slider */}
        <div className="absolute inset-0">
          {heroImages.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={img}
                alt={`Hero ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-dark-900/80 via-dark-900/50 to-transparent"></div>
            </div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container text-center lg:text-left">
          <div className="max-w-4xl mx-auto lg:mx-0">
            <div className="animate-fade-in">
              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Discover Your Next
                <span className="block text-gradient">Dream Destination</span>
              </h1>
              <p className="text-xl md:text-2xl text-dark-200 mb-8 max-w-2xl">
                Embark on extraordinary journeys with our curated luxury travel
                experiences. From exotic beaches to majestic mountains, we make
                your travel dreams come true.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <Link
                  to="/destinations"
                  className="btn-primary text-lg px-8 py-4"
                >
                  <FontAwesomeIcon icon={faCompass} className="mr-2" />
                  Explore Destinations
                </Link>
                <button className="btn-secondary text-lg px-8 py-4 group">
                  <FontAwesomeIcon
                    icon={faPlay}
                    className="mr-2 group-hover:scale-110 transition-transform"
                  />
                  Watch Video
                </button>
              </div>

              {/* Search Bar */}
              <div className="bg-dark-800/90 backdrop-blur-md border border-dark-600 rounded-2xl p-6 max-w-4xl mx-auto lg:mx-0">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="flex flex-col">
                    <label className="text-dark-300 text-sm mb-2">
                      Destination
                    </label>
                    <input
                      type="text"
                      placeholder="Where to?"
                      className="bg-dark-700 border border-dark-600 rounded-lg px-4 py-3 text-white placeholder-dark-400 focus:border-primary-500 focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-dark-300 text-sm mb-2">
                      Check In
                    </label>
                    <input
                      type="date"
                      className="bg-dark-700 border border-dark-600 rounded-lg px-4 py-3 text-white focus:border-primary-500 focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-dark-300 text-sm mb-2">Guests</label>
                    <select className="bg-dark-700 border border-dark-600 rounded-lg px-4 py-3 text-white focus:border-primary-500 focus:outline-none">
                      <option>1 Guest</option>
                      <option>2 Guests</option>
                      <option>3+ Guests</option>
                    </select>
                  </div>
                  <button className="btn-accent">
                    <FontAwesomeIcon icon={faMapMarkedAlt} className="mr-2" />
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {heroImages.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? "bg-primary-500 w-8" : "bg-white/50"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-dark-900 to-dark-800">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="card card-hover p-6 text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <FontAwesomeIcon
                    icon={feature.icon}
                    className="text-white text-xl"
                  />
                </div>
                <h3 className="font-heading text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-dark-300">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary-900 to-primary-800">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="group">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors">
                  <FontAwesomeIcon
                    icon={stat.icon}
                    className="text-white text-xl"
                  />
                </div>
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-primary-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section id="destinations" className="py-20 bg-dark-800">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
              Popular <span className="text-gradient">Destinations</span>
            </h2>
            <p className="text-xl text-dark-300 max-w-2xl mx-auto">
              Discover breathtaking locations handpicked by our travel experts
              for unforgettable experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <DestinationCard
              title="Maldives Paradise"
              location="Indian Ocean"
              price="From $2,999"
              rating="4.9"
              img="https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=800&auto=format&fit=crop"
            />
            <DestinationCard
              title="Swiss Alps Adventure"
              location="Switzerland"
              price="From $1,899"
              rating="4.8"
              img="https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&w=800&auto=format&fit=crop"
            />
            <DestinationCard
              title="Tokyo Culture Tour"
              location="Japan"
              price="From $2,499"
              rating="4.9"
              img="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&auto=format&fit=crop"
            />
            <DestinationCard
              title="Santorini Sunset"
              location="Greece"
              price="From $1,699"
              rating="4.7"
              img="https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=800&auto=format&fit=crop"
            />
            <DestinationCard
              title="Safari Experience"
              location="Kenya"
              price="From $3,299"
              rating="4.8"
              img="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=800&auto=format&fit=crop"
            />
            <DestinationCard
              title="Northern Lights"
              location="Iceland"
              price="From $2,199"
              rating="4.9"
              img="https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&w=800&auto=format&fit=crop"
            />
          </div>

          <div className="text-center">
            <Link to="/destinations" className="btn-primary px-8 py-4">
              View All Destinations
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-dark-800 to-dark-900">
        <div className="container">
          <div className="text-center mb-16">
            <h3 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
              What Our <span className="text-gradient">Travelers Say</span>
            </h3>
            <p className="text-xl text-dark-300 max-w-2xl mx-auto">
              Read authentic reviews from thousands of satisfied customers who
              trusted us with their dream vacations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              name="Sarah Johnson"
              role="Adventure Seeker"
              rating={5}
              image="https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=150&h=150&auto=format&fit=crop"
              text="WanderLux made our honeymoon absolutely magical! Every detail was perfectly planned, and the personalized service exceeded our expectations. The Maldives trip was a dream come true!"
            />
            <TestimonialCard
              name="Michael Chen"
              role="Business Executive"
              rating={5}
              image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&auto=format&fit=crop"
              text="Professional, reliable, and incredibly knowledgeable. The Swiss Alps tour was expertly organized with breathtaking accommodations. Will definitely book again!"
            />
            <TestimonialCard
              name="Emily Rodriguez"
              role="Photography Enthusiast"
              rating={5}
              image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&h=150&auto=format&fit=crop"
              text="The Tokyo cultural tour opened my eyes to so many hidden gems. Our guide was fantastic, and every moment was Instagram-worthy. Highly recommend to fellow photographers!"
            />
          </div>

          <div className="text-center mt-12">
            <Link
              to="/testimonials"
              className="text-primary-400 hover:text-primary-300 font-medium"
            >
              Read More Reviews{" "}
              <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-accent-600 relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-30"></div>
        <div className="container relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your Adventure?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of travelers who've discovered the world with
              WanderLux. Your perfect vacation is just one click away.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
                Plan My Trip
              </Link>
              <Link
                to="/tours"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
              >
                Browse Tours
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
