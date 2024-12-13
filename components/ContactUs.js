"use client"
import React, { useEffect, useState } from 'react'
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

const ContactUs = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensures the iframe renders only on the client side
  }, []);
  return (
    <>
      <NavbarSection />
      <section className="section-contact">
        <div className="w-layout-blockcontainer container-contact w-container">
          <h1 className="heading-contact">Contact Us</h1>
          <Link href="#" className="button w-button">
            Home - Get in touch with the team
          </Link>
        </div>
      </section>
      <section className="section-contact-1">
        <div className="w-layout-blockcontainer container-contact-1 w-container">
          <div
            id="w-node-_67f418e6-1885-84be-c7e3-7bea7a342765-99b0df8c"
            className="w-layout-layout quick-stack-38 wf-layout-layout"
          >
            <div
              id="w-node-_67f418e6-1885-84be-c7e3-7bea7a342766-99b0df8c"
              className="w-layout-cell cell-57"
            >
              <div className="uui-contact04_content">
                <h2 className="uui-heading-medium-2">Get in Touch</h2>
                <div className="uui-space-xsmall-2" />
                <div className="w-layout-grid uui-contact07_contact-list">
                  <div
                    id="w-node-a4567c6d-b5ec-3193-1875-97dc223d2181-99b0df8c"
                    className="uui-contact07_item"
                  >
                    <div className="uui-contact07_item-icon-wrapper">
                      <div className="icon-featured-large">
                        <img
                          src="/images/Group-1000008127.svg"
                          loading="lazy"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="uui-contact07_item-text-wrapper">
                      <h3 className="uui-heading-xxsmall-2">Call Us</h3>
                      <div className="uui-space-xxsmall-2" />
                      <Link
                        href="tel:+13024265043"
                        className="uui-text-style-link-02-2"
                      >
                        +1 302 426 5043
                      </Link>
                    </div>
                  </div>
                  <div
                    id="w-node-a4567c6d-b5ec-3193-1875-97dc223d218b-99b0df8c"
                    className="uui-contact07_item"
                  >
                    <div className="uui-contact07_item-icon-wrapper">
                      <div className="icon-featured-large">
                        <img
                          src="/images/Group-1000008126.svg"
                          loading="lazy"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="uui-contact07_item-text-wrapper">
                      <h3 className="uui-heading-xxsmall-2">Email Us</h3>
                      <div className="uui-space-xxsmall-2" />
                      <Link
                        href="mailto:info@ufund.online?subject=UFUND"
                        className="uui-text-style-link-02-2"
                      >
                        Info@ufund.online
                      </Link>
                    </div>
                  </div>
                  <div
                    id="w-node-a4567c6d-b5ec-3193-1875-97dc223d2195-99b0df8c"
                    className="uui-contact07_item"
                  >
                    <div className="uui-contact07_item-icon-wrapper">
                      <div className="icon-featured-large">
                        <img
                          src="/images/Group-1000008125.svg"
                          loading="lazy"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="uui-contact07_item-text-wrapper">
                      <h3 className="uui-heading-xxsmall-2">Locations</h3>
                      <div className="uui-space-xxsmall-2" />
                      <Link href="#" className="uui-text-style-link-02-2">
                        Actiwires LLC DBA UFUND
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-layout-grid brix---social-media-grid-left-3-copy">
                <Link
                  href="https://www.facebook.com/ufundrealbusiness"
                  target="_blank"
                  className="brix---icon-square-36px3 w-inline-block"
                >
                  <img
                    src="/images/Path-8.svg"
                    alt=""
                    data-w-id="e33a4438-fc45-4c35-0269-53cdf08a9bf4"
                    className="image-38-copy"
                    style={arrowImageStyles}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'scale(1.2)'; // Enlarge image on hover
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'scale(1)'; // Revert to original size
                    }}
                  />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/ufund1/"
                  target="_blank"
                  className="brix---icon-square-36px3 w-inline-block"
                >
                  <img
                    src="/images/Path-10.svg"
                    alt=""
                    data-w-id="e33a4438-fc45-4c35-0269-53cdf08a9bf6"
                    className="image-38-copy"
                    style={arrowImageStyles}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'scale(1.2)'; // Enlarge image on hover
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'scale(1)'; // Revert to original size
                    }}
                  />
                </Link>
                <Link
                  href="https://twitter.com/UFUND1"
                  target="_blank"
                  className="brix---icon-square-36px3 w-inline-block"
                >
                  <img
                    src="/images/Vector.svg"
                    alt=""
                    width={22}
                    data-w-id="e33a4438-fc45-4c35-0269-53cdf08a9bf8"
                    className="image-38-copy"
                    style={arrowImageStyles}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'scale(1.2)'; // Enlarge image on hover
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'scale(1)'; // Revert to original size
                    }}
                  />
                </Link>
                <Link
                  href="https://www.instagram.com/ufundonline/"
                  target="_blank"
                  className="brix---icon-square-36px3 w-inline-block"
                >
                  <img
                    src="/images/Group-1000007998.svg"
                    alt=""
                    data-w-id="e33a4438-fc45-4c35-0269-53cdf08a9bfa"
                    className="image-38-copy"
                    style={arrowImageStyles}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'scale(1.2)'; // Enlarge image on hover
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'scale(1)'; // Revert to original size
                    }}
                  />
                </Link>
              </div>
            </div>
            {/* <div
              id="w-node-_67f418e6-1885-84be-c7e3-7bea7a342767-99b0df8c"
              className="w-layout-cell cell-56"
            >
              <div className="uui-contact04_form-wrapper w-form">
                <form
                  id="wf-form-Contact-04-form"
                  name="wf-form-Contact-04-form"
                  data-name="Contact 04 form"
                  method="get"
                  className="uui-contact04_form"
                  data-wf-page-id="65e5f3e60a2bd07399b0df8c"
                  data-wf-element-id="3a86ca71-8d8e-039a-0f99-59fb42cdb90f"
                  aria-label="Contact 04 form"
                  style={{display: "none"}}
                >
                  <div className="form-field-2col">
                    <div className="uui-form-field-wrapper">
                      <label
                        htmlFor="Contact-04-first-name-2"
                        className="uui-field-label"
                      >
                        First name
                      </label>
                      <input
                        className="uui-form_input-2 w-input"
                        maxLength={256}
                        name="Contact-04-first-name-2"
                        data-name="Contact 04 First Name 2"
                        placeholder="First name"
                        type="text"
                        id="Contact-04-first-name-2"
                        required=""
                      />
                    </div>
                    <div className="uui-form-field-wrapper">
                      <label
                        htmlFor="Contact-04-last-name-2"
                        className="uui-field-label"
                      >
                        Last name
                      </label>
                      <input
                        className="uui-form_input-2 w-input"
                        maxLength={256}
                        name="Contact-04-last-name-2"
                        data-name="Contact 04 Last Name 2"
                        placeholder="Last name"
                        type="text"
                        id="Contact-04-last-name-2"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="form-field-2col">
                    <div className="uui-form-field-wrapper">
                      <label
                        htmlFor="Contact-04-email-2"
                        className="uui-field-label"
                      >
                        Email
                      </label>
                      <input
                        className="uui-form_input-2 w-input"
                        maxLength={256}
                        name="Contact-04-email-2"
                        data-name="Contact 04 Email 2"
                        placeholder="your@company.com"
                        type="email"
                        id="Contact-04-email-2"
                        required=""
                      />
                    </div>
                    <div className="uui-form-field-wrapper">
                      <label
                        htmlFor="Contact-04-phone-2"
                        className="uui-field-label"
                      >
                        Phone number
                      </label>
                      <input
                        className="uui-form_input-2 w-input"
                        maxLength={256}
                        name="Contact-04-phone-2"
                        data-name="Contact 04 Phone 2"
                        placeholder="+1 (555) 000-0000"
                        type="tel"
                        id="Contact-04-phone-2"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="uui-form-field-wrapper">
                    <label
                      htmlFor="Contact-04-message-2"
                      className="uui-field-label"
                    >
                      How can we help?
                    </label>
                    <textarea
                      id="Contact-04-message-2"
                      name="Contact-04-message-2"
                      maxLength={5000}
                      data-name="Contact 04 Message 2"
                      placeholder="Type your message..."
                      required=""
                      className="uui-form_input-2 text-area w-input"
                      defaultValue={""}
                    />
                  </div>
                  <label
                    id="Contact-2-Checkbox"
                    className="w-checkbox uui-form-checkbox"
                  >
                    <div className="w-checkbox-input w-checkbox-input--inputType-custom uui-form-checkbox-icon" />
                    <input
                      id="Contact-04-checkbox-2"
                      type="checkbox"
                      name="Contact-04-checkbox-2"
                      data-name="Contact 04 Checkbox 2"
                      required=""
                      style={{ opacity: 0, position: "absolute", zIndex: -1 }}
                    />
                    <span
                      htmlFor="Contact-04-checkbox-2"
                      className="uui-form-checkbox-label w-form-label"
                    >
                      I agree to receive other communications from Actiwires LLC{" "}
                    </span>
                  </label>
                  <div
                    id="w-node-_3a86ca71-8d8e-039a-0f99-59fb42cdb92d-99b0df8c"
                    className="uui-form-button-wrapper"
                  >
                    <input
                      type="submit"
                      data-wait="Please wait..."
                      id="w-node-_3a86ca71-8d8e-039a-0f99-59fb42cdb92e-99b0df8c"
                      className="spark-button-2-copy w-button"
                      defaultValue="Send message"
                    />
                  </div>
                </form>
                <div className="success-message w-form-done" tabIndex={-1} role='region' aria-label="Contact 04 form success" style={{display: "block"}}>
                  <div className="success-text">
                    Thank you! Your submission has been received!
                  </div>
                </div>
                <div className="error-message w-form-fail" tabIndex={-1} role='region' aria-label="Contact 04 form failure" style={{display: "none"}}>
                  <div className="error-text">
                    Oops! Something went wrong while submitting the form.
                  </div>
                </div>
              </div>
            </div> */}
            <div
          id="w-node-_67f418e6-1885-84be-c7e3-7bea7a342767-99b0df8c"
          className="w-layout-cell cell-56"
        >
          <div className="uui-contact04_form-wrapper w-form">
            <form
              id="wf-form-Contact-04-form"
              name="wf-form-Contact-04-form"
              data-name="Contact 04 form"
              method="get"
              className="uui-contact04_form"
              data-wf-page-id="65e5f3e60a2bd07399b0df8c"
              data-wf-element-id="3a86ca71-8d8e-039a-0f99-59fb42cdb90f"
            >
              <div className="form-field-2col">
                <div className="uui-form-field-wrapper">
                  <label
                    htmlFor="Contact-04-first-name-2"
                    className="uui-field-label"
                  >
                    First name
                  </label>
                  <input
                    className="uui-form_input-2 w-input"
                    maxLength={256}
                    name="Contact-04-first-name-2"
                    data-name="Contact 04 First Name 2"
                    placeholder="First name"
                    type="text"
                    id="Contact-04-first-name-2"
                    required=""
                  />
                </div>
                <div className="uui-form-field-wrapper">
                  <label
                    htmlFor="Contact-04-last-name-2"
                    className="uui-field-label"
                  >
                    Last name
                  </label>
                  <input
                    className="uui-form_input-2 w-input"
                    maxLength={256}
                    name="Contact-04-last-name-2"
                    data-name="Contact 04 Last Name 2"
                    placeholder="Last name"
                    type="text"
                    id="Contact-04-last-name-2"
                    required=""
                  />
                </div>
              </div>
              <div className="form-field-2col">
                <div className="uui-form-field-wrapper">
                  <label
                    htmlFor="Contact-04-email-2"
                    className="uui-field-label"
                  >
                    Email
                  </label>
                  <input
                    className="uui-form_input-2 w-input"
                    maxLength={256}
                    name="Contact-04-email-2"
                    data-name="Contact 04 Email 2"
                    placeholder="your@company.com"
                    type="email"
                    id="Contact-04-email-2"
                    required=""
                  />
                </div>
                <div className="uui-form-field-wrapper">
                  <label
                    htmlFor="Contact-04-phone-2"
                    className="uui-field-label"
                  >
                    Phone number
                  </label>
                  <input
                    className="uui-form_input-2 w-input"
                    maxLength={256}
                    name="Contact-04-phone-2"
                    data-name="Contact 04 Phone 2"
                    placeholder="+1 (555) 000-0000"
                    type="tel"
                    id="Contact-04-phone-2"
                    required=""
                  />
                </div>
              </div>
              <div className="uui-form-field-wrapper">
                <label
                  htmlFor="Contact-04-message-2"
                  className="uui-field-label"
                >
                  How can we help?
                </label>
                <textarea
                  id="Contact-04-message-2"
                  name="Contact-04-message-2"
                  maxLength={5000}
                  data-name="Contact 04 Message 2"
                  placeholder="Type your message..."
                  required=""
                  className="uui-form_input-2 text-area w-input"
                  defaultValue={""}
                />
              </div>
              <label
                id="Contact-2-Checkbox"
                className="w-checkbox uui-form-checkbox"
              >
                <div className="w-checkbox-input w-checkbox-input--inputType-custom uui-form-checkbox-icon" />
                <input
                  id="Contact-04-checkbox-2"
                  type="checkbox"
                  name="Contact-04-checkbox-2"
                  data-name="Contact 04 Checkbox 2"
                  required=""
                  style={{ opacity: 0, position: "absolute", zIndex: -1 }}
                />
                <span
                  htmlFor="Contact-04-checkbox-2"
                  className="uui-form-checkbox-label w-form-label"
                >
                  I agree to receive other communications from Actiwires LLC{" "}
                </span>
              </label>
              <div
                id="w-node-_3a86ca71-8d8e-039a-0f99-59fb42cdb92d-99b0df8c"
                className="uui-form-button-wrapper"
              >
                <input
                  type="submit"
                  data-wait="Please wait..."
                  id="w-node-_3a86ca71-8d8e-039a-0f99-59fb42cdb92e-99b0df8c"
                  className="spark-button-2-copy w-button"
                  defaultValue="Send message"
                />
              </div>
            </form>
            <div className="success-message w-form-done">
              <div className="success-text">
                Thank you! Your submission has been received!
              </div>
            </div>
            <div className="error-message w-form-fail">
              <div className="error-text">
                Oops! Something went wrong while submitting the form.
              </div>
            </div>
          </div>
        </div>
          </div>
        </div>
      </section>
      <section className="section-contact-2">
        <div className="w-layout-blockcontainer container-contact-2 w-container">
          <div
            className="map w-widget w-widget-map"
            data-widget-style="roadmap"
            data-widget-latlng="37.09024,-95.712891"
            aria-label="Actiwires LLC DBA UFUND"
            data-enable-scroll="true"
            role="region"
            title="Actiwires LLC DBA UFUND"
            data-enable-touch="true"
            data-widget-zoom={15}
            data-widget-tooltip=""
            style={{ overflow: "hidden" }}
          >
            <div style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0, }}>
              {isClient && (
                <iframe
                  width="100%"
                  height="600"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(Actiwires%20LLC%20DBA%20UFUND)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                >
                  <a href="https://www.gps.ie/">gps trackers</a>
                </iframe>
              )}
            </div>
          </div>
        </div>
      </section>
      <UuiSection />
      <JoinSection heading="Start your journey today"/>
      <FooterSection />
    </>
  )
}

export default ContactUs