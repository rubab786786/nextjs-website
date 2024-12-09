"use client"
import React from 'react'
import { useState } from "react";
import NavbarSection from './NavbarSection'
import UuiSection from './UuiSection'
import JoinSection from './JoinSection'
import FooterSection from './FooterSection'
import Link from 'next/link';
const Crowdfunding = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionItems = [
    {
      question: "Why choose UFUND for crowdfunding?",
      answer:
        "UFUND is a decentralized network where businesses and investors can benefit from crowdfunding and tokenization."
    },
    {
      question: "How does everything work on UFUND?",
      answer:
        "UFUND is an innovative platform for crowdfunding, helping small and medium businesses (SMBs) to connect with investors. It requires you to enroll, so you can start investing to earn or campaigning to fundraise."
    },
    {
      question: "How secure is UFUND?",
      answer:
        "We make use of innovative technologies like blockchain to host tokens. We secure all users' Fiat funds into regulated third-party custody."
    },
    {
      question: "Do you have an Android Mobile App?",
      answer: "Yes, we have a mobile app available on Android."
    }
  ];

  return (
    <>
      <NavbarSection />
      <section id="hero" className="section-in">
        <div className="w-layout-blockcontainer container-in w-container">
          <h1 className="heading-in1">Businesses</h1>
          <Link href="#" className="button-inv w-button">
            Home - Service
          </Link>
        </div>
      </section>
      <section className="section-bis">
        <div className="w-layout-blockcontainer container-bis w-container">
          <div
            id="w-node-baec1895-e55f-19c3-7892-e28d48daf434-5b9eef5f"
            className="w-layout-layout quick-stack-37 wf-layout-layout"
          >
            <div
              id="w-node-b20495da-9e1a-4309-1784-2bae45394bf5-5b9eef5f"
              className="w-layout-cell cell-53"
            >
              <Link href="/innovative-investment" className="button-2 w-button">
                Innovative investment
              </Link>
            </div>
            <div
              id="w-node-_14fcafe5-1ae1-ce75-8d51-8ea64bceb8a1-5b9eef5f"
              className="w-layout-cell cell-54"
            >
              <Link
                href="/crowdfunding"
                aria-current="page"
                className="button-2 w-button w--current"
              >
                Crowdfunding
              </Link>
            </div>
            <div
              id="w-node-dcc44db1-bfa4-64bf-780a-bb380133036c-5b9eef5f"
              className="w-layout-cell cell-55"
            >
              <Link href="/assets-tokenization" className="button-2 w-button">
                Assets
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="section-20">
        <div className="w-layout-blockcontainer container-25 w-container">
          <img
            sizes="(max-width: 479px) 100vw, (max-width: 767px) 94vw, (max-width: 991px) 95vw, 940.0000610351562px"
            srcSet="/images/Rectangle-7220-4-1-p-500.png 500w, images/Rectangle-7220-4-1-p-800.png 800w, images/Rectangle-7220-4-1.png 1170w"
            alt=""
            src="/images/Rectangle-7220-4-1.png"
            loading="lazy"
            className="image-49"
          />
          <div className="div-block-34">
            <h1 className="heading-inv4">Businesses &amp; Startups</h1>
            <p className="paragraph-inv4">
              Small and Medium Businesses (SMBs) often struggle when it comes to
              financing their activities, such as purchases and sales orders. Also,
              traditional banks do little to support SMBs, and they do not think
              about financing the way UFUND does by using DeFi and its P2P
              crowdfunding platform. UFUND focuses on providing a safe and reliable
              DeFi service and P2P trade in its crowdfunding platform that unlocks
              SMB growth.
            </p>
          </div>
        </div>
      </section>
      <section className="section-21">
        <div className="w-layout-blockcontainer container-26 w-container">
          <h1 className="heading-inv5">
            Crowdfunding for business why chose UFUND?
          </h1>
          <div
            id="w-node-_2d1e5c49-a669-91bf-d651-f27de060d109-5b9eef5f"
            className="w-layout-layout quick-stack-26 wf-layout-layout"
          >
            <div
              id="w-node-_2d1e5c49-a669-91bf-d651-f27de060d10a-5b9eef5f"
              className="w-layout-cell"
            >
              <h1 className="heading-38">
                UFUND&nbsp;Offers the Following Options:
              </h1>
              <ul role="list" className="list-inv-2">
                <li className="list-item-inv-2">Signup and verify your email</li>
                <li className="list-item-inv-2">
                  Undergo KYC/AML check and get approved
                </li>
                <li className="list-item-inv-2">
                  Sign in and fill in the UFUND form
                </li>
                <li className="list-item-inv-2">
                  Start investing, campaigning for your business.
                </li>
                <li className="list-item-inv-2">
                  Connect with many investors and campaigners
                </li>
                <li className="list-item-inv-2">
                  Fund your purchase orders and sales orders for
                </li>
                <li className="list-item-inv-2">
                  List your assets for tokenization and liquidity
                </li>
              </ul>
            </div>
            <div
              id="w-node-_2d1e5c49-a669-91bf-d651-f27de060d11d-5b9eef5f"
              className="w-layout-cell cell-45"
            >
              <img
                sizes="(max-width: 479px) 100vw, (max-width: 991px) 95vw, 860.0000610351562px"
                srcSet="/images/Business-solution-cuate-1-p-500.png 500w, images/Business-solution-cuate-1.png 540w"
                alt=""
                src="/images/Business-solution-cuate-1.png"
                loading="lazy"
                className="image-50"
              />
            </div>
          </div>
          <p className="paragraph-inv5">
            UFUND is positioned at the forefront of the DeFi and blockchain
            financial investment system, providing a digital crowdfunding space for
            promising businesses and start-ups. With its powerful ERC20 Token (UFD)
            issued for an initial fundraising, UFUND will reach its following goals:
            <br />
            <br />
            One of the biggest advantages of crowdfunding with UFUND is to provide
            access to a larger and more diverse group of investors. UFUND is
            defining a new way for businesses to enhance their working capital by
            receiving the funding needed from a pool of investors.
            <br />
            <br />
            Moreover, investors can participate in the launch of new start-ups and
            get extra rewards for such investments, and get greater return on
            investment.
            <br />
            <br />
            Remember, the UFUND platform is built to keep your data safe and secure!
          </p>
        </div>
      </section>
      <section className="section-22">
        <div className="w-layout-blockcontainer container-27 w-container">
          <div
            className="brix---inner-container-1012px-center-3"
          // style={{
          //   opacity: 0,
          //   transform: "translate3d(0, 10%, 0) scale3d(1, 1, 1)"
          // }}
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
                          // className="brix---accordion-arrow-icon-2"
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
      <UuiSection />
      <JoinSection />
      <FooterSection />
    </>
  )
}

export default Crowdfunding