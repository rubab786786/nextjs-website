"use client"
import React from 'react'
import NavbarSection from './NavbarSection'
import UuiSection from './UuiSection'
import JoinSection from './JoinSection'
import FooterSection from './FooterSection'
import Link from 'next/link'

const arrowImageStyles = {
  transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
  transformStyle: 'preserve-3d',
  transition: 'transform 0.4s linear', // Smooth transition for hover effect
};

const InvestmentService = () => {
  return (
    <>
      <NavbarSection />
      <section id="hero" className="section-12">
        <div className="w-layout-blockcontainer container-15 w-container">
          <h1 className="heading-23">Investment Services</h1>
          <p className="paragraph-17">
            Dramatically scale impactful infomediaries before superior schemas.
            Intrinsically productivity resource-leveling services before
            professional sources.
          </p>
          <Link href="#" className="button w-button">
            Home - Here is what we offer!
          </Link>
        </div>
      </section>
      <section className="section-11">
        <div className="w-layout-blockcontainer container-14 w-container">
          <img
            src="/images/Rectangle-7220-2-1.png"
            loading="lazy"
            sizes="(max-width: 479px) 100vw, (max-width: 767px) 94vw, (max-width: 991px) 86vw, (max-width: 1439px) 77vw, 1009.5982666015625px"
            srcSet="/images/Rectangle-7220-2-1-p-500.png 500w, images/Rectangle-7220-2-1-p-800.png 800w, images/Rectangle-7220-2-1.png 1170w"
            alt=""
            className="image-43"
          />
          <Link href="#" className="lightbox-link-3 w-inline-block w-lightbox">
            <img
              src="/images/Group-237-1.png"
              loading="lazy"
              alt=""
              className="image-44"
            />
          </Link>
        </div>
        <div className="w-layout-blockcontainer container-16 w-container">
          <h1 className="heading-29">
            Investment Services: Here are our crowdfunding options
          </h1>
          <p className="paragraph-22">
            Investment services peek with crowdfunding options.
          </p>
          <div
            id="w-node-_13c8fdb2-b465-d01e-19c3-fb6d4831ff2b-0dcac5fe"
            className="w-layout-layout quick-stack-23 wf-layout-layout"
          >
            <div
              id="w-node-_22633d65-2058-bd0b-e992-24114c49b01b-0dcac5fe"
              className="w-layout-cell cell-39"
            >
              <div className="div-block-21">
                <img
                  src="/images/Group-1000008090-3.png"
                  loading="lazy"
                  alt=""
                  className="image-45"
                />
                <h1 className="heading-30">Innovative Investment</h1>
                <p className="paragraph-23">
                  UFUND offers real-time investment opportunities , Investors have
                  also the possibility to leverage their investment with various
                  tokenized assets.
                </p>
                <Link href="/innovative-investment" className="w-inline-block">
                  <img
                    src="/images/Frame-2.svg"
                    loading="lazy"
                    data-w-id="90e01592-9647-68bd-1d7c-48116103fdfb"
                    alt=""
                    className="image-65"
                    style={arrowImageStyles}
                      onMouseOver={(e) => {
                        e.currentTarget.style.transform = 'scale(1.1)'; // Enlarge image on hover
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.transform = 'scale(1)'; // Revert to original size
                      }}
                  />
                </Link>
              </div>
            </div>
            <div
              id="w-node-_4395a241-95ff-771c-7772-3d9b0825acbf-0dcac5fe"
              className="w-layout-cell cell-41"
            >
              <div className="div-block-22">
                <img
                  src="/images/Group-1000008090-4.png"
                  loading="lazy"
                  alt=""
                  className="image-45"
                />
                <h1 className="heading-30">Crowdfunding</h1>
                <p className="paragraph-23">
                  Low-risk crowdfunding is the way to success, and that’s what we
                  ensure at UFUND – a trusted crowdfunding platform for purchase
                  orders, sales orders of goods and services.
                </p>
                <Link href="/crowdfunding" className="w-inline-block">
                  <img
                    src="/images/Frame-2.svg"
                    loading="lazy"
                    data-w-id="7db3c4f6-6868-3490-810c-8d65d65f58ec"
                    alt=""
                    className="image-65"
                    style={arrowImageStyles}
                      onMouseOver={(e) => {
                        e.currentTarget.style.transform = 'scale(1.1)'; // Enlarge image on hover
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.transform = 'scale(1)'; // Revert to original size
                      }}
                  />
                </Link>
              </div>
            </div>
            <div
              id="w-node-cd7be381-0c2e-9dfd-a258-a79702c4804a-0dcac5fe"
              className="w-layout-cell cell-40"
            >
              <div className="div-block-23">
                <img
                  src="/images/Group-1000008090-5.png"
                  loading="lazy"
                  alt=""
                  className="image-45"
                />
                <h1 className="heading-30">Assets tokenization</h1>
                <p className="paragraph-23">
                  Use tokenizer to buy or invest in valuable tokens backed by
                  real-world assets. We offer a verifiable token ecosystem for
                  making investments and grow your startup.
                </p>
                <Link href="/assets-tokenization" className="w-inline-block">
                  <img
                    src="/images/Frame-2.svg"
                    loading="lazy"
                    data-w-id="a311eef4-c523-6317-55ae-34cefae3f418"
                    alt=""
                    className="image-65"
                    style={arrowImageStyles}
                      onMouseOver={(e) => {
                        e.currentTarget.style.transform = 'scale(1.1)'; // Enlarge image on hover
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.transform = 'scale(1)'; // Revert to original size
                      }}
                  />
                </Link>
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

export default InvestmentService