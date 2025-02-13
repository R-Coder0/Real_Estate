import "./App.css";
import Navbar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MobileNavbar from "./components/MobileMenu";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <Router> {/* Move Router to wrap the entire content */}
      <div>
        <Navbar />
        <MobileNavbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/gallery" element={<Gallery/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
