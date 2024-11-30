import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function Home() {
  return (
    <div className="min-h-screen relative container mx-auto bg-image   ">
      <Navbar />
      <Hero></Hero>
      <Footer></Footer>
    </div>
  );
}

export default Home;
