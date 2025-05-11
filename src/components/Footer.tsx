import React from "react";
import {
  Dumbbell,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
} from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-gray-400 pt-16 pb-8 flex">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 items-center">
          {/* Logo and About */}
          <div>
            <a
              href="#home"
              className="flex items-center gap-2 text-2xl font-bold text-white mb-4"
            >
              <Dumbbell className="h-8 w-8 text-red-600" />
              <span className="bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
                Stay Fit
              </span>
            </a>
            <p className="mb-6">
              Transform your body and mind at India's premier fitness
              destination. We offer state-of-the-art facilities and expert
              guidance for all fitness levels.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-3">
              {[
                "Home",
                "About Us",
                "Classes",
                "Trainers",
                "Pricing",
                "Contact",
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-gray-400 hover:text-red-500 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold text-white mb-6">Our Services</h3>
            <ul className="grid grid-cols-2 gap-3">
              {[
                "Weight Training",
                "Cardio Workouts",
                "Yoga Classes",
                "Karate Training",
                "Boxing Classes",
                "Personal Training",
              ].map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-red-500 transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          {/* <div>
            <h3 className="text-xl font-bold text-white mb-6">Newsletter</h3>
            <p className="mb-4">Subscribe to our newsletter for the latest updates, promotions, and fitness tips.</p>
            <form className="space-y-4">
              <div className="relativ e">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>
              <button 
                type="submit"
                className="btn btn-primary w-full py-2"
              >
                Subscribe
              </button>
            </form>
          </div> */}
          <a
            href="#home"
            className="flex items-center gap-2 text-2xl font-bold text-white mb-4 ml-28"
          >
            <Dumbbell className="h-8 w-8 text-red-600" />
            <span className="bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
              Stay Fit
            </span>
          </a>
        </div>

        <hr className="border-gray-800 mb-8" />

        <div className="text-center">
          <p>&copy; {currentYear} StayFit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
