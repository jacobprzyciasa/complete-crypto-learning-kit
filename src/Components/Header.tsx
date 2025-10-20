'use client'
import React, { useState, useEffect } from "react";
import HamburgerMenu from "./Hamburger";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className={`flex justify-center items-center w-screen fixed top-0 left-0 z-30 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#FFFFFF] h-14 shadow-lg' 
          : 'bg-transparent h-10'
      }`}>
        {/* <HamburgerMenu isScrolled={isScrolled} /> */}
      <p className={`${isScrolled ? 'text-black sm:text-3xl text-xl' : 'text-white text-xl text-shadow-lg'} font-bold text-3xl font-spartan uppercase mt-1`}>
        Complete Crypto Learning Kit
      </p>
    </header>
  );
}

export default Header;
