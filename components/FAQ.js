"use client"
import React from 'react'
import NavbarSection from './NavbarSection'
import JoinSection from './JoinSection'
import UuiSection from './UuiSection'
import FooterSection from './FooterSection'
import Link from 'next/link'
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../app/firebaseConfig";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null); // Tracks which question is open

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle the active index
  };
  const [faqs, setFaqs] = useState([]); // Store blog data
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        setLoading(true); // Start loading
        const querySnapshot = await getDocs(collection(db, "faqs")); // Firestore query
        const faqsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setFaqs(faqsData); // Set the data
        setLoading(false); // End loading
      } catch (error) {
        console.error("Error fetching faqs: ", error);
        setLoading(false); // End loading even if there's an error
      }
    };

    fetchFaqs();
  }, []); // Runs on component mount

  if (loading) return <p>Loading...</p>;


  // const accordionItems = [
  //   {
  //     question: "Who are the customers or clients paying for these services?",
  //     answer:
  //       "Accredited investors .Broker dealers .Financial institutions.Wealthy individuals.VC's.Angel investors . Any foreign investors that passes AML /KYC criteria to buy UFD Reg S to trade it only outside the USA."
  //   },
  //   {
  //     question: "How a business can create a security token and run an STO ( Security Token Offering )",
  //     answer:
  //       "There are several ways to do it 1-Use UFUND services from a to Z . 2-Do it yourself under UFUND guide line. Undergo KYC /AML. Get approved. Thereafter start filling the application form. Give your token the required details for the smart & sales contracts. Provide images and asset (s) audit. Thereafter you need to : -Decide what rights the security token will grant the investors. _Choose the jurisdiction to operate in -Choose UFUND as security token issuance platform -Create the token -Run your security token offering -list your security token on UFUND platform or third party exchanges. To know more contact us at : support@ufund.online"
  //   },
  //   {
  //     question: "How does it work?",
  //     answer:
  //       "Visit :https://web.ufund.online there is a video explainer : https://youtu.be/GHDYTCVnujE. All you need to do is enroll to create a portfolio as an investor or campaigner."
  //   },
  //   {
  //     question: "What is the difference between a security token and a utility token?",
  //     answer: "UFD utility token allows owners access to the company's product or services offered on the platform and mobile apps only such as discounts, rewards, or additional benefits to token holders, while a UFD security token entitle owners to hold a stake in the company itself. Security tokens (STO) are the digital, web3 version of financial securities are regulated by the US SEC just like classic securities."
  //   },
  //   {
  //     question: "Is the UFD token regulated?",
  //     answer: "Since 2022-4-22 UFD is also a security token under SEC Reg.D (506)c. What is a security token ?A security token can buy you a stake in the company itself and you will be a shareholder . 2 type of UFD's : Reg D(506)c for US accredited investors only & Reg S for foreigners only with no trade permitted of this type of UFD in the USA. If you which to buy a utility token its still possible but the use is limited to access services and products offered on UFUND Platform and apps only. To get more information on which token to choose for your investment , what's the advantages of each type of token , UFUND investors manager will be happy to give you further details on request , contact : investors@ufund.online."
  //   },
  //   {
  //     question: "Who’s choosing which products and services being offered by UFUND?",
  //     answer: "Campaigners listed and passed KYC & AML checks."
  //   },
  //   {
  //     question: "What functions UFD utility token has?",
  //     answer: "UFD Token is initially a utility token, sold only for funding transactions and services on UFUND platform and mobile apps. Its price is 20 USD or 8.7 MATIC further prices will be determined by the numbers of transactions inside UFUND platform."
  //   },
  //   {
  //     question: "Who’s using the UFUND product or service?",
  //     answer: "Small Mid Size Businesses (SMB's) and Small Mid Size Enterprises (SME's)."
  //   },
  //   {
  //     question: "How secure investments and returns are on UFUND?",
  //     answer: "We make use of innovative technologies like blockchain to host tokens sales & purchases of all UFUND platform users. We secure all investors and campaigners fiat funds into regulated third party custody."
  //   },
  //   {
  //     question: "When will be the UFD token listed on exchanges?",
  //     answer: "UFD security token will be listed on some security tokens exchanges . Listing is expected in late 2022."
  //   },
  //   {
  //     question: "What makes UFUND unique?",
  //     answer: "UFUND creates a decentralized network where Businesses and Investors can meet . Businesses campaigning to benefit from crowdfunding their daily activities , tokenization of their illiquid assets .UFUND allows Businesses to raise the necessary funds without relying on any intermediaries. Investors find alternative opportunities of secure short terms investments."
  //   },
  //   {
  //     question: "Do you have a mobile application?",
  //     answer: "With its powerful ERC20 utility token (UFD) issued for an initial fundraising, in order for UFUND to reach its goals. What use UFUND will do with the money raised: marketing our web platform and mobile app, enhance functionalities for users, develop and integrate artificial intelligence, offer more functionalities to enrich user experience, integrate multi-token standards issuance, integrate exchanges and apps continue R&D. UFD utility token can only be used on UFUND Platform to buy access to our company's product or service."
  //   },
  //   {
  //     question: "Where can I get more information?",
  //     answer: "If you need more information, you can contact us at: support@ufund.online."
  //   },
  //   {
  //     question: "Accredited investors .Broker dealers .Financial institutions. Wealthy individuals. VC's.Angel investors . Any foreign investors that passes AML /KYC criteria to buy UFD Reg S to trade it only outside the USA.",
  //     answer: " Investors , campaigners , and all users of UFUND platform , mobile apps and UFUND , to keep the platform live well maintained, secure and enhanced as required over time."
  //   }
  // ];

  return (
    <>
      {/* <NavbarSection /> */}
      <section id="hero" className="section-faq">
        <div className="w-layout-blockcontainer container-faq w-container">
          <h1 className="heading-guide">Frequently asked questions</h1>
          <Link href="#" className="button w-button">
            Home - FAQ's
          </Link>
        </div>
      </section>
      <section className="section-faq1">
        <div className="w-layout-blockcontainer container-faq1 w-container">
          <h1 className="heading-43">UFUND - FAQ's</h1>
          <div className="brix---top-bar-form w-form">
            <form
              id="wf-form-BRIX---Top-Bar-Form"
              name="wf-form-BRIX---Top-Bar-Form"
              data-name="BRIX - Top Bar Form"
              method="get"
              data-wf-page-id="65e5d533f3967251cab333b2"
              data-wf-element-id="0f8f4404-da69-b263-0ca6-19d1fbd98974"
            >
              <div className="brix---position-relative">
                <input
                  className="brix---top-bar-input jetboost-list-search-input-nk2n w-input"
                  maxLength={256}
                  name="BRIX-Top-Bar-Email-2"
                  data-name="BRIX Top Bar Email 2"
                  placeholder="How can we help you?"
                  type="text"
                  id="BRIX-Top-Bar-Email-2"
                />
              </div>
            </form>
            <div className="brix---success-message-white-small w-form-done">
              <div>Thanks for subscribing!</div>
            </div>
            <div className="brix---error-message w-form-fail">
              <div>Oops! Something went wrong while submitting the form.</div>
            </div>
          </div>
          <div className="jetboost-list-wrapper-nk2n w-dyn-list">
            <div role="list" className="w-dyn-items">
              {faqs.map((faq, index) => (
                <div key={faq.id} role="listitem" className="w-dyn-item">
                  <div
                    data-w-id="9ccba73f-3e08-1497-62e3-9fb395e2fc21"
                    className="brix---accordion-item-wrapper-v5"
                    onClick={() => toggleAnswer(index)}
                  >
                    <div className="brix---accordion-big-number-wrapper">
                      <div className="brix---color-neutral-804">
                        <div className="brix---accordion-big-number">
                          {String(index + 1).padStart(2, '0')} {/* This adds leading zero */}
                        </div>
                      </div>
                      <div className="brix---accordion-content-wrapper-v2-3">
                        <div className="brix---accordion-header-3">
                          <div className="brix---color-neutral-804">
                            <h3 className="brix---accordion-title-5">{faq.faq_question
                            }</h3>
                          </div>
                        </div>
                        {activeIndex === index && (
                          <div className="brix---acordion-body-3">
                            <div className="brix---accordion-spacer-3" />
                            <div className="brix---paragraph-default-7">
                              <div className="brix---color-neutral-803">
                                <p className="brix---mg-bottom-0">{faq.faq_answer}</p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="brix---accordion-right-side-3">
                      <div className="brix---accordion-icon-wrapper">
                        <img
                          src="/images/Chevron-Down.svg"
                          loading="lazy"
                          alt=""
                          className={`brix---accordion-btn-horizontal-line-v2 ${activeIndex === index ? "rotate-180" : ""
                            }`}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-embed">
                    <input
                      type="hidden"
                      className="jetboost-list-item"
                      defaultValue="who-are-the-customers-or-clients-paying-for-these-services"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-faq2">
        <div className="w-layout-blockcontainer container-faq2 w-container">
          <h1 className="heading-faq3">Didn't find the answer you looking for?</h1>
          <p className="paragraph-faq">
            Authoritatively implement transparent collaboration and idea-sharing
            rather than maintainable convergence. Progressively implement
            user-centric content with interdependent niches. Credibly harness.
          </p>
          <Link
            href="#"
            className="spark-button-4 spark-icon-left-button next w-inline-block"
          >
            <p className="paragraph-btn">Contact with us</p>
            <div className="icon1-btn w-embed">
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
      </section>
      <JoinSection heading="Buy UFD tokens" />
      <UuiSection />
      {/* <FooterSection /> */}
    </>
  )
}

export default FAQ