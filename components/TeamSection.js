"use client"
import React from 'react'
import Link from 'next/link'

const arrowImageStyles = {
  transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
  transformStyle: 'preserve-3d',
  transition: 'transform 0.4s linear', // Smooth transition for hover effect
};

const data = [
  {
    heading: "Arissaindia LTD",
    subHeading: "Digital Marketing",
    imgSrc: "/images/team1.png"
  },
  {
    heading: "Tony Whitehead",
    subHeading: "Investor's Relation",
    imgSrc: "/images/team1.png"
  },
  {
    heading: "Frederic Levert",
    subHeading: "VP Emea",
    imgSrc: "/images/team2.png"
  },
  {
    heading: "Jacob Jeb",
    subHeading: "Ai Manager",
    imgSrc: "/images/team1.png"
  },
  {
    heading: "Shahzeb",
    subHeading: "Blockchain Developer",
    imgSrc: "/images/team1.png"
  },
  {
    heading: "Pankaj Bhatt",
    subHeading: "Backend Developer",
    imgSrc: "/images/team1.png"
  },
  {
    heading: "Aqib Khan",
    subHeading: "IT Manager",
    imgSrc: "/images/team3.png"
  },
  {
    heading: "Robert Dun",
    subHeading: "Audit & Finance",
    imgSrc: "/images/team1.png"
  },
]

const TeamSection = () => {
  return (
    <section className="team-section">
      <div className="w-layout-blockcontainer team-container w-container">
        <h1 className="heading-17">We are UFUND!</h1>
        <h1 className="heading-16-copy">Meet our IT and management team</h1>
        <div className="collection-list-wrapper w-dyn-list">
          <div role="list" className="w-dyn-items w-row">
            {data.map((team, index) => (
              <div
                key={index}
                role="listitem"
                className="collection-item-2 w-dyn-item w-col w-col-6"
              >
                <div className="div-block-17">
                  <img
                    src={team.imgSrc}
                    loading="lazy"
                    alt=""
                    className="image-35"
                  />
                  <h1 className="heading-19" >{team.heading}</h1>
                  <h1 className="heading-20" >{team.subHeading}</h1>
                  <p className="paragraph-14 w-dyn-bind-empty" />
                  <div
                    id="w-node-_80c1fb75-32ff-4f80-55d8-aca06feda1e7-69ff34fb"
                    className="w-layout-layout quick-stack-14 wf-layout-layout"
                  >
                    <div
                      id="w-node-_2fbc1e94-cb06-3af8-4af7-c6447d9d1c35-69ff34fb"
                      className="w-layout-cell"
                    >
                      <Link href="#" className="w-inline-block">
                        <img
                          src="/images/Facebook_1.png"
                          loading="lazy"
                          data-w-id="805f2aa7-6b46-4d57-4bde-3643a1390436"
                          alt=""
                          className="image-67"
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
                    <div
                      id="w-node-_4f5767b9-9cdf-754b-d93e-c5004face070-69ff34fb"
                      className="w-layout-cell"
                    >
                      <Link href="#" className="w-inline-block">
                        <img
                          src="/images/Twitter.png"
                          loading="lazy"
                          data-w-id="40a7746e-eb2d-7602-6b89-ce3109e96850"
                          alt=""
                          className="image-67"
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
                    <div
                      id="w-node-_580cd254-ee7e-f312-6f98-036a2d4c4cdf-69ff34fb"
                      className="w-layout-cell"
                    >
                      <Link href="#" className="w-inline-block">
                        <img
                          src="/images/Instagram_1.png"
                          loading="lazy"
                          data-w-id="084dd178-1f80-19e1-4055-22733278b073"
                          alt=""
                          className="image-67"
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
                    <div
                      id="w-node-_3354bff4-586b-facc-b7b9-57ee1d981451-69ff34fb"
                      className="w-layout-cell"
                    >
                      <Link href="#" className="w-inline-block">
                        <img
                          src="/images/LinkedIn.png"
                          loading="lazy"
                          data-w-id="02c0d56d-708f-48c1-3c77-252d95058531"
                          alt=""
                          className="image-67"
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
            ))}
          </div>
        </div>
        <div className="collection-list-wrapper-c w-dyn-list w-full">
          <div role="list" className="w-dyn-items w-row">
            {data.map((team, index) => (
              <div
                key={index}
                role="listitem"
                className="collection-item-2 w-dyn-item w-col w-col-4"
              >
                <div className="div-block-17">
                  <img
                    src={team.imgSrc}
                    loading="lazy"
                    alt=""
                    className="image-35"
                  />
                  <h1 className="heading-19" >{team.heading}</h1>
                  <h1 className="heading-20" >{team.subHeading}</h1>
                  <p className="paragraph-14 w-dyn-bind-empty" />
                  <div
                    id="w-node-_80c1fb75-32ff-4f80-55d8-aca06feda1e7-69ff34fb"
                    className="w-layout-layout quick-stack-14 wf-layout-layout"
                  >
                    <div
                      id="w-node-_2fbc1e94-cb06-3af8-4af7-c6447d9d1c35-69ff34fb"
                      className="w-layout-cell"
                    >
                      <Link href="#" className="w-inline-block">
                        <img
                          src="/images/Facebook_1.png"
                          loading="lazy"
                          data-w-id="805f2aa7-6b46-4d57-4bde-3643a1390436"
                          alt=""
                          className="image-67"
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
                    <div
                      id="w-node-_4f5767b9-9cdf-754b-d93e-c5004face070-69ff34fb"
                      className="w-layout-cell"
                    >
                      <Link href="#" className="w-inline-block">
                        <img
                          src="/images/Twitter.png"
                          loading="lazy"
                          data-w-id="40a7746e-eb2d-7602-6b89-ce3109e96850"
                          alt=""
                          className="image-67"
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
                    <div
                      id="w-node-_580cd254-ee7e-f312-6f98-036a2d4c4cdf-69ff34fb"
                      className="w-layout-cell"
                    >
                      <Link href="#" className="w-inline-block">
                        <img
                          src="/images/Instagram_1.png"
                          loading="lazy"
                          data-w-id="084dd178-1f80-19e1-4055-22733278b073"
                          alt=""
                          className="image-67"
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
                    <div
                      id="w-node-_3354bff4-586b-facc-b7b9-57ee1d981451-69ff34fb"
                      className="w-layout-cell"
                    >
                      <Link href="#" className="w-inline-block">
                        <img
                          src="/images/LinkedIn.png"
                          loading="lazy"
                          data-w-id="02c0d56d-708f-48c1-3c77-252d95058531"
                          alt=""
                          className="image-67"
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
            ))}
          </div>
        </div>
        <h1 className="heading-22">The UFUND app is available on both</h1>
        <div
          id="download-app"
          className="w-layout-layout quick-stack-16 w-node-_61419c03-f4ba-28ee-8c82-a9450af4a269-69ff34fb wf-layout-layout"
        >
          <div className="w-layout-cell">
            <Link
              href="https://apps.apple.com/in/app/ufund-investing-fundraising/id1490084497"
              target="_blank"
              className="w-inline-block"
            >
              <img
                src="/images/app-store-apple-1-1.png"
                loading="lazy"
                alt=""
                className="image-59"
              />
            </Link>
          </div>
          <div className="w-layout-cell">
            <Link
              href="https://play.google.com/store/apps/details?id=com.ufund.app"
              className="w-inline-block"
            >
              <img
                src="/images/app-store-google-1-1.png"
                loading="lazy"
                alt=""
                className="image-60"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamSection