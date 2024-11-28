"use client"
import { useState } from "react";

export default function SiteMap() {
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
  <title>Site Map</title>
  <meta content="Site Map" property="og:title" />
  <meta content="Site Map" property="twitter:title" />
  <section id="anchor-scroll" className="pop-section-1">
    <div className="pop-up-div">
      <div className="pop-up-div-1">
        <img
          src="/images/65c1ffabd8b160b194ad1167_—Pngtree—.png"
          loading="lazy"
          width={32}
          data-w-id="2b5ce082-22c6-8abb-a249-b10bb2a365d7"
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
      <h1 className="heading-map">Site Map</h1>
      <a href="#" className="button w-button">
        Home - welcome to UFUND platform
      </a>
    </div>
  </section>
  <section className="section-site-1">
    <div className="w-layout-blockcontainer container-site-1 w-container">
      <div
        id="w-node-_7783fd94-8a4e-d964-685d-ec1bad4b2443-18a52238"
        className="w-layout-layout quick-stack-49 wf-layout-layout"
      >
        <div
          id="w-node-_7783fd94-8a4e-d964-685d-ec1bad4b2444-18a52238"
          className="w-layout-cell"
        >
          <a href="#" className="link-7">
            Home
          </a>
          <a href="#" className="link-7">
            About us
          </a>
          <a href="#" className="link-7">
            Whitepaper
          </a>
        </div>
        <div
          id="w-node-_7783fd94-8a4e-d964-685d-ec1bad4b244b-18a52238"
          className="w-layout-cell"
        >
          <a href="#" className="link-7">
            Services
          </a>
          <ul role="list" className="list-site">
            <li className="list-item-site-2">Innovative Investment</li>
            <li className="list-item-site-2">Crowdfunding</li>
            <li className="list-item-site-2">Asset Tokenization</li>
          </ul>
        </div>
        <div
          id="w-node-_7783fd94-8a4e-d964-685d-ec1bad4b2455-18a52238"
          className="w-layout-cell"
        >
          <a href="#" className="link-7">
            FAQS
          </a>
          <a href="#" className="link-7">
            Contact
          </a>
          <a href="#" className="link-7">
            News &amp; Media
          </a>
        </div>
      </div>
      <a href="#" className="link-8">
        Blog
      </a>
      <ul role="list" className="list-site">
        <li className="list-item-site-1">
          Challenges Hindering the Tokenization of Real World Assets, as
          Identified by VanEck CEO
        </li>
        <li className="list-item-site-1">
          From Dreams to Dollars: Best Startup Investing Platforms of 2024
        </li>
        <li className="list-item-site-1">
          &nbsp;Securing Your Financial Future: The Rise of Security Token
          Investment
        </li>
        <li className="list-item-site-1">
          Navigating the Digital Wave: Top 8 Fundraising Online Platforms of
          2024
        </li>
        <li className="list-item-site-1">
          From Seed to Scale: Exploring the Dynamics of Venture Capital
          Opportunities
        </li>
        <li className="list-item-site-1">
          RWA Tokenization: Navigating the Trust Path in Digital Transactions
        </li>
        <li className="list-item-site-1">
          The Game-Changer: Security Token Platforms in Modern Finance
        </li>
        <li className="list-item-site-1">
          Demystifying Digital Securities: Your Path to Modern Investment
        </li>
        <li className="list-item-site-1">
          Capital Raising Strategies: Your Guide to Financial Success
        </li>
        <li className="list-item-site-1">
          The Future of Finance: Blockchain Investment Explained
        </li>
        <li className="list-item-site-1">
          Tokenized Securities Exchange: A New Era in Investing
        </li>
        <li className="list-item-site-1">
          Angel Investors vs. Private Equity: Differences?
        </li>
        <li className="list-item-site-1">
          Raising Capital for Business: Useful Options and Strategies
        </li>
        <li className="list-item-site-1">
          Security Token Exchanges: What They Are and How to Invest
        </li>
        <li className="list-item-site-1">
          Blockchain Security Tokens: Revolutionizing Asset Ownership
        </li>
        <li className="list-item-site-1">
          Tokenized Stock Exchange: The Next Step in Digital Trading
        </li>
        <li className="list-item-site-1">
          Token Services: The Key to Secure Data Transactions
        </li>
        <li className="list-item-site-1">
          Venture Capital Funding: What is it and How Does It Work?
        </li>
        <li className="list-item-site-1">
          Seed Capital: What is it and Why Do You Need it?
        </li>
        <li className="list-item-site-1">
          Startup Investment: Your Ultimate Guide to Success
        </li>
        <li className="list-item-site-1">
          Early Stage Funding: A Pathway to Startup Success
        </li>
        <li className="list-item-site-1">
          Angel Investment vs. Crowdfunding: Startup Funding Guide
        </li>
        <li className="list-item-site-1">
          Tokenized Equity: Unlocking Investment Opportunities
        </li>
        <li className="list-item-site-1">
          Anti Money Laundering: Safeguarding Financial Systems
        </li>
        <li className="list-item-site-1">
          Crypto Custody Solutions: Ensuring the Security
        </li>
        <li className="list-item-site-1">
          Tokenization of Real-World Assets - Unlocking Opportunities
        </li>
        <li className="list-item-site-1">
          Rules for Accredited Investors - An Introduction
        </li>
        <li className="list-item-site-1">
          Crypto Derivatives Tokens: Exploring the Realm
        </li>
        <li className="list-item-site-1">
          SEC Rules for Non-Accredited Investors: Introduction
        </li>
        <li className="list-item-site-1">
          Accredited Investors - Gateway to Unbounded Possibilities
        </li>
        <li className="list-item-site-1">
          Securities and Exchange Commission SEC - Introduction
        </li>
        <li className="list-item-site-1">
          Tokenized Investment Funds: An Overview of Tokenization
        </li>
        <li className="list-item-site-1">
          Tokenized Securities: Revolutionizing the Future
        </li>
        <li className="list-item-site-1">
          Blockchain Interoperability - Understanding the Concept
        </li>
        <li className="list-item-site-1">
          Benefits of Equity Crowdfunding - A New Era of Possibilities
        </li>
        <li className="list-item-site-1">
          Angel Investors vs. Venture Capitalists: An Introduction
        </li>
        <li className="list-item-site-1">
          Cross-chain Bridges - Bridging the Gap by Uniting Blockchains
        </li>
        <li className="list-item-site-1">
          Scalability of cryptocurrency - Scaling New Heights
        </li>
        <li className="list-item-site-1">
          Safest Way to Store Crypto: Fortify Your Crypto Holdings
        </li>
        <li className="list-item-site-1">
          What is Wallet Mining - Everything You Need to Know
        </li>
        <li className="list-item-site-1">
          Understanding Tokenomics - Empowering the Digital Economy
        </li>
        <li className="list-item-site-1">
          Investors for Small Businesses - Powering Growth
        </li>
        <li className="list-item-site-1">
          Future of Blockchain Technology - The Next Digital Frontier
        </li>
        <li className="list-item-site-1">
          Tokenization of Assets - Digitalizing Ownership
        </li>
        <li className="list-item-site-1">
          Benefits of Security Tokens - Democratizing Investments
        </li>
        <li className="list-item-site-1">
          Crypto Market Growth: The Future of Finance
        </li>
        <li className="list-item-site-1">
          Security Token Exchange: Everything You Need to Know
        </li>
        <li className="list-item-site-1">
          Blockchain Scalability: A Comprehensive Guide
        </li>
        <li className="list-item-site-1">
          Cryptocurrency Investment Mistakes: Top Errors to Avoid
        </li>
        <li className="list-item-site-1">
          Crypto Market Liquidity 101: A Beginner's Guide
        </li>
        <li className="list-item-site-1">
          Crypto Regulation: What You Need to Know as an Investor
        </li>
        <li className="list-item-site-1">
          Initial Security Token Offering - Introduction -2
        </li>
        <li className="list-item-site-1">
          Cryptocurrency Market Analysis: Insights and Trends
        </li>
        <li className="list-item-site-1">
          Initial Coin Offerings (ICOs): The In-Depth Guide
        </li>
        <li className="list-item-site-1">
          Decentralization in Cryptocurrencies: The Pros and Cons
        </li>
        <li className="list-item-site-1">
          Digital Assets and Their Role in the Future of Finance
        </li>
        <li className="list-item-site-1">
          Understanding Blockchain Technology: A Beginner's Guide
        </li>
        <li className="list-item-site-1">
          Crypto Investment Plans - What Do You Need to Know?
        </li>
        <li className="list-item-site-1">
          Cryptocurrency Investment Strategy - The Complete Guide
        </li>
        <li className="list-item-site-1">
          Best Crypto for Future Investment in 2023
        </li>
        <li className="list-item-site-1">
          Rules of Investing in Crypto that Investors Must Follow
        </li>
        <li className="list-item-site-1">
          Crowdfunding Equity Investment - An Introduction
        </li>
        <li className="list-item-site-1">
          Best Investment for the Future - Where to Invest Your Money?
        </li>
        <li className="list-item-site-1">
          Crowdfunding Pros and Cons for Your Business
        </li>
        <li className="list-item-site-1">
          Venture Capital for Startups - What is it and How Does It Work?
        </li>
        <li className="list-item-site-1">
          Make Money with Cryptocurrency in 2023 - Top Methods
        </li>
        <li className="list-item-site-1">
          Crypto Tokenization: The Beginner's Guide
        </li>
        <li className="list-item-site-1">
          Technology Behind Cryptocurrency - An Introduction
        </li>
        <li className="list-item-site-1">
          SEC Crowdfunding Regulation - Introduction
        </li>
        <li className="list-item-site-1">Best DeFi Tokens to Invest in 2023</li>
        <li className="list-item-site-1">
          Investor’s Guide to Cryptocurrency - Know the Tips
        </li>
        <li className="list-item-site-1">
          Basic Introduction to Cryptocurrency - Know More
        </li>
        <li className="list-item-site-1">
          Best Way to Invest in Crypto - What Do You Need to Know?
        </li>
        <li className="list-item-site-1">
          Top Security Tokens Crypto - Introduction
        </li>
        <li className="list-item-site-1">
          ICO vs STO vs IEO - What's the Difference?
        </li>
        <li className="list-item-site-1">
          Real Asset Tokenization: Your New Investment Alternative
        </li>
        <li className="list-item-site-1">
          Security Token Issuance - Know Everything About it
        </li>
        <li className="list-item-site-1">
          Initial Exchange Offerings - A Beginner’s Guide
        </li>
        <li className="list-item-site-1">
          Tokenization vs. Securitization - Know the Difference
        </li>
        <li className="list-item-site-1">
          Crypto with Blockchain - An Introduction
        </li>
        <li className="list-item-site-1">
          Raise Capital for Your Business - What Are the Ways?
        </li>
        <li className="list-item-site-1">
          Security Token Offering Regulation - An Overview
        </li>
        <li className="list-item-site-1">
          Crypto World - How has the Global Economy been Impacted?
        </li>
        <li className="list-item-site-1">
          Crowdfunding with Blockchain — Introduction
        </li>
        <li className="list-item-site-1">
          DeFi Crypto Wallet — Everything You Need to Know
        </li>
        <li className="list-item-site-1">Crowdfund Your Business with UFUND</li>
        <li className="list-item-site-1">
          Rules of Investment You Need to Know
        </li>
        <li className="list-item-site-1">Future of Cr</li>
      </ul>
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
                  <a
                    href="/site-map"
                    aria-current="page"
                    className="brix---footer-link w--current"
                  >
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
