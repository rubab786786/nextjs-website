import React from 'react'
import Link from 'next/link'

const AvailableSection = () => {
  return (
    <>
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
    </>
  )
}

export default AvailableSection