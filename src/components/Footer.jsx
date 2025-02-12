import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Column 1: Logo and Description */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-4">HiTech Real Estate</h2>
          <p className="text-sm">
            We provide innovative real estate solutions and offer personalized services with integrity and trust.
            Our expertise lies in delivering the best properties with cutting-edge technology.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-yellow-500 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500 transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500 transition-colors">
                Properties
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500 transition-colors">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Services */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-4">Our Services</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-yellow-500 transition-colors">
                Property Consultation
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500 transition-colors">
                Commercial Leasing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500 transition-colors">
                Legal Assistance
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500 transition-colors">
                Interior Design
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact and Social Media */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-4">Contact Us</h4>
          <p className="text-sm">Address: 123 Main Street, New York, NY 10001</p>
          <p className="text-sm">Phone: +1 234 567 890</p>
          <p className="text-sm mb-4">Email: info@realestate.com</p>
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-blue-600 transition-colors text-xl"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-black transition-colors text-xl"
              aria-label="Twitter"
            >
              <FaXTwitter />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-orange-600 transition-colors text-xl"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-900 transition-colors text-xl"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Divider and Copyright */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center">
        <p className="text-sm text-gray-500">
          © 2025 HiTech Real Estate. All rights reserved. Developed by <span className="text-yellow-500"><a href="https://bussinesskaro.com/">Bussinesskaro.com</a></span>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
