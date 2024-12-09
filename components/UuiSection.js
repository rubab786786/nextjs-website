import Link from 'next/link'
import React from 'react'

const UuiSection = () => {
  return (
    <section className="uui-section_cta12-2">
          <div className="uui-page-padding-6">
            <div className="uui-container-large-6" />
          </div>
          <Link href="#hero" className="link-block-20 w-inline-block">
            <img src="/images/icons8-up-26.png" loading="lazy" alt="" />
          </Link>
        </section>
  )
}

export default UuiSection