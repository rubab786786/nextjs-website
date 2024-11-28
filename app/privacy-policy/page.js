"use client"
import { useState } from "react";

export default function PrivacyPolicy() {
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
  <title>Privacy Policy</title>
  <meta content="Privacy Policy" property="og:title" />
  <meta content="Privacy Policy" property="twitter:title" />
  <section id="anchor-scroll" className="pop-section-1">
    <div className="pop-up-div">
      <div className="pop-up-div-1">
        <img
          src="/images/65c1ffabd8b160b194ad1167_—Pngtree—.png"
          loading="lazy"
          width={32}
          data-w-id="82df8f2d-7cf6-46b0-1e97-be1a04b68096"
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
  <section id="hero" className="section-privacy">
    <div className="w-layout-blockcontainer container-privacy w-container">
      <h1 className="heading-terms">Privacy Policy</h1>
      <a href="#" className="button w-button">
        Last updated April 12, 2022
      </a>
    </div>
  </section>
  <section className="section-privacy-1">
    <div className="w-layout-blockcontainer container-privacy-1 w-container">
      <p className="paragraph-30">
        This privacy notice for Actiwires LLC (doing business as UFUND)
        ("UFUND," "we," "us," or "our"), describes how and why we might collect,
        store, use, and/or share ("process") your information when you use our
        services ("Services"), such as when you:
      </p>
      <ul role="list" className="list-p">
        <li className="list-item-p">
          Visit our website&nbsp;at&nbsp;https://web.ufund.online, or any
          website of ours that links to this privacy notice
        </li>
        <li className="list-item-p">
          Download and use&nbsp;our mobile application&nbsp;(UFUND),&nbsp;or any
          other application of ours that links to this privacy notice
        </li>
        <li className="list-item-p">
          Engage with us in other related ways, including any sales, marketing,
          or events
        </li>
      </ul>
      <h1 className="heading-45">Questions or concerns?</h1>
      <p className="paragraph-30">
        Reading this privacy notice will help you understand your privacy rights
        and choices. If you do not agree with our policies and practices, please
        do not use our Services. If you still have any questions or concerns,
        please contact us at info@actiwires.com.
      </p>
      <h1 className="heading-terms1">Summary of key points</h1>
      <p className="paragraph-31">
        This summary provides key points from our privacy notice, but you can
        find out more details about any of these topics by clicking the link
        following each key point or by using our table of contents below to find
        the section you are looking for. You can also click{" "}
        <a
          href="https://app.termly.io/embed/terms-of-use/a1d43a5c-c156-418b-aad6-8f748c8d5492#toc"
          target="_blank"
          className="link-4"
        >
          here
        </a>{" "}
        to go directly to our table of contents.
      </p>
      <h1 className="heading-45">What personal information do we process?</h1>
      <p className="paragraph-30">
        When you visit, use, or navigate our Services, we may process personal
        information depending on how you interact with UFUND and the Services,
        the choices you make, and the products and features you use. Click{" "}
        <a href="https://app.termly.io/embed/terms-of-use/a1d43a5c-c156-418b-aad6-8f748c8d5492#toc">
          here
        </a>{" "}
        to learn more.
      </p>
      <h1 className="heading-45">
        Do we process any sensitive personal information?
      </h1>
      <p className="paragraph-30">
        We may process sensitive personal information when necessary with your
        consent or as otherwise permitted by applicable law. Click{" "}
        <a
          href="https://app.termly.io/embed/terms-of-use/a1d43a5c-c156-418b-aad6-8f748c8d5492#toc"
          target="_blank"
        >
          here
        </a>{" "}
        to learn more.
      </p>
      <h1 className="heading-45">
        Do you receive any information from third parties?
      </h1>
      <p className="paragraph-30">
        We do not receive any information from third parties.
      </p>
      <h1 className="heading-45">How do you process my information?</h1>
      <p className="paragraph-30">
        We process your information to provide, improve, and administer our
        Services, communicate with you, for security and fraud prevention, and
        to comply with law. We may also process your information for other
        purposes with your consent. We process your information only when we
        have a valid legal reason to do so. Click
        <a
          href="https://app.termly.io/embed/terms-of-use/a1d43a5c-c156-418b-aad6-8f748c8d5492#toc"
          target="_blank"
        >
          {" "}
          here
        </a>{" "}
        to learn more.
      </p>
      <h1 className="heading-45">
        In what situations and with which parties do we share personal
        information?
      </h1>
      <p className="paragraph-30">
        We may share information in specific situations and with specific third
        parties. Click{" "}
        <a
          href="https://app.termly.io/embed/terms-of-use/a1d43a5c-c156-418b-aad6-8f748c8d5492#toc"
          target="_blank"
        >
          here
        </a>{" "}
        to learn more.
      </p>
      <h1 className="heading-45">How do we keep your information safe?</h1>
      <p className="paragraph-30">
        We have organizational and technical processes and procedures in place
        to protect your personal information. However, no electronic
        transmission over the internet or information storage technology can be
        guaranteed to be 100% secure, so we cannot promise or guarantee that
        hackers, cybercriminals, or other unauthorized third parties will not be
        able to defeat our security and improperly collect, access, steal, or
        modify your information. Click{" "}
        <a
          href="https://app.termly.io/embed/terms-of-use/a1d43a5c-c156-418b-aad6-8f748c8d5492#toc"
          target="_blank"
        >
          here
        </a>{" "}
        to learn more.
      </p>
      <h1 className="heading-45">What are your rights?</h1>
      <p className="paragraph-30">
        Depending on where you are located geographically, the applicable
        privacy law may mean you have certain rights regarding your personal
        information. Click{" "}
        <a
          href="https://app.termly.io/embed/terms-of-use/a1d43a5c-c156-418b-aad6-8f748c8d5492#toc"
          target="_blank"
        >
          here
        </a>{" "}
        to learn more.
      </p>
      <h1 className="heading-45">How do I exercise my rights?</h1>
      <p className="paragraph-30">
        The easiest way to exercise your rights is by filling out our data
        subject request form available here: web.ufund.online/login, or by
        contacting us. We will consider and act upon any request in accordance
        with applicable data protection laws.
        <br />
        <br />
        Want to learn more about what UFUND does with any information we
        collect? Click{" "}
        <a
          href="https://app.termly.io/embed/terms-of-use/a1d43a5c-c156-418b-aad6-8f748c8d5492#toc"
          target="_blank"
        >
          here
        </a>{" "}
        to review the notice in full.
      </p>
    </div>
  </section>
  <section className="section-service-2">
    <h1 className="heading-14-c">Table of contents</h1>
    <div className="w-layout-blockcontainer container-service-2 w-container">
      <div className="div-block-47">
        <div className="con-list-item">
          <div className="con-image">
            <img src="/images/Frame-43076.svg" loading="lazy" alt="" />
          </div>
          <div className="con-text-bl">
            <a
              href="#what-information-do-we-collect"
              className="link-block-16 w-inline-block"
            >
              <div className="con-text">1. What information do we collect?</div>
            </a>
          </div>
        </div>
      </div>
      <div className="div-block-47">
        <div className="con-list-item">
          <div className="con-image">
            <img src="/images/Frame-43076.svg" loading="lazy" alt="" />
          </div>
          <div className="con-text-bl">
            <a
              href="#how-do-we-process-your-information"
              className="link-block-16 w-inline-block"
            >
              <div className="con-text">
                2. How do we process your information?
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="div-block-47">
        <div className="con-list-item">
          <div className="con-image">
            <img src="/images/Frame-43076.svg" loading="lazy" alt="" />
          </div>
          <div className="con-text-bl">
            <a
              href="#how-do-we-process-your-information"
              className="link-block-16 w-inline-block"
            >
              <div className="con-text">
                3. What legal bases do we rely on to process your personal
                information?
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="div-block-47">
        <div className="con-list-item">
          <div className="con-image">
            <img src="/images/Frame-43076.svg" loading="lazy" alt="" />
          </div>
          <div className="con-text-bl">
            <a
              href="#when-and-with-whom-do-we-hare-your-personal-information"
              className="link-block-16 w-inline-block"
            >
              <div className="con-text">
                4. When and with whom do we share your personal information?
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="div-block-47">
        <div className="con-list-item">
          <div className="con-image">
            <img src="/images/Frame-43076.svg" loading="lazy" alt="" />
          </div>
          <div className="con-text-bl">
            <a
              href="#what-is-our-stance on-third-party-websites"
              className="link-block-16 w-inline-block"
            >
              <div className="con-text">
                5. What is our stance on third-party websites?
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="div-block-47">
        <div className="con-list-item">
          <div className="con-image">
            <img src="/images/Frame-43076.svg" loading="lazy" alt="" />
          </div>
          <div className="con-text-bl">
            <a
              href="#do-we-use-cookies-and-other-tracking-technologies"
              className="link-block-16 w-inline-block"
            >
              <div className="con-text">
                6. Do we use cookies and other tracking technologies?
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="div-block-47">
        <div className="con-list-item">
          <div className="con-image">
            <img src="/images/Frame-43076.svg" loading="lazy" alt="" />
          </div>
          <div className="con-text-bl">
            <a
              href="#how-do-we-handle-your-social-logins"
              className="link-block-16 w-inline-block"
            >
              <div className="con-text">
                7. How do we handle your social logins?
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="div-block-47">
        <div className="con-list-item">
          <div className="con-image">
            <img src="/images/Frame-43076.svg" loading="lazy" alt="" />
          </div>
          <div className="con-text-bl">
            <a
              href="#how-long-do-we-keep-your-information"
              className="link-block-16 w-inline-block"
            >
              <div className="con-text">
                8. How long do we keep your information?
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="div-block-47">
        <div className="con-list-item">
          <div className="con-image">
            <img src="/images/Frame-43076.svg" loading="lazy" alt="" />
          </div>
          <div className="con-text-bl">
            <a
              href="http://how-do-we-keep-your-information-safe"
              className="link-block-16 w-inline-block"
            >
              <div className="con-text">
                9. How do we keep your information safe?
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="div-block-47">
        <div className="con-list-item">
          <div className="con-image">
            <img src="/images/Frame-43076.svg" loading="lazy" alt="" />
          </div>
          <div className="con-text-bl">
            <a
              href="#do-we-collect-information-from-minors"
              className="link-block-16 w-inline-block"
            >
              <div className="con-text">
                10. Do we collect information from minors?
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="div-block-47">
        <div className="con-list-item">
          <div className="con-image">
            <img src="/images/Frame-43076.svg" loading="lazy" alt="" />
          </div>
          <div className="con-text-bl">
            <a
              href="#what-are-your-privacy-rights"
              className="link-block-16 w-inline-block"
            >
              <div className="con-text">11. What are your privacy rights?</div>
            </a>
          </div>
        </div>
      </div>
      <div className="div-block-47">
        <div className="con-list-item">
          <div className="con-image">
            <img src="/images/Frame-43076.svg" loading="lazy" alt="" />
          </div>
          <div className="con-text-bl">
            <a
              href="#controls-for-do-not-track-features"
              className="link-block-16 w-inline-block"
            >
              <div className="con-text">
                12. Controls for do-not-track features
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="div-block-47">
        <div className="con-list-item">
          <div className="con-image">
            <img src="/images/Frame-43076.svg" loading="lazy" alt="" />
          </div>
          <div className="con-text-bl">
            <a
              href="#do-california-residents-have-specific-privacy-rights"
              className="link-block-16 w-inline-block"
            >
              <div className="con-text">
                13. Do California residents have specific privacy rights?
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="div-block-47">
        <div className="con-list-item">
          <div className="con-image">
            <img src="/images/Frame-43076.svg" loading="lazy" alt="" />
          </div>
          <div className="con-text-bl">
            <a
              href="#do-we-make-updates-to-this-notice"
              className="link-block-16 w-inline-block"
            >
              <div className="con-text">
                14. Do we make updates to this notice?
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="div-block-47">
        <div className="con-list-item">
          <div className="con-image">
            <img src="/images/Frame-43076.svg" loading="lazy" alt="" />
          </div>
          <div className="con-text-bl">
            <a href="#" className="link-block-16 w-inline-block">
              <div className="con-text">
                15. How can you contact us about this notice?
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="div-block-48">
        <div className="con-list-item">
          <div className="con-image">
            <img src="/images/Frame-43076.svg" loading="lazy" alt="" />
          </div>
          <div className="con-text-bl">
            <a
              href="#how-can-you-review-update-or-delete-the-data-we-collect-from-you"
              className="link-block-16 w-inline-block"
            >
              <div className="con-text">
                16. How can you review, update, or delete the data we collect
                from you?
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="section-privacy-3">
    <div className="w-layout-blockcontainer container-privacy-3 w-container">
      <h1 id="what-information-do-we-collect" className="heading-privacy">
        1. What information do we collect?
      </h1>
      <h1 className="heading-54">Personal information you disclose to us</h1>
      <h1 className="heading-45">In Short:</h1>
      <p className="paragraph-terms">
        We collect personal information that you provide to us.
        <br />
        <br />
        We collect personal information that you voluntarily provide to us when
        you register on the Services, express an interest in obtaining
        information about us or our products and Services, when you participate
        in activities on the Services, or otherwise when you contact us.
      </p>
      <h1 className="heading-45">Personal Information Provided by You.</h1>
      <p className="paragraph-terms">
        The personal information that we collect depends on the context of your
        interactions with us and the Services, the choices you make, and the
        products and features you use. The personal information we collect may
        include the following:
      </p>
      <ul role="list" className="list-privacy">
        <li className="list-item-ser">Names</li>
        <li className="list-item-ser">Phone numbers</li>
        <li className="list-item-ser">Email addresses</li>
        <li className="list-item-ser">Mailing addresses</li>
        <li className="list-item-ser">Usernames</li>
        <li className="list-item-ser">Passwords</li>
        <li className="list-item-ser">Contact or authentication data</li>
        <li className="list-item-ser">Billing addresses</li>
      </ul>
      <h1 className="heading-45">Sensitive Information.</h1>
      <p className="paragraph-terms">
        When necessary, with your consent or as otherwise permitted by
        applicable law, we process the following categories of sensitive
        information:
      </p>
      <ul role="list" className="list-privacy">
        <li className="list-item-ser">Financial data</li>
        <li className="list-item-ser">Credit worthiness data</li>
      </ul>
      <h1 className="heading-45">Payment Data</h1>
      <p className="paragraph-terms">
        We may collect data necessary to process your payment if you make
        purchases, such as your payment instrument number (such as a credit card
        number), and the security code associated with your payment instrument.
        All payment data is stored by PayPal , Bank Wire, Adyen and Coinpayment.
        You may find their privacy notice link(s) here:{" "}
        <a
          href="https://www.paypal.com/fr/webapps/mpp/home"
          target="_blank"
          className="link-3"
        >
          https://www.paypal.com/fr/webapp
          <br />
          s/mpp/home
        </a>
        , qnb.com,{" "}
        <a href="https://www.adyen.com/" target="_blank">
          https://www.adyen.com
        </a>{" "}
        and{" "}
        <a href="https://www.coinpayments.net/merchant-tools" target="_blank">
          https://www.coinpayments.net/mer
          <br />
          chant-tools.
        </a>
      </p>
      <h1 className="heading-45">Social Media Login Data.</h1>
      <p className="paragraph-terms">
        We may provide you with the option to register with us using your
        existing social media account details, like your Facebook, Twitter, or
        other social media account. If you choose to register in this way, we
        will collect the information described in the section called{" "}
        <a
          href="https://app.termly.io/embed/terms-of-use/a1d43a5c-c156-418b-aad6-8f748c8d5492#sociallogins"
          target="_blank"
        >
          "HOW DO WE HANDLE YOUR SOCIAL LOGINS?"
        </a>{" "}
        below.
      </p>
      <h1 className="heading-45">Application Data.</h1>
      <p className="paragraph-terms">
        If you use our application(s), we also may collect the following
        information if you choose to provide us with access or permission:
      </p>
      <ul role="list" className="list-privacy-1">
        <li className="list-item-ser-1">Mobile Device Data.</li>
        <li className="list-item-ser-2">
          We automatically collect device information (such as your mobile
          device ID, model, and manufacturer), operating system, version
          information and system configuration information, device and
          application identification numbers, browser type and version, hardware
          model Internet service provider and/or mobile carrier, and Internet
          Protocol (IP) address (or proxy server). If you are using our
          application(s), we may also collect information about the phone
          network associated with your mobile device, your mobile device’s
          operating system or platform, the type of mobile device you use, your
          mobile device’s unique device ID, and information about the features
          of our application(s) you accessed.
        </li>
        <li className="list-item-ser-1">Push Notifications.</li>
        <li className="list-item-ser-2">
          We may request to send you push notifications regarding your account
          or certain features of the application(s). If you wish to opt out from
          receiving these types of communications, you may turn them off in your
          device's settings.
        </li>
      </ul>
      <p className="paragraph-terms">
        This information is primarily needed to maintain the security and
        operation of our application(s), for troubleshooting, and for our
        internal analytics and reporting purposes.
        <br />
        <br />
        All personal information that you provide to us must be true, complete,
        and accurate, and you must notify us of any changes to such personal
        information.
      </p>
      <h1 className="heading-54">Information automatically collected</h1>
      <h1 className="heading-45">In Short:</h1>
      <p className="paragraph-terms">
        Some information — such as your Internet Protocol (IP) address and/or
        browser and device characteristics — is collected automatically when you
        visit our Services.
        <br />
        <br />
        We automatically collect certain information when you visit, use, or
        navigate the Services. This information does not reveal your specific
        identity (like your name or contact information) but may include device
        and usage information, such as your IP address, browser and device
        characteristics, operating system, language preferences, referring URLs,
        device name, country, location, information about how and when you use
        our Services, and other technical information. This information is
        primarily needed to maintain the security and operation of our Services,
        and for our internal analytics and reporting purposes.
        <br />
        <br />
        Like many businesses, we also collect information through cookies and
        similar technologies.
      </p>
      <h1 id="how-do-we-process-your-information" className="heading-privacy">
        2. How do we process your information?
      </h1>
      <h1 className="heading-45">In Short:</h1>
      <p className="paragraph-terms">
        We process your information to provide, improve, and administer our
        Services, communicate with you, for security and fraud prevention, and
        to comply with law. We may also process your information for other
        purposes with your consent.
      </p>
      <h1 className="heading-45">
        We process your personal information for a variety of reasons, depending
        on how you interact with our Services, including:
      </h1>
      <ul role="list" className="list-privacy-1">
        <li className="list-item-ser-1">
          To facilitate account creation and authentication and otherwise manage
          user accounts.
        </li>
        <li className="list-item-ser-2">
          We may process your information so you can create and log in to your
          account, as well as keep your account in working order.
        </li>
        <li className="list-item-ser-1">
          To deliver and facilitate delivery of services to the user.
        </li>
        <li className="list-item-ser-2">
          We may process your information to provide you with the requested
          service.
        </li>
        <li className="list-item-ser-1">
          To respond to user inquiries/offer support to users.
        </li>
        <li className="list-item-ser-2">
          We may process your information to respond to your inquiries and solve
          any potential issues you might have with the requested service.
        </li>
        <li className="list-item-ser-1">
          To send administrative information to you.
        </li>
        <li className="list-item-ser-2">
          We may process your information to send you details about our products
          and services, changes to our terms and policies, and other similar
          information.
        </li>
        <li className="list-item-ser-1">To fulfill and manage your orders.</li>
        <li className="list-item-ser-2">
          We may process your information to fulfill and manage your orders,
          payments, returns, and exchanges made through the Services.
        </li>
        <li className="list-item-ser-1">
          To enable user-to-user communications.
        </li>
        <li className="list-item-ser-2">
          We may process your information if you choose to use any of our
          offerings that allow for communication with another user.
        </li>
        <li className="list-item-ser-1">To request feedback.</li>
        <li className="list-item-ser-2">
          We may process your information when necessary to request feedback and
          to contact you about your use of our Services.
        </li>
        <li className="list-item-ser-1">
          To send you marketing and promotional communications.
        </li>
        <li className="list-item-ser-2">
          We may process the personal information you send to us for our
          marketing purposes, if this is in accordance with your marketing
          preferences. You can opt out of our marketing emails at any time. For
          more information, see "WHAT ARE YOUR PRIVACY RIGHTS?" below).
        </li>
        <li className="list-item-ser-1">
          To deliver targeted advertising to you.&nbsp;
        </li>
        <li className="list-item-ser-2">
          &nbsp;We may process your information to develop and display
          personalized content and advertising tailored to your interests,
          location, and more.
        </li>
        <li className="list-item-ser-1">To protect our Services</li>
        <li className="list-item-ser-2">
          We may process your information as part of our efforts to keep our
          Services safe and secure, including fraud monitoring and prevention.
        </li>
        <li className="list-item-ser-1">To identify usage trends</li>
        <li className="list-item-ser-2">
          We may process information about how you use our Services to better
          understand how they are being used so we can improve them.
        </li>
        <li className="list-item-ser-1">
          To determine the effectiveness of our marketing and promotional
          campaigns.
        </li>
        <li className="list-item-ser-2">
          We may process your information to better understand how to provide
          marketing and promotional campaigns that are most relevant to you.
        </li>
        <li className="list-item-ser-1">
          To save or protect an individual's vital interest.&nbsp;
        </li>
        <li className="list-item-ser-2">
          We may process your information when necessary to save or protect an
          individual’s vital interest, such as to prevent harm.
        </li>
        <li className="list-item-ser-1">Mail &amp; Courrier.</li>
        <li className="list-item-ser-2">Bulky documents</li>
        <li className="list-item-ser-1">KYC/AML</li>
        <li className="list-item-ser-2">Due Diligence</li>
      </ul>
      <h1 id="how-do-we-process-your-information" className="heading-privacy">
        3. How do we process your information?
      </h1>
      <h1 className="heading-45">In Short:</h1>
      <p className="paragraph-terms">
        We only process your personal information when we believe it is
        necessary and we have a valid legal reason (i.e., legal basis) to do so
        under applicable law, like with your consent, to comply with laws, to
        provide you with services to enter into or fulfill our contractual
        obligations, to protect your rights, or to fulfill our legitimate
        business interests.
      </p>
      <h1 className="heading-45">
        If you are located in the EU or UK, this section applies to you.
      </h1>
      <p className="paragraph-terms">
        The General Data Protection Regulation (GDPR) and UK GDPR require us to
        explain the valid legal bases we rely on in order to process your
        personal information. As such, we may rely on the following legal bases
        to process your personal information:
      </p>
      <ul role="list" className="list-privacy-1">
        <li className="list-item-ser-1">Consent.</li>
        <li className="list-item-ser-2">
          We may process your information if you have given us permission (i.e.,
          consent) to use your personal information for a specific purpose. You
          can withdraw your consent at any time. Click&nbsp;here&nbsp;to learn
          more.
        </li>
        <li className="list-item-ser-1">Performance of a Contract.</li>
        <li className="list-item-ser-2">
          We may process your personal information when we believe it is
          necessary to fulfill our contractual obligations to you, including
          providing our Services or at your request prior to entering into a
          contract with you.
        </li>
        <li className="list-item-ser-1">Legitimate Interests.&nbsp;</li>
        <li className="list-item-ser-2">
          We may process your information when we believe it is reasonably
          necessary to achieve our legitimate business interests and those
          interests do not outweigh your interests and fundamental rights and
          freedoms. For example, we may process your personal information for
          some of the purposes described in order to:
        </li>
      </ul>
      <ul role="list" className="list-privacy-2">
        <li className="list-item-ser-3">
          Send users information about special offers and discounts on our
          products and services
        </li>
        <li className="list-item-ser-3">
          Develop and display personalized and relevant advertising content for
          our users
        </li>
        <li className="list-item-ser-3">
          Analyze how our services are used so we can improve them to engage and
          retain users
        </li>
        <li className="list-item-ser-3">Support our marketing activities</li>
        <li className="list-item-ser-3">
          Diagnose problems and/or prevent fraudulent activities
        </li>
        <li className="list-item-ser-3">
          Understand how our users use our products and services so we can
          improve user experience
        </li>
        <li className="list-item-ser-3">
          To comply with the rules of money Law
        </li>
      </ul>
      <ul role="list" className="list-privacy-1">
        <li className="list-item-ser-1">Legal Obligations.</li>
        <li className="list-item-ser-2">
          We may process your information where we believe it is necessary for
          compliance with our legal obligations, such as to cooperate with a law
          enforcement body or regulatory agency, exercise or defend our legal
          rights, or disclose your information as evidence in litigation in
          which we are involved.
        </li>
        <li className="list-item-ser-1">Vital Interests.</li>
        <li className="list-item-ser-2">
          We may process your information where we believe it is necessary to
          protect your vital interests or the vital interests of a third party,
          such as situations involving potential threats to the safety of any
          person.
        </li>
        <li className="list-item-ser-1">
          If you are located in Canada, this section applies to you.
        </li>
        <li className="list-item-ser-2">
          We may process your information if you have given us specific
          permission (i.e., express consent) to use your personal information
          for a specific purpose, or in situations where your permission can be
          inferred (i.e., implied consent). You can withdraw your consent at any
          time. Click here to learn more. In some exceptional cases, we may be
          legally permitted under applicable law to process your information
          without your consent, including, for example:
        </li>
      </ul>
      <ul role="list" className="list-privacy-2">
        <li className="list-item-ser-3">
          If collection is clearly in the interests of an individual and consent
          cannot be obtained in a timely way
        </li>
        <li className="list-item-ser-3">
          For investigations and fraud detection and prevention
        </li>
        <li className="list-item-ser-3">
          For business transactions provided certain conditions are met
        </li>
        <li className="list-item-ser-3">
          If it is contained in a witness statement and the collection is
          necessary to assess, process, or settle an insurance claim
        </li>
        <li className="list-item-ser-3">
          If it is reasonable to expect collection and use with consent would
          compromise the availability or the accuracy of the information and the
          collection is reasonable for purposes related to investigating a
          breach of an agreement or a contravention of the laws of Canada or a
          province
        </li>
        <li className="list-item-ser-3">
          If disclosure is required to comply with a subpoena, warrant, court
          order, or rules of the court relating to the production of records
        </li>
        <li className="list-item-ser-3">
          If it was produced by an individual in the course of their employment,
          business, or profession and the collection is consistent with the
          purposes for which the information was produced
        </li>
        <li className="list-item-ser-3">
          If the collection is solely for journalistic, artistic, or literary
          purposes
        </li>
        <li className="list-item-ser-3">
          If the information is publicly available and is specified by the
          regulations
        </li>
      </ul>
      <h1
        id="when-and-with-whom-do-we-hare-your-personal-information"
        className="heading-privacy"
      >
        4. When and with whom do we share your personal information?
      </h1>
      <h1 className="heading-45">In Short:</h1>
      <p className="paragraph-terms">
        We may share information in specific situations described in this
        section and/or with the following third parties.
      </p>
      <h1 className="heading-45">
        We&nbsp;may need to share your personal information in the following
        situations:
      </h1>
      <ul role="list" className="list-privacy-1">
        <li className="list-item-ser-1">Business Transfers.</li>
        <li className="list-item-ser-2">
          We may share or transfer your information in connection with, or
          during negotiations of, any merger, sale of company assets, financing,
          or acquisition of all or a portion of our business to another company.
        </li>
        <li className="list-item-ser-1">
          When we use Google Maps Platform APIs
        </li>
        <li className="list-item-ser-2">
          We may share your information with certain Google Maps Platform APIs
          (e.g., Google Maps API, Places API). To find out more about Google’s
          Privacy Policy, please refer to this&nbsp;link.&nbsp;We obtain and
          store on your device ('cache') your location&nbsp;for&nbsp;one
          (1)&nbsp;months. You may revoke your consent anytime by contacting us
          at the contact details provided at the end of this document.
        </li>
        <li className="list-item-ser-1">Other Users.</li>
        <li className="list-item-ser-2">
          &nbsp;When you share personal information&nbsp;(for example, by
          posting comments, contributions, or other content to the
          Services)&nbsp;or otherwise interact with public areas of the
          Services, such personal information may be viewed by all users and may
          be publicly made available outside the Services in perpetuity.&nbsp;If
          you interact with other users of our Services and register for our
          Services through a social network (such as Facebook), your contacts on
          the social network will see your name, profile photo, and descriptions
          of your activity.&nbsp;Similarly, other users will be able to view
          descriptions of your activity, communicate with you within our
          Services, and view your profile.
        </li>
      </ul>
      <h1
        id="what-is-our-stance-on-third-party-websites"
        className="heading-privacy"
      >
        5. What is our stance on third-party websites?
      </h1>
      <h1 className="heading-45">In Short:</h1>
      <p className="paragraph-terms">
        We are not responsible for the safety of any information that you share
        with third parties that we may link to or who advertise on our Services,
        but are not affiliated with, our Services.
        <br />
        <br />
        The Services may link to third-party websites, online services, or
        mobile applications and/or contain advertisements from third parties
        that are not affiliated with us and which may link to other websites,
        services, or applications. Accordingly, we do not make any guarantee
        regarding any such third parties, and we will not be liable for any loss
        or damage caused by the use of such third-party websites, services, or
        applications. The inclusion of a link towards a third-party website,
        service, or application does not imply an endorsement by us. We cannot
        guarantee the safety and privacy of data you provide to any third
        parties. Any data collected by third parties is not covered by this
        privacy notice. We are not responsible for the content or privacy and
        security practices and policies of any third parties, including other
        websites, services, or applications that may be linked to or from the
        Services. You should review the policies of such third parties and
        contact them directly to respond to your questions.
      </p>
      <h1
        id="do-we-use-cookies-and-other-tracking-technologies"
        className="heading-privacy"
      >
        6. Do we use cookies and other tracking technologies?
      </h1>
      <h1 className="heading-45">In Short:</h1>
      <p className="paragraph-terms">
        We may use cookies and other tracking technologies to collect and store
        your information.
        <br />
        <br />
        We may use cookies and similar tracking technologies (like web beacons
        and pixels) to access or store information. Specific information about
        how we use such technologies and how you can refuse certain cookies is
        set out in our Cookie Notice.
      </p>
      <h1 id="how-do-we-handle-your-social-logins" className="heading-privacy">
        7. How do we handle your social logins?
      </h1>
      <h1 className="heading-45">In Short:</h1>
      <p className="paragraph-terms">
        If you choose to register or log in to our services using a social media
        account, we may have access to certain information about you.
        <br />
        <br />
        Our Services offer you the ability to register and log in using your
        third-party social media account details (like your Facebook or Twitter
        logins). Where you choose to do this, we will receive certain profile
        information about you from your social media provider. The profile
        information we receive may vary depending on the social media provider
        concerned, but will often include your name, email address, friends
        list, and profile picture, as well as other information you choose to
        make public on such a social media platform.
        <br />
        <br />
        We will use the information we receive only for the purposes that are
        described in this privacy notice or that are otherwise made clear to you
        on the relevant Services. Please note that we do not control, and are
        not responsible for, other uses of your personal information by your
        third-party social media provider. We recommend that you review their
        privacy notice to understand how they collect, use and share your
        personal information, and how you can set your privacy preferences on
        their sites and apps.
      </p>
      <h1 id="how-long-do-we-keep-your-information" className="heading-privacy">
        8. How long do we keep your information?
      </h1>
      <h1 className="heading-45">In Short:</h1>
      <p className="paragraph-terms">
        We keep your information for as long as necessary to fulfill the
        purposes outlined in this privacy notice unless otherwise required by
        law.
        <br />
        <br />
        We will only keep your personal information for as long as it is
        necessary for the purposes set out in this privacy notice, unless a
        longer retention period is required or permitted by law (such as tax,
        accounting, or other legal requirements). No purpose in this notice will
        require us keeping your personal information for longer than six (6)
        months past the termination of the user's account.
        <br />
        <br />
        When we have no ongoing legitimate business need to process your
        personal information, we will either delete or anonymize such
        information, or, if this is not possible (for example, because your
        personal information has been stored in backup archives), then we will
        securely store your personal information and isolate it from any further
        processing until deletion is possible.
      </p>
      <h1 id="how-do-we-keep-your-information-safe" className="heading-privacy">
        9. How do we keep your information safe?
      </h1>
      <h1 className="heading-45">In Short:</h1>
      <p className="paragraph-terms">
        We aim to protect your personal information through a system of
        organizational and technical security measures.
        <br />
        <br />
        We have implemented appropriate and reasonable technical and
        organizational security measures designed to protect the security of any
        personal information we process. However, despite our safeguards and
        efforts to secure your information, no electronic transmission over the
        Internet or information storage technology can be guaranteed to be 100%
        secure, so we cannot promise or guarantee that hackers, cybercriminals,
        or other unauthorized third parties will not be able to defeat our
        security and improperly collect, access, steal, or modify your
        information. Although we will do our best to protect your personal
        information, transmission of personal information to and from our
        Services is at your own risk. You should only access the Services within
        a secure environment.
      </p>
      <h1
        id="do-we-collect-information-from-minors"
        className="heading-privacy"
      >
        10. Do we collect information from minors?
      </h1>
      <h1 className="heading-45">In Short:</h1>
      <p className="paragraph-terms">
        We do not knowingly collect data from or market to children under 18
        years of age.
        <br />
        <br />
        We do not knowingly solicit data from or market to children under 18
        years of age. By using the Services, you represent that you are at least
        18 or that you are the parent or guardian of such a minor and consent to
        such minor dependent’s use of the Services. If we learn that personal
        information from users less than 18 years of age has been collected, we
        will deactivate the account and take reasonable measures to promptly
        delete such data from our records. If you become aware of any data we
        may have collected from children under age 18, please contact us at
        privacy@ufund.online.
      </p>
      <h1 id="what-are-your-privacy-rights" className="heading-privacy">
        11. What are your privacy rights?
      </h1>
      <h1 className="heading-45">In Short:</h1>
      <p className="paragraph-terms">
        In some regions, such as the European Economic Area (EEA), United
        Kingdom (UK), and Canada, you have rights that allow you greater access
        to and control over your personal information. You may review, change,
        or terminate your account at any time.
        <br />
        <br />
        In some regions (like the EEA, UK, and Canada), you have certain rights
        under applicable data protection laws. These may include the right (i)
        to request access and obtain a copy of your personal information, (ii)
        to request rectification or erasure; (iii) to restrict the processing of
        your personal information; and (iv) if applicable, to data portability.
        In certain circumstances, you may also have the right to object to the
        processing of your personal information. You can make such a request by
        contacting us by using the contact details provided in the section{" "}
        <a
          href="https://app.termly.io/embed/terms-of-use/a1d43a5c-c156-418b-aad6-8f748c8d5492#contact"
          target="_blank"
        >
          “HOW CAN YOU CONTACT US ABOUT THIS NOTICE?”
        </a>{" "}
        below.
        <br />
        <br />
        We will consider and act upon any request in accordance with applicable
        data protection laws.
        <br />
        <br /> If you are located in the EEA or UK and you believe we are
        unlawfully processing your personal information, you also have the right
        to complain to your local data protection supervisory authority. You can
        find their contact details here:{" "}
        <a
          href="https://ec.europa.eu/newsroom/article29/items/612080"
          target="_blank"
        >
          https://ec.europa.eu/justice/data-protection/bodies/authorities/index_
          <br />
          en.htm.
          <br />
        </a>
        <br />
        If you are located in Switzerland, the contact details for the data
        protection authorities are available here:{" "}
        <a href="https://www.edoeb.admin.ch/edoeb/en/home.html" target="_blank">
          https://www.edoeb.admin.ch/edoeb/
          <br />
          en/home.html.
        </a>
      </p>
      <ul role="list" className="list-privacy-1">
        <li className="list-item-ser-1">Withdrawing your consent:</li>
        <li className="list-item-ser-2">
          If we are relying on your consent to process your personal
          information,&nbsp;which may be express and/or implied consent
          depending on the applicable law,&nbsp;you have the right to withdraw
          your consent at any time. You can withdraw your consent at any time by
          contacting us by using the contact details provided in the section
          "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below&nbsp;or updating
          your preferences. However, please note that this will not affect the
          lawfulness of the processing before its withdrawal, nor&nbsp;when
          applicable law allows,&nbsp;will it affect the processing of your
          personal information conducted in reliance on lawful processing
          grounds other than consent.
        </li>
        <li className="list-item-ser-1">
          Opting out of marketing and promotional communications:&nbsp;
        </li>
        <li className="list-item-ser-2">
          You can unsubscribe from our marketing and promotional communications
          at any time by&nbsp;clicking on the unsubscribe link in the emails
          that we send,&nbsp;replying “STOP” or “UNSUBSCRIBE” to the SMS
          messages that we send,&nbsp;or by contacting us using the details
          provided in the section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?"
          below. You will then be removed from the marketing lists. However, we
          may still communicate with you — for example, to send you
          service-related messages that are necessary for the administration and
          use of your account, to respond to service requests, or for other
          non-marketing purposes.
        </li>
      </ul>
      <h1 className="heading-45">Account Information</h1>
      <p className="paragraph-terms">
        If you would at any time like to review or change the information in
        your account or terminate your account, you can:
      </p>
      <ul role="list" className="list-privacy">
        <li className="list-item-ser-1">
          Log in to your account settings and update your user account.
        </li>
        <li className="list-item-ser-1">
          Contact us using the contact information provided.
        </li>
      </ul>
      <p className="paragraph-terms">
        Upon your request to terminate your account, we will deactivate or
        delete your account and information from our active databases. However,
        we may retain some information in our files to prevent fraud,
        troubleshoot problems, assist with any investigations, enforce our legal
        terms and/or comply with applicable legal requirements.
      </p>
      <ul role="list" className="list-privacy-1">
        <li className="list-item-ser-1">Cookies and similar technologies:</li>
        <li className="list-item-ser-2">
          Most Web browsers are set to accept cookies by default. If you prefer,
          you can usually choose to set your browser to remove cookies and to
          reject cookies. If you choose to remove cookies or reject cookies,
          this could affect certain features or services of our Services. To opt
          out of interest-based advertising by advertisers on our Services visit
          http://www.aboutads.info/choices/.If you have questions or comments
          about your privacy rights, you may email us
          at&nbsp;privacy@ufund.online.
        </li>
      </ul>
      <h1 id="controls-for-do-not-track-features" className="heading-privacy">
        12. Controls for do-not-track features
      </h1>
      <p className="paragraph-terms">
        Most web browsers and some mobile operating systems and mobile
        applications include a Do-Not-Track ("DNT") feature or setting you can
        activate to signal your privacy preference not to have data about your
        online browsing activities monitored and collected. At this stage no
        uniform technology standard for recognizing and implementing DNT signals
        has been finalized. As such, we do not currently respond to DNT browser
        signals or any other mechanism that automatically communicates your
        choice not to be tracked online. If a standard for online tracking is
        adopted that we must follow in the future, we will inform you about that
        practice in a revised version of this privacy notice.
      </p>
      <h1
        id="do-california-residents-have-specific-privacy-rights"
        className="heading-privacy"
      >
        13. Do California residents have specific privacy rights?
      </h1>
      <h1 className="heading-45">In Short:</h1>
      <p className="paragraph-terms">
        Yes, if you are a resident of California, you are granted specific
        rights regarding access to your personal information.
        <br />
        <br />
        California Civil Code Section 1798.83, also known as the "Shine The
        Light" law, permits our users who are California residents to request
        and obtain from us, once a year and free of charge, information about
        categories of personal information (if any) we disclosed to third
        parties for direct marketing purposes and the names and addresses of all
        third parties with which we shared personal information in the
        immediately preceding calendar year. If you are a California resident
        and would like to make such a request, please submit your request in
        writing to us using the contact information provided below.
        <br />
        <br />
        If you are under 18 years of age, reside in California, and have a
        registered account with Services, you have the right to request removal
        of unwanted data that you publicly post on the Services. To request
        removal of such data, please contact us using the contact information
        provided below and include the email address associated with your
        account and a statement that you reside in California. We will make sure
        the data is not publicly displayed on the Services, but please be aware
        that the data may not be completely or comprehensively removed from all
        our systems (e.g., backups, etc.).
      </p>
      <h1 className="heading-45">CCPA Privacy Notice</h1>
      <ul role="list" className="list-privacy">
        <li className="list-item-t-copy">
          The California Code of Regulations defines a "resident" as:
        </li>
        <li className="list-item-ser-1">
          Log in to your account settings and update your user account.
        </li>
        <li className="list-item-ser-1">
          Contact us using the contact information provided.
        </li>
      </ul>
      <p className="paragraph-terms">
        All other individuals are defined as "non-residents."
        <br />
        <br />
        If this definition of "resident" applies to you, we must adhere to
        certain rights and obligations regarding your personal information.
      </p>
      <h1 className="heading-45">
        What categories of personal information do we collect?
      </h1>
      <p className="paragraph-terms">
        We have collected the following categories of personal information in
        the past twelve (12) months:
      </p>
    </div>
    <div className="w-layout-blockcontainer container-31 w-container">
      <div
        id="w-node-_8c2c6c9a-3211-bc00-18b4-c0c74b12f747-847b96b9"
        className="w-layout-layout quick-stack-47 wf-layout-layout"
      >
        <div
          id="w-node-_8c2c6c9a-3211-bc00-18b4-c0c74b12f748-847b96b9"
          className="w-layout-cell cell-68"
        >
          <h1 className="heading-55">Category</h1>
        </div>
        <div
          id="w-node-_8c2c6c9a-3211-bc00-18b4-c0c74b12f749-847b96b9"
          className="w-layout-cell cell-69"
        >
          <h1 className="heading-55">Examples</h1>
        </div>
        <div
          id="w-node-_8c2c6c9a-3211-bc00-18b4-c0c74b12f74a-847b96b9"
          className="w-layout-cell cell-70"
        >
          <h1 className="heading-55">Collected</h1>
        </div>
      </div>
      <div className="div-block-49">
        <div
          id="w-node-aee944ea-2af1-3b36-d479-ec47ddfe8b5c-847b96b9"
          className="w-layout-layout stack-48 wf-layout-layout"
        >
          <div
            id="w-node-aee944ea-2af1-3b36-d479-ec47ddfe8b5d-847b96b9"
            className="w-layout-cell cell-71"
          >
            <h1 className="heading-57">Identifiers</h1>
          </div>
          <div
            id="w-node-aee944ea-2af1-3b36-d479-ec47ddfe8b60-847b96b9"
            className="w-layout-cell cell-72"
          >
            <h1 className="heading-56">
              Contact details, such as real name, alias, postal address,
              telephone or mobile contact number, unique personal identifier,
              online identifier, Internet Protocol address, email address, and
              account name
            </h1>
          </div>
          <div
            id="w-node-aee944ea-2af1-3b36-d479-ec47ddfe8b63-847b96b9"
            className="w-layout-cell cell-73"
          >
            <h1 className="heading-56">YES</h1>
          </div>
        </div>
        <div
          id="w-node-_302b70a7-ebe4-22ab-7df9-94b5fc0cadaa-847b96b9"
          className="w-layout-layout stack-48 wf-layout-layout"
        >
          <div
            id="w-node-_302b70a7-ebe4-22ab-7df9-94b5fc0cadab-847b96b9"
            className="w-layout-cell cell-71"
          >
            <h1 className="heading-57">
              Personal information categories listed in the California Customer
              Records statute
            </h1>
          </div>
          <div
            id="w-node-_302b70a7-ebe4-22ab-7df9-94b5fc0cadae-847b96b9"
            className="w-layout-cell cell-72"
          >
            <h1 className="heading-56">
              Name, contact information, education, employment, employment
              history, and financial information
            </h1>
          </div>
          <div
            id="w-node-_302b70a7-ebe4-22ab-7df9-94b5fc0cadb1-847b96b9"
            className="w-layout-cell cell-73"
          >
            <h1 className="heading-56">YES</h1>
          </div>
        </div>
        <div
          id="w-node-b167f12f-f01c-ec41-b3d8-314be78d0e78-847b96b9"
          className="w-layout-layout stack-48 wf-layout-layout"
        >
          <div
            id="w-node-b167f12f-f01c-ec41-b3d8-314be78d0e79-847b96b9"
            className="w-layout-cell cell-71"
          >
            <h1 className="heading-57">
              Protected classification characteristics under California or
              federal law
            </h1>
          </div>
          <div
            id="w-node-b167f12f-f01c-ec41-b3d8-314be78d0e7c-847b96b9"
            className="w-layout-cell cell-72"
          >
            <h1 className="heading-56">Gender and date of birth</h1>
          </div>
          <div
            id="w-node-b167f12f-f01c-ec41-b3d8-314be78d0e7f-847b96b9"
            className="w-layout-cell cell-73"
          >
            <h1 className="heading-56">NO</h1>
          </div>
        </div>
        <div
          id="w-node-_68171b4b-2b93-0f20-f6ec-ed7a0b6805cb-847b96b9"
          className="w-layout-layout stack-48 wf-layout-layout"
        >
          <div
            id="w-node-_68171b4b-2b93-0f20-f6ec-ed7a0b6805cc-847b96b9"
            className="w-layout-cell cell-71"
          >
            <h1 className="heading-57">Commercial information</h1>
          </div>
          <div
            id="w-node-_68171b4b-2b93-0f20-f6ec-ed7a0b6805cf-847b96b9"
            className="w-layout-cell cell-72"
          >
            <h1 className="heading-56">
              Transaction information, purchase history, financial details, and
              payment information
            </h1>
          </div>
          <div
            id="w-node-_68171b4b-2b93-0f20-f6ec-ed7a0b6805d2-847b96b9"
            className="w-layout-cell cell-73"
          >
            <h1 className="heading-56">NO</h1>
          </div>
        </div>
        <div
          id="w-node-f0b588fb-865d-6eb1-216d-30de8f8377e8-847b96b9"
          className="w-layout-layout stack-48 wf-layout-layout"
        >
          <div
            id="w-node-f0b588fb-865d-6eb1-216d-30de8f8377e9-847b96b9"
            className="w-layout-cell cell-71"
          >
            <h1 className="heading-57">Biometric information</h1>
          </div>
          <div
            id="w-node-f0b588fb-865d-6eb1-216d-30de8f8377ec-847b96b9"
            className="w-layout-cell cell-72"
          >
            <h1 className="heading-56">Fingerprints and voiceprints</h1>
          </div>
          <div
            id="w-node-f0b588fb-865d-6eb1-216d-30de8f8377ef-847b96b9"
            className="w-layout-cell cell-73"
          >
            <h1 className="heading-56">NO</h1>
          </div>
        </div>
        <div
          id="w-node-_03d4b54e-d277-eff2-6564-0d474dd98c16-847b96b9"
          className="w-layout-layout stack-48 wf-layout-layout"
        >
          <div
            id="w-node-_03d4b54e-d277-eff2-6564-0d474dd98c17-847b96b9"
            className="w-layout-cell cell-71"
          >
            <h1 className="heading-57">
              Internet or other similar network activity
            </h1>
          </div>
          <div
            id="w-node-_03d4b54e-d277-eff2-6564-0d474dd98c1a-847b96b9"
            className="w-layout-cell cell-72"
          >
            <h1 className="heading-56">
              Browsing history, search history, online behavior, interest data,
              and interactions with our and other websites, applications,
              systems, and advertisements
            </h1>
          </div>
          <div
            id="w-node-_03d4b54e-d277-eff2-6564-0d474dd98c1d-847b96b9"
            className="w-layout-cell cell-73"
          >
            <h1 className="heading-56">YES</h1>
          </div>
        </div>
        <div
          id="w-node-_2ae7066c-9a2b-5984-8a48-e46c968f7f92-847b96b9"
          className="w-layout-layout stack-48 wf-layout-layout"
        >
          <div
            id="w-node-_2ae7066c-9a2b-5984-8a48-e46c968f7f93-847b96b9"
            className="w-layout-cell cell-71"
          >
            <h1 className="heading-57">Geolocation data</h1>
          </div>
          <div
            id="w-node-_2ae7066c-9a2b-5984-8a48-e46c968f7f96-847b96b9"
            className="w-layout-cell cell-72"
          >
            <h1 className="heading-56">Device location</h1>
          </div>
          <div
            id="w-node-_2ae7066c-9a2b-5984-8a48-e46c968f7f99-847b96b9"
            className="w-layout-cell cell-73"
          >
            <h1 className="heading-56">YES</h1>
          </div>
        </div>
        <div
          id="w-node-_838bf745-dc6f-4893-daca-98c0abc58032-847b96b9"
          className="w-layout-layout stack-48 wf-layout-layout"
        >
          <div
            id="w-node-_838bf745-dc6f-4893-daca-98c0abc58033-847b96b9"
            className="w-layout-cell cell-71"
          >
            <h1 className="heading-57">
              Audio, electronic, visual, thermal, olfactory, or similar
              information
            </h1>
          </div>
          <div
            id="w-node-_838bf745-dc6f-4893-daca-98c0abc58036-847b96b9"
            className="w-layout-cell cell-72"
          >
            <h1 className="heading-56">
              Images and audio, video or call recordings created in connection
              with our business activities
            </h1>
          </div>
          <div
            id="w-node-_838bf745-dc6f-4893-daca-98c0abc58039-847b96b9"
            className="w-layout-cell cell-73"
          >
            <h1 className="heading-56">NO</h1>
          </div>
        </div>
        <div
          id="w-node-_142707b1-e88e-f518-8ff5-8ee681530135-847b96b9"
          className="w-layout-layout stack-48 wf-layout-layout"
        >
          <div
            id="w-node-_142707b1-e88e-f518-8ff5-8ee681530136-847b96b9"
            className="w-layout-cell cell-71"
          >
            <h1 className="heading-57">
              Professional or employment-related information
            </h1>
          </div>
          <div
            id="w-node-_142707b1-e88e-f518-8ff5-8ee681530139-847b96b9"
            className="w-layout-cell cell-72"
          >
            <h1 className="heading-56">
              Business contact details in order to provide you our services at a
              business level or job title, work history, and professional
              qualifications if you apply for a job with us
            </h1>
          </div>
          <div
            id="w-node-_142707b1-e88e-f518-8ff5-8ee68153013c-847b96b9"
            className="w-layout-cell cell-73"
          >
            <h1 className="heading-56">YES</h1>
          </div>
        </div>
        <div
          id="w-node-e0b0e8d0-8c13-467b-1d6c-7476f8298659-847b96b9"
          className="w-layout-layout stack-48 wf-layout-layout"
        >
          <div
            id="w-node-e0b0e8d0-8c13-467b-1d6c-7476f829865a-847b96b9"
            className="w-layout-cell cell-71"
          >
            <h1 className="heading-57">Education Information</h1>
          </div>
          <div
            id="w-node-e0b0e8d0-8c13-467b-1d6c-7476f829865d-847b96b9"
            className="w-layout-cell cell-72"
          >
            <h1 className="heading-56">
              Student records and directory information
            </h1>
          </div>
          <div
            id="w-node-e0b0e8d0-8c13-467b-1d6c-7476f8298660-847b96b9"
            className="w-layout-cell cell-73"
          >
            <h1 className="heading-56">NO</h1>
          </div>
        </div>
        <div
          id="w-node-_97d8cfdf-45b6-2962-51fd-3ede5e2772e9-847b96b9"
          className="w-layout-layout stack-48 wf-layout-layout"
        >
          <div
            id="w-node-_97d8cfdf-45b6-2962-51fd-3ede5e2772ea-847b96b9"
            className="w-layout-cell cell-71"
          >
            <h1 className="heading-57">
              Inferences drawn from other personal information
            </h1>
          </div>
          <div
            id="w-node-_97d8cfdf-45b6-2962-51fd-3ede5e2772ed-847b96b9"
            className="w-layout-cell cell-72"
          >
            <h1 className="heading-56">
              Inferences drawn from any of the collected personal information
              listed above to create a profile or summary about, for example, an
              individual’s preferences and characteristics
            </h1>
          </div>
          <div
            id="w-node-_97d8cfdf-45b6-2962-51fd-3ede5e2772f0-847b96b9"
            className="w-layout-cell cell-73"
          >
            <h1 className="heading-56">NO</h1>
          </div>
        </div>
        <div
          id="w-node-_57eb96ca-c994-9576-3c47-4fccb4844958-847b96b9"
          className="w-layout-layout stack-4 wf-layout-layout"
        >
          <div
            id="w-node-_57eb96ca-c994-9576-3c47-4fccb4844959-847b96b9"
            className="w-layout-cell cell-71"
          />
          <div
            id="w-node-_57eb96ca-c994-9576-3c47-4fccb484495c-847b96b9"
            className="w-layout-cell cell-72"
          />
          <div
            id="w-node-_57eb96ca-c994-9576-3c47-4fccb484495f-847b96b9"
            className="w-layout-cell cell-73"
          />
        </div>
      </div>
    </div>
    <div className="w-layout-blockcontainer container-privacy-4 w-container">
      <p className="paragraph-terms">
        We may also collect other personal information outside of these
        categories instances where you interact with us in person, online, or by
        phone or mail in the context of:
      </p>
      <ul role="list" className="list-privacy">
        <li className="list-item-ser-1">
          Receiving help through our customer support channels;
        </li>
        <li className="list-item-ser-1">
          Participation in customer surveys or contests
        </li>
        <li className="list-item-ser-1">
          Facilitation in the delivery of our Services and to respond to your
          inquiries.
        </li>
      </ul>
      <h1 className="heading-45">
        Will your information be shared with anyone else?
      </h1>
      <p className="paragraph-terms">
        We may disclose your personal information with our service providers
        pursuant to a written contract between us and each service provider.
        Each service provider is a for-profit entity that processes the
        information on our behalf.
        <br />
        <br />
        We may use your personal information for our own business purposes, such
        as for undertaking internal research for technological development and
        demonstration. This is not considered to be "selling" of your personal
        information.
        <br />
        <br />
        Actiwires LLC has not disclosed or sold any personal information to
        third parties for a business or commercial purpose in the preceding
        twelve (12) months. Actiwires LLC will not sell personal information in
        the future belonging to website visitors, users, and other consumers.
      </p>
      <h1 className="heading-45">
        Your rights with respect to your personal data
      </h1>
      <h1 className="heading-45-copy">
        Right to request deletion of the data — Request to delete
      </h1>
      <p className="paragraph-terms">
        You can ask for the deletion of your personal information. If you ask us
        to delete your personal information, we will respect your request and
        delete your personal information, subject to certain exceptions provided
        by law, such as (but not limited to) the exercise by another consumer of
        his or her right to free speech, our compliance requirements resulting
        from a legal obligation, or any processing that may be required to
        protect against illegal activities.
      </p>
      <h1 className="heading-45-copy">
        Right to be informed — Request to know
      </h1>
      <ul role="list" className="list-privacy">
        <li className="list-item-t-copy">
          Depending on the circumstances, you have a right to know:
        </li>
        <li className="list-item-ser-1">
          whether we collect and use your personal information;
        </li>
        <li className="list-item-ser-1">
          the categories of personal information that we collect;
        </li>
        <li className="list-item-ser-1">
          the purposes for which the collected personal information is used;
        </li>
        <li className="list-item-ser-1">
          whether we sell your personal information to third parties;
        </li>
        <li className="list-item-ser-1">
          the categories of personal information that we sold or disclosed for a
          business purpose;
        </li>
        <li className="list-item-ser-1">
          the categories of third parties to whom the personal information was
          sold or disclosed for a business purpose
        </li>
        <li className="list-item-ser-1">
          the business or commercial purpose for collecting or selling personal
          information.
        </li>
      </ul>
      <p className="paragraph-terms">
        In accordance with applicable law, we are not obligated to provide or
        delete consumer information that is de-identified in response to a
        consumer request or to re-identify individual data to verify a consumer
        request.
      </p>
      <h1 className="heading-45-copy">
        Right to Non-Discrimination for the Exercise of a Consumer’s Privacy
        Rights
      </h1>
      <p className="paragraph-terms">
        We will not discriminate against you if you exercise your privacy
        rights.
      </p>
      <h1 className="heading-45-copy">Verification process</h1>
      <p className="paragraph-terms">
        Upon receiving your request, we will need to verify your identity to
        determine you are the same person about whom we have the information in
        our system. These verification efforts require us to ask you to provide
        information so that we can match it with information you have previously
        provided us. For instance, depending on the type of request you submit,
        we may ask you to provide certain information so that we can match the
        information you provide with the information we already have on file, or
        we may contact you through a communication method (e.g., phone or email)
        that you have previously provided to us. We may also use other
        verification methods as the circumstances dictate.
        <br />
        <br />
        We will only use personal information provided in your request to verify
        your identity or authority to make the request. To the extent possible,
        we will avoid requesting additional information from you for the
        purposes of verification. However, if we cannot verify your identity
        from the information already maintained by us, we may request that you
        provide additional information for the purposes of verifying your
        identity and for security or fraud-prevention purposes. We will delete
        such additionally provided information as soon as we finish verifying
        you.
      </p>
      <ul role="list" className="list-privacy">
        <li className="list-item-t-copy">Other privacy rights</li>
        <li className="list-item-ser-1">
          You may object to the processing of your personal information.
        </li>
        <li className="list-item-ser-1">
          You may request correction of your personal data if it is incorrect or
          no longer relevant, or ask to restrict the processing of the
          information.
        </li>
        <li className="list-item-ser-1">
          You can designate an authorized agent to make a request under the CCPA
          on your behalf. We may deny a request from an authorized agent that
          does not submit proof that they have been validly authorized to act on
          your behalf in accordance with the CCPA.
        </li>
        <li className="list-item-ser-1">
          You may request to opt out from future selling of your personal
          information to third parties. Upon receiving an opt-out request, we
          will act upon the request as soon as feasibly possible, but no later
          than fifteen (15) days from the date of the request submission.
        </li>
      </ul>
      <p className="paragraph-terms">
        To exercise these rights, you can contact us by email at
        support@ufund.online, by visiting web.ufund.online/contcat, or by
        referring to the contact details at the bottom of this document. If you
        have a complaint about how we handle your data, we would like to hear
        from you.
      </p>
      <h1 id="do-we-make-updates-to-this-notice" className="heading-privacy">
        14. Do we make updates to this notice?
      </h1>
      <p className="paragraph-terms">
        If you have questions or comments about this notice, you may email us at
        privacy@ufund.online or by post to:
      </p>
      <p className="paragraph-terms-1-cop">
        Actiwires <br />
        LLC1000 N West Street, Suite 1200
        <br />
        Wilmington, DE 19801
        <br />
        United States
        <br />
        Phone: (+1)302-426-5043
        <br />
        info@actiwires.com
      </p>
      <h1
        id="how-can-you-review-update-or-delete-the-data-we-collect-from-you"
        className="heading-privacy"
      >
        15. How can you review, update, or delete the data we collect from you?
      </h1>
      <p className="paragraph-terms-copy">
        Based on the applicable laws of your country, you may have the right to
        request access to the personal information we collect from you, change
        that information, or delete it in some circumstances. To request to
        review, update, or delete your personal information, please visit:
        web.ufund.online/login.
      </p>
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
                  <a
                    href="/privacy-policy"
                    aria-current="page"
                    className="brix---footer-link w--current"
                  >
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
