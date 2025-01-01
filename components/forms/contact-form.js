'use client'
import { ContactFormTitle } from "@/data";
import React, { useEffect } from "react";

const ContactForm = ({ buttonClass }) => {
  // const { subTitle, title, description } = ContactFormTitle;

  const iframe = '<iframe sandbox="allow-scripts allow-popups allow-forms allow-same-origin" width="100%" height="660px" style="border: 0; overflow: hidden; overflow-x: auto" src="https://forms.helpdesk.com?licenseID=1670541221&contactFormID=ae536035-459e-4497-8aa6-319b3b45fee3">    Your browser does not allow embedded content.  </iframe>';

  function Iframe(props) {
    return (
      <div dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }} />
    );
  }

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.hsforms.net/forms/v2.js';
    document.body.appendChild(script);

    script.addEventListener('load', () => {
      // @TS-ignore
      if (window.hbspt) {
        // @TS-ignore
        window.hbspt.forms.create({
          portalId: '21495987',
          formId: 'd2bc26bb-74ac-404e-a498-cd95894c5232',
          target: '#hubspotForm'
        })
      }
    });
  }, []);

  return (
    <section className="commonSection ContactPage">
      <div className="container">
        <div className="row">
          {/* <div className="col-lg-12 text-center">
            <h4 className="sub_title">{subTitle}</h4>
            <h2 className="sec_title">{title}</h2>
            <p className="sec_desc">{description}</p>
          </div> */}
        </div>
        <div className="row">
          <div className="col-lg-8 offset-lg-2 col-sm-12 col-md-10 offset-md-1">
            {/* <Iframe iframe={iframe} />, */}
            <div id="hubspotForm"></div>
          </div>
        </div>
        <br></br>
        <div className="row">
          <div className="col-lg-8 offset-lg-2 col-sm-12 col-md-10 offset-md-1">
            <a className={`common_btn ${buttonClass}`} href="https://meetings.hubspot.com/ufund" target="_blank">
              <span>Book An Appointment</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
