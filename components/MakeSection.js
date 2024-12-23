"use client";
import Link from 'next/link'
import React from 'react'

const arrowImageStyles = {
  transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
  transformStyle: 'preserve-3d',
  transition: 'transform 0.4s linear', // Smooth transition for hover effect
};

const MakeSection = () => {
  return (
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
              </Link> */}
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
                  <Link
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
                      style={arrowImageStyles}
                      onMouseOver={(e) => {
                        e.currentTarget.style.transform = 'scale(1.2)'; // Enlarge image on hover
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.transform = 'scale(1)'; // Revert to original size
                      }}
                    />
                  </Link>
                </div>
                <div className="w-layout-cell">
                  <Link
                    href="/contact-us"
                    className="new-button-1 spark-icon-left-button next w-inline-block"
                  >
                    <p className="spark-button-text">Contact Us</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="div-block-15-copy">
              <p className="paragraph-13">
                UFUND offers free access to businesses and investors. Offers
                returns ranking from 5% to 25% based on the investments and it's
                maturity dates.
              </p>
              <Link
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
                  style={arrowImageStyles}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'scale(1.2)'; // Enlarge image on hover
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'scale(1)'; // Revert to original size
                  }}
                />
              </Link>
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
  )
}

export default MakeSection