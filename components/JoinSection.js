import Link from 'next/link'
import React from 'react'

const JoinSection = () => {
  return (
    <section className="join-section">
          <div className="w-layout-blockcontainer join-container w-container">
            <div
              id="w-node-_30ac43b6-2df9-90b0-41ed-82cecc8ff807-cc8ff805"
              className="w-layout-layout quick-stack-15 wf-layout-layout"
            >
              <div
                id="w-node-_30ac43b6-2df9-90b0-41ed-82cecc8ff808-cc8ff805"
                className="w-layout-cell cell-30"
              >
                <h1 className="heading-21">Join us now</h1>
                <p className="paragraph-15">
                  Proactively supply real-time outsourcing vis-a-vis long-term
                  high-impact results. Competently deliver resource sucking methods.
                </p>
              </div>
              <div
                id="w-node-_30ac43b6-2df9-90b0-41ed-82cecc8ff80d-cc8ff805"
                className="w-layout-cell cell-29"
              >
                <img
                  src="/images/Group-4-2.png"
                  loading="lazy"
                  data-w-id="30ac43b6-2df9-90b0-41ed-82cecc8ff80e"
                  alt=""
                  className="image-36"
                />
                <Link
                  href="https://webapp.ufund.online/login"
                  target="_blank"
                  className="spark-button-2 spark-icon-left-button next w-inline-block"
                >
                  <p className="paragraph-5">Start your journey today</p>
                  <div className="html-embed-6 w-embed">
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
            </div>
          </div>
        </section>
  )
}

export default JoinSection