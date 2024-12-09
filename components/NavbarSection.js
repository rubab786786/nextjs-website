"use client"
import React, { useState } from 'react';
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false); // New state for the popup

  // Toggle functions for dropdowns
  const toggleAboutDropdown = () => {
    setIsAboutOpen(!isAboutOpen);
    setIsServicesOpen(false); // Close "Our Services" dropdown
  };

  const toggleServicesDropdown = () => {
    setIsServicesOpen(!isServicesOpen);
    setIsAboutOpen(false); // Close "About" dropdown
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen); // Toggle the popup visibility
  };

  const isActive = (path) => router.pathname === path;

  return (
    <>
      {isPopupOpen && (
        <section id="anchor-scroll" className="pop-section-1">
          <div className="pop-up-div">
            <div className="pop-up-div-1">
              <img
                src="/images/65c1ffabd8b160b194ad1167_—Pngtree—.png"
                alt="Close"
                width={32}
              data-w-id="8271c643-aea5-b0fe-9930-42b39c5e7cd9"
                className="image-popup-close"
                onClick={togglePopup} // Close popup
              />
            </div>
            <h1 className="heading-search">Didn't find What you are looking for?</h1>
            <form action="/search" className="search w-form">
              <input
                className="search-input w-input"
                maxLength={256}
                name="query"
                placeholder="Search…"
                type="search"
                id="search"
                required
              />
              <input
                type="submit"
                className="spark-button-2-copy search-button w-button"
                value="Search"
              />
            </form>
          </div>
        </section>
      )}

      <nav className="header w-nav">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="header-logo-link w-nav-brand w--current">
              <img src="/images/logo.svg" alt="Logo" className="brix---header-logo" />
            </Link>

            {/* Menu (Visible on large screens and centered) */}
            <div className="hidden lg:flex flex-grow justify-center mt-2 font-medium text-lg header-menu-wrapper w-nav-menu">
              <ul className="flex space-x-6 items-center header-nav-menu-list">
                <li className='header-nav-list-item-middle'>
                  <Link
                    href="/"
                    className={`header-nav-link w-nav-link w--current text-black dark:text-white hover:text-[#e83a3d] ${isActive("/") ? "text-[#e83a3d]" : ""
                      }`}
                  >
                    Home
                  </Link>
                </li>
                <li style={{ position: "relative" }}>
                  <div className="nav-dropdown-3">
                    <div
                      className="nav-dropdown-toggle-3"
                      onClick={toggleAboutDropdown}
                      style={{ cursor: "pointer", display: "flex", alignItems: "center", position: "relative" }}
                    >
                      <Link href="/about-us" className="link-block-14 w-inline-block">
                        <div
                          className={`header-nav-link ${isActive("/about-us") ? "text-[#e83a3d]" : ""
                            }`}
                        >
                          About
                        </div>
                      </Link>
                      {/* Arrow Icon */}
                      <div className="nav-dropdown-icon-3 w-icon-dropdown-toggle" style={{ marginLeft: "8px" }}>
                        {/* Up or Down Arrow based on state */}
                      </div>
                    </div>
                    {isAboutOpen && (
                      <nav className="nav-dropdown-list-3 shadow-three mobile-shadow-hide" style={{ position: "absolute", top: "100%", left: 0 }}>
                        <Link href="/news-media" className="dropdown-link w-dropdown-link">
                          News & Media
                        </Link>
                        <Link href="/resources" className="dropdown-link w-dropdown-link">
                          Resources
                        </Link>
                      </nav>
                    )}
                  </div>
                </li>
                <li style={{ position: "relative" }}>
                  <div className="nav-dropdown-3">
                    <div
                      className="nav-dropdown-toggle-3"
                      onClick={toggleServicesDropdown}
                      style={{ cursor: "pointer", display: "flex", alignItems: "center", position: "relative" }}
                    >
                      <Link href="/investment-service" className="link-block-14 w-inline-block">
                        <div
                          className={`header-nav-link ${isActive("/investment-service") ? "text-[#e83a3d]" : ""
                            }`}
                        >
                          Our Services
                        </div>
                      </Link>
                      {/* Arrow Icon */}
                      <div className="nav-dropdown-icon-3 w-icon-dropdown-toggle" style={{ marginLeft: "8px" }}>
                        {/* Up or Down Arrow based on state */}
                      </div>
                    </div>
                    {isServicesOpen && (
                      <nav className="nav-dropdown-list-3 shadow-three mobile-shadow-hide" style={{ position: "absolute", top: "100%", left: 0 }}>
                        <Link href="/innovative-investment" className="dropdown-link w-dropdown-link">
                          Innovative Investment
                        </Link>
                        <Link href="/crowdfunding" className="dropdown-link w-dropdown-link">
                          Crowdfunding
                        </Link>
                        <Link href="/assets-tokenization" className="dropdown-link w-dropdown-link">
                          Assets Tokenization
                        </Link>
                      </nav>
                    )}
                  </div>
                </li>
                <li>
                  <Link
                    href="/investor-guide"
                    className={`header-nav-link ${isActive("/investor-guide") ? "text-[#e83a3d]" : ""
                      }`}
                  >
                    Investor <br /> Guide
                  </Link>
                </li>
                <li>
                  <Link
                    href="/frequently-asked-questions"
                    className={`header-nav-link ${isActive("/frequently-asked-questions") ? "text-[#e83a3d]" : ""
                      }`}
                  >
                    FAQ's
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blogs"
                    className={`header-nav-link ${isActive("/blogs") ? "text-[#e83a3d]" : ""
                      }`}
                  >
                    Blog
                  </Link>
                </li>
                <li className="header-nav-list-item-middle">
                  <Link
                    href="/contact-us"
                    className={`header-nav-link ${isActive("/contact-us") ? "text-[#e83a3d]" : ""
                      }`}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="header-right-col">
              <div className="div-block-50">
                <button
                  className="lg:hidden flex justify-center items-center mr-3 text-black dark:text-white"
                  onClick={toggleMenu}
                  aria-label="Toggle menu"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6"
                  >
                    <path d="M3 6h18M3 12h18M3 18h18" />
                  </svg>
                </button>
                <button
                  className="flex items-center text-black"
                  onClick={togglePopup} // Open popup on click
                  aria-label="Open Search Popup"
                >
                  <img
                    src="/images/q.png"
                    alt="Search"
                    className="image-61"
                    style={{ cursor: "pointer" }}
                  />
                </button>

                <div className="btn-header-hidden-on-mbl">
                  <Link
                    href="https://www.tokensales.ufund.online/"
                    data-w-id="5951afa9-511e-d27d-ce27-04ac94802e78"
                    className="spark-button-header spark-icon-left-button next w-inline-block"
                  >
                    <div className="html-embed-8 w-embed">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <g id="SVGRepo_iconCarrier">
                          <path
                            d="M12 14.5V16.5M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                      </svg>
                    </div>
                    <p className="paragraph-5">Buy UFD tokens</p>
                  </Link>
                </div>
              </div>
              <Link
                href="https://www.mintme.com/token/UFUND/MINTME/trade"
                target="_blank"
                className="w-inline-block"
              >
                <img
                  src="/images/image-1_1.png"
                  loading="lazy"
                  alt=""
                  className="image-75"
                />
              </Link>
            </div>
          </div>

          {/* Menu (Visible on small screens when toggled) */}
          <div
            className={`${isMenuOpen ? "block" : "hidden"} lg:hidden bg-white dark:bg-gray-800 absolute top-full left-0 w-full shadow-md`}
          >
            <ul className="py-4 space-y-4 font-medium">
              <li>
                <Link
                  href="/"
                  className={`block text-black dark:text-white hover:text-[#e83a3d] ${isActive("/") ? "text-[#e83a3d]" : ""
                    } px-4`}
                >
                  Home
                </Link>
              </li>
              <li>
                <div style={{ position: "relative" }}>
                  <div
                    className="flex justify-between items-center px-4"
                    onClick={toggleAboutDropdown}
                    style={{ cursor: "pointer" }}
                  >
                    <Link href="/about-us" className="text-black dark:text-white">About</Link>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={
                          isAboutOpen
                            ? "M5 15l7-7 7 7"
                            : "M19 9l-7 7-7-7"
                        }
                      />
                    </svg>
                  </div>
                  {isAboutOpen && (
                    <ul className="pl-4">
                      <li>
                        <Link
                          href="/news-media"
                          className="block text-black dark:text-white hover:text-[#e83a3d] py-1"
                        >
                          News & Media
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/resources"
                          className="block text-black dark:text-white hover:text-[#e83a3d] py-1"
                        >
                          Resources
                        </Link>
                      </li>
                    </ul>
                  )}
                </div>
              </li>
              <li>
                <div style={{ position: "relative" }}>
                  <div
                    className="flex justify-between items-center px-4"
                    onClick={toggleServicesDropdown}
                    style={{ cursor: "pointer" }}
                  >
                    <Link href="investment-service" className="text-black dark:text-white">Our Services</Link>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={
                          isServicesOpen
                            ? "M5 15l7-7 7 7"
                            : "M19 9l-7 7-7-7"
                        }
                      />
                    </svg>
                  </div>
                  {isServicesOpen && (
                    <ul className="pl-4">
                      <li>
                        <Link
                          href="/innovative-investment"
                          className="block text-black dark:text-white hover:text-[#e83a3d] py-1"
                        >
                          Innovative Investment
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/crowdfunding"
                          className="block text-black dark:text-white hover:text-[#e83a3d] py-1"
                        >
                          Crowdfunding
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/assets-tokenization"
                          className="block text-black dark:text-white hover:text-[#e83a3d] py-1"
                        >
                          Assets Tokenization
                        </Link>
                      </li>
                    </ul>
                  )}
                </div>
              </li>
              <li>
                <Link
                  href="/investor-guide"
                  className="block text-black dark:text-white hover:text-[#e83a3d] px-4"
                >
                  Investor Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/frequently-asked-questions"
                  className="block text-black dark:text-white hover:text-[#e83a3d] px-4"
                >
                  FAQ's
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  className="block text-black dark:text-white hover:text-[#e83a3d] px-4"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="block text-black dark:text-white hover:text-[#e83a3d] px-4"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
