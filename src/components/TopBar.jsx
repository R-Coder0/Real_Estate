import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const TopBar = () => {
  return (
    <div className="bg-white py-6 hidden md:hidden lg:block">
      <div className="max-w-[1400px] mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <div className="border-2 border-[#a96b29] p-2 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="#a96b29"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v18m9-9H3"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-[#a96b29]">
            DEEP <span className="text-black">VIHAR</span>
          </h1>
        </div>

        {/* Contact Information */}
        <div className="flex space-x-8 text-sm text-gray-700 ">
          <div className="flex items-center space-x-2 border-r-[1px] border-gray-300">
            <PhoneIcon className="h-8 w-8 text-[#a96b29]" />
            <div className="flex flex-col mr-[15px]">
              <p className="flex font-medium text-base">Phone Number</p>
              <span className="font-medium text-xs flex">
              +91-8700220135
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-2 border-r-[1px] border-gray-300">
            <EnvelopeIcon className="h-8 w-8 text-[#a96b29]" />
            <div className="flex flex-col mr-[15px]">
              <p className="flex font-medium text-base">Email Address</p>
              <span className="font-medium text-xs flex">
                Deepvihardelhi@gmail.com
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-2 ">
            <MapPinIcon className="h-8 w-8 text-[#a96b29]" />
            <div className="flex flex-col">
              <p className="flex font-medium text-base">Location</p>
              <span className="font-medium text-xs flex">
              Deep Vihar, Pansali Near Sec – 24, Rohini,<br />
              Delhi -110042
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
