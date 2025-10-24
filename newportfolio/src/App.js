import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar";
import Meraki from "./pages/Meraki";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router>
      {/* Shared Navbar */}
      <Navbar />
      
      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meraki" element={<Meraki />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      {/* <Footer /> */}
    </Router>

    
  );
}
