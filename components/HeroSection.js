import Link from 'next/link';
import React from 'react';

const HeroSection = () => {
  const arrowImageStylesTop = {
    animation: 'moveUpDown 1.4s linear infinite', // Apply animation to the image
  };

  const arrowImageStylesBottom = {
    animation: 'moveUpDownBottom 1.3s linear infinite', // Apply bottom animation to the image
    transformStyle: 'preserve-3d',
    willChange: 'transform',
  };

  const keyframes = `
    @keyframes moveUpDown {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-4px);
      }
    }

    @keyframes moveUpDownBottom {
      0%, 100% {
        transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
      }
      50% {
        transform: translate3d(0px, 1.8px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
      }
    }
  `;

  return (
    <section id="hero" className="new-hero-copy">
      <style>{keyframes}</style> {/* Inject keyframes */}
      <div className="w-layout-blockcontainer container-7 w-container">
        <div
          id="w-node-_4e6a4af3-f329-a177-517a-2c0545ac87f2-69ff34fb"
          className="w-layout-layout quick-stack-8 wf-layout-layout"
        >
          <div
            id="w-node-_4e6a4af3-f329-a177-517a-2c0545ac87f3-69ff34fb"
            className="w-layout-cell cell-21"
          >
            <h1 className="heading-7">Jumpstart your business with UFUND</h1>
            <h1 className="heading-8">
              UFUND has the solution in a unified and secure ecosystem
            </h1>
            <div className="div-block">
              <Link
                href="https://www.tokensales.ufund.online/"
                className="spark-button-2 spark-icon-left-button next w-inline-block"
              >
                <p className="paragraph-5">Buy UFD tokens</p>
                <div className="html-embed-2 w-embed">
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
              <img
                src="/images/Group-4-3.png"
                loading="lazy"
                alt="Arrow animation"
                className="image-3-copy"
                style={arrowImageStylesTop} // Apply bottom animation to this image
              />
            </div>
          </div>
          <div
            id="w-node-_4e6a4af3-f329-a177-517a-2c0545ac87f4-69ff34fb"
            className="w-layout-cell cell-42"
          >
            <img
              src="/images/Frame_1.png"
              loading="lazy"
              alt=""
              className="image-29"
              style={arrowImageStylesBottom} // Apply top animation to this image
            />
            <img
              src="/images/Rectangle-783-1.jpg"
              loading="lazy"
              sizes="(max-width: 479px) 100vw, (max-width: 767px) 95vw, 100vw"
              srcSet="/images/Rectangle-783-1-p-500.jpg 500w, images/Rectangle-783-1-p-800.jpg 800w, images/Rectangle-783-1.jpg 888w"
              alt=""
              className="image-69"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
