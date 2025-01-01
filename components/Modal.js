"use client"
import React, { useState } from 'react'
import NavbarSection from './NavbarSection'
import UuiSection from './UuiSection'
import JoinSection from './JoinSection'
import FooterSection from './FooterSection'
import Link from 'next/link'

// Import your modals here
import RegulationDModal from './modal/RegulationDModal'; // Update this import path as needed
import RegulationSModal from './modal/RegulationSModal'; // Update this import path as needed
import PPMModal from './modal/PPMModal'; // Update this import path as needed

const InvestorGuide = () => {
  // State to handle modal visibility
  const [showRegDModal, setShowRegDModal] = useState(false);
  const [showRegSModal, setShowRegSModal] = useState(false);
  const [showPPMModal, setShowPPMModal] = useState(false);

  const handleCloseModal = (modalName) => {
    switch (modalName) {
      case 'regD':
        setShowRegDModal(false);
        break;
      case 'regS':
        setShowRegSModal(false);
        break;
      case 'ppm':
        setShowPPMModal(false);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <NavbarSection />
      <section id="hero" className="section-guide">
        <div className="w-layout-blockcontainer container-guide w-container">
          <h1 className="heading-guide">Investor guide</h1>
          <Link href="#" className="button w-button">
            Home - Investor Guide
          </Link>
        </div>
      </section>
      
      {/* Regulation D Section */}
      <section className="section-guide2">
        <div className="w-layout-blockcontainer container-guide-2 w-container">
          <h1 className="heading-guide-1">Maximize your investment potential</h1>
          <p className="paragraph-28">Reg D, Reg S, and PPM Insights</p>
          <Link href="#" onClick={() => setShowRegDModal(true)} className="link-block-11 w-inline-block">
            <img src="/images/Group-1000008099.svg" loading="lazy" alt="" />
          </Link>
        </div>
      </section>

      {/* Regulation D Section */}
      <section className="section-guide3">
        <div className="w-layout-blockcontainer container-guide-3 w-container">
          <div className="w-layout-layout quick-stack-34 wf-layout-layout">
            <div className="w-layout-cell cell-50">
              <h1 className="heading-42">Regulation D</h1>
              <p className="paragraph-29">
                Often referred to as Reg D, is a set of rules established by the U.S. Securities and Exchange Commission (SEC) that provides exemptions from certain registration requirements for the sale of securities.
              </p>
              <Link href="#" onClick={() => setShowRegDModal(true)} className="new-button-gud spark-icon-left-button next w-inline-block">
                <img src="/images/download_2989976-1-1.png" loading="lazy" alt="Download Icon" className="image-56" />
                <p className="spark-button-text-gud">Download</p>
              </Link>
            </div>
            <div className="w-layout-cell cell-46">
              <img src="/images/Frame-4.svg" loading="lazy" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* Regulation S Section */}
      <div id="section11" className="w-layout-blockcontainer container-guide-4 w-container">
        <div className="w-layout-layout quick-stack-35 wf-layout-layout">
          <div className="w-layout-cell cell-48">
            <img src="/images/Frame-3.svg" loading="lazy" alt="" className="image-70" />
          </div>
          <div className="w-layout-cell cell-47">
            <h1 className="heading-42">Regulation S</h1>
            <p className="paragraph-29">
              Reg S is a regulation established by the U.S. Securities and Exchange Commission (SEC) that provides exemptions from certain registration requirements for securities offerings made outside the United States.
            </p>
            <Link href="#" onClick={() => setShowRegSModal(true)} className="new-button-gud spark-icon-left-button next w-inline-block">
              <img src="/images/download_2989976-1-1.png" loading="lazy" alt="Download Icon" className="image-56" />
              <p className="spark-button-text-gud">Download</p>
            </Link>
          </div>
        </div>
      </div>

      {/* PPM Section */}
      <div className="w-layout-blockcontainer container-guide-3 w-container">
        <div className="w-layout-layout quick-stack-34 wf-layout-layout">
          <div className="w-layout-cell cell-49">
            <h1 className="heading-42">Private placement memorandum (PPM)</h1>
            <p className="paragraph-29">
              A Private Placement Memorandum (PPM) is a document used in private securities offerings, such as those made under Regulation D of the U.S. Securities and Exchange Commission (SEC).
            </p>
            <Link href="#" onClick={() => setShowPPMModal(true)} className="new-button-gud spark-icon-left-button next w-inline-block">
              <img src="/images/download_2989976-1-1.png" loading="lazy" alt="Download Icon" className="image-56" />
              <p className="spark-button-text-gud">Download</p>
            </Link>
          </div>
          <div className="w-layout-cell cell-46">
            <img src="/images/9712783_4155921-1.svg" loading="lazy" alt="" />
          </div>
        </div>
      </div>

      <UuiSection />
      <JoinSection heading="Start your journey today" />
      <FooterSection />

      {/* Modals */}
      <RegulationDModal isVisible={showRegDModal} handleClose={handleCloseModal} modalName="regD" />
      <RegulationSModal isVisible={showRegSModal} handleClose={handleCloseModal} modalName="regS" />
      <PPMModal isVisible={showPPMModal} handleClose={handleCloseModal} modalName="ppm" />
    </>
  );
}

export default InvestorGuide;