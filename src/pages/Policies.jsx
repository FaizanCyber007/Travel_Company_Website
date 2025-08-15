import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldAlt,
  faFileContract,
  faCookie,
  faUserShield,
  faChevronDown,
  faChevronUp,
  faCalendar,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";

export default function Policies() {
  const [activeSection, setActiveSection] = useState("privacy");

  const sections = [
    { id: "privacy", title: "Privacy Policy", icon: faShieldAlt },
    { id: "terms", title: "Terms & Conditions", icon: faFileContract },
    { id: "cookies", title: "Cookie Policy", icon: faCookie },
    { id: "cancellation", title: "Cancellation Policy", icon: faCalendar },
  ];

  return (
    <div className="min-h-screen bg-dark-900 pt-8">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-dark-900 via-primary-900 to-dark-900">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-6">
              Legal <span className="text-gradient">Policies</span>
            </h1>
            <p className="text-xl text-dark-200 mb-8">
              Transparency and trust are the foundation of our service. Read our
              policies to understand how we protect you and your data.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-8 bg-dark-800 border-b border-dark-700">
        <div className="container">
          <div className="flex flex-wrap gap-4 justify-center">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
                  activeSection === section.id
                    ? "bg-primary-600 text-white"
                    : "bg-dark-700 text-dark-300 hover:bg-dark-600"
                }`}
              >
                <FontAwesomeIcon icon={section.icon} />
                {section.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-dark-900">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Privacy Policy */}
            {activeSection === "privacy" && (
              <div className="card p-8 space-y-8">
                <div className="flex items-center gap-3 mb-6">
                  <FontAwesomeIcon
                    icon={faShieldAlt}
                    className="text-primary-500 text-2xl"
                  />
                  <h2 className="font-heading text-3xl font-bold text-white">
                    Privacy Policy
                  </h2>
                </div>

                <div className="bg-primary-600/10 border border-primary-600/20 rounded-lg p-4 mb-6">
                  <p className="text-primary-200 text-sm">
                    <strong>Last Updated:</strong> January 15, 2025
                  </p>
                </div>

                <div className="space-y-6 text-dark-200">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      Information We Collect
                    </h3>
                    <p className="mb-4">
                      We collect information you provide directly to us, such as
                      when you:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Create an account or book a travel package</li>
                      <li>Contact our customer support team</li>
                      <li>Subscribe to our newsletter</li>
                      <li>Participate in surveys or contests</li>
                      <li>Leave reviews or feedback</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      How We Use Your Information
                    </h3>
                    <p className="mb-4">
                      We use the information we collect to:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Process your bookings and provide travel services</li>
                      <li>Send you booking confirmations and travel updates</li>
                      <li>
                        Provide customer support and respond to your inquiries
                      </li>
                      <li>Send marketing communications (with your consent)</li>
                      <li>Improve our website and services</li>
                      <li>Comply with legal obligations</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      Data Security
                    </h3>
                    <p>
                      We implement appropriate technical and organizational
                      security measures to protect your personal information
                      against unauthorized access, alteration, disclosure, or
                      destruction. We use industry-standard encryption to
                      protect sensitive data during transmission.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      Your Rights
                    </h3>
                    <p className="mb-4">You have the right to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        Access, update, or delete your personal information
                      </li>
                      <li>Opt-out of marketing communications</li>
                      <li>Request data portability</li>
                      <li>
                        Lodge a complaint with data protection authorities
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      Contact Us
                    </h3>
                    <p>
                      If you have questions about this Privacy Policy, please
                      contact us at
                      <a
                        href="mailto:privacy@wanderlux.com"
                        className="text-primary-400 hover:text-primary-300 ml-1"
                      >
                        privacy@wanderlux.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Terms & Conditions */}
            {activeSection === "terms" && (
              <div className="card p-8 space-y-8">
                <div className="flex items-center gap-3 mb-6">
                  <FontAwesomeIcon
                    icon={faFileContract}
                    className="text-primary-500 text-2xl"
                  />
                  <h2 className="font-heading text-3xl font-bold text-white">
                    Terms & Conditions
                  </h2>
                </div>

                <div className="bg-accent-600/10 border border-accent-600/20 rounded-lg p-4 mb-6">
                  <p className="text-accent-200 text-sm">
                    <strong>Last Updated:</strong> January 15, 2025
                  </p>
                </div>

                <div className="space-y-6 text-dark-200">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      Acceptance of Terms
                    </h3>
                    <p>
                      By accessing and using WanderLux services, you accept and
                      agree to be bound by the terms and provision of this
                      agreement. These terms apply to all visitors, users, and
                      others who access or use our service.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      Booking and Payment
                    </h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        All bookings are subject to availability and
                        confirmation
                      </li>
                      <li>
                        Payment must be made in full at the time of booking
                        unless otherwise agreed
                      </li>
                      <li>
                        Prices are subject to change until booking is confirmed
                      </li>
                      <li>
                        We accept major credit cards and secure online payment
                        methods
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      Travel Requirements
                    </h3>
                    <p className="mb-4">
                      It is your responsibility to ensure you have:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Valid passport and necessary visas</li>
                      <li>Required vaccinations and health certificates</li>
                      <li>Appropriate travel insurance</li>
                      <li>Understanding of local laws and customs</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      Limitation of Liability
                    </h3>
                    <p>
                      WanderLux acts as an intermediary between you and travel
                      service providers. While we strive to ensure the quality
                      of services, we are not liable for acts, errors,
                      omissions, representations, warranties, or negligence of
                      third-party providers.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      Force Majeure
                    </h3>
                    <p>
                      We are not responsible for any failure to perform our
                      obligations due to circumstances beyond our reasonable
                      control, including but not limited to natural disasters,
                      war, terrorism, or government actions.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Cookie Policy */}
            {activeSection === "cookies" && (
              <div className="card p-8 space-y-8">
                <div className="flex items-center gap-3 mb-6">
                  <FontAwesomeIcon
                    icon={faCookie}
                    className="text-primary-500 text-2xl"
                  />
                  <h2 className="font-heading text-3xl font-bold text-white">
                    Cookie Policy
                  </h2>
                </div>

                <div className="space-y-6 text-dark-200">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      What Are Cookies?
                    </h3>
                    <p>
                      Cookies are small text files that are placed on your
                      computer or mobile device when you visit a website. They
                      are widely used to make websites work more efficiently and
                      provide information to site owners.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      Types of Cookies We Use
                    </h3>

                    <div className="space-y-4">
                      <div className="bg-dark-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-white mb-2">
                          Essential Cookies
                        </h4>
                        <p className="text-sm">
                          Required for the website to function properly. These
                          cannot be disabled.
                        </p>
                      </div>

                      <div className="bg-dark-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-white mb-2">
                          Analytics Cookies
                        </h4>
                        <p className="text-sm">
                          Help us understand how visitors interact with our
                          website by collecting anonymous information.
                        </p>
                      </div>

                      <div className="bg-dark-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-white mb-2">
                          Marketing Cookies
                        </h4>
                        <p className="text-sm">
                          Used to deliver relevant advertisements and track the
                          effectiveness of our campaigns.
                        </p>
                      </div>

                      <div className="bg-dark-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-white mb-2">
                          Functional Cookies
                        </h4>
                        <p className="text-sm">
                          Remember your preferences and settings to improve your
                          experience.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      Managing Cookies
                    </h3>
                    <p className="mb-4">
                      You can control cookies through your browser settings:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        Chrome: Settings {">"} Privacy and Security {">"}{" "}
                        Cookies
                      </li>
                      <li>Firefox: Preferences {">"} Privacy & Security</li>
                      <li>Safari: Preferences {">"} Privacy</li>
                      <li>Edge: Settings {">"} Cookies and Site Permissions</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Cancellation Policy */}
            {activeSection === "cancellation" && (
              <div className="card p-8 space-y-8">
                <div className="flex items-center gap-3 mb-6">
                  <FontAwesomeIcon
                    icon={faCalendar}
                    className="text-primary-500 text-2xl"
                  />
                  <h2 className="font-heading text-3xl font-bold text-white">
                    Cancellation Policy
                  </h2>
                </div>

                <div className="bg-red-600/10 border border-red-600/20 rounded-lg p-4 mb-6">
                  <div className="flex items-center gap-2 text-red-200">
                    <FontAwesomeIcon icon={faExclamationTriangle} />
                    <span className="font-medium">
                      Important: Cancellation terms may vary by tour package
                    </span>
                  </div>
                </div>

                <div className="space-y-6 text-dark-200">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      Standard Cancellation Terms
                    </h3>

                    <div className="space-y-4">
                      <div className="bg-green-600/10 border border-green-600/20 rounded-lg p-4">
                        <h4 className="font-semibold text-green-300 mb-2">
                          More than 30 days before departure
                        </h4>
                        <p className="text-sm">
                          Full refund minus $50 processing fee
                        </p>
                      </div>

                      <div className="bg-yellow-600/10 border border-yellow-600/20 rounded-lg p-4">
                        <h4 className="font-semibold text-yellow-300 mb-2">
                          15-30 days before departure
                        </h4>
                        <p className="text-sm">
                          75% refund of total booking cost
                        </p>
                      </div>

                      <div className="bg-orange-600/10 border border-orange-600/20 rounded-lg p-4">
                        <h4 className="font-semibold text-orange-300 mb-2">
                          7-14 days before departure
                        </h4>
                        <p className="text-sm">
                          50% refund of total booking cost
                        </p>
                      </div>

                      <div className="bg-red-600/10 border border-red-600/20 rounded-lg p-4">
                        <h4 className="font-semibold text-red-300 mb-2">
                          Less than 7 days before departure
                        </h4>
                        <p className="text-sm">No refund available</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      Travel Insurance
                    </h3>
                    <p className="mb-4">
                      We strongly recommend purchasing travel insurance to
                      protect against:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Trip cancellation due to illness or emergency</li>
                      <li>Flight delays or cancellations</li>
                      <li>Lost or stolen luggage</li>
                      <li>Medical emergencies abroad</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      How to Cancel
                    </h3>
                    <p className="mb-4">To cancel your booking:</p>
                    <ol className="list-decimal pl-6 space-y-2">
                      <li>
                        Log into your account or call our customer service
                      </li>
                      <li>Provide your booking reference number</li>
                      <li>Complete the cancellation form</li>
                      <li>Receive confirmation within 24 hours</li>
                      <li>Refunds processed within 5-10 business days</li>
                    </ol>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      Emergency Situations
                    </h3>
                    <p>
                      In case of emergencies (natural disasters, political
                      unrest, etc.), we will work with you to reschedule or
                      provide alternative arrangements. Government travel
                      advisories may affect our standard cancellation policy.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-accent-600">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-white mb-4">
              Have Questions About Our Policies?
            </h2>
            <p className="text-white/90 mb-6">
              Our legal team is here to help clarify any questions you may have
              about our terms and conditions.
            </p>
            <a
              href="/contact"
              className="btn-secondary bg-white text-primary-600 hover:bg-gray-100 px-8 py-3"
            >
              <FontAwesomeIcon icon={faUserShield} className="mr-2" />
              Contact Legal Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
