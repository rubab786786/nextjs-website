"use client"
import { useState } from "react";

export default function page() {
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
      <title>About Us</title>
      <meta content="About Us" property="og:title" />
      <meta content="About Us" property="twitter:title" />
      <section id="anchor-scroll" className="pop-section-1">
        <div className="pop-up-div">
          <div className="pop-up-div-1">
            <img
              src="/images/65c1ffabd8b160b194ad1167_—Pngtree—.png"
              loading="lazy"
              width={32}
              data-w-id="3a69e73f-6b59-82d1-5ee8-84f5375ca11c"
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
      <section id="hero" className="section-7">
        <div className="w-layout-blockcontainer container-9 w-container">
          <h1 className="heading-23">About UFUND</h1>
          <p className="paragraph-17">
            Dramatically scale impactful infomediaries before superior schemas.
            Intrinsically productivity resource-leveling services before
            professional sources.
          </p>
          <a href="#" className="button w-button">
            Home - Get to know UFUND!
          </a>
        </div>
      </section>
      <section className="timeline-section">
        <div className="w-layout-blockcontainer timeline-container w-container">
          <div
            id="w-node-_5ba0be0f-9684-af82-175e-1e35ba967e29-896b7dbf"
            className="w-layout-layout timeline-stack wf-layout-layout"
          >
            <div
              id="w-node-_5ba0be0f-9684-af82-175e-1e35ba967e2a-896b7dbf"
              className="w-layout-cell cell-43"
            >
              <h1 className="heading-1">Get to know us</h1>
              <h1 className="heading-24">
                UFUND turns financing issues into opportunities.
              </h1>
              <img
                src="/images/Rectangle-7220-1.png"
                loading="lazy"
                sizes="(max-width: 479px) 100vw, (max-width: 991px) 91vw, 734.0714721679688px"
                srcSet="/images/Rectangle-7220-1-p-500.png 500w, images/Rectangle-7220-1.png 878w"
                alt=""
                className="image-39"
              />
              <a
                href="#"
                className="spark-button-about spark-icon-left-button next w-inline-block"
              >
                <p className="paragraph-5">Buy UFD tokens</p>
                <div className="html-embed-2 w-embed">
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
              id="w-node-_5ba0be0f-9684-af82-175e-1e35ba967e30-896b7dbf"
              className="w-layout-cell"
            >
              <div className="div-block-32">
                <h1 className="heading-1-copy">2019</h1>
                <h1 className="heading-35">Company Started</h1>
              </div>
              <div className="div-block-31" />
              <div className="container-20">
                <div className="process-all-wrapper">
                  <div className="process-progress">
                    <div className="process-progress-bar" />
                  </div>
                  <div
                    data-w-id="5ba0be0f-9684-af82-175e-1e35ba967e36"
                    className="process-item-grid-2"
                  >
                    <div
                      id="w-node-_5ba0be0f-9684-af82-175e-1e35ba967e37-896b7dbf"
                      className="process-item left"
                    />
                    <div className="process-center">
                      <div className="process-circle" />
                    </div>
                    <div
                      id="w-node-_5ba0be0f-9684-af82-175e-1e35ba967e3a-896b7dbf"
                      className="process-item"
                    >
                      <h1 className="heading-32">2020</h1>
                      <p className="paragraph-24">First test of the platform</p>
                    </div>
                  </div>
                  <div
                    data-w-id="5ba0be0f-9684-af82-175e-1e35ba967e3f"
                    className="process-item-grid-2"
                  >
                    <div
                      id="w-node-_5ba0be0f-9684-af82-175e-1e35ba967e40-896b7dbf"
                      className="process-item left"
                    >
                      <h1 className="heading-32-copy">2021</h1>
                      <p className="paragraph-24-copy">
                        Starts of enhancements of he web app and the mobile apps
                      </p>
                    </div>
                    <div className="process-center">
                      <div className="process-circle" />
                    </div>
                    <div
                      id="w-node-_5ba0be0f-9684-af82-175e-1e35ba967e47-896b7dbf"
                      className="process-item-copy"
                    >
                      <h1 className="heading-32-copy-copy">2021</h1>
                      <p className="paragraph-24-copy-copy">
                        Starts of enhancements of he web app and the mobile apps
                      </p>
                    </div>
                  </div>
                  <div
                    data-w-id="5ba0be0f-9684-af82-175e-1e35ba967e4a"
                    className="process-item-grid-2"
                  >
                    <div
                      id="w-node-_5ba0be0f-9684-af82-175e-1e35ba967e4b-896b7dbf"
                      className="process-item left"
                    />
                    <div className="process-center">
                      <div className="process-circle" />
                    </div>
                    <div
                      id="w-node-_5ba0be0f-9684-af82-175e-1e35ba967e4e-896b7dbf"
                      className="process-item"
                    >
                      <h1 className="heading-32">2022</h1>
                      <p className="paragraph-24">
                        Continuation of Development and enhancement
                      </p>
                    </div>
                  </div>
                  <div
                    data-w-id="5ba0be0f-9684-af82-175e-1e35ba967e53"
                    className="process-item-grid-3"
                  >
                    <div
                      id="w-node-_5ba0be0f-9684-af82-175e-1e35ba967e54-896b7dbf"
                      className="process-item left"
                    >
                      <h1 className="heading-32-copy">2023</h1>
                      <p className="paragraph-24-copy-copy">
                        Follow up on compliance with US SEC, FinCen continuation of
                        integration of AI enhancement of UXUI listing of UFUND
                        Crypto token with mintme.com Development of partnership
                      </p>
                    </div>
                    <div className="process-center">
                      <div className="process-circle" />
                    </div>
                    <div
                      id="w-node-_5ba0be0f-9684-af82-175e-1e35ba967e59-896b7dbf"
                      className="process-item-copy"
                    >
                      <h1 className="heading-32-copy-copy">2023</h1>
                      <p className="paragraph-24-copy-copy">
                        Follow up on compliance with US SEC, FinCen continuation of
                        integration of AI enhancement of UXUI listing of UFUND
                        Crypto token with mintme.com Development of partnership
                      </p>
                    </div>
                    <p className="para">
                      Follow up on compliance with US SEC, FinCen continuation of
                      integration of AI enhancement of UXUI listing of UFUND Crypto
                      token with mintme.com Development of partnership
                    </p>
                  </div>
                </div>
              </div>
              <div className="div-block-36">
                <h1 className="heading-35">Now</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-9">
        <div className="w-layout-blockcontainer container-12 w-container">
          <div
            id="w-node-_03d21ff5-8d07-ebcb-12b9-d61f24e41f55-896b7dbf"
            className="w-layout-layout quick-stack-20 wf-layout-layout"
          >
            <div
              id="w-node-_03d21ff5-8d07-ebcb-12b9-d61f24e41f56-896b7dbf"
              className="w-layout-cell cell-31"
            >
              <h1 className="heading-25">Our Mission</h1>
              <p className="paragraph-18">
                The mission is to enhance economic freedom in the world of
                crowdfunding and tokenization, with a fair and accessible platform
                enabled by blockchain. Join us and create an impact on a global
                scale.
              </p>
            </div>
            <div
              id="w-node-_03d21ff5-8d07-ebcb-12b9-d61f24e41f57-896b7dbf"
              className="w-layout-cell cell-34"
            >
              <img
                src="/images/Rectangle-7221-1-1.png"
                loading="lazy"
                alt=""
                className="image-40"
              />
            </div>
          </div>
          <div className="div-block-19" />
          <div
            id="w-node-_87b91de2-3171-5117-5cdf-72c6eed892f0-896b7dbf"
            className="w-layout-layout quick-stack-20 wf-layout-layout"
          >
            <div
              id="w-node-_87b91de2-3171-5117-5cdf-72c6eed892f1-896b7dbf"
              className="w-layout-cell cell-32"
            >
              <img
                src="/images/Rectangle-7222-1.png"
                loading="lazy"
                alt=""
                className="image-41"
              />
            </div>
            <div
              id="w-node-_87b91de2-3171-5117-5cdf-72c6eed892f6-896b7dbf"
              className="w-layout-cell cell-33"
            >
              <h1 className="heading-25">Our Vision</h1>
              <p className="paragraph-18">
                We started in 2019 with a radical idea that Small and Medium-sized
                Businesses (SMBs) could raise capital from crowd funders. Our
                far-reaching vision is to become a leading platform that supports
                SMB’s growth throughout Decentralized Finance (DeFi) and asset
                tokenization where investors can expect steady returns and rewards.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-10">
        <div className="w-layout-blockcontainer container-13 w-container">
          <h1 className="heading-1-copy">Know us better</h1>
          <h1 className="heading-26">
            UFUND- Why Choose as your ultimate fundraising platform?
          </h1>
          <p className="paragraph-19">
            Committed to innovate, the future of crowdfunding is here! and we call
            it UFUND – an all-in-one that connects businesses and investors in a
            decentralized finance (DeFi) and Tokenization Platform.
          </p>
          <div className="div-block-20">
            <div
              id="w-node-a022ce08-8f48-6182-7b1a-132390bde95f-896b7dbf"
              className="w-layout-layout quick-stack-21 wf-layout-layout"
            >
              <div
                id="w-node-a022ce08-8f48-6182-7b1a-132390bde960-896b7dbf"
                className="w-layout-cell cell-35"
              >
                <h1 className="heading-27">
                  Become an
                  <br />
                  investor
                </h1>
                <a
                  href="https://webapp.ufund.online/login"
                  target="_blank"
                  className="w-inline-block"
                >
                  <img
                    src="/images/Frame-7.png"
                    loading="lazy"
                    data-w-id="1b70f883-1185-8c07-2c6c-b745aa04f579"
                    alt=""
                    className="image-42"
                  />
                </a>
              </div>
              <div
                id="w-node-a022ce08-8f48-6182-7b1a-132390bde961-896b7dbf"
                className="w-layout-cell"
              >
                <h1 className="heading-28">Just follow these steps:</h1>
                <ul role="list" className="list-3">
                  <li className="list-item-2">
                    Visit the&nbsp;website&nbsp;to sign up or download
                    one&nbsp;UFUND app&nbsp;to sign up.
                  </li>
                  <li className="list-item-2">
                    Enroll in the UFUND platform in a few minutes.
                  </li>
                  <li className="list-item-2">
                    Verify your email to access your investor’s account.
                  </li>
                  <li className="list-item-2">
                    Get approved to invest on UFUND platform.
                  </li>
                  <li className="list-item-2">
                    Start investing in many approved investments.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="div-block-20">
            <div
              id="w-node-_5f0cdc16-77b2-0d93-07f7-aa0c80447139-896b7dbf"
              className="w-layout-layout quick-stack-21 wf-layout-layout"
            >
              <div
                id="w-node-_5f0cdc16-77b2-0d93-07f7-aa0c8044713a-896b7dbf"
                className="w-layout-cell cell-36"
              >
                <h1 className="heading-27">
                  Become a<br />
                  business
                  <br />
                  campaigner
                </h1>
                <a
                  href="https://webapp.ufund.online/login"
                  className="w-inline-block"
                >
                  <img
                    src="/images/Frame-1.svg"
                    loading="lazy"
                    data-w-id="5f0cdc16-77b2-0d93-07f7-aa0c8044713d"
                    alt=""
                    className="image-42"
                  />
                </a>
              </div>
              <div
                id="w-node-_5f0cdc16-77b2-0d93-07f7-aa0c8044713e-896b7dbf"
                className="w-layout-cell"
              >
                <h1 className="heading-28">Just follow these steps:</h1>
                <ul role="list" className="list-3">
                  <li className="list-item-2">
                    Visit the website or download the UFUND app to signup.
                  </li>
                  <li className="list-item-2">
                    Enroll with UFUND in a few minutes.
                  </li>
                  <li className="list-item-2">
                    Verify your email to access your Business campaigner’s account.
                  </li>
                  <li className="list-item-2">
                    Start submitting your business assets and ask for deployment.
                  </li>
                  <li className="list-item-2">
                    Wait to get your assets tokenized and listed for P2P trading.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="div-block-20">
            <div
              id="w-node-_8898104f-76fc-dc01-8335-329d41684166-896b7dbf"
              className="w-layout-layout quick-stack-21 wf-layout-layout"
            >
              <div
                id="w-node-_8898104f-76fc-dc01-8335-329d41684167-896b7dbf"
                className="w-layout-cell cell-37"
              >
                <h1 className="heading-27">Customer support</h1>
                <a
                  href="mailto:support@ufund.online.com?subject=Ufund%20Support"
                  className="w-inline-block"
                >
                  <img
                    src="/images/Frame-1.svg"
                    loading="lazy"
                    data-w-id="8898104f-76fc-dc01-8335-329d4168416a"
                    alt=""
                    className="image-42"
                  />
                </a>
              </div>
              <div
                id="w-node-_8898104f-76fc-dc01-8335-329d4168416b-896b7dbf"
                className="w-layout-cell"
              >
                <h1 className="heading-28">
                  UFUND is devoted to provide the best support to its platform
                  users:
                </h1>
                <ul role="list" className="list-3">
                  <li className="list-item-2">
                    Front-end support through our UFUND web chat.
                  </li>
                  <li className="list-item-2">
                    Email support: support@ufund.online.com
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="team-section">
        <div className="w-layout-blockcontainer team-container w-container">
          <h1 className="heading-17">We are UFUND!</h1>
          <h1 className="heading-16-copy">Meet our IT management team</h1>
          <div className="collection-list-wrapper w-dyn-list">
            <div role="list" className="w-dyn-items w-row">
              <div
                role="listitem"
                className="collection-item-2 w-dyn-item w-col w-col-6"
              >
                <div className="div-block-17">
                  <img
                    src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"
                    loading="lazy"
                    alt=""
                    className="image-35 w-dyn-bind-empty"
                  />
                  <h1 className="heading-19 w-dyn-bind-empty" />
                  <h1 className="heading-20 w-dyn-bind-empty" />
                  <p className="paragraph-14 w-dyn-bind-empty" />
                  <div
                    id="w-node-c656f0c9-1643-905f-6cc4-681518559641-896b7dbf"
                    className="w-layout-layout quick-stack-14 wf-layout-layout"
                  >
                    <div
                      id="w-node-c656f0c9-1643-905f-6cc4-681518559642-896b7dbf"
                      className="w-layout-cell"
                    >
                      <a href="#" className="w-inline-block">
                        <img
                          src="/images/Facebook_1.png"
                          loading="lazy"
                          data-w-id="c656f0c9-1643-905f-6cc4-681518559644"
                          alt=""
                          className="image-67"
                        />
                      </a>
                    </div>
                    <div
                      id="w-node-c656f0c9-1643-905f-6cc4-681518559645-896b7dbf"
                      className="w-layout-cell"
                    >
                      <a href="#" className="w-inline-block">
                        <img
                          src="/images/Twitter.png"
                          loading="lazy"
                          data-w-id="c656f0c9-1643-905f-6cc4-681518559647"
                          alt=""
                          className="image-67"
                        />
                      </a>
                    </div>
                    <div
                      id="w-node-c656f0c9-1643-905f-6cc4-681518559648-896b7dbf"
                      className="w-layout-cell"
                    >
                      <a href="#" className="w-inline-block">
                        <img
                          src="/images/Instagram_1.png"
                          loading="lazy"
                          data-w-id="c656f0c9-1643-905f-6cc4-68151855964a"
                          alt=""
                          className="image-67"
                        />
                      </a>
                    </div>
                    <div
                      id="w-node-c656f0c9-1643-905f-6cc4-68151855964b-896b7dbf"
                      className="w-layout-cell"
                    >
                      <a href="#" className="w-inline-block">
                        <img
                          src="/images/LinkedIn.png"
                          loading="lazy"
                          data-w-id="c656f0c9-1643-905f-6cc4-68151855964d"
                          alt=""
                          className="image-67"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-dyn-empty">
              <div>No items found.</div>
            </div>
          </div>
          <div className="collection-list-wrapper-c w-dyn-list">
            <div role="list" className="w-dyn-items w-row">
              <div
                role="listitem"
                className="collection-item-2 w-dyn-item w-col w-col-4"
              >
                <div className="div-block-17">
                  <img
                    src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"
                    loading="lazy"
                    alt=""
                    className="image-35 w-dyn-bind-empty"
                  />
                  <h1 className="heading-19 w-dyn-bind-empty" />
                  <h1 className="heading-20 w-dyn-bind-empty" />
                  <p className="paragraph-14 w-dyn-bind-empty" />
                  <div
                    id="w-node-c656f0c9-1643-905f-6cc4-681518559659-896b7dbf"
                    className="w-layout-layout quick-stack-14 wf-layout-layout"
                  >
                    <div
                      id="w-node-c656f0c9-1643-905f-6cc4-68151855965a-896b7dbf"
                      className="w-layout-cell"
                    >
                      <a href="#" className="w-inline-block">
                        <img
                          src="/images/Facebook_1.png"
                          loading="lazy"
                          data-w-id="c656f0c9-1643-905f-6cc4-68151855965c"
                          alt=""
                          className="image-67"
                        />
                      </a>
                    </div>
                    <div
                      id="w-node-c656f0c9-1643-905f-6cc4-68151855965d-896b7dbf"
                      className="w-layout-cell"
                    >
                      <a href="#" className="w-inline-block">
                        <img
                          src="/images/Twitter.png"
                          loading="lazy"
                          data-w-id="c656f0c9-1643-905f-6cc4-68151855965f"
                          alt=""
                          className="image-67"
                        />
                      </a>
                    </div>
                    <div
                      id="w-node-c656f0c9-1643-905f-6cc4-681518559660-896b7dbf"
                      className="w-layout-cell"
                    >
                      <a href="#" className="w-inline-block">
                        <img
                          src="/images/Instagram_1.png"
                          loading="lazy"
                          data-w-id="c656f0c9-1643-905f-6cc4-681518559662"
                          alt=""
                          className="image-67"
                        />
                      </a>
                    </div>
                    <div
                      id="w-node-c656f0c9-1643-905f-6cc4-681518559663-896b7dbf"
                      className="w-layout-cell"
                    >
                      <a href="#" className="w-inline-block">
                        <img
                          src="/images/LinkedIn.png"
                          loading="lazy"
                          data-w-id="c656f0c9-1643-905f-6cc4-681518559665"
                          alt=""
                          className="image-67"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-dyn-empty">
              <div>No items found.</div>
            </div>
          </div>
        </div>
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
      <section className="uui-section_cta12-2">
        <div className="uui-page-padding-6">
          <div className="uui-container-large-6" />
        </div>
        <a href="#hero" className="link-block-20 w-inline-block">
          <img src="/images/icons8-up-26.png" loading="lazy" alt="" />
        </a>
      </section>
      {/* Start of Tawk.to Script */}
      {/* End of Tawk.to Script */}
    </>

  )
}
