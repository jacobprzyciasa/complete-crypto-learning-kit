import React, { useState, useEffect } from 'react'

interface HamburgerMenuProps {
  isScrolled?: boolean
}

function HamburgerMenu({ isScrolled }: HamburgerMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  
  const [showAbout, setShowAbout] = useState(false)

  

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="relative">
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className={`fixed ${isScrolled ? 'top-3' : 'top-1'} right-6 z-50 flex flex-col justify-center items-center w-8 h-8 focus:outline-none`}
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-0.5 ${isScrolled ? 'bg-black' : 'bg-white'} transition-all duration-200 ${
            isOpen ? 'rotate-45 translate-y-0.5' : 'mb-1'
          }`}
        />
        <span
          className={`block w-6 h-0.5 ${isScrolled ? 'bg-black' : 'bg-white'} transition-all duration-200 ${
            isOpen ? 'opacity-0' : 'mb-1'
          }`}
        />
        <span
          className={`block w-6 h-0.5 ${isScrolled ? 'bg-black' : 'bg-white'} transition-all duration-200 ${
            isOpen ? '-rotate-45 -translate-y-0.5' : ''
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      <div
        className={`fixed top-12 right-6 w-48 bg-white rounded-lg shadow-lg z-40 overflow-hidden transition-all duration-200 ease-out ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        <div className="flex flex-col py-2">
            <a
              href="https://www.tradingview.com/script/IhKShMmp-Chart-Master/"
              className="text-black font-spartan text-sm font-medium px-4 py-2.5 hover:bg-gray-100 transition-colors"
              onClick={toggleMenu}
            >
              Launch Chart Master
            </a>
        </div>
      </div>
    </div>
  )
}

export default HamburgerMenu
