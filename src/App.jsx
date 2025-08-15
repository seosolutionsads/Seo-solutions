import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SeoMeta from "./seoMeta";

export default function App() {
  return (
    <>
      <SeoMeta />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
