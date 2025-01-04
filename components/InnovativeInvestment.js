"use client";
import React, { useState, useEffect, useRef } from 'react';
import NavbarSection from './NavbarSection'
import UuiSection from './UuiSection';
import JoinSection from './JoinSection';
import FooterSection from './FooterSection';
import Link from 'next/link';

const InnovativeInvestment = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRef = useRef(null); // To observe the section

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsLoaded(true); // Trigger animation
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionItems = [
    {
      question: "Why should I invest in UFUND?",
      answer:
        "UFUND is a decentralized finance (DeFi) with a Tokenizer connected to blockchain that allows investors to create a business investment portfolio with maturity dates and terms that will create a set of returns."
    },
    {
      question: "Will there be intermediation costs when I make investments?",
      answer:
        "No. UFUND is a decentralized platform where investors can make investments and get substantial returns without spending fees other than those of the Blockchain and UFUND platform."
    },
    {
      question: "How Do you make investments secure?",
      answer:
        "We use innovative technologies like blockchain to host tokens. We secure all investors' and campaigners' Fiat funds into regulated third-party custody."
    },
    {
      question: "Do you have a mobile app for iOS or Android?",
      answer: "Yes. The UFUND mobile app is free and available for both iOS and Android users."
    },
    {
      question: "How to start making investments in businesses?",
      answer: "First, visit our website to sign up or download one of the two UFUND apps. Get verified in simple steps to create your investor's portfolio."
    }
  ];

  return (
    <>
      {/* <NavbarSection /> */}
      <section id="hero" className="section-in">
        <div className="w-layout-blockcontainer container-inv w-container">
          <h1 className="heading-inv">
            Investment platform for all your business needs I UFUND
          </h1>
          <Link href="#" className="button-inv w-button">
            Home - Service
          </Link>
        </div>
      </section>
      <section className="section-bis">
        <div className="w-layout-blockcontainer container-bis w-container">
          <div
            id="w-node-_050aeb4c-36b2-d280-d4d7-61db453f0fc2-1dedbcfb"
            className="w-layout-layout quick-stack-37 wf-layout-layout"
          >
            <div
              id="w-node-_050aeb4c-36b2-d280-d4d7-61db453f0fc3-1dedbcfb"
              className="w-layout-cell cell-53"
            >
              <Link
                href="/innovative-investment" scroll={false}
                aria-current="page"
                className="button-2 w-button w--current"
              >
                Innovative investment
              </Link>
            </div>
            <div
              id="w-node-_050aeb4c-36b2-d280-d4d7-61db453f0fc6-1dedbcfb"
              className="w-layout-cell cell-54"
            >
              <Link href="/crowdfunding" scroll={false} className="button-2 w-button">
                Crowdfunding
              </Link>
            </div>
            <div
              id="w-node-_050aeb4c-36b2-d280-d4d7-61db453f0fc9-1dedbcfb"
              className="w-layout-cell cell-55"
            >
              <Link href="/assets-tokenization" scroll={false} className="button-2 w-button">
                Assets
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="section-18">
        <div className="w-layout-blockcontainer container-22 w-container">
          <div
            id="w-node-_91b3e497-05e0-b4b0-b4f9-a04cf51556ea-1dedbcfb"
            className="w-layout-layout quick-stack-24 wf-layout-layout"
          >
            <div
              id="w-node-_91b3e497-05e0-b4b0-b4f9-a04cf51556eb-1dedbcfb"
              className="w-layout-cell"
            >
              <h1 className="heading-inv1">
                Investment platform UFUND - A easy way of business investment
              </h1>
              <p className="paragraph-inv">
                Gone are the days when you had to navigate through traditional
                investments. With UFUND, you no longer need to follow stocks or
                trading signals to protect your investments. UFUND lets you create
                your portfolio, where you control your investments and P2P trades
                from a simple, yet powerful dashboard.
              </p>
              <div className="downloadButton">
                <div className="tab_button_outer active">
                  <a
                    href="https://webapp.ufund.online/login"
                    target="_blank"
                    style={{
                      fontSize: "18px",
                      fontWeight: "bold",
                      textDecoration: "none", // Optional: To remove the underline
                    }}
                  >
                    Discover more
                    <img src="/images/Frames.png" alt="Download" />
                  </a>
                </div>
              </div>
              {/* <Link
                href="https://webapp.ufund.online/login"
                target="_blank"
                className="spark-button-3 spark-icon-left-button next w-inline-block"
              >
                <p className="paragraph-16">Discover more</p>
                <div className="html-embed-10 w-embed">
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
              </Link> */}
            </div>
            <div
              id="w-node-_91b3e497-05e0-b4b0-b4f9-a04cf51556f4-1dedbcfb"
              className="w-layout-cell cell-44"
            >
              <img
                sizes="(max-width: 479px) 100vw, (max-width: 767px) 94vw, (max-width: 991px) 93vw, (max-width: 1279px) 91vw, 1160px"
                srcSet="/images/Rectangle-7220-3-1-p-500.png 500w, images/Rectangle-7220-3-1.png 674w"
                alt=""
                src="/images/Rectangle-7220-3-1.png"
                loading="lazy"
                className="image-47"
              />
            </div>
          </div>
        </div>
        <div className="w-layout-blockcontainer container-23 w-container">
          <h1 className="heading-inv2">
            Investment platform: make better choices with UFUND{" "}
          </h1>
          <div
            id="w-node-_91b3e497-05e0-b4b0-b4f9-a04cf51556f9-1dedbcfb"
            className="w-layout-layout quick-stack-25 wf-layout-layout"
          >
            <div
              id="w-node-_91b3e497-05e0-b4b0-b4f9-a04cf51556fa-1dedbcfb"
              className="w-layout-cell"
            >
              <img
                loading="lazy"
                src="/images/OBJECTS.png"
                alt=""
                className="image-48"
              />
            </div>
            <div
              id="w-node-_91b3e497-05e0-b4b0-b4f9-a04cf51556fc-1dedbcfb"
              className="w-layout-cell"
            >
              <h1 className="heading-36">
                UFUND&nbsp;Offers the Following Options:
              </h1>
              <ul role="list" className="list-inv">
                <li className="list-item-inv">
                  Invest in small and midsize businesses (SMBs).
                </li>
                <li className="list-item-inv">
                  Fund businesses to help them grow.
                </li>
                <li className="list-item-inv">
                  Invest in the real economy for more profits.
                </li>
                <li className="list-item-inv">
                  Trade P2P tokens backed by real-world assets.
                </li>
                <li className="list-item-inv">
                  Invest to boost vetted start-up projects.
                </li>
              </ul>
            </div>
          </div>
          <p className="paragraph-inv1">
            UFUND is positioned at the forefront of the DeFi and blockchain
            financial investment system, providing a digital crowdfunding space for
            promising businesses and start-ups. With its powerful ERC20 Token (UFD)
            issued for an initial fundraising, UFUND will reach its following goals:
          </p>
          <div className="div-block-33" />
          <ul role="list" className="list-inv-1">
            <li className="list-item-inv-1">
              The development of the UFUND platform.
            </li>
            <li className="list-item-inv-1">
              Integrating Artificial Intelligences (AI) to UFUND Platform.
            </li>
            <li className="list-item-inv-1">
              Enhancing its digital marketing strategy and UFUND mobile apps
              functionalities.
            </li>
            <li className="list-item-inv-1">
              Integrating multi-token standards to different blockchain systems.
            </li>
            <li className="list-item-inv-1">
              Launching the UFUND Crowdfunding Club for businesses and investors.
            </li>
            <li className="list-item-inv-1">
              Enhancing user experience with more possibilities to use more Fiat
              currencies and more Cryptocurrencies.
            </li>
            <li className="list-item-inv-1">
              Offering businesses exchange for P2P trading and connections with
              liquidity providers.
            </li>
          </ul>
          <p className="paragraph-inv2">
            UFD token will be a utility token, sold on UFUND platform and website.
            The token price will be determined by the value and number of
            transactions made by users on UFUND platform. Users will also be allowed
            to get access to services, other premium features and rewards available
            on UFUND platform.
          </p>
          <h1 className="heading-inv3">Know more about investment platforms</h1>
          <p className="paragraph-inv3">
            The UFD token is soon going to transition to a hybrid model. Keeping UFD
            utility tokens until this transition happens will entitle holders to 10%
            hybrid UFD token free of charge of their total held utility tokens.
            Holding the hybrid token for a period of one year from the date of its
            transition will entitle holders to more gain.
            <br />
            <br />
            In a nutshell, UFUND is making a revolution in the world of finance by
            combining; crowdfunding, decentralized finance (DeFi) and Blockchain
            that give businesses and investors greater opportunities for business
            growth based on fiat cryptocurrencies, tokens, and more alternatives for
            investments.
          </p>
        </div>
      </section>
      <section className="section-19">
        <div className="w-layout-blockcontainer container-24 w-container">
          <h1 className="heading-faq">FAQs</h1>
          <h1 className="heading-faq1">Small business investments</h1>
          <div className="brix---inner-container-1012px-center-2"
            ref={sectionRef}
            style={{
              width: "100%",
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded
                ? "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)"
                : "translate3d(0px, 10%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
            }}>
            <div className="brix---accordion-v3-card-2">
              <div className="w-layout-grid brix---grid-1-column-gap-row-2">
                {accordionItems.map((item, index) => (
                  <div
                    key={index}
                    className="brix---accordion-item-wrapper-v3-2"
                    onClick={() => toggleAccordion(index)}
                  >
                    <div className="brix---accordion-right-side-2">
                      <button className="brix---btn-circle-accordion-btn-2 w-inline-block">
                        <img
                          alt="Accordion toggle"
                          src="images/Frame-43076-1.png"
                          className={`brix---accordion-arrow-icon-2 ${activeIndex === index ? "rotate-90" : ""
                            }`}
                        />
                      </button>
                    </div>
                    <div className="brix---accordion-content-wrapper-v2-2">
                      <div className="brix---accordion-header-2">
                        <div className="brix---color-neutral-802">
                          <h3 className="brix---accordion-title-2">{item.question}</h3>
                        </div>
                      </div>
                      {activeIndex === index && (
                        <div className="brix---acordion-body-2">
                          <div className="brix---accordion-spacer-2" />
                          <div className="brix---color-neutral-801">
                            <p className="brix---paragraph-default-4">{item.answer}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <UuiSection />
      <JoinSection heading="Start your journey today"/>
      {/* <FooterSection /> */}
    </>
  )
}

export default InnovativeInvestment