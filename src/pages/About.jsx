import { FaRegBuilding, FaUserTie, FaHandshake, FaLaptopCode } from "react-icons/fa";
import aboutImage from "../assets/h1.jpg";
import visionImage from "../assets/h1.jpg";
import missionImage from "../assets/h1.jpg";

const About = () => {
  return (
    <section className="bg-gray-100">
      {/* Header Section */}
      <div
        className="relative h-[500px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${aboutImage})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative z-10 text-5xl font-bold text-white">About Us</h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Introduction Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800">Welcome to HiTech Real Estate</h2>
          <p className="text-lg text-gray-600 mt-4">
            We are dedicated to providing innovative real estate solutions with integrity, personalized service, and cutting-edge technology. Whether you&apos;re searching for your dream home, a lucrative investment, or commercial space, we have the expertise to help you make the right choice.
          </p>
        </div>

        {/* Vision and Mission Section with Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          <div className="flex flex-col items-center">
            <img src={visionImage} alt="Our Vision" className="rounded-lg shadow-lg mb-6" />
            <h3 className="text-3xl font-semibold text-[#814d1b] mb-4">Our Vision</h3>
            <p className="text-gray-600 text-center">
              To revolutionize the real estate industry by offering innovative and tech-driven solutions that create value and lasting relationships with our clients.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img src={missionImage} alt="Our Mission" className="rounded-lg shadow-lg mb-6" />
            <h3 className="text-3xl font-semibold text-[#814d1b] mb-4">Our Mission</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Deliver exceptional real estate services with integrity and transparency.</li>
              <li>Provide clients with the best property options for long-term value.</li>
              <li>Embrace technology for smarter, more efficient solutions.</li>
            </ul>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 shadow-lg rounded-lg text-center">
              <FaRegBuilding className="text-5xl text-[#814d1b] mb-4 mx-auto" />
              <h4 className="text-2xl font-bold text-[#814d1b] mb-2">Wide Range of Properties</h4>
              <p className="text-gray-600">From luxury residences to commercial spaces, we offer a diverse portfolio for all budgets.</p>
            </div>
            <div className="bg-white p-8 shadow-lg rounded-lg text-center">
              <FaUserTie className="text-5xl text-[#814d1b] mb-4 mx-auto" />
              <h4 className="text-2xl font-bold text-[#814d1b] mb-2">Expert Guidance</h4>
              <p className="text-gray-600">Our professionals ensure a smooth and stress-free property journey.</p>
            </div>
            <div className="bg-white p-8 shadow-lg rounded-lg text-center">
              <FaHandshake className="text-5xl text-[#814d1b] mb-4 mx-auto" />
              <h4 className="text-2xl font-bold text-[#814d1b] mb-2">Transparency & Trust</h4>
              <p className="text-gray-600">We build trust through honest communication and full transparency.</p>
            </div>
            <div className="bg-white p-8 shadow-lg rounded-lg text-center">
              <FaLaptopCode className="text-5xl text-[#814d1b] mb-4 mx-auto" />
              <h4 className="text-2xl font-bold text-[#814d1b] mb-2">Tech-Driven Solutions</h4>
              <p className="text-gray-600">We use advanced technology for accurate insights and smart decisions.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-[#814d1b] text-white py-16 text-center rounded-lg">
          <h2 className="text-4xl font-bold mb-4">Ready to Find Your Dream Property?</h2>
          <p className="text-lg mb-8">Contact us today and let us help you take the next step in your real estate journey.</p>
          <button className="bg-white text-[#814d1b] font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition duration-300">
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
