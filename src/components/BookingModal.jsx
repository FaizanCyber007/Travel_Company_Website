import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faCalendarAlt,
  faUsers,
  faEnvelope,
  faUser,
  faPhone,
  faComment,
} from "@fortawesome/free-solid-svg-icons";

export default function BookingModal({ isOpen, onClose, packageData }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    travelDates: "",
    travelers: "2",
    specialRequests: "",
    selectedPackage: "",
    packageType: "destination", // "destination" or "tour"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const destinations = [
    { id: "maldives", name: "Maldives Paradise", price: "From $2,999" },
    { id: "swiss-alps", name: "Swiss Alps Adventure", price: "From $1,899" },
    { id: "tokyo", name: "Tokyo Culture Tour", price: "From $2,499" },
    { id: "santorini", name: "Santorini Sunset", price: "From $1,699" },
    { id: "safari", name: "Safari Experience", price: "From $3,299" },
    { id: "northern-lights", name: "Northern Lights", price: "From $2,199" },
  ];

  const tours = [
    { id: "adventure", name: "Adventure Tours", price: "From $899" },
    { id: "cultural", name: "Cultural Heritage Tours", price: "From $1,299" },
    { id: "luxury", name: "Luxury Escapes", price: "From $2,999" },
    { id: "family", name: "Family Adventures", price: "From $599" },
    { id: "honeymoon", name: "Romantic Getaways", price: "From $1,999" },
    { id: "group", name: "Group Expeditions", price: "From $799" },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("http://localhost:5002/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          packageName:
            packageData?.name || formData.selectedPackage || "Custom Package",
          packagePrice: packageData?.price || "",
          packageType: formData.packageType,
        }),
      });

      const result = await response.json();

      if (result.success) {
        alert(result.message);
        setFormData({
          name: "",
          email: "",
          phone: "",
          travelDates: "",
          travelers: "2",
          specialRequests: "",
        });
        onClose();
      } else {
        alert(result.message || "An error occurred. Please try again.");
      }
    } catch (error) {
      console.error("Booking error:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-dark-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-dark-700 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">Book Your Trip</h2>
            {packageData && (
              <p className="text-dark-300 mt-1">{packageData.name}</p>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-dark-700 rounded-lg transition-colors"
          >
            <FontAwesomeIcon icon={faTimes} className="text-dark-300" />
          </button>
        </div>

        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Package Selection */}
            {!packageData && (
              <div className="space-y-4">
                <div>
                  <label className="block text-white font-medium mb-2">
                    Package Type *
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() =>
                        setFormData((prev) => ({
                          ...prev,
                          packageType: "destination",
                          selectedPackage: "",
                        }))
                      }
                      className={`p-4 rounded-lg border-2 transition-colors ${
                        formData.packageType === "destination"
                          ? "border-primary-500 bg-primary-500/10 text-primary-400"
                          : "border-dark-600 bg-dark-700 text-dark-300 hover:border-dark-500"
                      }`}
                    >
                      <div className="text-center">
                        <div className="text-lg font-semibold mb-1">
                          Destinations
                        </div>
                        <div className="text-sm opacity-75">
                          Choose your dream destination
                        </div>
                      </div>
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setFormData((prev) => ({
                          ...prev,
                          packageType: "tour",
                          selectedPackage: "",
                        }))
                      }
                      className={`p-4 rounded-lg border-2 transition-colors ${
                        formData.packageType === "tour"
                          ? "border-primary-500 bg-primary-500/10 text-primary-400"
                          : "border-dark-600 bg-dark-700 text-dark-300 hover:border-dark-500"
                      }`}
                    >
                      <div className="text-center">
                        <div className="text-lg font-semibold mb-1">Tours</div>
                        <div className="text-sm opacity-75">
                          Select a tour package
                        </div>
                      </div>
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">
                    Select{" "}
                    {formData.packageType === "destination"
                      ? "Destination"
                      : "Tour"}{" "}
                    *
                  </label>
                  <select
                    name="selectedPackage"
                    value={formData.selectedPackage}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white focus:border-primary-500 focus:outline-none"
                  >
                    <option value="">Choose a {formData.packageType}</option>
                    {(formData.packageType === "destination"
                      ? destinations
                      : tours
                    ).map((item) => (
                      <option
                        key={item.id}
                        value={`${item.name} - ${item.price}`}
                      >
                        {item.name} - {item.price}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}

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
                  placeholder="+92 XXX XXX XXXX"
                />
              </div>
              <div>
                <label className="block text-white font-medium mb-2">
                  <FontAwesomeIcon
                    icon={faUsers}
                    className="mr-2 text-primary-400"
                  />
                  Number of Travelers *
                </label>
                <select
                  name="travelers"
                  value={formData.travelers}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white focus:border-primary-500 focus:outline-none"
                >
                  <option value="1">1 Person</option>
                  <option value="2">2 People</option>
                  <option value="3">3 People</option>
                  <option value="4">4 People</option>
                  <option value="5">5 People</option>
                  <option value="6">6 People</option>
                  <option value="7+">7+ People</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-white font-medium mb-2">
                <FontAwesomeIcon
                  icon={faCalendarAlt}
                  className="mr-2 text-primary-400"
                />
                Preferred Travel Date *
              </label>
              <input
                type="date"
                name="travelDates"
                value={formData.travelDates}
                onChange={handleChange}
                required
                min={new Date().toISOString().split("T")[0]}
                className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white focus:border-primary-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-white font-medium mb-2">
                <FontAwesomeIcon
                  icon={faComment}
                  className="mr-2 text-primary-400"
                />
                Special Requests or Questions
              </label>
              <textarea
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-dark-400 focus:border-primary-500 focus:outline-none resize-none"
                placeholder="Any special accommodations, dietary restrictions, or questions..."
              ></textarea>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-6 py-3 border border-dark-600 text-dark-300 rounded-lg font-medium hover:bg-dark-700 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`flex-1 btn-primary py-3 font-medium ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? "Submitting..." : "Submit Booking Request"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
