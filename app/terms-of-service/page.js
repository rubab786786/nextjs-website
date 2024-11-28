"use client"
import { useState } from "react";

export default function TermsOfService() {
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
  <title>Terms Of Service</title>
  <meta content="Terms Of Service" property="og:title" />
  <meta content="Terms Of Service" property="twitter:title" />
  <section id="anchor-scroll" className="pop-section-1">
    <div className="pop-up-div">
      <div className="pop-up-div-1">
        <img
          src="i/mages/65c1ffabd8b160b194ad1167_—Pngtree—.png"
          loading="lazy"
          width={32}
          data-w-id="2f0b223f-2f24-3c95-7b86-fa3431413a7d"
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
  <section id="hero" className="section-terms">
    <div className="w-layout-blockcontainer container-terms w-container">
      <h1 className="heading-terms">Terms of services</h1>
      <a href="#" className="button w-button">
        Last updated April 12, 2022{" "}
      </a>
    </div>
  </section>
  <section className="section-terms-1">
    <div className="w-layout-blockcontainer container-terms-1 w-container">
      <h1 className="heading-terms1">Table of contents </h1>
      <div
        id="w-node-ac707bf8-2760-fb7d-7f15-2333be93ae80-209ed0ae"
        className="w-layout-layout quick-stack-36 wf-layout-layout"
      >
        <div
          id="w-node-ac707bf8-2760-fb7d-7f15-2333be93ae81-209ed0ae"
          className="w-layout-cell"
        >
          <a
            href="#agreement-to-terms"
            className="link-block-13 w-inline-block"
          >
            <h1 className="heading-44">1. Agreement to terms</h1>
          </a>
          <a
            href="#intellectual-property-rights"
            className="link-block-13 w-inline-block"
          >
            <h1 className="heading-44">2. Intellectual property</h1>
          </a>
          <a
            href="#user-representations"
            className="link-block-13 w-inline-block"
          >
            <h1 className="heading-44">3. User representations</h1>
          </a>
          <a href="#user-registration" className="link-block-13 w-inline-block">
            <h1 className="heading-44">4. User registration</h1>
          </a>
          <a
            href="#marketplace-offerings"
            className="link-block-13 w-inline-block"
          >
            <h1 className="heading-44">5. Marketplace offerings</h1>
          </a>
          <a
            href="#purchases-and-payment"
            className="link-block-13 w-inline-block"
          >
            <h1 className="heading-44">6. Purchases and payments </h1>
          </a>
          <a href="#refunds-policy" className="link-block-13 w-inline-block">
            <h1 className="heading-44">7. Refunds Policy</h1>
          </a>
          <a
            href="#prohibited-activities"
            className="link-block-13 w-inline-block"
          >
            <h1 className="heading-44">8. Prohibited Activities</h1>
          </a>
          <a
            href="#user-generated-contributions"
            className="link-block-13 w-inline-block"
          >
            <h1 className="heading-44">9. User generated contributions</h1>
          </a>
          <a
            href="#contribution-license"
            className="link-block-13 w-inline-block"
          >
            <h1 className="heading-44">10. Guidelines for reviews</h1>
          </a>
          <a
            href="#guidelines-for-reviews"
            className="link-block-13 w-inline-block"
          >
            <h1 className="heading-44">11. Guidelines for reviews</h1>
          </a>
          <a
            href="#mobile-application-license"
            className="link-block-13 w-inline-block"
          >
            <h1 className="heading-44">12. Mobile application license</h1>
          </a>
          <a href="#submissions" className="link-block-13 w-inline-block">
            <h1 className="heading-44">13. Submissions</h1>
          </a>
          <a href="#site-management" className="link-block-13 w-inline-block">
            <h1 className="heading-44">14. Site management</h1>
          </a>
          <a href="#privacy-policy" className="link-block-13 w-inline-block">
            <h1 className="heading-44">15. Privacy policy</h1>
          </a>
        </div>
        <div
          id="w-node-ac707bf8-2760-fb7d-7f15-2333be93ae82-209ed0ae"
          className="w-layout-cell cell-51"
        >
          <a
            href="#copyright-infringements"
            className="link-block-13 w-inline-block"
          >
            <h1 className="heading-44">16. Copyright infringements</h1>
          </a>
          <a
            href="#term-and-termination"
            className="link-block-13 w-inline-block"
          >
            <h1 className="heading-44">17. Term and termination</h1>
          </a>
          <a
            href="#modifications-and-interruptions"
            className="link-block-13 w-inline-block"
          >
            <h1 className="heading-44">18. Modifications and interruptions</h1>
          </a>
          <a href="#governing-law" className="link-block-13 w-inline-block">
            <h1 className="heading-44">19. Governing law</h1>
          </a>
          <a
            href="#dispute-resolution"
            className="link-block-13 w-inline-block"
          >
            <h1 className="heading-44">20. Dispute resolution</h1>
          </a>
          <a href="#corrections" className="link-block-13 w-inline-block">
            <h1 className="heading-44">21. Corrections</h1>
          </a>
          <a href="#disclaimer" className="link-block-13 w-inline-block">
            <h1 className="heading-44">22. Disclaimer</h1>
          </a>
          <a
            href="#limitations-of-liability"
            className="link-block-13 w-inline-block"
          >
            <h1 className="heading-44">23. Limitations of liability</h1>
          </a>
          <a href="#indemnification" className="link-block-13 w-inline-block">
            <h1 className="heading-44">24. Indemnification</h1>
          </a>
          <a href="#user-data" className="link-block-13 w-inline-block">
            <h1 className="heading-44">25. User data</h1>
          </a>
          <a
            href="#Electronic-communications-transactions-and-signatures"
            className="link-block-13 w-inline-block"
          >
            <h1 className="heading-44">
              26. Electronic communications, transactions, and signatures
            </h1>
          </a>
          <a
            href="#california-users-and-residents"
            className="link-block-13 w-inline-block"
          >
            <h1 className="heading-44">27. California users and residents</h1>
          </a>
          <a href="#miscellaneous" className="link-block-13 w-inline-block">
            <h1 className="heading-44">28. Miscellaneous</h1>
          </a>
          <a href="#contact-us" className="link-block-13 w-inline-block">
            <h1 className="heading-44">29. Contact Us</h1>
          </a>
        </div>
      </div>
    </div>
  </section>
  <section className="section-terms-2">
    <div className="w-layout-blockcontainer container-terms-2 w-container">
      <h1 id="agreement-to-terms" className="heading-terms1">
        1. Agreement to terms
      </h1>
      <p className="paragraph-terms">
        These Terms of Use constitute a legally binding agreement made between
        you, whether personally or on behalf of an entity (“you”) and Actiwires
        LLC, doing business as UFUND ("UFUND", “we”, “us”, or “our”), concerning
        your access to and use of the https://web.ufund.online,
        https://tokensales.ufund.online website as well as any other media form,
        media channel, mobile website or mobile application related, linked, or
        otherwise connected thereto (collectively, the “Site”). We are
        registered in Delaware, United States and have our registered office at
        1000 N West Street, Suite 1200 , Wilmington, DE 19801. The Site provides
        an online marketplace for the following goods, products, and/or
        services: web platform and mobile apps offering DefI &amp; tokenization
        portal (fund raising for smal and mid size businesses), sales of utility
        tokens, security tokens and hybrid tokens (the “Marketplace Offerings”).
        In order to help make the Site a secure environment for the purchase and
        sale of Marketplace Offerings, all users are required to accept and
        comply with these Terms of Use. You agree that by accessing the Site
        and/or the Marketplace Offerings, you have read, understood, and agree
        to be bound by all of these Terms of Use. IF YOU DO NOT AGREE WITH ALL
        OF THESE TERMS OF USE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE
        SITE AND/OR THE MARKETPLACE OFFERINGS AND YOU MUST DISCONTINUE USE
        IMMEDIATELY.
        <br />
        <br />
        Supplemental terms and conditions or documents that may be posted on the
        Site from time to time are hereby expressly incorporated herein by
        reference. We reserve the right, in our sole discretion, to make changes
        or modifications to these Terms of Use from time to time. We will alert
        you about any changes by updating the “Last updated” date of these Terms
        of Use, and you waive any right to receive specific notice of each such
        change. Please ensure that you check the applicable Terms every time you
        use our Site so that you understand which Terms apply. You will be
        subject to, and will be deemed to have been made aware of and to have
        accepted, the changes in any revised Terms of Use by your continued use
        of the Site after the date such revised Terms of Use are posted.
        <br />
        <br />
        The information provided on the Site is not intended for distribution to
        or use by any person or entity in any jurisdiction or country where such
        distribution or use would be contrary to law or regulation or which
        would subject us to any registration requirement within such
        jurisdiction or country. Accordingly, those persons who choose to access
        the Site from other locations do so on their own initiative and are
        solely responsible for compliance with local laws, if and to the extent
        local laws are applicable.
        <br />
        <br />
        Money business and money transmitter
        <br />
        <br />
        The Site is intended for users who are at least 18 years old. Persons
        under the age of 18 are not permitted to use or register for the Site or
        use the Marketplace Offerings.
      </p>
      <h1 id="intellectual-property-rights" className="heading-terms1">
        2. Intellectual property rights
      </h1>
      <p className="paragraph-terms">
        Unless otherwise indicated, the Site and the Marketplace Offerings are
        our proprietary property and all source code, databases, functionality,
        software, website designs, audio, video, text, photographs, and graphics
        on the Site (collectively, the “Content”) and the trademarks, service
        marks, and logos contained therein (the “Marks”) are owned or controlled
        by us or licensed to us, and are protected by copyright and trademark
        laws and various other intellectual property rights and unfair
        competition laws of the United States, international copyright laws, and
        international conventions. The Content and the Marks are provided on the
        Site “AS IS” for your information and personal use only. Except as
        expressly provided in these Terms of Use, no part of the Site or the
        Marketplace Offerings and no Content or Marks may be copied, reproduced,
        aggregated, republished, uploaded, posted, publicly displayed, encoded,
        translated, transmitted, distributed, sold, licensed, or otherwise
        exploited for any commercial purpose whatsoever, without our express
        prior written permission.
        <br />
        <br />
        Provided that you are eligible to use the Site, you are granted a
        limited license to access and use the Site and to download or print a
        copy of any portion of the Content to which you have properly gained
        access solely for your personal, non-commercial use. We reserve all
        rights not expressly granted to you in and to the Site, the Content and
        the Marks.
      </p>
      <h1 id="user-representations" className="heading-terms1">
        3. User representations
      </h1>
      <p className="paragraph-terms">
        By using the Site or the Marketplace Offerings, you represent and
        warrant that: (1) all registration information you submit will be true,
        accurate, current, and complete; (2) you will maintain the accuracy of
        such information and promptly update such registration information as
        necessary; (3) you have the legal capacity and you agree to comply with
        these Terms of Use; (4) you are not a minor in the jurisdiction in which
        you reside; (5) you will not access the Site or the Marketplace
        Offerings through automated or non-human means, whether through a bot,
        script or otherwise; (6) you will not use the Site for any illegal or
        unauthorized purpose; and (7) your use of the Site or the Marketplace
        Offerings will not violate any applicable law or regulation.
        <br />
        <br />
        If you provide any information that is untrue, inaccurate, not current,
        or incomplete, we have the right to suspend or terminate your account
        and refuse any and all current or future use of the Site (or any portion
        thereof).
        <br />
        <br />
        You may not use the Site or the Marketplace Offerings for any illegal or
        unauthorized purpose nor may you, in the use of Marketplace Offerings,
        violate any laws. Among unauthorized Marketplace Offerings are the
        following: intoxicants of any sort; illegal drugs or other illegal
        products; alcoholic beverages; games of chance; and pornography or
        graphic adult content, images, or other adult products. Postings of any
        unauthorized products or content may result in immediate termination of
        your account and a lifetime ban from use of the Site.
        <br />
        <br />
        We are a service provider and make no representations as to the safety,
        effectiveness, adequacy, accuracy, availability, prices, ratings,
        reviews, or legality of any of the information contained on the Site or
        the Marketplace Offerings displayed or offered through the Site. You
        understand and agree that the content of the Site does not contain or
        constitute representations to be reasonably relied upon, and you agree
        to hold us harmless from any errors, omissions, or misrepresentations
        contained within the Site’s content. We do not endorse or recommend any
        Marketplace Offerings and the Site is provided for informational and
        advertising purposes only.
      </p>
      <h1 id="user-registration" className="heading-terms1">
        4. User registration
      </h1>
      <p className="paragraph-terms">
        You may be required to register with the Site in order to access the
        Marketplace Offerings. You agree to keep your password confidential and
        will be responsible for all use of your account and password. We reserve
        the right to remove, reclaim, or change a username you select if we
        determine, in our sole discretion, that such username is inappropriate,
        obscene, or otherwise objectionable.
      </p>
      <h1 id="marketplace-offerings" className="heading-terms1">
        5. Marketplace offerings
      </h1>
      <p className="paragraph-terms">
        We reserve the right to limit the quantities of the Marketplace
        Offerings offered or available on the Site. All descriptions or pricing
        of the Marketplace Offerings are subject to change at any time without
        notice, at our sole discretion. We reserve the right to discontinue any
        Marketplace Offerings at any time for any reason. We do not warrant that
        the quality of any of the Marketplace Offerings purchased by you will
        meet your expectations or that any errors in the Site will be corrected.
      </p>
      <h1 id="purchases-and-payment" className="heading-terms1">
        6. Purchases and payment
      </h1>
      <ul role="list" className="list-t">
        <li className="list-item-t">
          We accept the following forms of payment:
        </li>
        <li className="list-item-t2">Visa</li>
        <li className="list-item-t2">Mastercard</li>
        <li className="list-item-t2">American Express</li>
        <li className="list-item-t2">Discover</li>
        <li className="list-item-t2">PayPal</li>
        <li className="list-item-t2">Bank wire</li>
        <li className="list-item-t2">Paymentcoin</li>
        <li className="list-item-t2">Adyen</li>
      </ul>
      <p className="paragraph-terms">
        You agree to provide current, complete, and accurate purchase and
        account information for all purchases of the Marketplace Offerings made
        via the Site. You further agree to promptly update account and payment
        information, including email address, payment method, and payment card
        expiration date, so that we can complete your transactions and contact
        you as needed. Sales tax will be added to the price of purchases as
        deemed required by us. We may change prices at any time. All payments
        shall be in MATIC, BTC, ETH, ETC, LTC, DASH, ZEC, EUR, GBP, CHF, HKD
        ,SGD AUD, CAD, JY.
        <br />
        <br />
        You agree to pay all charges at the prices then in effect for your
        purchases and any applicable shipping fees, and you authorize us to
        charge your chosen payment provider for any such amounts upon placing
        your order. If your order is subject to recurring charges, then you
        consent to our charging your payment method on a recurring basis without
        requiring your prior approval for each recurring charge, until such time
        as you cancel the applicable order. We reserve the right to correct any
        errors or mistakes in pricing, even if we have already requested or
        received payment.
        <br />
        <br />
        We reserve the right to refuse any order placed through the Site. We
        may, in our sole discretion, limit or cancel quantities purchased per
        person, per household, or per order. These restrictions may include
        orders placed by or under the same customer account, the same payment
        method, and/or orders that use the same billing or shipping address. We
        reserve the right to limit or prohibit orders that, in our sole
        judgment, appear to be placed by dealers, resellers, or distributors.
      </p>
      <h1 id="refunds-policy" className="heading-terms1">
        7. Refunds policy
      </h1>
      <p className="paragraph-terms">
        Please review our Return Policy posted on the Site prior to making any
        purchases.
      </p>
      <h1 id="prohibited-activities" className="heading-terms1">
        8. Prohibited activities
      </h1>
      <p className="paragraph-terms-1">
        You may not access or use the Site for any purpose other than that for
        which we make the Site available. The Site may not be used in connection
        with any commercial endeavors except those that are specifically
        endorsed or approved by us.
      </p>
      <ul role="list" className="list-t">
        <li className="list-item-t">
          As a user of the Site, you agree not to:
        </li>
        <li className="list-item-t1">
          Systematically retrieve data or other content from the Site to create
          or compile, directly or indirectly, a collection, compilation,
          database, or directory without written permission from us.
        </li>
        <li className="list-item-t1">
          Trick, defraud, or mislead us and other users, especially in any
          attempt to learn sensitive account information such as user passwords.
        </li>
        <li className="list-item-t1">
          Circumvent, disable, or otherwise interfere with security-related
          features of the Site, including features that prevent or restrict the
          use or copying of any Content or enforce limitations on the use of the
          Site and/or the Content contained therein.
        </li>
        <li className="list-item-t1">
          Disparage, tarnish, or otherwise harm, in our opinion, us and/or the
          Site.
        </li>
        <li className="list-item-t1">
          Use any information obtained from the Site in order to harass, abuse,
          or harm another person.
        </li>
        <li className="list-item-t1">
          Make improper use of our support services or submit false reports of
          abuse or misconduct.
        </li>
        <li className="list-item-t1">
          Use the Site in a manner inconsistent with any applicable laws or
          regulations.
        </li>
        <li className="list-item-t1">
          Engage in unauthorized framing of or linking to the Site.
        </li>
        <li className="list-item-t1">
          Upload or transmit (or attempt to upload or to transmit) viruses,
          Trojan horses, or other material, including excessive use of capital
          letters and spamming (continuous posting of repetitive text), that
          interferes with any party’s uninterrupted use and enjoyment of the
          Site or modifies, impairs, disrupts, alters, or interferes with the
          use, features, functions, operation, or maintenance of the Marketplace
          Offerings.
        </li>
        <li className="list-item-t1">
          Engage in any automated use of the system, such as using scripts to
          send comments or messages, or using any data mining, robots, or
          similar data gathering and extraction tools.
        </li>
        <li className="list-item-t1">
          Delete the copyright or other proprietary rights notice from any
          Content.
        </li>
        <li className="list-item-t1">
          Attempt to impersonate another user or person or use the username of
          another user.
        </li>
        <li className="list-item-t1">
          Upload or transmit (or attempt to upload or to transmit) any material
          that acts as a passive or active information collection or
          transmission mechanism, including without limitation, clear graphics
          interchange formats (“gifs”), 1×1 pixels, web bugs, cookies, or other
          similar devices (sometimes referred to as “spyware” or “passive
          collection mechanisms” or “pcms”).
        </li>
        <li className="list-item-t1">
          Interfere with, disrupt, or create an undue burden on the Site or the
          networks or services connected to the Site.
        </li>
        <li className="list-item-t1">
          Harass, annoy, intimidate, or threaten any of our employees or agents
          engaged in providing any portion of the Marketplace Offerings to you.
        </li>
        <li className="list-item-t1">
          Attempt to bypass any measures of the Site designed to prevent or
          restrict access to the Site, or any portion of the Site.
        </li>
        <li className="list-item-t1">
          Copy or adapt the Site’s software, including but not limited to Flash,
          PHP, HTML, JavaScript, or other code.
        </li>
        <li className="list-item-t1">
          Except as permitted by applicable law, decipher, decompile,
          disassemble, or reverse engineer any of the software comprising or in
          any way making up a part of the Site.
        </li>
        <li className="list-item-t1">
          Use a buying agent or purchasing agent to make purchases on the Site.
        </li>
        <li className="list-item-t1">
          Make any unauthorized use of the Marketplace Offerings, including
          collecting usernames and/or email addresses of users by electronic or
          other means for the purpose of sending unsolicited email, or creating
          user accounts by automated means or under false pretenses.
        </li>
        <li className="list-item-t1">
          Use the Marketplace Offerings as part of any effort to compete with us
          or otherwise use the Site and/or the Content for any
          revenue-generating endeavor or commercial enterprise.
        </li>
        <li className="list-item-t1">
          Use the Site to advertise or offer to sell goods and services.
        </li>
        <li className="list-item-t1">
          Sell or otherwise transfer your profile.
        </li>
      </ul>
      <h1 id="user-generated-contributions" className="heading-terms1">
        9. User generated contributions
      </h1>
      <p className="paragraph-terms-1">
        The Site may invite you to chat, contribute to, or participate in blogs,
        message boards, online forums, and other functionality, and may provide
        you with the opportunity to create, submit, post, display, transmit,
        perform, publish, distribute, or broadcast content and materials to us
        or on the Site, including but not limited to text, writings, video,
        audio, photographs, graphics, comments, suggestions, or personal
        information or other material (collectively, "Contributions").
        Contributions may be viewable by other users of the Site and the
        Marketplace Offerings and through third-party websites. As such, any
        Contributions you transmit may be treated as non-confidential and
        non-proprietary. When you create or make available any Contributions,
        you thereby represent and warrant that:
      </p>
      <ul role="list" className="list-t">
        <li className="list-item-t">
          We accept the following forms of payment:
        </li>
        <li className="list-item-t3">
          he creation, distribution, transmission, public display, or
          performance, and the accessing, downloading, or copying of your
          Contributions do not and will not infringe the proprietary rights,
          including but not limited to the copyright, patent, trademark, trade
          secret, or moral rights of any third party.
        </li>
        <li className="list-item-t3">
          You are the creator and owner of or have the necessary licenses,
          rights, consents, releases, and permissions to use and to authorize
          us, the Site, and other users of the Site to use your Contributions in
          any manner contemplated by the Site and these Terms of Use.
        </li>
        <li className="list-item-t3">
          You have the written consent, release, and/or permission of each and
          every identifiable individual person in your Contributions to use the
          name or likeness of each and every such identifiable individual person
          to enable inclusion and use of your Contributions in any manner
          contemplated by the Site and these Terms of Use.
        </li>
        <li className="list-item-t3">
          Your Contributions are not false, inaccurate, or misleading.
        </li>
        <li className="list-item-t3">
          Your Contributions are not unsolicited or unauthorized advertising,
          promotional materials, pyramid schemes, chain letters, spam, mass
          mailings, or other forms of solicitation.
        </li>
        <li className="list-item-t3">
          Your Contributions are not obscene, lewd, lascivious, filthy, violent,
          harassing, libelous, slanderous, or otherwise objectionable (as
          determined by us).
        </li>
        <li className="list-item-t3">
          Your Contributions do not ridicule, mock, disparage, intimidate, or
          abuse anyone.
        </li>
        <li className="list-item-t3">
          Your Contributions are not used to harass or threaten (in the legal
          sense of those terms) any other person and to promote violence against
          a specific person or class of people.
        </li>
        <li className="list-item-t3">
          Your Contributions do not violate any applicable law, regulation, or
          rule.
        </li>
        <li className="list-item-t3">
          Your Contributions do not violate the privacy or publicity rights of
          any third party.
        </li>
        <li className="list-item-t3">
          Your Contributions do not violate any applicable law concerning child
          pornography, or otherwise intended to protect the health or well-being
          of minors.
        </li>
        <li className="list-item-t3">
          Your Contributions do not include any offensive comments that are
          connected to race, national origin, gender, sexual preference, or
          physical handicap.
        </li>
        <li className="list-item-t3">
          Your Contributions do not otherwise violate, or link to material that
          violates, any provision of these Terms of Use, or any applicable law
          or regulation.&nbsp;
        </li>
      </ul>
      <p className="paragraph-terms-1">
        Any use of the Site or the Marketplace Offerings in violation of the
        foregoing violates these Terms of Use and may result in, among other
        things, termination or suspension of your rights to use the Site and the
        Marketplace Offerings.
      </p>
      <h1 id="contribution-license" className="heading-terms1">
        10. Contribution license
      </h1>
      <p className="paragraph-terms-1">
        By posting your Contributions to any part of the Site, you automatically
        grant, and you represent and warrant that you have the right to grant,
        to us an unrestricted, unlimited, irrevocable, perpetual, non-exclusive,
        transferable, royalty-free, fully-paid, worldwide right, and license to
        host, use, copy, reproduce, disclose, sell, resell, publish, broadcast,
        retitle, archive, store, cache, publicly perform, publicly display,
        reformat, translate, transmit, excerpt (in whole or in part), and
        distribute such Contributions (including, without limitation, your image
        and voice) for any purpose, commercial, advertising, or otherwise, and
        to prepare derivative works of, or incorporate into other works, such
        Contributions, and grant and authorize sublicenses of the foregoing. The
        use and distribution may occur in any media formats and through any
        media channels.
        <br />
        <br />
        This license will apply to any form, media, or technology now known or
        hereafter developed, and includes our use of your name, company name,
        and franchise name, as applicable, and any of the trademarks, service
        marks, trade names, logos, and personal and commercial images you
        provide. You waive all moral rights in your Contributions, and you
        warrant that moral rights have not otherwise been asserted in your
        Contributions.
        <br />
        <br />
        We do not assert any ownership over your Contributions. You retain full
        ownership of all of your Contributions and any intellectual property
        rights or other proprietary rights associated with your Contributions.
        We are not liable for any statements or representations in your
        Contributions provided by you in any area on the Site. You are solely
        responsible for your Contributions to the Site and you expressly agree
        to exonerate us from any and all responsibility and to refrain from any
        legal action against us regarding your Contributions.
        <br />
        <br />
        We have the right, in our sole and absolute discretion, (1) to edit,
        redact, or otherwise change any Contributions; (2) to re-categorize any
        Contributions to place them in more appropriate locations on the Site;
        and (3) to pre-screen or delete any Contributions at any time and for
        any reason, without notice. We have no obligation to monitor your
        Contributions.
      </p>
      <h1 id="guidelines-for-reviews" className="heading-terms1">
        11. Guidelines for reviews
      </h1>
      <p className="paragraph-terms-1">
        We may provide you areas on the Site to leave reviews or ratings. When
        posting a review, you must comply with the following criteria: (1) you
        should have firsthand experience with the person/entity being reviewed;
        (2) your reviews should not contain offensive profanity, or abusive,
        racist, offensive, or hate language; (3) your reviews should not contain
        discriminatory references based on religion, race, gender, national
        origin, age, marital status, sexual orientation, or disability; (4) your
        reviews should not contain references to illegal activity; (5) you
        should not be affiliated with competitors if posting negative reviews;
        (6) you should not make any conclusions as to the legality of conduct;
        (7) you may not post any false or misleading statements; and (8) you may
        not organize a campaign encouraging others to post reviews, whether
        positive or negative.
        <br />
        <br />
        We may accept, reject, or remove reviews in our sole discretion. We have
        absolutely no obligation to screen reviews or to delete reviews, even if
        anyone considers reviews objectionable or inaccurate. Reviews are not
        endorsed by us, and do not necessarily represent our opinions or the
        views of any of our affiliates or partners. We do not assume liability
        for any review or for any claims, liabilities, or losses resulting from
        any review. By posting a review, you hereby grant to us a perpetual,
        non-exclusive, worldwide, royalty-free, fully-paid, assignable, and
        sublicensable right and license to reproduce, modify, translate,
        transmit by any means, display, perform, and/or distribute all content
        relating to reviews.
      </p>
      <h1 id="mobile-application-license" className="heading-terms1">
        12. Mobile application license
      </h1>
      <h1 className="heading-45">Use License</h1>
      <p className="paragraph-terms-1">
        We may provide you areas on the Site to leave reviews or ratings. When
        posting a review, you must comply with the following criteria: (1) you
        should have firsthand experience with the person/entity being reviewed;
        (2) your reviews should not contain offensive profanity, or abusive,
        racist, offensive, or hate language; (3) your reviews should not contain
        discriminatory references based on religion, race, gender, national
        origin, age, marital status, sexual orientation, or disability; (4) your
        reviews should not contain references to illegal activity; (5) you
        should not be affiliated with competitors if posting negative reviews;
        (6) you should not make any conclusions as to the legality of conduct;
        (7) you may not post any false or misleading statements; and (8) you may
        not organize a campaign encouraging others to post reviews, whether
        positive or negative.
        <br />
        <br />
        We may accept, reject, or remove reviews in our sole discretion. We have
        absolutely no obligation to screen reviews or to delete reviews, even if
        anyone considers reviews objectionable or inaccurate. Reviews are not
        endorsed by us, and do not necessarily represent our opinions or the
        views of any of our affiliates or partners. We do not assume liability
        for any review or for any claims, liabilities, or losses resulting from
        any review. By posting a review, you hereby grant to us a perpetual,
        non-exclusive, worldwide, royalty-free, fully-paid, assignable, and
        sublicensable right and license to reproduce, modify, translate,
        transmit by any means, display, perform, and/or distribute all content
        relating to reviews.
      </p>
      <h1 className="heading-45">Apple and Android Devices</h1>
      <p className="paragraph-terms-1">
        The following terms apply when you use a mobile application obtained
        from either the Apple Store or Google Play (each an “App Distributor”)
        to access the Marketplace Offerings: (1) the license granted to you for
        our mobile application is limited to a non-transferable license to use
        the application on a device that utilizes the Apple iOS or Android
        operating systems, as applicable, and in accordance with the usage rules
        set forth in the applicable App Distributor’s terms of service; (2) we
        are responsible for providing any maintenance and support services with
        respect to the mobile application as specified in the terms and
        conditions of this mobile application license contained in these Terms
        of Use or as otherwise required under applicable law, and you
        acknowledge that each App Distributor has no obligation whatsoever to
        furnish any maintenance and support services with respect to the mobile
        application; (3) in the event of any failure of the mobile application
        to conform to any applicable warranty, you may notify the applicable App
        Distributor, and the App Distributor, in accordance with its terms and
        policies, may refund the purchase price, if any, paid for the mobile
        application, and to the maximum extent permitted by applicable law, the
        App Distributor will have no other warranty obligation whatsoever with
        respect to the mobile application; (4) you represent and warrant that
        (i) you are not located in a country that is subject to a U.S.
        government embargo, or that has been designated by the U.S. government
        as a “terrorist supporting” country and (ii) you are not listed on any
        U.S. government list of prohibited or restricted parties; (5) you must
        comply with applicable third-party terms of agreement when using the
        mobile application, e.g., if you have a VoIP application, then you must
        not be in violation of their wireless data service agreement when using
        the mobile application; and (6) you acknowledge and agree that the App
        Distributors are third-party beneficiaries of the terms and conditions
        in this mobile application license contained in these Terms of Use, and
        that each App Distributor will have the right (and will be deemed to
        have accepted the right) to enforce the terms and conditions in this
        mobile application license contained in these Terms of Use against you
        as a third-party beneficiary thereof.
      </p>
      <h1 id="submissions" className="heading-terms1">
        13. Submissions
      </h1>
      <p className="paragraph-terms-1">
        You acknowledge and agree that any questions, comments, suggestions,
        ideas, feedback, or other information regarding the Site or the
        Marketplace Offerings ("Submissions") provided by you to us are
        non-confidential and shall become our sole property. We shall own
        exclusive rights, including all intellectual property rights, and shall
        be entitled to the unrestricted use and dissemination of these
        Submissions for any lawful purpose, commercial or otherwise, without
        acknowledgment or compensation to you. You hereby waive all moral rights
        to any such Submissions, and you hereby warrant that any such
        Submissions are original with you or that you have the right to submit
        such Submissions. You agree there shall be no recourse against us for
        any alleged or actual infringement or misappropriation of any
        proprietary right in your Submissions.
      </p>
      <h1 id="site-management" className="heading-terms1">
        14. Site management
      </h1>
      <p className="paragraph-terms-1">
        We reserve the right, but not the obligation, to: (1) monitor the Site
        for violations of these Terms of Use; (2) take appropriate legal action
        against anyone who, in our sole discretion, violates the law or these
        Terms of Use, including without limitation, reporting such user to law
        enforcement authorities; (3) in our sole discretion and without
        limitation, refuse, restrict access to, limit the availability of, or
        disable (to the extent technologically feasible) any of your
        Contributions or any portion thereof; (4) in our sole discretion and
        without limitation, notice, or liability, to remove from the Site or
        otherwise disable all files and content that are excessive in size or
        are in any way burdensome to our systems; and (5) otherwise manage the
        Site in a manner designed to protect our rights and property and to
        facilitate the proper functioning of the Site and the Marketplace
        Offerings.
      </p>
      <h1 id="privacy-policy" className="heading-terms1">
        15. Privacy policy
      </h1>
      <p className="paragraph-terms-1">
        We care about data privacy and security. Please review our Privacy
        Policy: __________. By using the Site or the Marketplace Offerings, you
        agree to be bound by our Privacy Policy, which is incorporated into
        these Terms of Use. Please be advised the Site and the Marketplace
        Offerings are hosted in __________. If you access the Site or the
        Marketplace Offerings from any other region of the world with laws or
        other requirements governing personal data collection, use, or
        disclosure that differ from applicable laws in __________, then through
        your continued use of the Site, you are transferring your data to
        __________, and you agree to have your data transferred to and processed
        in __________.
      </p>
      <h1 id="copyright-infringements" className="heading-terms1">
        16. Copyright infringements
      </h1>
      <p className="paragraph-terms-1">
        We respect the intellectual property rights of others. If you believe
        that any material available on or through the Site infringes upon any
        copyright you own or control, please immediately notify us using the
        contact information provided below (a “Notification”). A copy of your
        Notification will be sent to the person who posted or stored the
        material addressed in the Notification. Please be advised that pursuant
        to applicable law you may be held liable for damages if you make
        material misrepresentations in a Notification. Thus, if you are not sure
        that material located on or linked to by the Site infringes your
        copyright, you should consider first contacting an attorney.
      </p>
      <h1 id="term-and-termination" className="heading-terms1">
        17. Term and termination
      </h1>
      <p className="paragraph-terms-1">
        These terms of use shall remain in full force and effect while you use
        the site. Without limiting any other provision of these terms of use, we
        reserve the right to, in our sole discretion and without notice or
        liability, deny access to and use of the site and the marketplace
        offerings (including blocking certain ip addresses), to any person for
        any reason or for no reason, including without limitation for breach of
        any representation, warranty, or covenant contained in these terms of
        use or of any applicable law or regulation. We may terminate your use or
        participation in the site and the marketplace offerings or delete your
        account and any content or information that you posted at any time,
        without warning, in our sole discretion.
        <br />
        <br />
        If we terminate or suspend your account for any reason, you are
        prohibited from registering and creating a new account under your name,
        a fake or borrowed name, or the name of any third party, even if you may
        be acting on behalf of the third party. In addition to terminating or
        suspending your account, we reserve the right to take appropriate legal
        action, including without limitation pursuing civil, criminal, and
        injunctive redress.
      </p>
      <h1 id="modifications-and-interruptions" className="heading-terms1">
        18. Modifications and interruptions
      </h1>
      <p className="paragraph-terms-1">
        We reserve the right to change, modify, or remove the contents of the
        Site at any time or for any reason at our sole discretion without
        notice. However, we have no obligation to update any information on our
        Site. We also reserve the right to modify or discontinue all or part of
        the Marketplace Offerings without notice at any time. We will not be
        liable to you or any third party for any modification, price change,
        suspension, or discontinuance of the Site or the Marketplace Offerings.
        <br />
        <br />
        We cannot guarantee the Site and the Marketplace Offerings will be
        available at all times. We may experience hardware, software, or other
        problems or need to perform maintenance related to the Site, resulting
        in interruptions, delays, or errors. We reserve the right to change,
        revise, update, suspend, discontinue, or otherwise modify the Site or
        the Marketplace Offerings at any time or for any reason without notice
        to you. You agree that we have no liability whatsoever for any loss,
        damage, or inconvenience caused by your inability to access or use the
        Site or the Marketplace Offerings during any downtime or discontinuance
        of the Site or the Marketplace Offerings. Nothing in these Terms of Use
        will be construed to obligate us to maintain and support the Site or the
        Marketplace Offerings or to supply any corrections, updates, or releases
        in connection therewith.
      </p>
      <h1 id="governing-law" className="heading-terms1">
        19. Governing law
      </h1>
      <p className="paragraph-terms-1">
        These Terms of Use and your use of the Site and the Marketplace
        Offerings are governed by and construed in accordance with the laws of
        the State of Delaware applicable to agreements made and to be entirely
        performed within the State of Delaware, without regard to its conflict
        of law principles.
      </p>
      <h1 id="dispute-resolution" className="heading-terms1">
        20. Dispute resolution
      </h1>
      <h1 className="heading-45">Informal Negotiations</h1>
      <p className="paragraph-terms-1">
        To expedite resolution and control the cost of any dispute, controversy,
        or claim related to these Terms of Use (each "Dispute" and collectively,
        the "Disputes") brought by either you or us (individually, a "Party" and
        collectively, the "Parties"), the Parties agree to first attempt to
        negotiate any Dispute (except those Disputes expressly provided below)
        informally for at least ninety (90) days before initiating arbitration.
        Such informal negotiations commence upon written notice from one Party
        to the other Party.
      </p>
      <h1 className="heading-45">Binding Arbitration</h1>
      <p className="paragraph-terms-1">
        If the Parties are unable to resolve a Dispute through informal
        negotiations, the Dispute (except those Disputes expressly excluded
        below) will be finally and exclusively resolved through binding
        arbitration. YOU UNDERSTAND THAT WITHOUT THIS PROVISION, YOU WOULD HAVE
        THE RIGHT TO SUE IN COURT AND HAVE A JURY TRIAL. The arbitration shall
        be commenced and conducted under the Commercial Arbitration Rules of the
        American Arbitration Association ("AAA") and, where appropriate, the
        AAA’s Supplementary Procedures for Consumer Related Disputes ("AAA
        Consumer Rules"), both of which are available at the AAA website:{" "}
        <a href="https://www.adr.org/" target="_blank">
          www.adr.org
        </a>
        . Your arbitration fees and your share of arbitrator compensation shall
        be governed by the AAA Consumer Rules and, where appropriate, limited by
        the AAA Consumer Rules. If such costs are determined by the arbitrator
        to be excessive, we will pay all arbitration fees and expenses. The
        arbitration may be conducted in person, through the submission of
        documents, by phone, or online. The arbitrator will make a decision in
        writing, but need not provide a statement of reasons unless requested by
        either Party. The arbitrator must follow applicable law, and any award
        may be challenged if the arbitrator fails to do so. Except where
        otherwise required by the applicable AAA rules or applicable law, the
        arbitration will take place in United States , Delaware. Except as
        otherwise provided herein, the Parties may litigate in court to compel
        arbitration, stay proceedings pending arbitration, or to confirm,
        modify, vacate, or enter judgment on the award entered by the
        arbitrator.
        <br />
        <br />
        If for any reason, a Dispute proceeds in court rather than arbitration,
        the Dispute shall be commenced or prosecuted in the state and federal
        courts located in United States, Delaware, and the Parties hereby
        consent to, and waive all defenses of lack of personal jurisdiction, and
        forum non conveniens with respect to venue and jurisdiction in such
        state and federal courts. Application of the United Nations Convention
        on Contracts for the International Sale of Goods and the Uniform
        Computer Information Transaction Act (UCITA) is excluded from these
        Terms of Use.
        <br />
        <br />
        If this provision is found to be illegal or unenforceable, then neither
        Party will elect to arbitrate any Dispute falling within that portion of
        this provision found to be illegal or unenforceable, and such Dispute
        shall be decided by a court of competent jurisdiction within the courts
        listed for jurisdiction above, and the Parties agree to submit to the
        personal jurisdiction of that court.
      </p>
      <h1 className="heading-45">Restrictions</h1>
      <p className="paragraph-terms-1">
        The Parties agree that any arbitration shall be limited to the Dispute
        between the Parties individually. To the full extent permitted by law,
        (a) no arbitration shall be joined with any other proceeding; (b) there
        is no right or authority for any Dispute to be arbitrated on a
        class-action basis or to utilize class action procedures; and (c) there
        is no right or authority for any Dispute to be brought in a purported
        representative capacity on behalf of the general public or any other
        persons.
      </p>
      <h1 className="heading-45">
        Exceptions to Informal Negotiations and Arbitration
      </h1>
      <p className="paragraph-terms-1">
        The Parties agree that the following Disputes are not subject to the
        above provisions concerning informal negotiations and binding
        arbitration: (a) any Disputes seeking to enforce or protect, or
        concerning the validity of, any of the intellectual property rights of a
        Party; (b) any Dispute related to, or arising from, allegations of
        theft, piracy, invasion of privacy, or unauthorized use; and (c) any
        claim for injunctive relief. If this provision is found to be illegal or
        unenforceable, then neither Party will elect to arbitrate any Dispute
        falling within that portion of this provision found to be illegal or
        unenforceable and such Dispute shall be decided by a court of competent
        jurisdiction within the courts listed for jurisdiction above, and the
        Parties agree to submit to the personal jurisdiction of that court.
      </p>
      <h1 id="corrections" className="heading-terms1">
        21. Corrections
      </h1>
      <p className="paragraph-terms-1">
        There may be information on the Site that contains typographical errors,
        inaccuracies, or omissions that may relate to the Marketplace Offerings,
        including descriptions, pricing, availability, and various other
        information. We reserve the right to correct any errors, inaccuracies,
        or omissions and to change or update the information on the Site at any
        time, without prior notice.
      </p>
      <h1 id="disclaimer" className="heading-terms1">
        22. Disclaimer
      </h1>
      <p className="paragraph-terms-1">
        The site and the marketplace offerings are provided on an as-is and
        as-available basis. You agree that your use of the site and our services
        will be at your sole risk. To the fullest extent permitted by law, we
        disclaim all warranties, express or implied, in connection with the site
        and the marketplace offerings and your use thereof, including, without
        limitation, the implied warranties of merchantability, fitness for a
        particular purpose, and non-infringement. We make no warranties or
        representations about the accuracy or completeness of the site’s content
        or the content of any websites linked to the site and we will assume no
        liability or responsibility for any (1) errors, mistakes, or
        inaccuracies of content and materials, (2) personal injury or property
        damage, of any nature whatsoever, resulting from your access to and use
        of the site, (3) any unauthorized access to or use of our secure servers
        and/or any and all personal information and/or financial information
        stored therein, (4) any interruption or cessation of transmission to or
        from the site or the marketplace offerings, (5) any bugs, viruses,
        trojan horses, or the like which may be transmitted to or through the
        site by any third party, and/or (6) any errors or omissions in any
        content and materials or for any loss or damage of any kind incurred as
        a result of the use of any content posted, transmitted, or otherwise
        made available via the site. We do not warrant, endorse, guarantee, or
        assume responsibility for any product or service advertised or offered
        by a third party through the site, any hyperlinked website, or any
        website or mobile application featured in any banner or other
        advertising, and we will not be a party to or in any way be responsible
        for monitoring any transaction between you and any third-party providers
        of products or services. As with the purchase of a product or service
        through any medium or in any environment, you should use your best
        judgment and exercise caution where appropriate.
      </p>
      <h1 id="limitations-of-liability" className="heading-terms1">
        23. Limitations of liability
      </h1>
      <p className="paragraph-terms-1">
        In no event will we or our directors, employees, or agents be liable to
        you or any third party for any direct, indirect, consequential,
        exemplary, incidental, special, or punitive damages, including lost
        profit, lost revenue, loss of data, or other damages arising from your
        use of the site or the marketplace offerings, even if we have been
        advised of the possibility of such damages. Notwithstanding anything to
        the contrary contained herein, our liability to you for any cause
        whatsoever and regardless of the form of the action, will at all times
        be limited to the lesser of the amount paid, if any, by you to us
        &nbsp;during the six (6) month period prior to any cause of action
        arising or $5,000.00 usd. Certain us state laws and international laws
        do not allow limitations on implied warranties or the exclusion or
        limitation of certain damages. If these laws apply to you, some or all
        of the above disclaimers or limitations may not apply to you, and you
        may have additional rights.
      </p>
      <h1 id="indemnification" className="heading-terms1">
        24. Indemnification
      </h1>
      <p className="paragraph-terms-1">
        You agree to defend, indemnify, and hold us harmless, including our
        subsidiaries, affiliates, and all of our respective officers, agents,
        partners, and employees, from and against any loss, damage, liability,
        claim, or demand, including reasonable attorneys’ fees and expenses,
        made by any third party due to or arising out of: (1) your
        Contributions; (2) use of the Marketplace Offerings; (3) breach of these
        Terms of Use; (4) any breach of your representations and warranties set
        forth in these Terms of Use; (5) your violation of the rights of a third
        party, including but not limited to intellectual property rights; or (6)
        any overt harmful act toward any other user of the Site or the
        Marketplace Offerings with whom you connected via the Site.
        Notwithstanding the foregoing, we reserve the right, at your expense, to
        assume the exclusive defense and control of any matter for which you are
        required to indemnify us, and you agree to cooperate, at your expense,
        with our defense of such claims. We will use reasonable efforts to
        notify you of any such claim, action, or proceeding which is subject to
        this indemnification upon becoming aware of it.
      </p>
      <h1 id="user-data" className="heading-terms1">
        25. User Data
      </h1>
      <p className="paragraph-terms-1">
        We will maintain certain data that you transmit to the Site for the
        purpose of managing the performance of the Marketplace Offerings, as
        well as data relating to your use of the Marketplace Offerings. Although
        we perform regular routine backups of data, you are solely responsible
        for all data that you transmit or that relates to any activity you have
        undertaken using the Marketplace Offerings. You agree that we shall have
        no liability to you for any loss or corruption of any such data, and you
        hereby waive any right of action against us arising from any such loss
        or corruption of such data.
      </p>
      <h1
        id="Electronic-communications-transactions-and-signatures"
        className="heading-terms1"
      >
        26. Electronic communications, transactions, and signatures
      </h1>
      <p className="paragraph-terms-1">
        Visiting the Site, sending us emails, and completing online forms
        constitute electronic communications. You consent to receive electronic
        communications, and you agree that all agreements, notices, disclosures,
        and other communications we provide to you electronically, via email and
        on the Site, satisfy any legal requirement that such communication be in
        writing. YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES,
        CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF
        NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY
        US OR VIA THE SITE. You hereby waive any rights or requirements under
        any statutes, regulations, rules, ordinances, or other laws in any
        jurisdiction which require an original signature or delivery or
        retention of non-electronic records, or to payments or the granting of
        credits by any means other than electronic means.
      </p>
      <h1 id="california-users-and-residents" className="heading-terms1">
        27. California users and residents
      </h1>
      <p className="paragraph-terms-1">
        Visiting the Site, sending us emails, and completing online forms
        constitute electronic communications. You consent to receive electronic
        communications, and you agree that all agreements, notices, disclosures,
        and other communications we provide to you electronically, via email and
        on the Site, satisfy any legal requirement that such communication be in
        writing. YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES,
        CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF
        NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY
        US OR VIA THE SITE. You hereby waive any rights or requirements under
        any statutes, regulations, rules, ordinances, or other laws in any
        jurisdiction which require an original signature or delivery or
        retention of non-electronic records, or to payments or the granting of
        credits by any means other than electronic means.
      </p>
      <h1 className="heading-terms1">28. California users and residents</h1>
      <p className="paragraph-terms-1">
        If any complaint with us is not satisfactorily resolved, you can contact
        the Complaint Assistance Unit of the Division of Consumer Services of
        the California Department of Consumer Affairs in writing at 1625 North
        Market Blvd., Suite N 112, Sacramento, California 95834 or by telephone
        at (800) 952-5210 or (916) 445-1254.
      </p>
      <h1 id="miscellaneous" className="heading-terms1">
        29. Miscellaneous
      </h1>
      <p className="paragraph-terms-1">
        These Terms of Use and any policies or operating rules posted by us on
        the Site or in respect to the Marketplace Offerings constitute the
        entire agreement and understanding between you and us. Our failure to
        exercise or enforce any right or provision of these Terms of Use shall
        not operate as a waiver of such right or provision. These Terms of Use
        operate to the fullest extent permissible by law. We may assign any or
        all of our rights and obligations to others at any time. We shall not be
        responsible or liable for any loss, damage, delay, or failure to act
        caused by any cause beyond our reasonable control. If any provision or
        part of a provision of these Terms of Use is determined to be unlawful,
        void, or unenforceable, that provision or part of the provision is
        deemed severable from these Terms of Use and does not affect the
        validity and enforceability of any remaining provisions. There is no
        joint venture, partnership, employment or agency relationship created
        between you and us as a result of these Terms of Use or use of the
        Marketplace Offerings. You agree that these Terms of Use will not be
        construed against us by virtue of having drafted them. You hereby waive
        any and all defenses you may have based on the electronic form of these
        Terms of Use and the lack of signing by the parties hereto to execute
        these Terms of Use.
      </p>
      <h1 id="contact-us" className="heading-terms1">
        30. Contact us
      </h1>
      <p className="paragraph-terms-1">
        In order to resolve a complaint regarding the Site or the Marketplace
        Offerings or to receive further information regarding use of the Site or
        the Marketplace Offerings, please contact us at:
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
                    aria-current="page"
                    className="brix---footer-link w--current"
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
