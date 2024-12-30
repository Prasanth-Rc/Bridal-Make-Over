import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Blog from "./components/Blog";
import Artist from "./components/Artist";
import Contact from "./components/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container-fluid pt-5">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/artist" element={<Artist />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
