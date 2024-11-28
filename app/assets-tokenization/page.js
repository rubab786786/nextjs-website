"use client"
import { useState } from "react";

export default function AssetsTokenization() {
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
      <title>Assets Tokenization</title>
      <meta content="Assets Tokenization" property="og:title" />
      <meta content="Assets Tokenization" property="twitter:title" />
      <section id="anchor-scroll" className="pop-section-1">
        <div className="pop-up-div">
          <div className="pop-up-div-1">
            <img
              src="/images/65c1ffabd8b160b194ad1167_—Pngtree—.png"
              loading="lazy"
              width={32}
              data-w-id="af0e1de4-326a-82f5-affc-ec740ab3eb39"
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
                      className="header-nav-link w-nav-link"
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
      <section id="hero" className="section-in">
        <div className="w-layout-blockcontainer container-i w-container">
          <h1 className="heading-i">Assets</h1>
          <a href="#" className="button-inv w-button">
            Home - Service
          </a>
        </div>
      </section>
      <section className="section-bis">
        <div className="w-layout-blockcontainer container-bis w-container">
          <div
            id="w-node-_65647434-72a2-7ef5-7099-e318aad56b5e-8c571e6f"
            className="w-layout-layout quick-stack-37 wf-layout-layout"
          >
            <div
              id="w-node-_65647434-72a2-7ef5-7099-e318aad56b5f-8c571e6f"
              className="w-layout-cell cell-53"
            >
              <a href="/innovative-investment" className="button-2 w-button">
                Innovative investment
              </a>
            </div>
            <div
              id="w-node-_65647434-72a2-7ef5-7099-e318aad56b62-8c571e6f"
              className="w-layout-cell cell-54"
            >
              <a href="/crowdfunding" className="button-2 w-button">
                Crowdfunding
              </a>
            </div>
            <div
              id="w-node-_65647434-72a2-7ef5-7099-e318aad56b65-8c571e6f"
              className="w-layout-cell cell-55"
            >
              <a
                href="/assets-tokenization"
                aria-current="page"
                className="button-2 w-button w--current"
              >
                Assets
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="section-i1">
        <div className="w-layout-blockcontainer container-l1 w-container">
          <div
            id="w-node-_55292270-9ceb-1c64-4f72-870ed3739a81-8c571e6f"
            className="w-layout-layout quick-stack-i wf-layout-layout"
          >
            <div
              id="w-node-_55292270-9ceb-1c64-4f72-870ed3739a82-8c571e6f"
              className="w-layout-cell cell-i"
            >
              <h1 className="heading-i1">
                Tokenization Services Empower the Crypto Economy
              </h1>
              <p className="paragraph-i">
                Crypto token refers to a special virtual currency that is becoming
                popular over the past few years. It allows businesses and
                individuals to tokenize valuable assets. UFUND helps businesses and
                individuals to tokenize fungible, non-fungible and tradable assets.
              </p>
              <a
                href="https://webapp.ufund.online/login"
                target="_blank"
                className="spark-button-i spark-icon-left-button next w-inline-block"
              >
                <p className="paragraph-16">Discover more</p>
                <div className="html-embed-9 w-embed">
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
            <div
              id="w-node-_55292270-9ceb-1c64-4f72-870ed3739a8b-8c571e6f"
              className="w-layout-cell cell-i1"
            >
              <img
                sizes="(max-width: 479px) 100vw, (max-width: 767px) 88vw, 550.5535888671875px"
                srcSet="/images/Group-1000008114-1-p-500.png 500w, images/Group-1000008114-1.png 830w"
                alt=""
                src="/images/Group-1000008114-1.png"
                loading="lazy"
                className="image-51"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="section-i2">
        <div className="w-layout-blockcontainer container-i2 w-container">
          <h1 className="heading-i3">Tokenization: Choice you can make with it</h1>
          <div
            id="w-node-a406eae9-038f-e874-c3c9-2c38aecce52f-8c571e6f"
            className="w-layout-layout quick-stack-32 wf-layout-layout"
          >
            <div
              id="w-node-a406eae9-038f-e874-c3c9-2c38aecce530-8c571e6f"
              className="w-layout-cell"
            >
              <img
                loading="lazy"
                src="/images/Rectangle-7239-1.png"
                alt=""
                className="image-48"
              />
            </div>
            <div
              id="w-node-a406eae9-038f-e874-c3c9-2c38aecce532-8c571e6f"
              className="w-layout-cell"
            >
              <h1 className="heading-36">
                UFUND&nbsp;Offers the Following Options:
              </h1>
              <ul role="list" className="list-i">
                <li className="list-item-i">
                  Get access to an easy-to-use tokenizer
                </li>
                <li className="list-item-i">
                  Get access to an easy-to-use tokenizer
                </li>
                <li className="list-item-i">Start offering tokens to investors</li>
                <li className="list-item-i">Gain substantial returns</li>
                <li className="list-item-i">Use UFD token to make investments</li>
                <li className="list-item-i">
                  Generates equity, utility and security tokens
                </li>
              </ul>
              <p className="paragraph-i1">
                Take part in the global financial changes with UFUND. Get your
                assets tokenized and secure capital from the UFUND platform, powered
                by block chain technology. These tokens are represented by ledger
                entries that are kept safe and immutable.
              </p>
            </div>
          </div>
          <h1 className="heading-i2">UFUND&nbsp;token (UFD)</h1>
          <p className="paragraph-i2">
            Ready made ERC20 UFD tokens are to be used across the UFUND platform.
            soon we are going to transition UFD token into a hybrid token that will
            help you gain more value for your utility tokens due adding the status
            of the security token to UFD. Transition will be in line with all
            regulatory requirements and legalities of US authorities.
          </p>
        </div>
        <div className="w-layout-blockcontainer container-i4 w-container">
          <h1 className="heading-i4">Simplified Tokenization</h1>
          <p className="paragraph-i3">
            A step-by-step guide on how to tokenize your assets easily.
          </p>
          <div
            id="w-node-a406eae9-038f-e874-c3c9-2c38aecce54d-8c571e6f"
            className="w-layout-layout quick-stack-33 wf-layout-layout"
          >
            <div
              id="w-node-a406eae9-038f-e874-c3c9-2c38aecce54e-8c571e6f"
              className="w-layout-cell"
            >
              <div className="div-block-35">
                <img
                  loading="lazy"
                  src="/images/Image----lummi.png"
                  alt=""
                  className="image-52"
                />
                <h1 className="heading-40">Step 1</h1>
                <h1 className="heading-41">Asset Evaluation</h1>
                <p className="paragraph-25">
                  Our experts assess the value of your asset for digital
                  representation.
                </p>
              </div>
            </div>
            <div
              id="w-node-a406eae9-038f-e874-c3c9-2c38aecce557-8c571e6f"
              className="w-layout-cell"
            >
              <div className="div-block-35">
                <img
                  loading="lazy"
                  src="/images/Image----lummi-1.png"
                  alt=""
                  className="image-53"
                />
                <h1 className="heading-40">Step 2</h1>
                <h1 className="heading-41">Token Creation</h1>
                <p className="paragraph-25">
                  We create a digital token that represents your real-world asset.
                </p>
              </div>
            </div>
            <div
              id="w-node-a406eae9-038f-e874-c3c9-2c38aecce560-8c571e6f"
              className="w-layout-cell"
            >
              <div className="div-block-35">
                <img
                  loading="lazy"
                  src="/images/Image----lummi-2.png"
                  alt=""
                  className="image-54"
                />
                <h1 className="heading-40">Step 3</h1>
                <h1 className="heading-41">Asset Trading</h1>
                <p className="paragraph-25">
                  Trade your tokenized assets on our secure digital marketplace.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-22">
        <div className="w-layout-blockcontainer container-27 w-container">
          <div className="brix---accordion-v3-card-4">
            <h1 className="heading-faq-1">Faqs</h1>
            <h1 className="heading-faq2">Frequently asked questions</h1>
            <div className="w-layout-grid brix---grid-1-column-gap-row-3">
              <div
                // data-w-id="16295884-fd89-71e6-7276-714cf4abf39e"
                className="brix---accordion-item-wrapper-v3-first-5"
              >
                <div className="brix---accordion-right-side-2">
                  <a
                    href="#"
                    className="brix---btn-circle-accordion-btn-2 w-inline-block"
                  >
                    <img
                      alt=""
                      src="/images/Frame-43076-1.png"
                      className="brix---accordion-arrow-icon-2"
                    />
                  </a>
                </div>
                <div className="brix---accordion-content-wrapper-v2-2">
                  <div className="brix---accordion-header-2">
                    <div className="brix---color-neutral-802">
                      <h3 className="brix---accordion-title-4">
                        How does UFUND work?
                      </h3>
                    </div>
                  </div>
                  <div className="brix---acordion-body-2">
                    <div className="brix---accordion-spacer-2" />
                    <div className="brix---color-neutral-801">
                      <p className="brix---paragraph-default-6">
                        UFUND is a financial disruptor that helps businesses
                        connect with investors by offering funding opportunities
                        and tokenized assets powered by blockchain. It requires
                        creating a portfolio as an investor or campaigner to start
                        raising capital using UFUND token.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                // data-w-id="16295884-fd89-71e6-7276-714cf4abf3ac"
                className="brix---accordion-item-wrapper-v3-first-6"
              >
                <div className="brix---accordion-right-side-2">
                  <a
                    href="#"
                    className="brix---btn-circle-accordion-btn-2 w-inline-block"
                  >
                    <img
                      alt=""
                      src="/images/Frame-43076-1.png"
                      className="brix---accordion-arrow-icon-2"
                    />
                  </a>
                </div>
                <div className="brix---accordion-content-wrapper-v2-2">
                  <div className="brix---accordion-header-2">
                    <div className="brix---color-neutral-802">
                      <h3 className="brix---accordion-title-4">
                        Do You allow exchanging NFTs?
                      </h3>
                    </div>
                  </div>
                  <div className="brix---acordion-body-2">
                    <div className="brix---accordion-spacer-2" />
                    <div className="brix---color-neutral-801">
                      <p className="brix---paragraph-default-6">
                        Yes, we do! UFUND enables you to exchange both fungible
                        and non-fungible tokens (NFTs).
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="brix---accordion-item-wrapper-v3-first-6">
                <div className="brix---accordion-right-side-2">
                  <a
                    href="#"
                    className="brix---btn-circle-accordion-btn-2 w-inline-block"
                  >
                    <img
                      alt=""
                      src="/images/Frame-43076-1.png"
                      className="brix---accordion-arrow-icon-2"
                    />
                  </a>
                </div>
                <div className="brix---accordion-content-wrapper-v2-2">
                  <div className="brix---accordion-header-2">
                    <div className="brix---color-neutral-802">
                      <h3 className="brix---accordion-title-4">
                        What is UFUND initial token (ITO) Sales?
                      </h3>
                    </div>
                  </div>
                  <div className="brix---acordion-body-2">
                    <div className="brix---accordion-spacer-2" />
                    <div className="brix---color-neutral-801">
                      <p className="brix---paragraph-default-6">
                        With its powerful ERC20 token (UFD) issued for an initial
                        fundraising, UFUND will reach its following goals. What
                        use we do with the money raised: marketing our web
                        platform and mobile app, enhance functionalities for
                        users, develop and integrate artificial intelligence,
                        offer more functionalities to enrich user experience,
                        integrate multi-token standards issuance, integrate
                        exchanges and apps continue R&amp;D.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="brix---accordion-item-wrapper-v3-last-3"
              >
                <div className="brix---accordion-right-side-2">
                  <a
                    href="#"
                    className="brix---btn-circle-accordion-btn-2 w-inline-block"
                  >
                    <img
                      alt=""
                      src="/images/Frame-43076-1.png"
                      className="brix---accordion-arrow-icon-2"
                    />
                  </a>
                </div>
                <div className="brix---accordion-content-wrapper-v2-2">
                  <div className="brix---accordion-header-2">
                    <div className="brix---color-neutral-802">
                      <h3 className="brix---accordion-title-4">
                        How secure investments and returns are on UFUND?
                      </h3>
                    </div>
                  </div>
                  <div className="brix---acordion-body-2"
                  >
                    <div className="brix---accordion-spacer-2" />
                    <div className="brix---color-neutral-801">
                      <p className="brix---paragraph-default-6">
                        We make use of innovative technologies like blockchain to
                        host tokens. We secure all funds into regulated third
                        party custody.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="brix---accordion-item-wrapper-v3-last-3"
              >
                <div className="brix---accordion-right-side-2">
                  <a
                    href="#"
                    className="brix---btn-circle-accordion-btn-2 w-inline-block"
                  >
                    <img
                      alt=""
                      src="/images/Frame-43076-1.png"
                      className="brix---accordion-arrow-icon-2"
                    />
                  </a>
                </div>
                <div className="brix---accordion-content-wrapper-v2-2">
                  <div className="brix---accordion-header-2">
                    <div className="brix---color-neutral-802">
                      <h3 className="brix---accordion-title-4">
                        Can I Download the UFUND app on iOS?
                      </h3>
                    </div>
                  </div>
                  <div className="brix---acordion-body-2"
                  >
                    <div className="brix---accordion-spacer-2" />
                    <div className="brix---color-neutral-801">
                      <p className="brix---paragraph-default-6">
                        Yes, UFUND is available for both iOS and Android users.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="brix---accordion-item-wrapper-v3-last-3"
              >
                <div className="brix---accordion-right-side-2">
                  <a
                    href="#"
                    className="brix---btn-circle-accordion-btn-2 w-inline-block"
                  >
                    <img
                      alt=""
                      src="/images/Frame-43076-1.png"
                      className="brix---accordion-arrow-icon-2"
                    />
                  </a>
                </div>
                <div className="brix---accordion-content-wrapper-v2-2">
                  <div className="brix---accordion-header-2">
                    <div className="brix---color-neutral-802">
                      <h3 className="brix---accordion-title-4">
                        What are the functions of the UFD token?
                      </h3>
                    </div>
                  </div>
                  <div className="brix---acordion-body-2"
                  >
                    <div className="brix---accordion-spacer-2" />
                    <div className="brix---color-neutral-801">
                      <p className="brix---paragraph-default-6">
                        UFD Token is initially a utility token to be used for
                        funding transactions and services on UFUND platform and
                        mobile apps.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="uui-section_cta12-2">
        <div className="uui-page-padding-6">
          <div className="uui-container-large-6" />
        </div>
        <a href="#hero" className="link-block-20 w-inline-block">
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
