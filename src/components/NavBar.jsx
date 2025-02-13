import { Link } from "react-router-dom";
import navImage from "../assets/nav-img.png";
import TopBar from "./TopBar";


const Navbar = () => {
  return (<>
    <TopBar/>
    <nav className="bg-[#814d1b] h-15 hidden lg:flex items-center">
      <div className="max-w-[1400px] mx-auto flex justify-center space-x-4 h-full">
        <NavItem to="/" label="HOME" />
        {/* <NavItem to="/about-deep-vihar" label="ABOUT DEEP VIHAR" /> */}
        <NavItem to="/about" label="ABOUT US" />
        <NavItem to="/services" label="SERVICES" />
        <NavItem to="/gallery" label="GALLERY" />
        <NavItem to="/properties" label="PROPERTIES" />
        <NavItem to="/contact" label="CONTACT US" />
      </div>
    </nav>
    </>
  );
};

// eslint-disable-next-line react/prop-types
const NavItem = ({ to, label }) => {
  return (<>
 
    <Link
      to={to}
      className="sticky text-white text-sm font-bold hover:text-[#814d1b] hover:bg-white text-center items-center flex px-[8px] md:px-[10px] lg:px-[12px] py-[26px]"
    >
      <span
        className="absolute top-0 left-0 right-0 mx-auto w-[42px] h-[12px]"
        style={{
          backgroundImage: `url(${navImage})`,
          backgroundRepeat: "no-repeat",
        }}
      ></span>
      {label}
    </Link>
    <span className="border-[1px] border-white h-[20px] my-auto"></span>
    </>
  );
};

export default Navbar;
