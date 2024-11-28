"use client"
import { useState } from "react";

export default function ContactUs() {
    const [isAboutOpen, setIsAboutOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
  
    // Toggle functions for dropdowns
    const toggleAboutDropdown = () => {
      setIsAboutOpen(!isAboutOpen);
      setIsServicesOpen(false); // Close "Our Services" dropdown
    };
  
    const toggleServicesDropdown = () => {
      setIsServicesOpen(!isServicesOpen);
      setIsAboutOpen(false); // Close "About" dropdown
    };
  
  return (
    <>
  {/*  This site was created in Webflow. https://webflow.com  */}
  {/*  Last Published: Fri Nov 22 2024 11:01:15 GMT+0000 (Coordinated Universal Time)  */}
  <meta charSet="utf-8" />
  <title>Contact Us</title>
  <meta content="Contact Us" property="og:title" />
  <meta content="Contact Us" property="twitter:title" />
  <section id="anchor-scroll" className="pop-section-1">
    <div className="pop-up-div">
      <div className="pop-up-div-1">
        <img
          src="/images/65c1ffabd8b160b194ad1167_—Pngtree—.png"
          loading="lazy"
          width={32}
          data-w-id="4dda52cb-bb4f-9a0e-1183-ec300660fb80"
          alt=""
          srcSet="/images/65c1ffabd8b160b194ad1167_—Pngtree—-p-500.png 500w, images/65c1ffabd8b160b194ad1167_—Pngtree—-p-800.png 800w, images/65c1ffabd8b160b194ad1167_—Pngtree—.png 1024w"
          sizes="100vw"
          className="image-popup-close"
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
          required=""
        />
        <input
          type="submit"
          className="spark-button-2-copy search-button w-button"
          defaultValue="Search"
        />
      </form>
    </div>
  </section>
  <div
    data-animation="default"
    className="header w-nav"
    data-easing2="ease"
    data-easing="ease"
    data-collapse="medium"
    data-w-id="6120c7dd-0aee-031d-a882-05fbd1795e14"
    role="banner"
    data-duration={400}
    id="top"
  >
    <div className="header-container w-container">
      <div className="header-content-wraper">
        <a href="/" className="header-logo-link w-nav-brand">
          <img src="/images/logo.svg" alt="" className="brix---header-logo" />
        </a>
        <div className="header-middle-col">
          <nav role="navigation" className="header-menu-wrapper w-nav-menu">
            <ul role="list" className="header-nav-menu-list">
              <li className="header-nav-list-item-middle">
                <a href="/" className="header-nav-link w-nav-link">
                  Home
                </a>
              </li>
              <li className="header-nav-list-item-middle" style={{ position: "relative" }}>
                      <div className="nav-dropdown-3">
                        <div
                          className="nav-dropdown-toggle-3"
                          onClick={toggleAboutDropdown}
                          style={{ cursor: "pointer", display: "flex", alignItems: "center", position: "relative" }}
                        >
                          <a href="/about-us" className="link-block-14 w-inline-block">
                            <div className="header-nav-link">About</div>
                          </a>
                          {/* Arrow Icon */}
                          <div className="nav-dropdown-icon-3 w-icon-dropdown-toggle" style={{ marginLeft: "8px" }}>
                            {/* Up or Down Arrow based on state */}
                          </div>
                        </div>
                        {isAboutOpen && (
                          <nav className="nav-dropdown-list-3 shadow-three mobile-shadow-hide" style={{ position: "absolute", top: "100%", left: 0 }}>
                            <a href="/news-media" className="dropdown-link w-dropdown-link">
                              News &amp; Media
                            </a>
                            <a href="/resources" className="dropdown-link w-dropdown-link">
                              Resources
                            </a>
                          </nav>
                        )}
                      </div>
                    </li>
                    <li className="header-nav-list-item-middle" style={{ position: "relative" }}>
                      <div className="nav-dropdown-3">
                        <div
                          className="nav-dropdown-toggle-3"
                          onClick={toggleServicesDropdown}
                          style={{ cursor: "pointer", display: "flex", alignItems: "center", position: "relative" }}
                        >
                          <a href="/investment-service" className="link-block-14 w-inline-block">
                            <div className="header-nav-link">Our Services</div>
                          </a>
                          {/* Arrow Icon */}
                          <div className="nav-dropdown-icon-3 w-icon-dropdown-toggle" style={{ marginLeft: "8px" }}>
                            {/* Up or Down Arrow based on state */}
                          </div>
                        </div>
                        {isServicesOpen && (
                          <nav className="nav-dropdown-list-3 shadow-three mobile-shadow-hide" style={{ position: "absolute", top: "100%", left: 0 }}>
                            <a href="/innovative-investment" className="dropdown-link w-dropdown-link">
                              Innovative Investment
                            </a>
                            <a href="/crowdfunding" className="dropdown-link w-dropdown-link">
                              Crowdfunding
                            </a>
                            <a href="/assets-tokenization" className="dropdown-link w-dropdown-link">
                              Assets Tokenization
                            </a>
                          </nav>
                        )}
                      </div>
                    </li>
              <li className="header-nav-list-item-middle">
                <a
                  href="/investor-guide"
                  className="header-nav-link w-nav-link"
                >
                  Investor Guide
                </a>
              </li>
              <li className="header-nav-list-item-middle">
                <a
                  href="/frequently-asked-questions"
                  className="header-nav-link w-nav-link"
                >
                  FAQ's
                </a>
              </li>
              <li className="header-nav-list-item-middle">
                <a href="/blogs" className="header-nav-link w-nav-link">
                  Blog
                </a>
              </li>
              <li className="header-nav-list-item-middle">
                <a
                  href="/contact-us"
                  aria-current="page"
                  className="header-nav-link w-nav-link w--current"
                >
                  Contact
                </a>
              </li>
              <li className="header-nav-list-item-show-in-mbl">
                <a href="#" className="btn-primary-small w-button">
                  Sign Up
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="header-right-col">
          <div className="div-block-50">
            <div className="hamburger-menu-wrapper w-nav-button">
              <div className="brix---hamburger-menu-bar-top" />
              <div className="brix---hamburger-menu-bar-bottom" />
            </div>
            <img
              src="/images/q.png"
              loading="lazy"
              data-w-id="5b0ab083-58ae-dce9-42e1-e39a4d658c0c"
              alt=""
              className="image-61"
            />
            <div className="btn-header-hidden-on-mbl">
              <a
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
              </a>
            </div>
          </div>
          <a
            href="https://www.mintme.com/token/UFUND/MINTME/trade"
            target="_blank"
            className="w-inline-block"
          >
            <img
              src="/images/image-1_1.png"
              loading="lazy"
              sizes="(max-width: 479px) 100vw, (max-width: 991px) 200.00001525878906px, (max-width: 1279px) 31vw, 220.00001525878906px"
              srcSet="/images/image-1_1-p-500.png 500w, images/image-1_1-p-800.png 800w, images/image-1_1-p-1080.png 1080w, images/image-1_1-p-1600.png 1600w, images/image-1_1-p-2000.png 2000w, images/image-1_1.png 2048w"
              alt=""
              className="image-75"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
  <section className="section-contact">
    <div className="w-layout-blockcontainer container-contact w-container">
      <h1 className="heading-contact">Contact Us</h1>
      <a href="#" className="button w-button">
        Home - Get in touch with the team
      </a>
    </div>
  </section>
  <section className="section-contact-1">
    <div className="w-layout-blockcontainer container-contact-1 w-container">
      <div
        id="w-node-_67f418e6-1885-84be-c7e3-7bea7a342765-99b0df8c"
        className="w-layout-layout quick-stack-38 wf-layout-layout"
      >
        <div
          id="w-node-_67f418e6-1885-84be-c7e3-7bea7a342766-99b0df8c"
          className="w-layout-cell cell-57"
        >
          <div className="uui-contact04_content">
            <h2 className="uui-heading-medium-2">Get in Touch</h2>
            <div className="uui-space-xsmall-2" />
            <div className="w-layout-grid uui-contact07_contact-list">
              <div
                id="w-node-a4567c6d-b5ec-3193-1875-97dc223d2181-99b0df8c"
                className="uui-contact07_item"
              >
                <div className="uui-contact07_item-icon-wrapper">
                  <div className="icon-featured-large">
                    <img
                      src="/images/Group-1000008127.svg"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                </div>
                <div className="uui-contact07_item-text-wrapper">
                  <h3 className="uui-heading-xxsmall-2">Call Us</h3>
                  <div className="uui-space-xxsmall-2" />
                  <a
                    href="tel:+13024265043"
                    className="uui-text-style-link-02-2"
                  >
                    +1 302 426 5043
                  </a>
                </div>
              </div>
              <div
                id="w-node-a4567c6d-b5ec-3193-1875-97dc223d218b-99b0df8c"
                className="uui-contact07_item"
              >
                <div className="uui-contact07_item-icon-wrapper">
                  <div className="icon-featured-large">
                    <img
                      src="/images/Group-1000008126.svg"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                </div>
                <div className="uui-contact07_item-text-wrapper">
                  <h3 className="uui-heading-xxsmall-2">Email Us</h3>
                  <div className="uui-space-xxsmall-2" />
                  <a
                    href="mailto:info@ufund.online?subject=UFUND"
                    className="uui-text-style-link-02-2"
                  >
                    Info@ufund.online
                  </a>
                </div>
              </div>
              <div
                id="w-node-a4567c6d-b5ec-3193-1875-97dc223d2195-99b0df8c"
                className="uui-contact07_item"
              >
                <div className="uui-contact07_item-icon-wrapper">
                  <div className="icon-featured-large">
                    <img
                      src="/images/Group-1000008125.svg"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                </div>
                <div className="uui-contact07_item-text-wrapper">
                  <h3 className="uui-heading-xxsmall-2">Locations</h3>
                  <div className="uui-space-xxsmall-2" />
                  <a href="#" className="uui-text-style-link-02-2">
                    Actiwires LLC DBA UFUND
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-layout-grid brix---social-media-grid-left-3-copy">
            <a
              href="https://www.facebook.com/ufundrealbusiness"
              target="_blank"
              className="brix---icon-square-36px3 w-inline-block"
            >
              <img
                src="/images/Path-8.svg"
                alt=""
                data-w-id="e33a4438-fc45-4c35-0269-53cdf08a9bf4"
                className="image-38-copy"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/ufund1/"
              target="_blank"
              className="brix---icon-square-36px3 w-inline-block"
            >
              <img
                src="/images/Path-10.svg"
                alt=""
                data-w-id="e33a4438-fc45-4c35-0269-53cdf08a9bf6"
                className="image-38-copy"
              />
            </a>
            <a
              href="https://twitter.com/UFUND1"
              target="_blank"
              className="brix---icon-square-36px3 w-inline-block"
            >
              <img
                src="/images/Vector.svg"
                alt=""
                width={22}
                data-w-id="e33a4438-fc45-4c35-0269-53cdf08a9bf8"
                className="image-38-copy"
              />
            </a>
            <a
              href="https://www.instagram.com/ufundonline/"
              target="_blank"
              className="brix---icon-square-36px3 w-inline-block"
            >
              <img
                src="/images/Group-1000007998.svg"
                alt=""
                data-w-id="e33a4438-fc45-4c35-0269-53cdf08a9bfa"
                className="image-38-copy"
              />
            </a>
          </div>
        </div>
        <div
          id="w-node-_67f418e6-1885-84be-c7e3-7bea7a342767-99b0df8c"
          className="w-layout-cell cell-56"
        >
          <div className="uui-contact04_form-wrapper w-form">
            <form
              id="wf-form-Contact-04-form"
              name="wf-form-Contact-04-form"
              data-name="Contact 04 form"
              method="get"
              className="uui-contact04_form"
              data-wf-page-id="65e5f3e60a2bd07399b0df8c"
              data-wf-element-id="3a86ca71-8d8e-039a-0f99-59fb42cdb90f"
            >
              <div className="form-field-2col">
                <div className="uui-form-field-wrapper">
                  <label
                    htmlFor="Contact-04-first-name-2"
                    className="uui-field-label"
                  >
                    First name
                  </label>
                  <input
                    className="uui-form_input-2 w-input"
                    maxLength={256}
                    name="Contact-04-first-name-2"
                    data-name="Contact 04 First Name 2"
                    placeholder="First name"
                    type="text"
                    id="Contact-04-first-name-2"
                    required=""
                  />
                </div>
                <div className="uui-form-field-wrapper">
                  <label
                    htmlFor="Contact-04-last-name-2"
                    className="uui-field-label"
                  >
                    Last name
                  </label>
                  <input
                    className="uui-form_input-2 w-input"
                    maxLength={256}
                    name="Contact-04-last-name-2"
                    data-name="Contact 04 Last Name 2"
                    placeholder="Last name"
                    type="text"
                    id="Contact-04-last-name-2"
                    required=""
                  />
                </div>
              </div>
              <div className="form-field-2col">
                <div className="uui-form-field-wrapper">
                  <label
                    htmlFor="Contact-04-email-2"
                    className="uui-field-label"
                  >
                    Email
                  </label>
                  <input
                    className="uui-form_input-2 w-input"
                    maxLength={256}
                    name="Contact-04-email-2"
                    data-name="Contact 04 Email 2"
                    placeholder="your@company.com"
                    type="email"
                    id="Contact-04-email-2"
                    required=""
                  />
                </div>
                <div className="uui-form-field-wrapper">
                  <label
                    htmlFor="Contact-04-phone-2"
                    className="uui-field-label"
                  >
                    Phone number
                  </label>
                  <input
                    className="uui-form_input-2 w-input"
                    maxLength={256}
                    name="Contact-04-phone-2"
                    data-name="Contact 04 Phone 2"
                    placeholder="+1 (555) 000-0000"
                    type="tel"
                    id="Contact-04-phone-2"
                    required=""
                  />
                </div>
              </div>
              <div className="uui-form-field-wrapper">
                <label
                  htmlFor="Contact-04-message-2"
                  className="uui-field-label"
                >
                  How can we help?
                </label>
                <textarea
                  id="Contact-04-message-2"
                  name="Contact-04-message-2"
                  maxLength={5000}
                  data-name="Contact 04 Message 2"
                  placeholder="Type your message..."
                  required=""
                  className="uui-form_input-2 text-area w-input"
                  defaultValue={""}
                />
              </div>
              <label
                id="Contact-2-Checkbox"
                className="w-checkbox uui-form-checkbox"
              >
                <div className="w-checkbox-input w-checkbox-input--inputType-custom uui-form-checkbox-icon" />
                <input
                  id="Contact-04-checkbox-2"
                  type="checkbox"
                  name="Contact-04-checkbox-2"
                  data-name="Contact 04 Checkbox 2"
                  required=""
                  style={{ opacity: 0, position: "absolute", zIndex: -1 }}
                />
                <span
                  htmlFor="Contact-04-checkbox-2"
                  className="uui-form-checkbox-label w-form-label"
                >
                  I agree to receive other communications from Actiwires LLC{" "}
                </span>
              </label>
              <div
                id="w-node-_3a86ca71-8d8e-039a-0f99-59fb42cdb92d-99b0df8c"
                className="uui-form-button-wrapper"
              >
                <input
                  type="submit"
                  data-wait="Please wait..."
                  id="w-node-_3a86ca71-8d8e-039a-0f99-59fb42cdb92e-99b0df8c"
                  className="spark-button-2-copy w-button"
                  defaultValue="Send message"
                />
              </div>
            </form>
            <div className="success-message w-form-done">
              <div className="success-text">
                Thank you! Your submission has been received!
              </div>
            </div>
            <div className="error-message w-form-fail">
              <div className="error-text">
                Oops! Something went wrong while submitting the form.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="section-contact-2">
    <div className="w-layout-blockcontainer container-contact-2 w-container">
      <div
        className="map w-widget w-widget-map"
        data-widget-style="roadmap"
        data-widget-latlng="37.09024,-95.712891"
        aria-label="Actiwires LLC DBA UFUND"
        data-enable-scroll="true"
        role="region"
        title="Actiwires LLC DBA UFUND"
        data-enable-touch="true"
        data-widget-zoom={15}
        data-widget-tooltip=""
      />
    </div>
  </section>
  <section className="uui-section_cta12-2">
    <div className="uui-page-padding-6">
      <div className="uui-container-large-6" />
    </div>
    <a href="#" className="link-block-20 w-inline-block">
      <img src="/images/icons8-up-26.png" loading="lazy" alt="" />
    </a>
  </section>
  <section className="join-section">
    <div className="w-layout-blockcontainer join-container w-container">
      <div
        id="w-node-_30ac43b6-2df9-90b0-41ed-82cecc8ff807-cc8ff805"
        className="w-layout-layout quick-stack-15 wf-layout-layout"
      >
        <div
          id="w-node-_30ac43b6-2df9-90b0-41ed-82cecc8ff808-cc8ff805"
          className="w-layout-cell cell-30"
        >
          <h1 className="heading-21">Join us now</h1>
          <p className="paragraph-15">
            Proactively supply real-time outsourcing vis-a-vis long-term
            high-impact results. Competently deliver resource sucking methods.
          </p>
        </div>
        <div
          id="w-node-_30ac43b6-2df9-90b0-41ed-82cecc8ff80d-cc8ff805"
          className="w-layout-cell cell-29"
        >
          <img
            src="/images/Group-4-2.png"
            loading="lazy"
            data-w-id="30ac43b6-2df9-90b0-41ed-82cecc8ff80e"
            alt=""
            className="image-36"
          />
          <a
            href="https://webapp.ufund.online/login"
            target="_blank"
            className="spark-button-2 spark-icon-left-button next w-inline-block"
          >
            <p className="paragraph-5">Start your journey today</p>
            <div className="html-embed-6 w-embed">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z"
                  fill="currentColor"
                  fillOpacity="0.94"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.2929 4.29289C11.6834 3.90237 12.3166 3.90237 12.7071 4.29289L19.7071 11.2929C20.0976 11.6834 20.0976 12.3166 19.7071 12.7071L12.7071 19.7071C12.3166 20.0976 11.6834 20.0976 11.2929 19.7071C10.9024 19.3166 10.9024 18.6834 11.2929 18.2929L17.5858 12L11.2929 5.70711C10.9024 5.31658 10.9024 4.68342 11.2929 4.29289Z"
                  fill="currentColor"
                  fillOpacity="0.94"
                />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
  <footer id="footer" className="footer-wrapper">
    <div className="container-default-2 w-container">
      <div className="footer-top">
        <div
          id="w-node-a98945db-45fd-2cbf-a0f6-acd3982d5160-982d515d"
          className="w-layout-layout quick-stack-22 wf-layout-layout"
        >
          <div
            id="w-node-a98945db-45fd-2cbf-a0f6-acd3982d5161-982d515d"
            className="w-layout-cell"
          >
            <div className="div-block-18">
              <div className="mg-bottom-24px">
                <a
                  href="/"
                  className="brix---footer-logo-wrapper w-inline-block"
                >
                  <img
                    src="/images/logo.svg"
                    alt=""
                    className="brix---footer-logo"
                  />
                </a>
              </div>
              <div className="mg-bottom-40px">
                <div className="brix---color-neutral-600">
                  <p className="brix---paragraph-default-c">
                    Financing made easy by UFUND.
                    <br />
                    Tokenize your business assets for working capital.
                    <br />
                  </p>
                </div>
              </div>
              <div className="w-layout-grid brix---social-media-grid-left-3">
                <a
                  href="https://www.facebook.com/ufundrealbusiness"
                  target="_blank"
                  className="brix---icon-square-36px2 w-inline-block"
                >
                  <img
                    src="/images/Path-8-1.png"
                    alt=""
                    data-w-id="a98945db-45fd-2cbf-a0f6-acd3982d516f"
                    className="image-38"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/company/ufund1/"
                  target="_blank"
                  className="brix---icon-square-36px2 w-inline-block"
                >
                  <img
                    src="/images/Path-10-1.png"
                    alt=""
                    data-w-id="a98945db-45fd-2cbf-a0f6-acd3982d5171"
                    className="image-38"
                  />
                </a>
                <a
                  href="https://twitter.com/UFUND1"
                  target="_blank"
                  className="brix---icon-square-36px2 w-inline-block"
                >
                  <img
                    src="/images/Vector-1.png"
                    alt=""
                    width={22}
                    data-w-id="a98945db-45fd-2cbf-a0f6-acd3982d5173"
                    className="image-38"
                  />
                </a>
                <a
                  href="https://www.instagram.com/ufundonline/"
                  target="_blank"
                  className="brix---icon-square-36px2 w-inline-block"
                >
                  <img
                    src="/images/Group-1000007998.png"
                    alt=""
                    data-w-id="a98945db-45fd-2cbf-a0f6-acd3982d5175"
                    className="image-38"
                  />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCDY3NzRErTYaKGOssH1TXPg"
                  target="_blank"
                  className="brix---icon-square-36px2 w-inline-block"
                >
                  <img
                    src="/images/Vector-2.png"
                    alt=""
                    width={23}
                    data-w-id="a98945db-45fd-2cbf-a0f6-acd3982d5177"
                    className="image-38-copy"
                  />
                </a>
              </div>
            </div>
          </div>
          <div
            id="w-node-a98945db-45fd-2cbf-a0f6-acd3982d5178-982d515d"
            className="w-layout-cell cell-38"
          >
            <div>
              <div className="footer-col-title">Quick links</div>
              <ul role="list" className="footer-list-wrapper">
                <li className="brix---footer-list-item">
                  <a href="/site-map" className="brix---footer-link">
                    Site map
                  </a>
                </li>
                <li className="brix---footer-list-item">
                  <a href="/privacy-policy" className="brix---footer-link">
                    Privacy Policy
                  </a>
                </li>
                <li className="brix---footer-list-item" />
                <li className="brix---footer-list-item">
                  <a
                    href="/terms-of-service"
                    className="brix---footer-link"
                  >
                    Terms of use
                  </a>
                </li>
                <li className="brix---footer-list-item">
                  <a href="/disclaimer" className="brix---footer-link">
                    Disclaimer
                  </a>
                </li>
                <li className="brix---footer-list-item">
                  <a href="/news-media" className="brix---footer-link">
                    News &amp; media
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div
            id="w-node-a98945db-45fd-2cbf-a0f6-acd3982d518d-982d515d"
            className="w-layout-cell cell-52"
          >
            <div className="div-block-30">
              <div className="footer-col-title1">Contact Us</div>
              <ul role="list" className="footer-list-wrapper-1">
                <li className="footer-list-item-1">
                  <div className="w-layout-grid contact-links-grid-1">
                    <div
                      id="w-node-a98945db-45fd-2cbf-a0f6-acd3982d5194-982d515d"
                      className="w-layout-layout quick-stack-7 wf-layout-layout"
                    >
                      <div className="w-layout-cell">
                        <img
                          src="/images/Layer_1.svg"
                          loading="eager"
                          alt=""
                          className="image contact-link-icon"
                        />
                      </div>
                      <div className="w-layout-cell cell-18">
                        <div className="contact-link-text">Address</div>
                        <a href="#" className="link-block-5 w-inline-block">
                          <div className="contact-txt-1">
                            Actiwires LLC DBA UFUND
                          </div>
                        </a>
                      </div>
                    </div>
                    <div
                      id="w-node-a98945db-45fd-2cbf-a0f6-acd3982d519d-982d515d"
                      className="w-layout-layout quick-stack-7 wf-layout-layout"
                    >
                      <div className="w-layout-cell">
                        <img
                          src="/images/Frame.svg"
                          loading="eager"
                          alt=""
                          className="image contact-link-icon"
                        />
                      </div>
                      <div className="w-layout-cell cell-18">
                        <div className="contact-link-text">Call Us Now</div>
                        <a
                          href="tel:+13024265043"
                          className="link-block-5 w-inline-block"
                        >
                          <div className="contact-txt">+1 302 426 5043</div>
                        </a>
                      </div>
                    </div>
                    <div
                      id="w-node-a98945db-45fd-2cbf-a0f6-acd3982d51a6-982d515d"
                      className="w-layout-layout quick-stack-7 wf-layout-layout"
                    >
                      <div className="w-layout-cell">
                        <img
                          src="/images/emergency-call_7895899.svg"
                          loading="eager"
                          alt=""
                          className="image contact-link-icon"
                        />
                      </div>
                      <div className="w-layout-cell cell-18">
                        <div className="contact-link-text">Email Us</div>
                        <a
                          href="mailto:info@ufund.online"
                          className="link-block-4 w-inline-block"
                        >
                          <div className="contact-txt">info@ufund.online</div>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="div-block-29" />
      <div className="brix---footer-bottom">
        <p className="brix---paragraph-default">
          @ 2024 Actiwires LLC DBA UFUND. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
  {/* Start of Tawk.to Script */}
  {/* End of Tawk.to Script */}
</>

  )
}
