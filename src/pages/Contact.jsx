import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faClock,
  faGlobe,
  faPaperPlane,
  faUser,
  faComment,
  faCalendarAlt,
  faUsers,
  faQuestionCircle,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "general",
    travelDates: "",
    travelers: "1",
    budget: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        alert(result.message);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "general",
          travelDates: "",
          travelers: "1",
          budget: "",
          message: "",
        });
      } else {
        alert(result.message || "An error occurred. Please try again.");
      }
    } catch (error) {
      console.error("Contact form error:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactMethods = [
    {
      icon: faPhone,
      title: "Call Us",
      description: "Speak with our travel experts",
      contact: "+92 332 043 6737",
      hours: "Mon-Fri: 9AM-6PM PKT",
    },
    {
      icon: faEnvelope,
      title: "Email Us",
      description: "Get detailed travel information",
      contact: "faizanjaved246@gmail.com",
      hours: "Response within 24 hours",
    },
    {
      icon: faHeadset,
      title: "Live Chat",
      description: "Instant support available",
      contact: "Chat Now",
      hours: "Available 24/7",
    },
  ];

  const faqs = [
    {
      question: "How far in advance should I book?",
      answer:
        "We recommend booking 2-3 months in advance for the best availability and prices.",
    },
    {
      question: "Do you offer travel insurance?",
      answer:
        "Yes, we partner with leading insurance providers to offer comprehensive travel protection.",
    },
    {
      question: "Can I customize my tour package?",
      answer:
        "Absolutely! We specialize in creating personalized itineraries based on your preferences.",
    },
  ];

  return (
    <div className="min-h-screen bg-dark-900 pt-8">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-dark-900 via-primary-900 to-dark-900">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-6">
              Contact <span className="text-gradient">Us</span>
            </h1>
            <p className="text-xl text-dark-200 mb-8">
              Ready to plan your dream vacation? Our travel experts are here to
              help create your perfect journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-dark-800">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="card card-hover p-6 text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <FontAwesomeIcon
                    icon={method.icon}
                    className="text-white text-xl"
                  />
                </div>
                <h3 className="font-heading text-xl font-semibold text-white mb-2">
                  {method.title}
                </h3>
                <p className="text-dark-300 text-sm mb-3">
                  {method.description}
                </p>
                <div className="text-primary-400 font-medium mb-1">
                  {method.contact}
                </div>
                <div className="text-dark-500 text-xs">{method.hours}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 bg-dark-900">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="card p-8">
              <h2 className="font-heading text-3xl font-bold text-white mb-6">
                Plan Your <span className="text-gradient">Adventure</span>
              </h2>
              <p className="text-dark-300 mb-8">
                Tell us about your dream trip and we'll create a personalized
                itinerary just for you.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-medium mb-2">
                      <FontAwesomeIcon
                        icon={faUser}
                        className="mr-2 text-primary-400"
                      />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-dark-400 focus:border-primary-500 focus:outline-none"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className="mr-2 text-primary-400"
                      />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-dark-400 focus:border-primary-500 focus:outline-none"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-medium mb-2">
                      <FontAwesomeIcon
                        icon={faPhone}
                        className="mr-2 text-primary-400"
                      />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-dark-400 focus:border-primary-500 focus:outline-none"
                      placeholder="+1 (234) 567-890"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">
                      <FontAwesomeIcon
                        icon={faQuestionCircle}
                        className="mr-2 text-primary-400"
                      />
                      Inquiry Type
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white focus:border-primary-500 focus:outline-none"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="booking">New Booking</option>
                      <option value="custom">Custom Tour</option>
                      <option value="group">Group Travel</option>
                      <option value="support">Customer Support</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-white font-medium mb-2">
                      <FontAwesomeIcon
                        icon={faCalendarAlt}
                        className="mr-2 text-primary-400"
                      />
                      Travel Dates
                    </label>
                    <input
                      type="date"
                      name="travelDates"
                      value={formData.travelDates}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white focus:border-primary-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">
                      <FontAwesomeIcon
                        icon={faUsers}
                        className="mr-2 text-primary-400"
                      />
                      Travelers
                    </label>
                    <select
                      name="travelers"
                      value={formData.travelers}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white focus:border-primary-500 focus:outline-none"
                    >
                      <option value="1">1 Person</option>
                      <option value="2">2 People</option>
                      <option value="3">3 People</option>
                      <option value="4">4 People</option>
                      <option value="5+">5+ People</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white focus:border-primary-500 focus:outline-none"
                    >
                      <option value="">Select budget</option>
                      <option value="under-2000">Under $2,000</option>
                      <option value="2000-5000">$2,000 - $5,000</option>
                      <option value="5000-10000">$5,000 - $10,000</option>
                      <option value="over-10000">Over $10,000</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">
                    <FontAwesomeIcon
                      icon={faComment}
                      className="mr-2 text-primary-400"
                    />
                    Tell us about your dream trip *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-dark-400 focus:border-primary-500 focus:outline-none resize-none"
                    placeholder="Describe your ideal vacation, preferred destinations, activities, accommodation preferences, and any special requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full btn-primary text-lg py-4 ${
                    isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
                  {isSubmitting ? "Sending Message..." : "Send Message"}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Office Details */}
              <div className="card p-8">
                <h3 className="font-heading text-2xl font-bold text-white mb-6">
                  Visit Our <span className="text-gradient">Office</span>
                </h3>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <FontAwesomeIcon
                      icon={faMapMarkerAlt}
                      className="text-primary-400 mt-1"
                    />
                    <div>
                      <div className="text-white font-medium">Address</div>
                      <div className="text-dark-300 text-sm">
                        123 Travel Avenue, Suite 456
                        <br />
                        New York, NY 10001
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <FontAwesomeIcon
                      icon={faClock}
                      className="text-primary-400 mt-1"
                    />
                    <div>
                      <div className="text-white font-medium">Office Hours</div>
                      <div className="text-dark-300 text-sm">
                        Monday - Friday: 9:00 AM - 6:00 PM
                        <br />
                        Saturday: 10:00 AM - 4:00 PM
                        <br />
                        Sunday: Closed
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <FontAwesomeIcon
                      icon={faGlobe}
                      className="text-primary-400 mt-1"
                    />
                    <div>
                      <div className="text-white font-medium">Languages</div>
                      <div className="text-dark-300 text-sm">
                        English, Spanish, French, German, Italian
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="pt-6 border-t border-dark-700">
                  <div className="text-white font-medium mb-4">Follow Us</div>
                  <div className="flex gap-4">
                    {[
                      {
                        icon: faFacebook,
                        color: "hover:text-blue-500",
                        href: "https://www.facebook.com/faizan.javed.7758235",
                      },
                      {
                        icon: faTwitter,
                        color: "hover:text-blue-400",
                        href: "https://x.com/FaizanJaved246",
                      },
                      {
                        icon: faInstagram,
                        color: "hover:text-pink-500",
                        href: "https://www.instagram.com/faizanjaved246/",
                      },
                      {
                        icon: faLinkedin,
                        color: "hover:text-blue-600",
                        href: "https://www.linkedin.com/in/faizan-javed-b0267426a/",
                      },
                    ].map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-10 h-10 bg-dark-700 rounded-full flex items-center justify-center text-dark-300 ${social.color} transition-all duration-300 hover:scale-110`}
                      >
                        <FontAwesomeIcon icon={social.icon} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className="card p-8">
                <h3 className="font-heading text-2xl font-bold text-white mb-6">
                  Frequently Asked{" "}
                  <span className="text-gradient">Questions</span>
                </h3>

                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-dark-700 pb-4">
                      <div className="text-white font-medium mb-2">
                        {faq.question}
                      </div>
                      <div className="text-dark-300 text-sm">{faq.answer}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-dark-800">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="font-heading text-3xl font-bold text-white mb-4">
              Find Us on the <span className="text-gradient">Map</span>
            </h2>
            <p className="text-dark-300">
              Visit our office for personalized travel consultation
            </p>
          </div>

          <div className="h-96 rounded-xl overflow-hidden card">
            <iframe
              title="WanderLux Office Location"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.3564429347077!2d-74.0087742845934!3d40.71427544370622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316cfd0555%3A0x4a01c8df6fb3cb8!2s123%20William%20St%2C%20New%20York%2C%20NY%2010038%2C%20USA!5e0!3m2!1sen!2sus!4v1644156516841!5m2!1sen!2sus"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-accent-600">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-white mb-4">
              Ready to Start Planning?
            </h2>
            <p className="text-white/90 mb-6">
              Our travel experts are standing by to help you create the perfect
              itinerary for your next adventure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+923320436737"
                className="btn-secondary bg-white text-primary-600 hover:bg-gray-100 px-8 py-3"
              >
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                Call Now
              </a>
              <a
                href="#"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
              >
                <FontAwesomeIcon icon={faHeadset} className="mr-2" />
                Live Chat
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
