import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// componets
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BreakingNews from "./components/BreakingNews";
import Blog from "./components/Blog";
import One from "./components/One";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="w-full md:w-[60rem] lg:w-[60rem] mx-auto p-5">
        <Hero />
        <BreakingNews />
        <Blog />
        {/* <One /> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
