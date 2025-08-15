import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faHeart,
  faUsers,
  faAward,
  faHandshake,
  faShieldAlt,
  faRocket,
  faCompass,
  faStar,
  faQuoteLeft,
} from "@fortawesome/free-solid-svg-icons";

export default function About() {
  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=300&h=300&auto=format&fit=crop",
      bio: "Travel enthusiast with 15+ years of experience exploring 60+ countries. Former travel journalist turned entrepreneur.",
      specialties: ["Luxury Travel", "Cultural Immersion", "Solo Travel"],
    },
    {
      name: "Michael Chen",
      role: "Head of Operations",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&h=300&auto=format&fit=crop",
      bio: "Operations expert ensuring seamless travel experiences. Mountain climbing enthusiast and adventure travel specialist.",
      specialties: ["Adventure Travel", "Group Tours", "Operations"],
    },
    {
      name: "Emily Rodriguez",
      role: "Travel Curator",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=300&h=300&auto=format&fit=crop",
      bio: "Destination expert with a passion for hidden gems and authentic experiences. Fluent in 5 languages.",
      specialties: ["Cultural Tours", "Food Tourism", "Hidden Gems"],
    },
    {
      name: "David Kim",
      role: "Customer Success",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300&h=300&auto=format&fit=crop",
      bio: "Dedicated to ensuring every traveler has an exceptional experience. Photography enthusiast and travel blogger.",
      specialties: ["Customer Service", "Photography Tours", "Travel Planning"],
    },
  ];

  const values = [
    {
      icon: faHeart,
      title: "Passion for Travel",
      description:
        "We live and breathe travel. Our passion drives us to create extraordinary experiences for every adventurer.",
    },
    {
      icon: faHandshake,
      title: "Trust & Reliability",
      description:
        "Your trust is our foundation. We're committed to delivering on our promises with 100% transparency.",
    },
    {
      icon: faGlobe,
      title: "Global Perspective",
      description:
        "We believe travel breaks down barriers and creates understanding between cultures and communities.",
    },
    {
      icon: faShieldAlt,
      title: "Safety First",
      description:
        "Your safety is our top priority. We maintain the highest standards in all our travel operations.",
    },
  ];

  const stats = [
    { number: "50,000+", label: "Happy Travelers", icon: faUsers },
    { number: "1,000+", label: "Destinations", icon: faCompass },
    { number: "15+", label: "Years Experience", icon: faAward },
    { number: "4.9/5", label: "Customer Rating", icon: faStar },
  ];

  return (
    <div className="min-h-screen bg-dark-900 pt-8">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-dark-900 via-primary-900 to-dark-900">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-6">
              About <span className="text-gradient">WanderLux</span>
            </h1>
            <p className="text-xl text-dark-200 mb-8">
              We're passionate travelers creating extraordinary journeys and
              unforgettable memories for adventurers worldwide
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-dark-900">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-4xl font-bold text-white mb-6">
                Our <span className="text-gradient">Story</span>
              </h2>
              <div className="space-y-6 text-dark-200 leading-relaxed">
                <p>
                  Founded in 2010 by travel enthusiast Sarah Johnson, WanderLux
                  began as a small blog sharing hidden gems and authentic travel
                  experiences. What started as a passion project has grown into
                  a trusted travel company serving thousands of adventurers
                  worldwide.
                </p>
                <p>
                  Our journey began when Sarah realized that most travel
                  companies focused on popular destinations, missing the
                  authentic, transformative experiences that make travel truly
                  special. She set out to create a company that would prioritize
                  meaningful connections, local communities, and sustainable
                  tourism.
                </p>
                <p>
                  Today, WanderLux is a team of dedicated travel experts
                  committed to crafting personalized journeys that go beyond the
                  ordinary. We believe that travel has the power to transform
                  lives, broaden perspectives, and create lasting memories.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=600&auto=format&fit=crop"
                alt="Our Story"
                className="rounded-xl shadow-dark w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-600/20 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-dark-800">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="card p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mb-6">
                <FontAwesomeIcon
                  icon={faRocket}
                  className="text-white text-2xl"
                />
              </div>
              <h3 className="font-heading text-2xl font-bold text-white mb-4">
                Our Mission
              </h3>
              <p className="text-dark-200 leading-relaxed">
                To inspire and enable meaningful travel experiences that create
                lasting memories, foster cultural understanding, and contribute
                positively to the communities we visit. We're committed to
                making travel accessible, sustainable, and transformative for
                every adventurer.
              </p>
            </div>
            <div className="card p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mb-6">
                <FontAwesomeIcon
                  icon={faCompass}
                  className="text-white text-2xl"
                />
              </div>
              <h3 className="font-heading text-2xl font-bold text-white mb-4">
                Our Vision
              </h3>
              <p className="text-dark-200 leading-relaxed">
                To be the world's most trusted and innovative travel company,
                known for creating extraordinary journeys that connect people
                with places, cultures, and themselves. We envision a world where
                travel serves as a bridge to understanding and peace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-dark-900">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-white mb-4">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-xl text-dark-300 max-w-2xl mx-auto">
              The principles that guide everything we do and every journey we
              create
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="card card-hover p-6 text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <FontAwesomeIcon
                    icon={value.icon}
                    className="text-white text-xl"
                  />
                </div>
                <h3 className="font-heading text-xl font-semibold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-dark-300 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-accent-600">
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
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-dark-800">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-white mb-4">
              Meet Our <span className="text-gradient">Team</span>
            </h2>
            <p className="text-xl text-dark-300 max-w-2xl mx-auto">
              Passionate travel experts dedicated to creating your perfect
              adventure
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="card card-hover p-6 text-center group"
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto group-hover:scale-110 transition-transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-500/20 to-transparent rounded-full"></div>
                </div>

                <h3 className="font-heading text-xl font-bold text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-primary-400 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-dark-300 text-sm mb-4 leading-relaxed">
                  {member.bio}
                </p>

                <div className="space-y-1">
                  {member.specialties.map((specialty, idx) => (
                    <span
                      key={idx}
                      className="inline-block bg-dark-700 text-dark-300 text-xs px-2 py-1 rounded mr-1"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-dark-900">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-primary-500/20 mb-6">
              <FontAwesomeIcon icon={faQuoteLeft} className="text-6xl" />
            </div>
            <blockquote className="text-2xl md:text-3xl font-light text-white mb-6 leading-relaxed">
              "WanderLux doesn't just plan trips; they craft life-changing
              experiences. Every detail is thoughtfully curated to create
              memories that last a lifetime."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=60&h=60&auto=format&fit=crop"
                alt="Customer"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="text-left">
                <div className="text-white font-semibold">James Wilson</div>
                <div className="text-dark-400 text-sm">Frequent Traveler</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-accent-600">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-white mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-white/90 mb-6">
              Let our expert team help you plan the adventure of a lifetime.
              Your perfect trip is just a conversation away.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="btn-secondary bg-white text-primary-600 hover:bg-gray-100 px-8 py-3"
              >
                Contact Us
              </a>
              <a
                href="/tours"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
              >
                Browse Tours
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
