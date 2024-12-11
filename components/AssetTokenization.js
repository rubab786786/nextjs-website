"use client"
import React,{ useState,useEffect } from 'react'
import NavbarSection from './NavbarSection'
import UuiSection from './UuiSection'
import JoinSection from './JoinSection'
import FooterSection from './FooterSection'
import Link from 'next/link'

const AssetTokenization = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100); // Delay to allow animation on load
  }, []);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionItems = [
    {
      question: "How does UFUND work?",
      answer:
        "UFUND is a financial disruptor that helps businesses connect with investors by offering funding opportunities and tokenized assets powered by blockchain. It requires creating a portfolio as an investor or campaigner to start raising capital using UFUND token."
    },
    {
      question: "Do You allow exchanging NFTs?",
      answer:
        "Yes, we do! UFUND enables you to exchange both fungible and non-fungible tokens (NFTs)."
    },
    {
      question: "What is UFUND initial token (ITO) Sales?",
      answer:
        "With its powerful ERC20 token (UFD) issued for an initial fundraising, UFUND will reach its following goals. What use we do with the money raised: marketing our web platform and mobile app, enhance functionalities for users, develop and integrate artificial intelligence, offer more functionalities to enrich user experience, integrate multi-token standards issuance, integrate exchanges and apps continue R&D."
    },
    {
      question: "How secure investments and returns are on UFUND?",
      answer: "We make use of innovative technologies like blockchain to host tokens. We secure all funds into regulated third party custody."
    },
    {
      question: "Can I Download the UFUND app on iOS?",
      answer: "Yes, UFUND is available for both iOS and Android users."
    },
    {
      question: "What are the functions of the UFD token?",
      answer: "UFD Token is initially a utility token to be used for funding transactions and services on UFUND platform and mobile apps."
    }
  ];
  return (
    <>
    <NavbarSection/>
    <section id="hero" className="section-in">
        <div className="w-layout-blockcontainer container-i w-container">
          <h1 className="heading-i">Assets</h1>
          <Link href="#" className="button-inv w-button">
            Home - Service
          </Link>
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
              <Link href="/innovative-investment" scroll={false} className="button-2 w-button">
                Innovative investment
              </Link>
            </div>
            <div
              id="w-node-_65647434-72a2-7ef5-7099-e318aad56b62-8c571e6f"
              className="w-layout-cell cell-54"
            >
              <Link href="/crowdfunding" scroll={false} className="button-2 w-button">
                Crowdfunding
              </Link>
            </div>
            <div
              id="w-node-_65647434-72a2-7ef5-7099-e318aad56b65-8c571e6f"
              className="w-layout-cell cell-55"
            >
              <Link
                href="/assets-tokenization"
                scroll={false}
                aria-current="page"
                className="button-2 w-button w--current"
              >
                Assets
              </Link>
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
              <Link
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
              </Link>
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
          <div
            className="brix---inner-container-1012px-center-3"
          style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded
                ? 'translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)'
                : 'translate3d(0px, 10%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
              transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out',
            }}
          >
            <div className="brix---accordion-v3-card-3">
              <h1 className="heading-faq-1">Faqs</h1>
              <h1 className="heading-faq2-copy">Frequently asked questions</h1>
              <div className="w-layout-grid brix---grid-1-column-gap-row-3">
                {accordionItems.map((item, index) => (
                  <div key={index} className="brix---accordion-item-wrapper-v3-3" onClick={() => toggleAccordion(index)}>
                    <div className="brix---accordion-right-side-2">
                      <button
                        className="brix---btn-circle-accordion-btn-2 w-inline-block"
                      >
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
                          <h3 className="brix---accordion-title-3">
                            {item.question}
                          </h3>
                        </div>
                      </div>
                      {activeIndex === index && (
                        <div
                          className="brix---acordion-body-2"
                        // style={{
                        //   height: 'auto',
                        //   transform: 'translate3d(0, 20px, 0) scale3d(1, 1, 1)'
                        // }}
                        >
                          <div className="brix---accordion-spacer-2" />
                          <div className="brix---color-neutral-801">
                            <p className="brix---paragraph-default-5">
                              {item.answer}
                            </p>
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
    <UuiSection/>
    <JoinSection/>
    <FooterSection/>
    </>
  )
}

export default AssetTokenization