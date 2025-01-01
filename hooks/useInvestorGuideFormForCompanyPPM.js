import { useState } from "react";

export default function useInvestorGuideFormForCompanyPPM() {
  return useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: {
      countryCode: '',
      country: '',
      state: '',
      city: '',
    },
    company: {
      companyName: '',
      companyAddress: '',
    },
    bankName: '',
    uuid: '',
    requiredGuides: { 'ppm-reg-d': false, 'ppm-reg-s': false },
    status: 'pending',
    isPPM: true,

  })
}
