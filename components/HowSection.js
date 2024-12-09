import Link from 'next/link'
import React from 'react'

const HowSection = () => {
  return (
    <section className="how-section">
          <div className="w-layout-blockcontainer how-container w-container">
            <h1 className="heading-15">How Does It Works?</h1>
            <h1 className="heading-18">
              UFUND is a user-friendly crowdfunding platform promoting decentralized
              finance and assets tokenization.
            </h1>
            <img
              src="/images/Group-1000008007-1.png"
              loading="lazy"
              sizes="(max-width: 479px) 100vw, (max-width: 767px) 80vw, (max-width: 991px) 81vw, (max-width: 1439px) 82vw, 1072.696533203125px"
              srcSet="/images/Group-1000008007-1-p-500.png 500w, images/Group-1000008007-1-p-800.png 800w, images/Group-1000008007-1.png 1170w"
              alt=""
              className="image-33"
            />
            <Link href="/#" className="lightbox-link-2 w-inline-block w-lightbox">
              <img
                src="/images/Group-237-1.png"
                loading="lazy"
                alt=""
                className="image-57"
              />
            </Link>
            <p className="paragraph-11">
              Investors can build their Fiat and crypto currencies investment.
              Business campaigners can campaign for funding their businesses and
              tokenize their companies’ real-world assets. Watch the video to learn
              more…
            </p>
          </div>
        </section>
  )
}

export default HowSection