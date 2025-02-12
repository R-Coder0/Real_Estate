import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import hero1 from "../assets/h1.jpg";
import hero2 from "../assets/h2.jpg";
import "flowbite";
import { FaPlus, FaMinus } from "react-icons/fa";
import cicons from "../assets/consultant.svg";

const Home = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  // Counter animation function
  const animateCounter = (target, setCount, duration) => {
    let start = 0;
    const increment = target / (duration / 50); // Adjust speed by changing duration
    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, 50);
  };

  useEffect(() => {
    animateCounter(150000, setCount1, 2000); // 2 seconds to reach 1 million
    animateCounter(1000, setCount2, 2000); // 2 seconds to reach 400
    animateCounter(200, setCount3, 2000); // 2 seconds to reach 500K
  }, []);
  const services = [
    {
      title: "Property Consultation",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint vero blanditiis quia temporibus sequi fuga maxime recusandae cupiditate dolorum! Quo doloremque enim iusto vel facere id recusandae! Praesentium adipisci in veniam sint possimus temporibus, nulla autem, repellendus nesciunt nisi explicabo.",
      image: hero1,
      icons: cicons,
    },
    {
      title: "Commercial Leasing",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint vero blanditiis quia temporibus sequi fuga maxime recusandae cupiditate dolorum! Quo doloremque enim iusto vel facere id recusandae! Praesentium adipisci in veniam sint possimus temporibus, nulla autem, repellendus nesciunt nisi explicabo.",
      image: hero1,
      icons: cicons,
    },
    {
      title: "Legal Assistance",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint vero blanditiis quia temporibus sequi fuga maxime recusandae cupiditate dolorum! Quo doloremque enim iusto vel facere id recusandae! Praesentium adipisci in veniam sint possimus temporibus, nulla autem, repellendus nesciunt nisi explicabo.",
      image: hero2,
      icons: cicons,
    },
    {
      title: "Interior Design",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint vero blanditiis quia temporibus sequi fuga maxime recusandae cupiditate dolorum! Quo doloremque enim iusto vel facere id recusandae! Praesentium adipisci in veniam sint possimus temporibus, nulla autem, repellendus nesciunt nisi explicabo.",
      image: hero2,
      icons: cicons,
    },
  ];
  const images = [hero1, hero2]; // Add more images if needed
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval); // Cleanup on component unmount
  }, [images.length]);

  // Handle manual navigation
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      title: "Personalized Service",
      content:
        "We offer tailored services to meet your unique needs and preferences.",
    },
    {
      title: "Integrity and Trust",
      content:
        "Our team operates with the highest level of integrity and transparency.",
    },
    {
      title: "Innovative Technology",
      content:
        "Hitech Real Estate is at the cutting edge of real estate technology. We leverage the latest tools and platforms to streamline your experience, making the process more efficient and convenient.",
    },
    {
      title: "Community Engagement",
      content:
        "We actively engage with the community to foster long-lasting relationships.",
    },
    {
      title: "Community Engagement",
      content:
        "We actively engage with the community to foster long-lasting relationships.",
    },
    {
      title: "Community Engagement",
      content:
        "We actively engage with the community to foster long-lasting relationships.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <>
      <section className="relative w-full">
        <div className="relative h-56 md:h-[40rem] overflow-hidden">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={image}
                className="block w-full h-full object-cover"
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>

        {/* Previous Button */}
        <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={handlePrev}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 bg-black/30 rounded-full group-hover:bg-black/50">
            <svg
              className="w-4 h-4 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>

        {/* Next Button */}
        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={handleNext}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 bg-black/30 rounded-full group-hover:bg-black/50">
            <svg
              className="w-4 h-4 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </section>

      {/* ABout */}
      <section>
        <div className="max-w-7xl mx-auto my-16 px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div
              style={{
                fontFamily: "karla",
              }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Welcome to Hi-Tech Real Estate
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Hi-Tech Real Estate deal in purchase, sale, rent, and lease of
                commercial and residential properties. Our area of expertise is
                from Bandra to Andheri. We deal in prelaunch,
                under-construction, resale as well as ready-to-move
                new-construction projects.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our residential property portfolio ranges from Compact 1 Bedroom
                Apartments to Duplex Penthouses and Private Luxury Sea Facing
                Bungalows. Our commercial portfolio has more than 1,000,000
                square feet of shops, showrooms, and offices for sale and rent.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We are the Go-To-Guys when you are looking to purchase or rent
                your commercial or residential property in Mumbai.
              </p>
              <Link
                className="flex w-[118px] bg-blue-400 px-4 py-3 hover:bg-transparent border border-blue-400 font-semibold text-white hover:text-blue-400 mt-3 cursor-pointer"
                style={{
                  fontFamily: "karla",
                }}
              >
                Know More
              </Link>
            </div>

            {/* Image */}
            <div className="flex justify-center">
              <img
                src={hero1} // Replace with your image path
                alt="About Hi-Tech Real Estate"
              />
            </div>
          </div>
        </div>
      </section>
      {/* counter */}
      <section
        className="relative bg-cover bg-center bg-fixed h-[500px] md:h-[400px] lg:h-[300px]"
        style={{ backgroundImage: `url(${hero1})`, fontFamily: "karla" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>{" "}
        {/* Dark overlay */}
        <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center flex-col md:flex-row justify-around text-white gap-[40px]">
          {/* Counter 1 */}
          <div className="text-center">
            <h3 className="text-4xl font-bold">
              {count1.toLocaleString()} + Sq Yard
            </h3>
            <p className="mt-2 text-lg uppercase">Land Deliver Till Date</p>
          </div>
          {/* Counter 2 */}
          <div className="text-center">
            <h3 className="text-4xl font-bold">{count2.toLocaleString()} +</h3>
            <p className="mt-2 text-lg uppercase">
              Successfull Handed Over Keys Of
              <br /> Residential Property to home seeker
            </p>
          </div>
          {/* Counter 3 */}
          <div className="text-center">
            <h3 className="text-4xl font-bold">{count3.toLocaleString()} +</h3>
            <p className="mt-2 text-lg">CUSTOMERS SERVED AROUND THE WORLD</p>
          </div>
        </div>
      </section>
      {/* Service */}

      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-2 ">
            Our Services
          </h2>
          <p
            className="mb-12 text-center"
            style={{
              fontFamily: "karla",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            ut maxime ipsum debitis aspernatur vitae rerum, aut blanditiis sit
            eligendi! Perferendis libero illum, similique vitae molestiae
            voluptas eius suscipit doloremque?
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative group shadow-lg overflow-hidden bg-center bg-cover h-80 transition-transform duration-700 hover:scale-105"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-center bg-cover transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${service.image})`,
                  }}
                ></div>

                {/* Title and Icon */}
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10 transition-all duration-700 group-hover:scale-110 group-hover:translate-y-full ">
                  <img
                    src={service.icons}
                    alt="Service Icon"
                    className="w-20 h-20 mb-2"
                  />
                  <h3
                    className="text-2xl font-bold text-white"
                    style={{
                      fontFamily: "karla",
                    }}
                  >
                    {service.title}
                  </h3>
                </div>

                {/* Overlay with Swipe-Up Effect for Description */}
                <div className="absolute bottom-0 left-0 right-0 h-full bg-blue-400 flex flex-col items-center justify-center text-white translate-y-full group-hover:translate-y-0 transition-transform duration-1000 ease-in-out">
                  <p
                    className="text-left px-4"
                    style={{
                      fontFamily: "karla",
                    }}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLAN */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-lg font-medium text-center text-gray-600 mb-2">
            FIND YOUR FIT.
          </h3>
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            PROPERTY PLANS
          </h2>
          <div className="overflow-x-auto">
            <div className="flex justify-start md:justify-start lg:justify-center">
              {[
                { size: "500 SQ", color: "bg-blue-400" },
                { size: "250 SQ", color: "bg-gray-200" },
                { size: "400 SQ", color: "bg-gray-200" },
                { size: "1600 SQ", color: "bg-gray-200" },
                { size: "160 SQ", color: "bg-gray-200" },
              ].map((plan, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 w-56 h-20 ${plan.color} flex items-center justify-center border-r-[1px] border-[#ffff]`}
                >
                  <span className="text-lg font-semibold text-gray-800 ">
                    {plan.size}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* FAQs */}
      <section
        className="relative bg-cover bg-center py-16"
        style={{ backgroundImage: `url(${hero1})`, fontFamily: "karla" }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Why Choose Us?</h2>
          <p className="text-lg text-white">
            Discover the key values that set us apart. Our commitment to
            personalized service, integrity, and cutting-edge technology ensures
            your success.
          </p>
        </div>

        {/* Accordion */}
        <div className="relative z-10 max-w-5xl mx-auto bg-transparent border-2 border-white shadow-lg">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300">
              <button
                className="w-full flex gap-2 items-center p-5 focus:outline-none transition-colors duration-300"
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-blue-600 text-xl">
                  {activeIndex === index ? <FaMinus /> : <FaPlus />}
                </span>
                <span
                  className={`text-lg font-semibold ${
                    activeIndex === index ? "text-white" : "text-white"
                  }`}
                >
                  {faq.title}
                </span>
              </button>
              {activeIndex === index && (
                <div className="p-5 text-white transition-all duration-300 border-t-2">
                  <p>{faq.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      {/* get in touch */}
      <section className="py-16 px-5 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">GET IN TOUCH!</h2>
        </div>
        <form className="max-w-4xl mx-auto">
          {/* Message Input */}

          {/* Name and Email Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label
                htmlFor="Name"
                className="text-sm font-medium text-gray-800"
              >
                Your Name <span className="text-red-500">*</span>
              </label>

              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full p-4 border border-gray-400 focus:border-blue-400 focus:outline-none"
                required
              />
            </div>
            <div>
              <label
                htmlFor="Email"
                className="text-sm font-medium text-gray-800"
              >
                Your Email 
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="w-full p-4 border border-gray-400 focus:border-blue-400 focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="Phone Number"
                className="text-sm font-medium text-gray-800"
              >
                Your Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="Phone Number"
                id="Phone Number"
                placeholder="Phone Number"
                className="w-full p-4 border border-gray-400 focus:border-blue-400 focus:outline-none"
                required
              />
            </div>
            <div>
              <label
                htmlFor="location"
                className="text-sm font-medium text-gray-800"
              >
                Your Preferred Location <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="location"
                placeholder="Your Preferred Location"
                className="w-full p-4 border border-gray-400 focus:border-blue-400 focus:outline-none"
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="sr-only">
              Your Message
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="Your Message"
              className="w-full p-4 border border-gray-400 focus:border-blue-400 focus:outline-none"
            ></textarea>
          </div>
          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full md:w-auto bg-blue-400 text-white font-semibold py-3 px-8 border border-blue-400 hover:text-blue-400 hover:bg-transparent transition-colors duration-300"
            >
              LEAVE A MESSAGE
            </button>
          </div>
          {/* Checkbox */}
          <div className="mt-4 flex items-center justify-center">
            <input
              type="checkbox"
              id="agreement"
              className="mr-2 w-5 h-5 text-blue-400 border-gray-300 rounded focus:ring-blue-400"
            />
            <label htmlFor="agreement" className="text-sm text-gray-600">
              I agree that my submitted data is being collected and stored.
            </label>
          </div>
        </form>
      </section>
    </>
  );
};

export default Home;
