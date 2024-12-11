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

const data = [
  {
    imgSrc:"/images/resource1.png",
    title:"things to avoid with any investment"
  },
  {
    imgSrc:"/images/resource2.png",
    title:"calculate valuation for your business by ufund"
  },
  {
    imgSrc:"/images/resource3.png",
    title:"How to value your business using UFND tokenizer"
  },
  {
    imgSrc:"/images/resource4.png",
    title:"Security tokens offerings (stos)"
  },
  {
    imgSrc:"/images/resource5.png",
    title:"mastering cryptocurrency investing"
  },
  {
    imgSrc:"/images/resource6.png",
    title:"Understanding blockchain technology"
  },
]

const Resources = () => {
  return (
    <>
    <NavbarSection/>
    <section id="hero" className="section-15">
    <div className="w-layout-blockcontainer container-18 w-container">
      <h1 className="heading-23">Resources | UFUND </h1>
      <p className="paragraph-17">
        Dramatically scale impactful infomediaries before superior schemas.
        Intrinsicly productivate resource-leveling services before professional
        sources.
      </p>
      <Link href="#" className="button w-button">
        Home - An insight into some industry topics
      </Link>
    </div>
  </section>
  <section className="res-section">
    <div className="w-layout-blockcontainer res-container-copy w-container">
      <div className="w-dyn-list">
        <div role="list" className="w-dyn-items w-row">
        {data.map((res, index) => (
          <div
          key={index}
            role="listitem"
            className="collection-item-3 w-dyn-item w-col w-col-6"
          >
            <div className="div-block-25">
              <div className="div-block-24">
                <Link href="#" className="link-block-9 w-inline-block">
                  <img
                    src="/images/Frame-8.png"
                    loading="lazy"
                    data-w-id="2420bd38-0c3b-30ed-1217-451eda526c63"
                    alt=""
                    className="image-63"
                    style={arrowImageStyles}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'scale(1.1)'; // Enlarge image on hover
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'scale(1)'; // Revert to original size
                    }}
                  />
                </Link>
                <img
                  src={res.imgSrc}
                  loading="lazy"
                  alt=""
                  className="image-64"
                />
              </div>
              <div>
                <h1 className="heading-31">{res.title}</h1>
                <Link
                  href="#"
                  className="new-button-copy spark-icon-left-button next w-inline-block"
                >
                  {/* <div class="spark-small-res w-embed">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polyline points="86 110 128 152 170 110" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"></polyline><line x1="128" y1="40" x2="128" y2="152" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"></line><path d="M216,152v56a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V152" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"></path></svg>
                    </div> */}
                  <img
                    src="/images/download-1.svg"
                    loading="lazy"
                    alt=""
                    className="image-68"
                  />
                  <p className="spark-button-res">Download </p>
                </Link>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
    <div className="w-layout-blockcontainer res-container w-container">
      <div className="w-dyn-list">
        <div role="list" className="w-dyn-items w-row">
        {data.map((res, index) => (
          <div
          key={index}
            role="listitem"
            className="collection-item-3 w-dyn-item w-col w-col-4"
          >
            <div className="div-block-25">
              <div className="div-block-24">
                <Link href="#" className="link-block-9 w-inline-block">
                  <img
                    src="/images/Frame-8.png"
                    loading="lazy"
                    data-w-id="2420bd38-0c3b-30ed-1217-451eda526c63"
                    alt=""
                    className="image-62"
                    style={arrowImageStyles}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'scale(1.1)'; // Enlarge image on hover
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'scale(1)'; // Revert to original size
                    }}
                  />
                </Link>
                <img
                  src={res.imgSrc}
                  loading="lazy"
                  alt=""
                />
              </div>
              <div>
                <h1 className="heading-31">{res.title}</h1>
                <Link
                  href="#"
                  className="new-button-copy spark-icon-left-button next w-inline-block"
                >
                  {/* <div class="spark-small-res w-embed">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polyline points="86 110 128 152 170 110" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"></polyline><line x1="128" y1="40" x2="128" y2="152" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"></line><path d="M216,152v56a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V152" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"></path></svg>
                    </div> */}
                  <img
                    src="/images/download-1.svg"
                    loading="lazy"
                    alt=""
                    className="image-68"
                  />
                  <p className="spark-button-res">Download </p>
                </Link>
              </div>
            </div>
          </div>
        ))}
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

export default Resources