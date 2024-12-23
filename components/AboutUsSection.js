import React from 'react'
import Link from 'next/link'

const AboutUsSection = () => {
  const arrowImageStyles = {
    animation: 'moveUpDownBottom 1.3s linear infinite', // Apply bottom animation to the image
    transformStyle: 'preserve-3d',
    willChange: 'transform',
  };

  const keyframes = `
    @keyframes moveUpDownBottom {
      0%, 100% {
        transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
      }
      50% {
        transform: translate3d(0px, 2px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
      }
    }
  `;
  return (
    <section className="about-us-section">
      <style>{keyframes}</style>
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
                </Link> */}
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
                <Link
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
                </Link>
              </div>
              <div
                id="w-node-_6b461b15-6813-94d3-6e3a-2d51912bdb6e-69ff34fb"
                className="w-layout-cell"
              >
                <Link
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
                </Link>
                <img
                  src="/images/Frame_1.png"
                  loading="lazy"
                  data-w-id="8895a6ef-a634-d026-c6af-56e8badde872"
                  alt=""
                  className="image-37"
                  style={arrowImageStyles}
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
                <Link
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
                </Link>
              </div>
              <div
                id="w-node-_28104d7d-f24f-4c8b-0eef-6f049d014d97-69ff34fb"
                className="w-layout-cell"
              >
                <Link
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
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUsSection