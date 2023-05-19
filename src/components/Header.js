import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="font-serif">
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href="/">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="ml-3 text-xl">OP Pharma : Payment Tracker</span>
            </a>
          </Link>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
            <Link href="/">
              <a className="mr-5 hover:text-gray-900 hover:scale-105">Home</a>
            </Link>
            <Link href="/payments">
              <a className="mr-5 hover:text-gray-900 hover:scale-105">Payments</a>
            </Link>
          </nav>
          <div className="md:hidden">
            <button
              type="button"
              className="p-2 rounded-md text-gray-900 hover:text-gray-600 focus:outline-none focus:text-gray-600"
              onClick={toggleMenu}
            >
              <svg
                className="w-6 h-6 transform rotate-90"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                )}
              </svg>
              <span className="ml-2 text-xs">Menu</span>
            </button>
          </div>
        </div>
        <div
          className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
        >
          {/* Vertical text */}
          <Link href="/">
            <a className="block py-2 pl-4 pr-0 hover:text-gray-900 transform rotate-90">
              Home
            </a>
          </Link>
          <Link href="/payments">
            <a className="block py-2 pl-4 pr-0 hover:text-gray-900 transform rotate-90">
              Payments
            </a>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
