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
    paragraph: "Phosfluorescently productize client-centered channels after cooperative 'outside the box' thinking.",
    imgSrc: "/images/team1.png"
  },
  {
    heading: "Tony Whitehead",
    subHeading: "Investor's Relation",
    paragraph: "Competently syndicate cross-unit core competencies through wireless quality vectors.",
    imgSrc: "/images/team1.png"
  },
  {
    heading: "Frederic Levert",
    subHeading: "VP Emea",
    paragraph: "Collaboratively morph functionalized manufactured products after bleeding-edge e-business.",
    imgSrc: "/images/team2.png"
  },
  {
    heading: "Jacob Jeb",
    subHeading: "Ai Manager",
    paragraph: "Uniquely provide access to robust leadership skills after plug-and-play services. ",
    imgSrc: "/images/team1.png"
  },
  {
    heading: "Shahzeb",
    subHeading: "Blockchain Developer",
    paragraph: "Completely negotiate professional ideas whereas frictionless catalysts for change rnthusiastically.",
    imgSrc: "/images/team1.png"
  },
  {
    heading: "Pankaj Bhatt",
    subHeading: "Backend Developer",
    paragraph: "Credibly productivate tactical e-tailers with user-centric technology. Compellingly re-engineer.",
    imgSrc: "/images/team3.png"
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
                  <p className="paragraph-14">{team.paragraph}</p>
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
                  <p className="paragraph-14">{team.paragraph}</p>
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
      </div>
    </section>
  )
}

export default TeamSection