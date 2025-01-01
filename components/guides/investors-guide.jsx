'use client'

import React, { useState } from "react";
import { Container, Row, Col } from "@@mui/material";
// import ServiceCardOne from "@/components/service/service-card-one";
import { InvestorGuideData } from "@/data";
import InvestorGuideCard from "./investor-guide-card";
import RegulationDModal from "../modal/RegulationDModal";
import RegulationSModal from "../modal/RegulationSModal";
import PPMModal from "../modal/PPMModal";
import { useEffect } from "react";
import axios from "axios";


// Function to set a cookie with an expiration time
function setCookie(name, value, hoursToExpire) {
  const d = new Date();
  d.setTime(d.getTime() + (hoursToExpire * 60 * 60 * 1000));
  const expires = "expires=" + d.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Function to check if a cookie exists
function checkCookie(cookieName) {
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    // Check if the cookie starts with the specified name
    if (cookie.startsWith(cookieName + '=')) {
      return true; // The cookie exists
    }
  }
  return false; // The cookie does not exist
}

// Function to get the value of a specific cookie
function getCookieValue(cookieName) {
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    // Check if the cookie starts with the specified name
    if (cookie.startsWith(cookieName + '=')) {
      return cookie.substring(cookieName.length + 1); // Get the value part
    }
  }
  return null; // Cookie not found
}

const InvestorGuide = () => {

  const [show, setShow] = useState({ 'regulation-d': false, 'regulation-s': false, 'ppm': false });
  const handleClose = (modal) => setShow(prev => ({ ...prev, [modal]: false }));
  const handleShow = (modal) => setShow(prev => ({ ...prev, [modal]: true }));

  const [authToken, setAuthToken] = useState("")


  // Example usage:
  // const authToken = "your-authentication-token";
  // setCookie("authToken", authToken, 24); // Expires in 24 hours

  const handleModal = (itemToBeDownloaded) => {
    switch (itemToBeDownloaded) {
      case "regulation-d":
        break;
      case "regulation-s":
        break;
      case "ppm":
        break;
      default:
        break;
    }
  }

  return (
    <section className="service_section_2 commonSection">
      <Container>
        <Row className="align-items-stretch align-self-stretch">
          {InvestorGuideData.map((post, index) => (
            <Col lg={4} md={12} key={index}>
              <InvestorGuideCard data={post} handleModal={handleModal} handleShow={handleShow} />
            </Col>
          ))}
        </Row>
        {show['regulation-d'] && (<RegulationDModal authToken={authToken} handleClose={handleClose} handleShow={handleShow} show={show['regulation-d']} modalName={'regulation-d'} key={1} />)}
        {show['regulation-s'] && (<RegulationSModal authToken={authToken} handleClose={handleClose} handleShow={handleShow} show={show['regulation-s']} modalName={'regulation-s'} key={2} />)}
        {show['ppm'] && (<PPMModal handleClose={handleClose} authToken={authToken} handleShow={handleShow} show={show['ppm']} modalName={'ppm'} key={3} />)}
      </Container>
    </section>
  );
};

export default InvestorGuide;
