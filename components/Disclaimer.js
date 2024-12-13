import React from 'react'
import NavbarSection from './NavbarSection'
import JoinSection from './JoinSection'
import FooterSection from './FooterSection'
import Link from 'next/link'
const Disclaimer = () => {
  return (
    <>
    <NavbarSection/>
    <section className="section-disc">
    <div className="w-layout-blockcontainer container-disc w-container">
      <h1 className="heading-terms">Disclaimer</h1>
      <Link href="#" className="button w-button">
        Last updated April 12, 2022
      </Link>
    </div>
  </section>
  <section className="section-dis1">
    <div className="w-layout-blockcontainer container-disc1 w-container">
      <h1 id="what-information-do-we-collect" className="heading-privacy">
        WEBSITE DISCLAIMER
      </h1>
      <p className="paragraph-terms">
        The information provided by Actiwires LLC ("we," "us", or "our") on
        https://web.ufund.online (the "Site") and our mobile application is for
        general informational purposes only. All information on the Site and our
        mobile application is provided in good faith, however we make no
        representation or warranty of any kind, express or implied, regarding
        the accuracy, adequacy, validity, reliability, availability or
        completeness of any information on the Site or our mobile application.
        UNDER NO CIRCUMSTANCE SHALL WE HAVE ANY LIABILITY TO YOU FOR ANY LOSS OR
        DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF THE SITE OR OUR
        MOBILE APPLICATION OR RELIANCE ON ANY INFORMATION PROVIDED ON THE SITE
        AND OUR MOBILE APPLICATION. YOUR USE OF THE SITE AND OUR MOBILE
        APPLICATION AND YOUR RELIANCE ON ANY INFORMATION ON THE SITE AND OUR
        MOBILE APPLICATION IS SOLELY AT YOUR OWN RISK.
      </p>
      <h1 id="how-do-we-process-your-information" className="heading-privacy">
        TESTIMONIALS DISCLAIMER
      </h1>
      <p className="paragraph-terms">
        The Site may contain testimonials by users of our products and/or
        services. These testimonials reflect the real-life experiences and
        opinions of such users. However, the experiences are personal to those
        particular users, and may not necessarily be representative of all users
        of our products and/or services. We do not claim, and you should not
        assume, that all users will have the same experiences. YOUR INDIVIDUAL
        RESULTS MAY VARY.
        <br />
        <br /> The testimonials on the Site are submitted in various forms such
        as text, audio and/or video, and are reviewed by us before being posted.
        They appear on the Site verbatim as given by the users, except for the
        correction of grammar or typing errors. Some testimonials may have been
        shortened for the sake of brevity where the full testimonial contained
        extraneous information not relevant to the general public. <br />
        <br />
        The views and opinions contained in the testimonials belong solely to
        the individual user and do not reflect our views and opinions. We are
        not affiliated with users who provide testimonials, and users are not
        paid or otherwise compensated for their testimonials.
      </p>
    </div>
  </section>
    <JoinSection heading="Start your journey today"/>
    <FooterSection/>
    </>
  )
}

export default Disclaimer