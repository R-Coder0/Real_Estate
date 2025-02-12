import heroimage from "../assets/h2.jpg";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <section
        className="relative bg-cover bg-center h-[300px] flex items-center justify-center"
        style={{
          backgroundImage: `url(${heroimage})`,
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <h1 className="relative z-10 text-3xl md:text-5xl font-bold text-white">
          Contact Us
        </h1>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto p-5 grid grid-cols-1 lg:grid-cols-2 gap-12 border-[1px]">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Reach us to find your dream property
            </h2>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-3 border border-gray-300 focus:outline-none focus:border-blue-400"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Contact No."
                  className="w-full p-3 border border-gray-300 focus:outline-none focus:border-blue-400"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 border border-gray-300 focus:outline-none focus:border-blue-400"
                />
              </div>
              <div>
                <textarea
                  rows="4"
                  placeholder="Message"
                  className="w-full p-3 border border-gray-300 focus:outline-none focus:border-blue-400"
                ></textarea>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Areas You're Looking For?"
                  className="w-full p-3 border border-gray-300 focus:outline-none focus:border-blue-400"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Your Budget?"
                  className="w-full p-3 border border-gray-300 focus:outline-none focus:border-blue-400"
                />
              </div>

              {/* Property Type */}
              <div className="mt-4">
                <p className="text-gray-600 font-medium mb-2">
                  Types of Property
                </p>
                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input type="radio" name="propertyType" className="mr-2" />
                    Commercial
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="propertyType" className="mr-2" />
                    Residential
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="propertyType" className="mr-2" />
                    Mix Use
                  </label>
                </div>
              </div>

              {/* Want To */}
              <div className="mt-4">
                <p className="text-gray-600 font-medium mb-2">Want to</p>
                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input type="radio" name="actionType" className="mr-2" />
                    Buy
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="actionType" className="mr-2" />
                    Sell
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="actionType" className="mr-2" />
                    Rent
                  </label>
                </div>
              </div>

              {/* Checkbox */}
              <div className="mt-4">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />I have read and
                  agree to the{" "}
                  <span className="text-blue-500 ml-1">Terms & Conditions</span>
                </label>
              </div>

              {/* Submit Button */}
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full bg-blue-400 text-white hover:text-blue-400 py-3 font-semibold transition-colors hover:bg-transparent border border-blue-400"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          {/* Contact Details and Map */}
          <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Contact Details
            </h2>
            <div>
              <h3 className="text-lg font-bold text-gray-800">Cell Phone:</h3>
              <p className="text-gray-600">+91 98678-92102</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800">Email:</h3>
              <p className="text-gray-600">info@rkmumbailrealtors.com</p>
              <p className="text-gray-600">rkmumbailrealtors@gmail.com</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800">
                MahaRERA Number:
              </h3>
              <p className="text-gray-600">A519000000008</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800">
                Social Icons:
              </h3>
              <div className="flex">
                <div className="mt-1 mr-2 cursor-pointer text-lg text-blue-500">
                  <FaFacebook />
                </div>
                <div className="mt-1  mr-2 cursor-pointer text-lg text-orange-400">
                  <FaInstagram />
                </div>
                <div className="mt-1  mr-2 cursor-pointer text-lg text-red-500">
                  <FaEnvelope />
                </div>
                <div className="mt-1  mr-2 cursor-pointer text-lg text-green-500">
                  <FaWhatsapp />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-800">Address:</h3>
              <p className="text-gray-600">
                Shop 2-B Shalimar Apartments, Ground Floor, B.M. Bhargav Marg,
                Opp Khira Industrial Estate, Santacruz (W), Mumbai 400054,
                Maharashtra, India.
              </p>
            </div>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.6893094322145!2d72.83106171490356!3d19.07283038709145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c630732f9b8f%3A0x6f83e65989e6b942!2sRK%20Mumbai%20Realtors!5e0!3m2!1sen!2sin!4v1614314691724!5m2!1sen!2sin"
                className="w-full h-60 border-0"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
