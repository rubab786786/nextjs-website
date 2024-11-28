"use client"
import { useState } from "react";

export default function HomePage() {
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
      <main>
        <section id="anchor-scroll" className="pop-section-1">
          <div className="pop-up-div">
            <div className="pop-up-div-1">
              <img
                src="/images/65c1ffabd8b160b194ad1167_—Pngtree—.png"
                loading="lazy"
                width={32}
                data-w-id="8271c643-aea5-b0fe-9930-42b39c5e7cd9"
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
              <a
                href="/"
                aria-current="page"
                className="header-logo-link w-nav-brand w--current"
              >
                <img src="/images/logo.svg" alt="" className="brix---header-logo" />
              </a>
              <div className="header-middle-col">
                <nav role="navigation" className="header-menu-wrapper w-nav-menu">
                  <ul role="list" className="header-nav-menu-list">
                    <li className="header-nav-list-item-middle">
                      <a
                        href="/"
                        aria-current="page"
                        className="header-nav-link w-nav-link w--current"
                      >
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
                      <a href="/#" className="btn-primary-small w-button">
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
        <section id="hero" className="new-hero-copy">
          <div className="w-layout-blockcontainer container-7 w-container">
            <div
              id="w-node-_4e6a4af3-f329-a177-517a-2c0545ac87f2-69ff34fb"
              className="w-layout-layout quick-stack-8 wf-layout-layout"
            >
              <div
                id="w-node-_4e6a4af3-f329-a177-517a-2c0545ac87f3-69ff34fb"
                className="w-layout-cell cell-21"
              >
                <h1 className="heading-7">Jumpstart your business with UFUND</h1>
                <h1 className="heading-8">
                  UFUND has the solution in a unified and secure ecosystem
                </h1>
                <div className="div-block">
                  <a
                    href="https://www.tokensales.ufund.online/"
                    className="spark-button-2 spark-icon-left-button next w-inline-block"
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
                  <img
                    src="/images/Group-4-3.png"
                    loading="lazy"
                    data-w-id="58fe8f3c-07e2-848d-b636-eea50643036c"
                    alt=""
                    className="image-3-copy"
                  />
                </div>
              </div>
              <div
                id="w-node-_4e6a4af3-f329-a177-517a-2c0545ac87f4-69ff34fb"
                className="w-layout-cell cell-42"
              >
                <img
                  src="/images/Frame_1.png"
                  loading="lazy"
                  data-w-id="94b613ca-5e67-334d-1a64-1a499440c8eb"
                  alt=""
                  className="image-29"
                />
                <img
                  src="/images/Rectangle-783-1.jpg"
                  loading="lazy"
                  sizes="(max-width: 479px) 100vw, (max-width: 767px) 95vw, 100vw"
                  srcSet="/images/Rectangle-783-1-p-500.jpg 500w, images/Rectangle-783-1-p-800.jpg 800w, images/Rectangle-783-1.jpg 888w"
                  alt=""
                  className="image-69"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="about-us-section">
          <div className="w-layout-blockcontainer about-us-container w-container">
            <div
              id="w-node-_82de599f-211e-2a5b-0888-4eb9a2dc36b7-69ff34fb"
              className="w-layout-layout quick-stack-9 wf-layout-layout"
            >
              <div
                id="w-node-_82de599f-211e-2a5b-0888-4eb9a2dc36b8-69ff34fb"
                className="w-layout-cell cell-24"
              >
                <h1 className="heading-9">What Is UFUND?</h1>
                <h1 className="heading-10">
                  Crowdfunding platform UFUND uses blockchain for its tokenizer, for
                  cryptocurrencies and offers access to decentralized finance for
                  small businesses.
                </h1>
                <p className="paragraph-8">
                  A new way for businesses to get finance for their needs to run
                  commercial activities. Another way for investors to diversify their
                  investment in real businesses.
                </p>
                <a
                  href="https://webapp.ufund.online/login"
                  target="_blank"
                  className="spark-button-3 spark-icon-left-button next w-inline-block"
                >
                  <p className="paragraph-16">Discover more</p>
                  <div className="html-embed-3 w-embed">
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
                id="w-node-_82de599f-211e-2a5b-0888-4eb9a2dc36b9-69ff34fb"
                className="w-layout-cell cell-23"
              >
                <div
                  id="w-node-_6b461b15-6813-94d3-6e3a-2d51912bdb6c-69ff34fb"
                  className="w-layout-layout quick-stack-11 wf-layout-layout"
                >
                  <div
                    id="w-node-_6b461b15-6813-94d3-6e3a-2d51912bdb6d-69ff34fb"
                    className="w-layout-cell"
                  >
                    <a
                      href="https://webapp.ufund.online/login"
                      target="_blank"
                      className="link-block-23 w-inline-block"
                    >
                      <div className="div-block-12">
                        <img
                          src="/images/Group-1000008003.svg"
                          loading="lazy"
                          alt=""
                          className="image-58"
                        />
                        <h1 className="heading-12">Invest</h1>
                        <p className="paragraph-10">
                          Credibly architect future-proof products whereas
                          bleeding-edge value.
                        </p>
                      </div>
                    </a>
                  </div>
                  <div
                    id="w-node-_6b461b15-6813-94d3-6e3a-2d51912bdb6e-69ff34fb"
                    className="w-layout-cell"
                  >
                    <a
                      href="https://webapp.ufund.online/login"
                      target="_blank"
                      className="link-block-24 w-inline-block"
                    >
                      <div className="div-block-11">
                        <img
                          src="/images/Group-1000008003-5.png"
                          loading="lazy"
                          alt=""
                          className="image-58"
                        />
                        <h1 className="heading-12">Earn</h1>
                        <p className="paragraph-10">
                          Phosfluorescently customize front-end networks after
                          web-enabled collaboration.
                        </p>
                      </div>
                    </a>
                    <img
                      src="/images/Frame_1.png"
                      loading="lazy"
                      data-w-id="8895a6ef-a634-d026-c6af-56e8badde872"
                      alt=""
                      className="image-37"
                    />
                  </div>
                </div>
                <div
                  id="w-node-_28104d7d-f24f-4c8b-0eef-6f049d014d8f-69ff34fb"
                  className="w-layout-layout quick-stack-11 wf-layout-layout"
                >
                  <div
                    id="w-node-_28104d7d-f24f-4c8b-0eef-6f049d014d90-69ff34fb"
                    className="w-layout-cell"
                  >
                    <a
                      href="https://webapp.ufund.online/login"
                      target="_blank"
                      className="link-block-21 w-inline-block"
                    >
                      <div className="div-block-10">
                        <img
                          src="/images/Group-1000008003-2.svg"
                          loading="lazy"
                          alt=""
                          className="image-58"
                        />
                        <h1 className="heading-12">Withdrawal</h1>
                        <p className="paragraph-10">
                          Distinctively predominate impactful results after dynamic
                          total linkage.
                        </p>
                      </div>
                    </a>
                  </div>
                  <div
                    id="w-node-_28104d7d-f24f-4c8b-0eef-6f049d014d97-69ff34fb"
                    className="w-layout-cell"
                  >
                    <a
                      href="https://webapp.ufund.online/login"
                      target="_blank"
                      className="link-block-22 w-inline-block"
                    >
                      <div className="div-block-14">
                        <img
                          src="/images/Group-1000008003-3.svg"
                          loading="lazy"
                          alt=""
                          className="image-58"
                        />
                        <h1 className="heading-12">Campaign</h1>
                        <p className="paragraph-10">
                          Dramatically e-enable frictionless expertise via interactive
                          niches. Assertively communicate.
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="supply-section">
          <div className="w-layout-blockcontainer supply-container w-container">
            <div
              id="w-node-_4977b1ea-b97b-d4a1-2513-a6f9ddf3a914-69ff34fb"
              className="w-layout-layout quick-stack-12 wf-layout-layout"
            >
              <div
                id="w-node-_4977b1ea-b97b-d4a1-2513-a6f9ddf3a916-69ff34fb"
                className="w-layout-cell cell-27"
              >
                <img
                  src="/images/Group-1000008006-1.png"
                  loading="lazy"
                  sizes="(max-width: 479px) 100vw, (max-width: 767px) 89vw, (max-width: 991px) 91vw, (max-width: 1279px) 610px, (max-width: 1439px) 81vw, 1063.794677734375px"
                  srcSet="/images/Group-1000008006-1-p-500.png 500w, images/Group-1000008006-1.png 610w"
                  alt=""
                  className="image-32"
                />
              </div>
              <div
                id="w-node-_4977b1ea-b97b-d4a1-2513-a6f9ddf3a915-69ff34fb"
                className="w-layout-cell cell-26"
              >
                <h1 className="heading-13">Become part of supply chain finance</h1>
                <h1 className="heading-14">
                  Crowdfunding platform UFUND: your one-stop business funding
                </h1>
                <p className="paragraph-12">
                  Whether you are a new business or have been trading for years, UFUND
                  understands that most businesses need financing to be able to buy
                  goods from suppliers or sell goods to clients. UFUND secured
                  platform is a one stop solution that gathers business owners and
                  investors. Using UFUND Token, major Fiat and crypto currencies,
                  investors can directly finance businesses at a predefined interest
                  rate and period. Known as decentralized finance (DeFi), UFUND
                  platform brings solutions for businesses and alternative investment
                  opportunities for investors. UFUND tokenizer is powered by Polygon
                  blockchain. The platform promotes tokenization as a new solution in
                  the supply chain finance for small businesses. By bringing together
                  investors, businesses owners,the platform brings solutions to
                  businesses and sustainable returns to investors. To know more,
                </p>
                <a
                  href="#download-app"
                  className="spark-button-2-copy spark-icon-left-button next w-inline-block"
                >
                  <p className="paragraph-5">Download Our App</p>
                  <div className="html-embed-4 w-embed">
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
        <section className="counte-section">
          <div className="w-layout-blockcontainer counte-conatiner w-container">
            <div
              id="w-node-_3c31ef5c-7a4b-e29f-5d43-0b6168cb51c2-69ff34fb"
              className="w-layout-layout quick-stack-2 wf-layout-layout"
            >
              <div className="w-layout-cell cell-8">
                <img
                  src="/images/approved-1-1.png"
                  loading="lazy"
                  alt=""
                  className="image-46"
                />
              </div>
              <div className="w-layout-cell cell-7">
                <h1 className="counter">1478</h1>
                <h1 className="heading-4">Active Users</h1>
              </div>
            </div>
            <div
              id="w-node-_3c31ef5c-7a4b-e29f-5d43-0b6168cb51ca-69ff34fb"
              className="w-layout-layout quick-stack-2 wf-layout-layout"
            >
              <div className="w-layout-cell cell-8">
                <img
                  src="/images/Group-1000008054-1.png"
                  loading="lazy"
                  alt=""
                  className="image-46"
                />
              </div>
              <div className="w-layout-cell cell-7">
                <h1 className="counter">159</h1>
                <h1 className="heading-4">Active Compainers</h1>
              </div>
            </div>
            <div
              id="w-node-_3c31ef5c-7a4b-e29f-5d43-0b6168cb51e2-69ff34fb"
              className="w-layout-layout quick-stack-2 wf-layout-layout"
            >
              <div className="w-layout-cell cell-8">
                <img
                  src="/images/Group-2.png"
                  loading="lazy"
                  alt=""
                  className="image-46"
                />
              </div>
              <div className="w-layout-cell cell-7">
                <h1 className="counter">1319</h1>
                <h1 className="heading-4">Active Investors</h1>
              </div>
            </div>
            <div
              id="w-node-_3c31ef5c-7a4b-e29f-5d43-0b6168cb51ea-69ff34fb"
              className="w-layout-layout quick-stack-2 wf-layout-layout"
            >
              <div className="w-layout-cell cell-8">
                <img
                  src="/images/Analytics-Piew.png"
                  loading="lazy"
                  alt=""
                  className="image-46"
                />
              </div>
              <div className="w-layout-cell cell-7">
                <h1 className="counter">10</h1>
                <h1 className="heading-4">Total Products</h1>
              </div>
            </div>
          </div>
        </section>
        <section className="how-section">
          <div className="w-layout-blockcontainer how-container w-container">
            <h1 className="heading-15">How Does It Works?</h1>
            <h1 className="heading-18">
              UFUND is a user-friendly crowdfunding platform promoting decentralized
              finance and assets tokenization.
            </h1>
            <img
              src="/images/Group-1000008007-1.png"
              loading="lazy"
              sizes="(max-width: 479px) 100vw, (max-width: 767px) 80vw, (max-width: 991px) 81vw, (max-width: 1439px) 82vw, 1072.696533203125px"
              srcSet="/images/Group-1000008007-1-p-500.png 500w, images/Group-1000008007-1-p-800.png 800w, images/Group-1000008007-1.png 1170w"
              alt=""
              className="image-33"
            />
            <a href="/#" className="lightbox-link-2 w-inline-block w-lightbox">
              <img
                src="/images/Group-237-1.png"
                loading="lazy"
                alt=""
                className="image-57"
              />
            </a>
            <p className="paragraph-11">
              Investors can build their Fiat and crypto currencies investment.
              Business campaigners can campaign for funding their businesses and
              tokenize their companies’ real-world assets. Watch the video to learn
              more…
            </p>
          </div>
        </section>
        <section className="make-section">
          <div className="w-layout-blockcontainer make-container w-container">
            <h1 className="heading-16">
              We make crowdfunding meaningful for business and investors.
            </h1>
            <div
              id="w-node-_64a284a0-7a59-2ef3-ffc1-860d784c64b8-69ff34fb"
              className="w-layout-layout quick-stack-13 wf-layout-layout"
            >
              <div
                id="w-node-_64a284a0-7a59-2ef3-ffc1-860d784c64b9-69ff34fb"
                className="w-layout-cell"
              >
                <div className="div-block-16">
                  <p className="paragraph-13">
                    Crowdfunding and tokenization have reached a new level, thanks to
                    UFUND platform and its approach to place decentralized finance
                    where it matters. Today, businesses and investors can enjoy an
                    adaptive way to raise capital or make profits on demand with UFUND
                    platform. Unlike traditional crowdfunding finance, UFUND platform
                    is a single point-of-access that offers finance solutions for real
                    businesses and investors opportunities all year around. Remember
                    that UFUND platform is secured for investors and Business
                    campaigners’ activities. We secure all investors and Business
                    campaigners Fiat funds into regulated third party custody. Asset’s
                    tokenization is backed by blockchain with a bright future ahead!
                  </p>
                  <a
                    href="https://webapp.ufund.online/login"
                    target="_blank"
                    className="spark-button-3 spark-icon-left-button next w-inline-block"
                  >
                    <p className="paragraph-16">Discover more</p>
                    <div className="html-embed-5 w-embed">
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
              <div
                id="w-node-_64a284a0-7a59-2ef3-ffc1-860d784c64c1-69ff34fb"
                className="w-layout-cell cell-28"
              >
                <div className="div-block-15">
                  <p className="paragraph-13">
                    Unlike traditional crowdfunding finance, UFUND platform is a
                    single point- of-access that offers finance solutions for real
                    businesses and investors opportunities all year around. Remember
                    that the UFUND platform is secured for investors and backed by
                    blockchain for Business campaigners to tokenize their assets with
                    a bright future ahead!
                  </p>
                  <div
                    id="w-node-c45015d8-f93a-6929-9ffc-e882705c7eb9-69ff34fb"
                    className="w-layout-layout quick-stack-17 wf-layout-layout"
                  >
                    <div className="w-layout-cell">
                      <a
                        href="https://webapp.ufund.online/login"
                        target="_blank"
                        className="w-inline-block"
                      >
                        <img
                          src="/images/Frame-10.png"
                          loading="lazy"
                          data-w-id="27463a80-0912-4ac1-4f00-7e9501ebf74d"
                          alt=""
                          className="image-66"
                        />
                      </a>
                    </div>
                    <div className="w-layout-cell">
                      <a
                        href="/contact-us"
                        className="new-button-1 spark-icon-left-button next w-inline-block"
                      >
                        <p className="spark-button-text">Contact Us</p>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="div-block-15-copy">
                  <p className="paragraph-13">
                    UFUND offers free access to businesses and investors. Offers
                    returns ranking from 5% to 25% based on the investments and it's
                    maturity dates.
                  </p>
                  <a
                    href="https://webapp.ufund.online/login"
                    target="_blank"
                    className="w-inline-block"
                  >
                    <img
                      src="/images/Frame-10.png"
                      loading="lazy"
                      data-w-id="89db3b33-2314-2d88-d442-37618cafe6cf"
                      alt=""
                      className="image-66-1"
                    />
                  </a>
                </div>
                <img
                  src="/images/Group-2127_1.png"
                  loading="lazy"
                  alt=""
                  className="image-34"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="team-section">
          <div className="w-layout-blockcontainer team-container w-container">
            <h1 className="heading-17">We are UFUND!</h1>
            <h1 className="heading-16-copy">Meet our IT and management team</h1>
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
                      id="w-node-_80c1fb75-32ff-4f80-55d8-aca06feda1e7-69ff34fb"
                      className="w-layout-layout quick-stack-14 wf-layout-layout"
                    >
                      <div
                        id="w-node-_2fbc1e94-cb06-3af8-4af7-c6447d9d1c35-69ff34fb"
                        className="w-layout-cell"
                      >
                        <a href="#" className="w-inline-block">
                          <img
                            src="/images/Facebook_1.png"
                            loading="lazy"
                            data-w-id="805f2aa7-6b46-4d57-4bde-3643a1390436"
                            alt=""
                            className="image-67"
                          />
                        </a>
                      </div>
                      <div
                        id="w-node-_4f5767b9-9cdf-754b-d93e-c5004face070-69ff34fb"
                        className="w-layout-cell"
                      >
                        <a href="#" className="w-inline-block">
                          <img
                            src="/images/Twitter.png"
                            loading="lazy"
                            data-w-id="40a7746e-eb2d-7602-6b89-ce3109e96850"
                            alt=""
                            className="image-67"
                          />
                        </a>
                      </div>
                      <div
                        id="w-node-_580cd254-ee7e-f312-6f98-036a2d4c4cdf-69ff34fb"
                        className="w-layout-cell"
                      >
                        <a href="#" className="w-inline-block">
                          <img
                            src="/images/Instagram_1.png"
                            loading="lazy"
                            data-w-id="084dd178-1f80-19e1-4055-22733278b073"
                            alt=""
                            className="image-67"
                          />
                        </a>
                      </div>
                      <div
                        id="w-node-_3354bff4-586b-facc-b7b9-57ee1d981451-69ff34fb"
                        className="w-layout-cell"
                      >
                        <a href="#" className="w-inline-block">
                          <img
                            src="/images/LinkedIn.png"
                            loading="lazy"
                            data-w-id="02c0d56d-708f-48c1-3c77-252d95058531"
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
                      id="w-node-c24402b8-3085-784b-f5c0-6b0bec15e22a-69ff34fb"
                      className="w-layout-layout quick-stack-14 wf-layout-layout"
                    >
                      <div
                        id="w-node-c24402b8-3085-784b-f5c0-6b0bec15e22b-69ff34fb"
                        className="w-layout-cell"
                      >
                        <a href="#" className="w-inline-block">
                          <img
                            src="/images/Facebook_1.png"
                            loading="lazy"
                            data-w-id="c24402b8-3085-784b-f5c0-6b0bec15e22d"
                            alt=""
                            className="image-67"
                          />
                        </a>
                      </div>
                      <div
                        id="w-node-c24402b8-3085-784b-f5c0-6b0bec15e22e-69ff34fb"
                        className="w-layout-cell"
                      >
                        <a href="#" className="w-inline-block">
                          <img
                            src="/images/Twitter.png"
                            loading="lazy"
                            data-w-id="c24402b8-3085-784b-f5c0-6b0bec15e230"
                            alt=""
                            className="image-67"
                          />
                        </a>
                      </div>
                      <div
                        id="w-node-c24402b8-3085-784b-f5c0-6b0bec15e231-69ff34fb"
                        className="w-layout-cell"
                      >
                        <a href="#" className="w-inline-block">
                          <img
                            src="/images/Instagram_1.png"
                            loading="lazy"
                            data-w-id="c24402b8-3085-784b-f5c0-6b0bec15e233"
                            alt=""
                            className="image-67"
                          />
                        </a>
                      </div>
                      <div
                        id="w-node-c24402b8-3085-784b-f5c0-6b0bec15e234-69ff34fb"
                        className="w-layout-cell"
                      >
                        <a href="#" className="w-inline-block">
                          <img
                            src="/images/LinkedIn.png"
                            loading="lazy"
                            data-w-id="c24402b8-3085-784b-f5c0-6b0bec15e236"
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
            <h1 className="heading-22">The UFUND app is available on both</h1>
            <div
              id="download-app"
              className="w-layout-layout quick-stack-16 w-node-_61419c03-f4ba-28ee-8c82-a9450af4a269-69ff34fb wf-layout-layout"
            >
              <div className="w-layout-cell">
                <a
                  href="https://apps.apple.com/in/app/ufund-investing-fundraising/id1490084497"
                  target="_blank"
                  className="w-inline-block"
                >
                  <img
                    src="/images/app-store-apple-1-1.png"
                    loading="lazy"
                    alt=""
                    className="image-59"
                  />
                </a>
              </div>
              <div className="w-layout-cell">
                <a
                  href="https://play.google.com/store/apps/details?id=com.ufund.app"
                  className="w-inline-block"
                >
                  <img
                    src="/images/app-store-google-1-1.png"
                    loading="lazy"
                    alt=""
                    className="image-60"
                  />
                </a>
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
                        aria-current="page"
                        className="brix---footer-logo-wrapper w-inline-block w--current"
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
                                loading="eagerD"
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
      </main>
    </>
  );
}